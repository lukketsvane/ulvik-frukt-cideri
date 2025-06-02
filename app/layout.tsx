import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css" // Din eksisterande globals.css
import Navigation from "@/components/navigation"

const haboro = localFont({
  src: [
    { path: "../public/font/Haboro-Book.otf", weight: "400", style: "normal" },
    { path: "../public/font/Haboro-BookItalic.otf", weight: "400", style: "italic" },
    { path: "../public/font/Haboro-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/font/Haboro-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../public/font/Haboro-DemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/font/Haboro-DemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "../public/font/Haboro-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/font/Haboro-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../public/font/Haboro-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/font/Haboro-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    { path: "../public/font/Haboro-Black.otf", weight: "900", style: "normal" },
    { path: "../public/font/Haboro-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-haboro", // Denne blir brukt i globals.css
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ulvik Frukt & Cideri",
  description: "Oppdag prisvinnande sider og eplemost frå Ulvik Frukt & Cideri i Hardanger.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nb" className={`${haboro.variable} scroll-smooth`}>
      {/* body-klassen blir no sett i din globals.css via @layer base */}
      <body>
        <Navigation />
        {/* Du kan vurdera ein wrapper her for side-spesifikke inngangsanimasjonar om nødvendig */}
        <main>{children}</main>
      </body>
    </html>
  )
}