"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Mail, CheckCircle, Shield, Clock, Wrench } from "lucide-react"
import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { MobileNav } from "@/components/mobile-nav"
import { Header } from "@/components/header"
import { sendWhatsAppWithFeaturedImage } from "@/lib/whatsapp"

export default function AutopartesLubricantesPage() {
  const openWhatsApp = () => {
    sendWhatsAppWithFeaturedImage()
  }

  const brands = [
    { name: 'Wunscher', logo: '/images/Autopartes y Lubricantes/Marca 1.jpeg' },
    { name: 'Advance', logo: '/images/Autopartes y Lubricantes/Marca 2.jpeg' },
    { name: 'Amalie', logo: '/images/Autopartes y Lubricantes/Marca 3.jpeg' },
    { name: 'Kendall', logo: '/images/Autopartes y Lubricantes/Marca 4.jpeg' },
    { name: 'ACDelco', logo: '/images/Autopartes y Lubricantes/Marca 5.jpeg' },
    { name: 'MANNOL', logo: '/images/Autopartes y Lubricantes/Marca 6.jpeg' },
    { name: 'Millard', logo: '/images/Autopartes y Lubricantes/Marca 7.jpeg' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/Autopartes y Lubricantes/image.png')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Venta de <span className="text-[#00FF00]">Autopartes</span></span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 normal-case font-normal">y Lubricantes en Loja</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Encuentra los mejores repuestos y aceites para tu vehículo en Loja. Productos de calidad garantizada para el mantenimiento preventivo y correctivo de tu auto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Consultar Disponibilidad
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Marcas de Autopartes y Lubricantes</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Distribuidores Autorizados en Loja</h3>
            <div className="w-24 h-1 bg-[#00FF00] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos productos de las marcas líderes en el mercado automotriz, garantizando calidad y rendimiento para tu vehículo.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
            {brands.slice(0, 4).map((brand, index) => (
              <div key={index} className="group relative h-full">
                <div className="h-full flex flex-col items-center justify-between bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-[#00FF00]/20 border border-gray-100">
                  <div className="w-full h-40 sm:h-48 relative bg-white flex items-center justify-center p-2">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="w-full py-3 text-center font-bold text-gray-800 bg-gray-50 border-t border-gray-100 transition-colors duration-300 group-hover:bg-gray-100">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6 px-4">
            {brands.slice(4).map((brand, index) => (
              <div key={index + 4} className="group relative h-full">
                <div className="h-full flex flex-col items-center justify-between bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-[#00FF00]/20 border border-gray-100">
                  <div className="w-full h-40 sm:h-48 relative bg-white flex items-center justify-center p-2">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="w-full py-3 text-center font-bold text-gray-800 bg-gray-50 border-t border-gray-100 transition-colors duration-300 group-hover:bg-gray-100">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Productos y Servicios Automotrices</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Soluciones Integrales en Loja</h3>
            <div className="w-24 h-1 bg-[#00FF00] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para el mantenimiento de tu vehículo en un solo lugar. Calidad garantizada en repuestos y lubricantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardSpotlight className="h-full hover:shadow-[#00FF00]/30 hover:scale-[1.02] transition-all duration-300">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#00FF00] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Wrench className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Venta de Autopartes</h3>
                  <p className="text-gray-600 text-center">
                    Amplio catálogo de autopartes originales y de reemplazo para todas las marcas y modelos de vehículos.
                  </p>
                </CardContent>
              </Card>
            </CardSpotlight>

            <CardSpotlight className="h-full hover:shadow-[#00FF00]/30 hover:scale-[1.02] transition-all duration-300">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#00FF00] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Wrench className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Lubricantes y Fluidos</h3>
                  <p className="text-gray-600 text-center">
                    Aceites y fluidos de la más alta calidad para el óptimo rendimiento de tu vehículo.
                  </p>
                </CardContent>
              </Card>
            </CardSpotlight>

            <CardSpotlight className="h-full hover:shadow-[#00FF00]/30 hover:scale-[1.02] transition-all duration-300">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#00FF00] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Wrench className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Asesoría Técnica</h3>
                  <p className="text-gray-600 text-center">
                    Nuestros expertos te asesorarán para elegir los productos más adecuados para tu vehículo.
                  </p>
                </CardContent>
              </Card>
            </CardSpotlight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00FF00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">¿Buscas Repuestos o Lubricantes?</h2>
          <h3 className="text-2xl font-semibold text-black/90 mb-4">Asesoría Especializada en Loja</h3>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Nuestros expertos te ayudarán a encontrar las autopartes y lubricantes ideales para tu vehículo. Calidad garantizada y precios competitivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Contáctanos por WhatsApp
            </Button>
            <a href="tel:+593979606963" className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
