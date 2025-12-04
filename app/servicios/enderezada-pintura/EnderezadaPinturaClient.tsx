"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Mail, CheckCircle, Shield, Clock, Wrench } from "lucide-react"
import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import Carousel from "@/components/ui/carousel"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { MobileNav } from "@/components/mobile-nav"
import { Header } from "@/components/header"
import { sendWhatsAppWithFeaturedImage } from "@/lib/whatsapp"

export default function EnderezadaPinturaClient() {
  const openWhatsApp = () => {
    sendWhatsAppWithFeaturedImage()
  }

  const slideData = [
    {
      title: "Enderezada y Pintura",
      button: "Cotizar Ahora - $600",
      src: "/images/Enderezado_pintura.webp",
    },
    {
      title: "Tu Auto Como Nuevo",
      button: "Consultar Servicio",
      src: "/images/taller.jpg",
    },
    {
      title: "Acabado Profesional",
      button: "Ver Más Detalles",
      src: "/images/testimonio_2.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/Enderezado_pintura.webp')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="block">Enderezada y Pintura Loja</span>
            <span className="block text-[#00FF00]">Latonería y Pintura de Autos</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Taller de latonería y pintura en Loja. Restauración, reparación de choques y pintura automotriz profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Cotizar Servicio - Desde $600
            </Button>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CardContainer className="inter-var max-w-4xl mx-auto">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full">
                <Image
                  src="/images/Enderezada y pintura/image.jpg"
                  height="1000"
                  width="1000"
                  className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Enderezada y pintura de autos en Loja - Car One Tecnicentro"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Enderezada y Pintura Profesional en Loja</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Enderezado de carrocería con equipos especializados y restauración de pintura automotriz</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Pinturas automotrices de alta calidad y pintura al horno para carros Loja</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Proceso completo de preparación, reparación de choques Loja y acabado profesional</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Igualación perfecta del color original y pulida de autos Loja</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/Enderezado_pintura.webp"
                        alt="Enderezada y pintura profesional"
                        width={600}
                        height={400}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>

            {/* Service Includes */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Enderezado</h3>
                  <p className="text-gray-600">
                    Reparación de abolladuras y deformaciones en la carrocería del vehículo. Enderezado de compactos Loja y reparación de chasis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Preparación</h3>
                  <p className="text-gray-600">
                    Lijado, masillado y preparación completa de la superficie para pintura automotriz precio Loja.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Pintura</h3>
                  <p className="text-gray-600">
                    Aplicación de pintura automotriz con acabado profesional, pintura al horno para carros Loja y protección UV.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Precio de Enderezada y Pintura en Loja</h2>
          </div>
          <div className="flex justify-center">
            <CardSpotlight className="h-[500px] w-[450px] max-w-full" color="#00FF00">
              <div className="text-center h-full flex flex-col justify-center px-4">
                <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
                <p className="text-2xl font-bold relative z-20 mb-6 text-white">Enderezada y Pintura de Autos Loja</p>
                <div className="text-neutral-200 relative z-20 mb-6">
                  <p className="text-lg mb-4">Incluye:</p>
                  <ul className="list-none space-y-2">
                    <li>Diagnóstico y valoración de daños, reparación de choques Loja</li>
                    <li>Enderezado de carrocería y chasis</li>
                    <li>Pintura profesional y restauración de pintura automotriz</li>
                    <li>Materiales y mano de obra especializada en taller de carrocería en Loja</li>
                  </ul>
                </div>
                <p className="text-neutral-300 relative z-20 text-sm mb-6">
                  <span className="text-[#00FF00] font-bold">CAR ONE TECNICENTRO</span> - Taller de latonería y pintura en Loja, restauración de pintura automotriz y reparación de choques Loja.
                </p>
                <Button
                  onClick={openWhatsApp}
                  className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-6 py-2 relative z-20 mx-auto"
                >
                  Cotizar Ahora
                </Button>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contáctanos</h2>
            <p className="text-lg text-gray-300">¿Necesitas enderezada y pintura de autos Loja? Solicita tu cotización en nuestro taller de carrocería en Loja y recibe asesoría en restauración de pintura automotriz.</p>
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
                <p className="text-gray-300 text-sm">
                  asesor.servicio.carone@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
