
# Ulvik Frukt & Cideri

Dette er kjeldekoden for den offisielle nettsida til Ulvik Frukt & Cideri. Nettsida presenterer verksemda, produktutvalet deira (både alkoholhaldig og alkoholfritt), og praktisk informasjon for besøkande og kundar.

## Teknologioversikt

Prosjektet er bygd med moderne webteknologiar for å sikra ei god brukaroppleving og enkel vedlikehald:

*   **Next.js**: Eit React-rammeverk for server-rendra applikasjonar.
*   **React**: Eit JavaScript-bibliotek for å byggja brukarflater.
*   **TypeScript**: Eit statisk typa supersett av JavaScript som forbetrar kodekvalitet og utviklaroppleving.
*   **Tailwind CSS**: Eit "utility-first" CSS-rammeverk for rask styling.
*   **shadcn/ui** (komponentar basert på Radix UI & Tailwind CSS): For gjenbrukbare og tilgjengelege UI-komponentar som knappar.
*   **Lucide Icons**: For reine og konsistente ikon.

## Prosjektstruktur

Prosjektet følgjer ein standard Next.js-struktur med App Router:
content_copy
download
Use code with caution.
Markdown
ulvik-frukt-cideri/
├── app/ # Hovudruter og sider (t.d. /alkohol, /om-oss)
├── components/ # Gjenbrukbare React-komponentar (t.d. navigasjon, knappar)
│ ├── navigation.tsx
│ └── ui/
├── public/ # Statiske ressursar (bilete, logoar, ikon)
├── lib/ # Hjelpefunksjonar og verktøy
├── next.config.ts # Konfigurasjon for Next.js
├── package.json # Prosjektavhengigheiter og skript
└── tsconfig.json # Konfigurasjon for TypeScript

## Kjernefunksjonalitet

*   **Produktpresentasjon**: Sider for alkoholhaldige og alkoholfrie produkt med detaljert informasjon (smak, farge, matkombinasjonar).
*   **Informasjonssider**: "Om Oss", "Besøk Oss", "Galleri", og "Kontakt".
*   **Responsiv Navigasjon**: Tilpassar seg ulike skjermstorleikar (desktop og mobil) for optimal brukaroppleving.
*   **Dynamisk Innhald**: T.d. tilfeldig val av heltebilete på heimesida.

## Korleis kome i gang

For å køyre prosjektet lokalt:

1.  **Klon repositoriet:**
    ```bash
    git clone <URL-til-ditt-repo>
    cd ulvik-frukt-cideri
    ```

2.  **Installer avhengigheiter:**
    ```bash
    npm install
    ```
    *(eller `yarn install` om du føretrekkjer Yarn)*

3.  **Køyr utviklingsserveren:**
    ```bash
    npm run dev
    ```
    *(eller `yarn dev`)*

Opne [http://localhost:3000](http://localhost:3000) i nettlesaren din for å sjå resultatet.
