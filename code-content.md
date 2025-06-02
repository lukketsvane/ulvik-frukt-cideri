# Project Code Dump: ulvik-frukt-cideri

## File Tree

```text
ulvik-frukt-cideri/
├── .git/ (ignored)
├── .gitignore
├── .next/ (ignored)
├── README.md
├── code-content.md
├── components.json
├── eslint.config.mjs
├── next-env.d.ts (ignored)
├── next.config.ts
├── package-lock.json (ignored)
├── package.json
├── postcss.config.mjs
├── transcribe.py
├── tsconfig.json
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── alkohol/
│   │   └── page.tsx
│   ├── alkoholfritt/
│   │   └── page.tsx
│   ├── besok-oss/
│   │   └── page.tsx
│   ├── galleri/
│   │   └── page.tsx
│   ├── kontakt/
│   │   └── page.tsx
│   └── om-oss/
│       └── page.tsx
├── components/
│   ├── navigation.tsx
│   └── ui/
│       └── button.tsx
├── lib/
│   └── utils.ts
├── node_modules/ (ignored)
└── public/
    ├── circle-logo.svg
    ├── file.svg
    ├── globe.svg
    ├── logo-symbol_dark.svg
    ├── logo-symbol_light.svg
    ├── logo-type_dark.svg
    ├── logo-type_light.svg
    ├── logo.svg
    ├── next.svg
    ├── vercel.svg
    ├── window.svg
    ├── font/
    │   ├── Haboro-Black.otf
    │   ├── Haboro-BlackCondensed.otf
    │   ├── Haboro-BlackCondensedItalic.otf
    │   ├── Haboro-BlackExtended.otf
    │   ├── Haboro-BlackExtendedItalic.otf
    │   ├── Haboro-BlackItalic.otf
    │   ├── Haboro-Bold.otf
    │   ├── Haboro-BoldCondensed.otf
    │   ├── Haboro-BoldCondensedItalic.otf
    │   ├── Haboro-BoldExtended.otf
    │   ├── Haboro-BoldExtendedItalic.otf
    │   ├── Haboro-BoldItalic.otf
    │   ├── Haboro-Book.otf
    │   ├── Haboro-BookCondensed.otf
    │   ├── Haboro-BookCondensedItalic.otf
    │   ├── Haboro-BookExtended.otf
    │   ├── Haboro-BookExtendedItalic.otf
    │   ├── Haboro-BookItalic.otf
    │   ├── Haboro-Condensed.otf
    │   ├── Haboro-CondensedItalic.otf
    │   ├── Haboro-DemBdCondIta.otf
    │   ├── Haboro-DemiBold.otf
    │   ├── Haboro-DemiBoldCondensed.otf
    │   ├── Haboro-DemiBoldExtended.otf
    │   ├── Haboro-DemiBoldExtendedItalic.otf
    │   ├── Haboro-DemiBoldItalic.otf
    │   ├── Haboro-ExtBdCondIta.otf
    │   ├── Haboro-ExtBdExtIta.otf
    │   ├── Haboro-Extended.otf
    │   ├── Haboro-ExtendedItalic.otf
    │   ├── Haboro-ExtraBold.otf
    │   ├── Haboro-ExtraBoldCondensed.otf
    │   ├── Haboro-ExtraBoldExtended.otf
    │   ├── Haboro-ExtraBoldItalic.otf
    │   ├── Haboro-Italic.otf
    │   ├── Haboro-Light.otf
    │   ├── Haboro-LightCondensed.otf
    │   ├── Haboro-LightCondensedItalic.otf
    │   ├── Haboro-LightExtended.otf
    │   ├── Haboro-LightExtendedItalic.otf
    │   ├── Haboro-LightItalic.otf
    │   ├── Haboro-Medium.otf
    │   ├── Haboro-MediumCondensed.otf
    │   ├── Haboro-MediumCondensedItalic.otf
    │   ├── Haboro-MediumExtended.otf
    │   ├── Haboro-MediumExtendedItalic.otf
    │   ├── Haboro-MediumItalic.otf
    │   ├── Haboro-Regular.otf
    │   ├── Haboro-Thin.otf
    │   ├── Haboro-ThinCondensed.otf
    │   ├── Haboro-ThinCondensedItalic.otf
    │   ├── Haboro-ThinExtended.otf
    │   ├── Haboro-ThinExtendedItalic.otf
    │   └── Haboro-ThinItalic.otf
    └── images/
        ├── apple-closeup-new.png
        ├── bottle-clear-2.png
        ├── orchard-landscape.png
        ├── product-bottles.png
        └── products/
            ├── gravenstein.png
            ├── hylleblomsider.png
            ├── kvennadokkje.png
            ├── kvitanesen.png
            ├── stille-stunder.png
            ├── svartsurbaer.png
            └── tradisjon.png
```

