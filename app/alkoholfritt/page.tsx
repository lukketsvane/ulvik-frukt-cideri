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
