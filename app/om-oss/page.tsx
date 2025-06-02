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