## TSX File Contents

### `components/navigation.tsx`

```tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Header Navigation */}
      <header className={`absolute top-0 left-0 right-0 z-20 ${!isHomePage ? "bg-black" : ""}`}>
        <nav className="flex items-center justify-center px-4 md:px-8 py-6 relative">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 text-white text-sm font-medium tracking-wider mr-8">
            <Link
              href="/besok-oss"
              className={`hover:opacity-80 transition-opacity ${pathname === "/besok-oss" ? "opacity-100" : "opacity-60"}`}
            >
              BESØK OSS
            </Link>
            <Link
              href="/om-oss"
              className={`hover:opacity-80 transition-opacity ${pathname === "/om-oss" ? "opacity-100" : "opacity-60"}`}
            >
              OM OSS
            </Link>
            <Link
              href="/alkohol"
              className={`hover:opacity-80 transition-opacity ${pathname === "/alkohol" ? "opacity-100" : "opacity-60"}`}
            >
              ALKOHOL
            </Link>
          </div>

          {/* Spacer for mobile to balance logo centering */}
          <div className="lg:hidden w-12"></div>

          {/* Center Logo */}
          <div className="flex-1 lg:flex-none flex justify-start lg:justify-center">
            <Link href="/">
              {/* Mobile: Logo Type */}
              <div className="lg:hidden w-64 h-16 relative">
                <Image src="/logo-type_light.svg" alt="Aldesider" width={256} height={64} className="w-full h-full" />
              </div>

              {/* Desktop: Logo Symbol */}
              <div className="hidden lg:block w-16 h-16 relative">
                <Image
                  src="/logo-symbol_light.svg"
                  alt="Aldesider Logo"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 text-white text-sm font-medium tracking-wider ml-8">
            <Link
              href="/alkoholfritt"
              className={`hover:opacity-80 transition-opacity ${pathname === "/alkoholfritt" ? "opacity-100" : "opacity-60"}`}
            >
              ALKOHOLFRITT
            </Link>
            <Link
              href="/galleri"
              className={`hover:opacity-80 transition-opacity ${pathname === "/galleri" ? "opacity-100" : "opacity-60"}`}
            >
              GALLERI
            </Link>
            <Link
              href="/kontakt"
              className={`hover:opacity-80 transition-opacity ${pathname === "/kontakt" ? "opacity-100" : "opacity-60"}`}
            >
              KONTAKT
            </Link>
          </div>

          {/* Mobile Menu Button - Absolute positioned on right */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 w-12 h-12 relative"
              onClick={toggleMobileMenu}
            >
              {/* Hamburger Icon */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                }`}
              >
                <Menu className="w-8 h-8" />
              </div>

              {/* Close Icon */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                }`}
              >
                <X className="w-8 h-8" />
              </div>

              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black animate-in fade-in duration-300">
          {/* Header with close button */}
          <div className="flex items-center justify-between px-4 py-6">
            <div className="w-12"></div>
            <div className="w-16 h-16 relative">
              <Image
                src="/logo-symbol_light.svg"
                alt="Aldesider Logo"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 w-12 h-12 relative"
              onClick={toggleMobileMenu}
            >
              {/* Hamburger Icon */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                }`}
              >
                <Menu className="w-8 h-8" />
              </div>

              {/* Close Icon */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                }`}
              >
                <X className="w-8 h-8" />
              </div>

              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center flex-1 space-y-12 text-white text-5xl font-medium tracking-wider">
            <Link
              href="/besok-oss"
              className="text-white hover:opacity-80 transition-opacity py-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BESØK OSS
            </Link>
            <Link
              href="/om-oss"
              className="text-white hover:opacity-80 transition-opacity py-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OM OSS
            </Link>
            <Link
              href="/alkohol"
              className="text-white hover:opacity-80 transition-opacity py-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ALKOHOL
            </Link>
            <Link
              href="/alkoholfritt"
              className="text-white hover:opacity-80 transition-opacity py-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ALKOHOLFRITT
            </Link>
            <Link
              href="/galleri"
              className="text-white hover:opacity-80 transition-opacity py-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GALLERI
            </Link>
            <Link
              href="/kontakt"
              className="text-white hover:opacity-80 transition-opacity py-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              KONTAKT
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
```

---

### `components/ui/button.tsx`

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
```

---

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

---

### `app/page.tsx`

```tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"

