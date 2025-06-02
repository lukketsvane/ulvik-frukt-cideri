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
