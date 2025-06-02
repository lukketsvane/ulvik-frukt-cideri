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