const heroImages = [
  {
    src: "/images/orchard-landscape.png",
    alt: "Apple orchards in bloom overlooking Norwegian fjord",
  },
  {
    src: "/images/apple-closeup-new.png",
    alt: "Fresh red apples with water droplets on tree",
  },
]

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState(heroImages[0])

  useEffect(() => {
    // Randomly select an image on component mount
    const randomIndex = Math.floor(Math.random() * heroImages.length)
    setSelectedImage(heroImages[randomIndex])
  }, [])

  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={selectedImage.src || "/placeholder.svg"}
            alt={selectedImage.alt}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Mobile: Only Logo Type at top */}
        <div className="md:hidden">
          <div className="absolute top-24 left-0 right-0 flex justify-center px-4">
            <div className="w-48 h-auto hidden">
              <Image
                src="/logo-type_light.svg"
                alt="Aldesider"
                width={300}
                height={75}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Desktop: Logo Type in center */}
        <div className="hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-auto">
              <Image
                src="/logo-type_light.svg"
                alt="Aldesider"
                width={400}
                height={100}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

### `app/alkoholfritt/page.tsx`

```tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"

const nonAlcoholicProducts = [
  {
    id: "stille-stunder",
    name: "Stille Stunder Still Sider",
    image: "/images/products/stille-stunder.png",
    alcohol: "0%",
    description: "Alkoholfri sider med same smak som tradisjonell sider",
    color: "Lys gul",
    pairing: ["APERITIFF", "FISK", "LETT MAT"],
  },
  {
    id: "hylleblomsider",
    name: "Hylleblomsider",
    image: "/images/products/hylleblomsider.png",
    alcohol: "0%",
    description: "Forfriskande alkoholfri sider med hylleblomsmak",
    color: "Lys gul",
    pairing: ["APERITIFF", "DESSERT", "SOMMAR"],
  },
]

export default function AlkoholfriPage() {
  const [selectedProduct, setSelectedProduct] = useState(nonAlcoholicProducts[0])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Selected Product Display */}
          <div className="border border-gray-200 bg-white mb-16 md:mb-0">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 pt-12 md:p-12">
              {/* Product Image */}
              <div className="flex justify-center items-center">
                <div className="w-64 h-80 relative">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4 md:space-y-8">
                <div>
                  <h1 className="text-4xl font-light text-gray-900 mb-3">{selectedProduct.name}</h1>
                  <p className="text-xl text-gray-600 font-light">Alkohol: {selectedProduct.alcohol}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 md:mb-3 tracking-wide">SMAK</h3>
                  <p className="text-gray-700 leading-relaxed font-light">{selectedProduct.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 md:mb-3 tracking-wide">FARGE</h3>
                  <p className="text-gray-700 font-light">{selectedProduct.color}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 md:mb-3 tracking-wide">PASSAR TIL</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProduct.pairing.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-light tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Product Grid first */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {nonAlcoholicProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-6 border transition-all duration-200 ${
                  selectedProduct.id === product.id
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:border-gray-400 bg-white"
                }`}
              >
                <div className="aspect-[3/4] relative mb-3">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <p className="text-sm text-gray-800 text-center font-light">{product.name}</p>
              </button>
            ))}
          </div>

          {/* Mobile: Product Grid below details */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {nonAlcoholicProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-6 border transition-all duration-200 ${
                  selectedProduct.id === product.id
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:border-gray-400 bg-white"
                }`}
              >
                <div className="aspect-[3/4] relative mb-3">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <p className="text-sm text-gray-800 text-center font-light">{product.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

### `app/galleri/page.tsx`

```tsx
import Navigation from "@/components/navigation"

export default function GalleriPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-wide">GALLERI</h1>
      </div>
    </div>
  )
}
```

---

### `app/kontakt/page.tsx`

```tsx
import Navigation from "@/components/navigation"

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-wide">KONTAKT</h1>
      </div>
    </div>
  )
}
```

---

### `app/alkohol/page.tsx`

```tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"

