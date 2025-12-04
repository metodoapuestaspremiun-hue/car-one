"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Mail, CheckCircle, Shield, Star } from "lucide-react"
import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Header } from "@/components/header"
import { sendWhatsAppWithFeaturedImage } from "@/lib/whatsapp"

export default function AlmacenRepuestosLubricantesPage() {
  const openWhatsApp = () => {
    sendWhatsAppWithFeaturedImage()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/Almacen de respuestos y lubricantes/image.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight uppercase">
            Repuestos y Lubricantes de Calidad Premium
            <span className="block text-[#00FF00]">Todo lo que tu Auto Necesita en Loja</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            En Car One Tecnicentro, brindamos una amplia variedad de servicios especializados para mantener tu vehículo en perfectas condiciones y garantizar su rendimiento y durabilidad.
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

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Tu Mejor Opción para Repuestos y Lubricantes en Loja</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Repuestos originales y compatibles de todas las marcas</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Lubricantes MANNOL, SHELL, AMALIE y más marcas TOP</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Filtros, baterías, neumáticos y accesorios</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Garantía en todos nuestros productos</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/Almacen de respuestos y lubricantes/image.jpg"
                        alt="Almacén de repuestos y lubricantes"
                        width={600}
                        height={400}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>

            {/* Products */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black uppercase text-center">
                Nuestros Productos Incluyen:
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-black">Repuestos Originales</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Amplio stock de repuestos originales para todas las marcas de vehículos.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-black">Lubricantes Premium</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Aceites y lubricantes de marcas reconocidas: MANNOL, SHELL, AMALIE.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-black">Filtros y Baterías</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Filtros de aire, aceite, combustible y baterías de larga duración.</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button
                  onClick={() => window.open('https://wa.me/593979606963', '_blank')}
                  size="lg"
                  className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Consultar Productos - WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por Qué Comprar Repuestos y Lubricantes con Nosotros? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black uppercase text-center">¿Por Qué Comprar Repuestos y Lubricantes con Nosotros?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-white border-l-4 border-l-[#00FF00]">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-[#00FF00] mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Calidad y Garantía</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Ofrecemos una gran variedad de autopartes en marcas reconocidas y con garantía para mantener los estándares de seguridad que tu familia necesita.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-white border-l-4 border-l-[#00FF00]">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-[#00FF00] mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Marcas TOP</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Contamos con la representación de marcas TOP en el mercado nacional como son MANNOL, SHELL, AMALIE, entre otras con el fin de mantener tu motor siempre al 100%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Tu Mejor Opción para Repuestos y Lubricantes en Loja</h2>
          <CardSpotlight className="h-auto w-full max-w-full" color="#00FF00">
            <div className="text-center h-full flex flex-col justify-center px-4 py-8">
              <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
              <p className="text-2xl font-bold relative z-20 mb-6 text-white">nuestro catálogo y stock actual.</p>
              <div className="text-neutral-200 relative z-20 mb-6">
                <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
                  <li>Encuentra la pieza exacta que necesitas con la ayuda de nuestros expertos.</li>
                  <li>Beneficíate de la garantía y el respaldo de las mejores marcas.</li>
                  <li>Mantén los estándares de seguridad y rendimiento de tu vehículo.</li>
                </ul>
              </div>
              <Button
                onClick={() => window.open('https://wa.me/593984546382', '_blank')}
                className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-6 py-2 relative z-20 mx-auto"
              >
                Consultar Catálogo
              </Button>
            </div>
          </CardSpotlight>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contáctanos</h2>
            <p className="text-lg text-gray-300">¿Buscas repuestos o lubricantes? Consulta disponibilidad y precios en nuestro almacén.</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg">
              <MapPin className="w-8 h-8 text-[#00FF00] flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Dirección</h4>
                <p className="text-gray-300 text-sm">
                  Av. California y Houston. Sector Parque Industrial
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg">
              <Phone className="w-8 h-8 text-[#00FF00] flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">WhatsApp</h4>
                <p className="text-gray-300 text-sm">0979606963</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg">
              <Mail className="w-8 h-8 text-[#00FF00] flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-300 text-sm">asesor.servicio.carone@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
