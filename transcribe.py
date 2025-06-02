import os

ROOT_DIR = '.'
OUTPUT_FILE = 'code-content.md'
TARGET_EXTENSIONS = ['.tsx']
IGNORE_DIRS = ['.next', 'node_modules', '.git']
IGNORE_FILES = ['next-env.d.ts', 'package-lock.json']

def get_ignore_list(root_dir):
    ignored = set(IGNORE_DIRS) | set(IGNORE_FILES)
    gitignore_path = os.path.join(root_dir, '.gitignore')
    if os.path.exists(gitignore_path):
        try:
            with open(gitignore_path, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#'):
                        if line.endswith('/'):
                            line = line[:-1]
                        ignored.add(line)
        except Exception:
            pass
    return ignored

def should_ignore(path_component, ignored_set):
    return path_component in ignored_set

def generate_file_tree(start_path, ignored_set):
    tree_lines = []
    abs_start_path = os.path.abspath(start_path)

    def build_tree_recursive(current_abs_path, prefix=""):
        if os.path.basename(current_abs_path) in ignored_set and current_abs_path != abs_start_path:
            return

        try:
            items = os.listdir(current_abs_path)
        except OSError:
            return
            
        filtered_items = []
        for item_name in items:
            item_abs_path = os.path.join(current_abs_path, item_name)
            is_dir = os.path.isdir(item_abs_path)
            
            if item_name in IGNORE_DIRS or item_name in IGNORE_FILES:
                 filtered_items.append({'name': item_name, 'ignored': True, 'is_dir': is_dir})
            elif not (is_dir and item_name in ignored_set) and not (not is_dir and item_name in ignored_set):
                 filtered_items.append({'name': item_name, 'ignored': False, 'is_dir': is_dir})

        def sort_key(x):
            if x['name'].startswith('.'):
                return (0, x['name'])
            elif not x['is_dir']:
                return (1, x['name'])
            else:
                return (2, x['name'])

        filtered_items.sort(key=sort_key)

        for i, item_info in enumerate(filtered_items):
            item_name = item_info['name']
            is_ignored_display = item_info['ignored']
            is_dir_display = item_info['is_dir']

            connector = "└── " if i == len(filtered_items) - 1 else "├── "
            display_name = item_name
            if is_dir_display:
                display_name += "/"
            if is_ignored_display:
                display_name += " (ignored)"
            
            tree_lines.append(f"{prefix}{connector}{display_name}")

            if is_dir_display and not is_ignored_display and item_name not in ignored_set:
                new_prefix = prefix + ("    " if i == len(filtered_items) - 1 else "│   ")
                build_tree_recursive(os.path.join(current_abs_path, item_name), new_prefix)

    tree_lines.append(f"{os.path.basename(abs_start_path)}/")
    build_tree_recursive(abs_start_path)
    
    if tree_lines:
        first_line = tree_lines.pop(0)
        return f"{first_line}\n" + "\n".join(tree_lines)
    return ""


def get_tsx_contents(start_path, ignored_set):
    tsx_contents = []
    for root, dirs, files in os.walk(start_path, topdown=True):
        dirs[:] = [d for d in dirs if not should_ignore(d, ignored_set)]

        for file_name in files:
            if any(file_name.endswith(ext) for ext in TARGET_EXTENSIONS):
                if should_ignore(file_name, ignored_set):
                    continue
                
                file_path = os.path.join(root, file_name)
                relative_path = os.path.relpath(file_path, start_path).replace(os.sep, '/')
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    tsx_contents.append(f"### `{relative_path}`\n\n```tsx\n{content.strip()}\n```\n")
                except Exception as e:
                    tsx_contents.append(f"### `{relative_path}`\n\nError reading file: {e}\n")
                    
    return "\n---\n\n".join(tsx_contents)

if __name__ == "__main__":
    effective_ignored_set = get_ignore_list(ROOT_DIR)
    
    file_tree_str = "```text\n"
    file_tree_str += generate_file_tree(ROOT_DIR, effective_ignored_set)
    file_tree_str += "\n```"
    
    tsx_content_str = get_tsx_contents(ROOT_DIR, effective_ignored_set)
    
    final_content = f"# Project Code Dump: {os.path.basename(os.path.abspath(ROOT_DIR))}\n\n"
    final_content += "## File Tree\n\n"
    final_content += file_tree_str
    final_content += "\n\n## TSX File Contents\n\n"
    final_content += tsx_content_str
    
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(final_content)
        print(f"Successfully wrote to {OUTPUT_FILE}")
    except Exception as e:
        print(f"Error writing to {OUTPUT_FILE}: {e}")