const alcoholProducts = [
  {
    id: "tradisjon",
    name: "Sider frå Hardanger Tradisjon",
    image: "/images/products/tradisjon.png",
    alcohol: "8%",
    description: "Fruktig, ungdommeleg og epleprega, innslag av mogne Aroma-eple, litt urter, gjærbakst og blome.",
    color: "Lys strågul",
    pairing: ["APERITIFF", "SKALLDYR", "FISK"],
  },
  {
    id: "gravenstein",
    name: "Sider frå Hardanger Gravenstein",
    image: "/images/products/gravenstein.png",
    alcohol: "7.5%",
    description: "Klassisk sider med preg av Gravenstein-eple",
    color: "Gul",
    pairing: ["APERITIFF", "FISK"],
  },
  {
    id: "kvitanesen",
    name: "Kvitanesen Poesider 2018",
    image: "/images/products/kvitanesen.png",
    alcohol: "8.5%",
    description: "Elegant og kompleks sider med poetisk karakter",
    color: "Gyllen",
    pairing: ["APERITIFF", "DESSERT"],
  },
  {
    id: "svartsurbaer",
    name: "Svartsurbær Musserande Sider",
    image: "/images/products/svartsurbaer.png",
    alcohol: "6%",
    description: "Musserande sider med innslag av svartsurbær",
    color: "Raud",
    pairing: ["APERITIFF", "DESSERT"],
  },
  {
    id: "kvemmadokkje",
    name: "Kvemmadokkje",
    image: "/images/products/kvemmadokkje.png",
    alcohol: "7%",
    description: "Rosésider med innslag av rips og solbær",
    color: "Rosa",
    pairing: ["APERITIFF", "SKALLDYR"],
  },
]

export default function AlkoholPage() {
  const [selectedProduct, setSelectedProduct] = useState(alcoholProducts[0])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop: Product Grid first */}

          {/* Selected Product Display */}
          <div className="border border-gray-200 bg-white mb-16 md:mb-0">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 pt-12 md:p-12">
              {/* Product Image */}
              <div className="flex justify-center items-center">
                <div className="w-64 h-80 relative">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4 md:space-y-8">
                <div>
                  <h1 className="text-4xl font-light text-gray-900 mb-3">{selectedProduct.name}</h1>
                  <p className="text-xl text-gray-600 font-light">Alkohol: {selectedProduct.alcohol}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 md:mb-3 tracking-wide">SMAK</h3>
                  <p className="text-gray-700 leading-relaxed font-light">{selectedProduct.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 md:mb-3 tracking-wide">FARGE</h3>
                  <p className="text-gray-700 font-light">{selectedProduct.color}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 md:mb-3 tracking-wide">PASSAR TIL</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProduct.pairing.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-light tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Product Grid first */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {alcoholProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-6 border transition-all duration-200 ${
                  selectedProduct.id === product.id
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:border-gray-400 bg-white"
                }`}
              >
                <div className="aspect-[3/4] relative mb-3">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <p className="text-sm text-gray-800 text-center font-light">{product.name}</p>
              </button>
            ))}
          </div>

          {/* Mobile: Product Grid below details */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {alcoholProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-6 border transition-all duration-200 ${
                  selectedProduct.id === product.id
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:border-gray-400 bg-white"
                }`}
              >
                <div className="aspect-[3/4] relative mb-3">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <p className="text-sm text-gray-800 text-center font-light">{product.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

### `app/besok-oss/page.tsx`

```tsx
import Navigation from "@/components/navigation"

export default function BesokOssPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-wide">BESØK OSS</h1>
      </div>
    </div>
  )
}
```

---

### `app/om-oss/page.tsx`

```tsx
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 mt-16 tracking-wide">OM OSS</h1>
          </div>

          {/* Content Section */}
          <div className="space-y-12">
            {/* Contact Header */}
            <div className="text-center">
              <h2 className="text-2xl font-medium text-gray-900 mb-8 tracking-wider">KONTAKT</h2>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-lg font-light">
                <p>
                  Ulvik Frukt&Cideri er ei familiebedrift på garden Hakastad. Garden ligg sørvendt og solrikt midt i
                  fruktbygda Ulvik i Hardanger.
                </p>

                <p>Målet vårt er å utvikla ei bedrift som er tufta på kvalitet, kultur og kompetanse.</p>

                <p>
                  Me dyrkar dei vanlege eplesortane, men har i tillegg planta fleire gamle eplesortar og nokre
                  engelske/franske sidersortar.
                </p>

                <p>
                  Med utgangspunkt i dette sortsutvalet, kan me tilby ulike smaksvariasjonar av eplejuice og sider
                  spesielle for garden Hakastad.
                </p>

                <p>Prøv eplejuice og sider til ulike matrettar!</p>

                <p className="text-xl font-medium text-gray-900 italic">
                  "Den gode eplesmaken" er basis for alle produkta våre.
                </p>
              </div>
            </div>

            {/* Product Categories */}
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="text-center">
                <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">Eplemost</h3>
                <div className="w-24 h-px bg-gray-300 mx-auto"></div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">Sider</h3>
                <div className="w-24 h-px bg-gray-300 mx-auto"></div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-16">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/orchard-landscape.png"
                  alt="Ulvik Frukt & Cideri orchard in Hardanger"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```
