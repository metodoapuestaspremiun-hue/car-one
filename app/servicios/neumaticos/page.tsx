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

export default function NeumaticosPage() {
  const openWhatsApp = () => {
    sendWhatsAppWithFeaturedImage()
  }

  const slideData = [
    {
      title: "Venta de Neumáticos",
      button: "Ver Precios - $120",
      src: "/images/cambio_neumaticos.jpeg",
    },
    {
      title: "Adherencia y Seguridad",
      button: "Consultar Servicio",
      src: "/images/taller.jpg",
    },
    {
      title: "Marcas Reconocidas",
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/cambio_neumaticos.jpeg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="block">Venta de Neumáticos Loja</span>
            <span className="block text-[#00FF00]">Llantas Nuevas y Enllantaje</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Venta de neumáticos Loja. Llantas nuevas, enllantaje y balanceo con asesoría profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Ver Precios - Desde $120
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
                  src="/images/Neumaticos/image.jpg"
                  height="1000"
                  width="1000"
                  className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Venta de neumáticos en Loja - Car One Tecnicentro"
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Neumáticos de Calidad Premium en Loja</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Marcas reconocidas: Michelin, Bridgestone, Goodyear, Continental y más. Llantas nuevas en Loja.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Garantía de fábrica en todos los neumáticos y oferta de llantas en Loja</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Instalación, enllantaje y balanceo Loja incluidos en el servicio</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Asesoría personalizada para comprar llantas en Loja y cambio de llantas a domicilio Loja</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/cambio_neumaticos.jpeg"
                        alt="Venta de neumáticos de calidad"
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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Neumáticos Nuevos</h3>
                  <p className="text-gray-600">Amplio stock de neumáticos nuevos de las mejores marcas del mercado. Venta de neumáticos Loja y almacén de llantas en Loja.</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Instalación</h3>
                  <p className="text-gray-600">Montaje, balanceado y alineación incluidos en el servicio. Enllantaje y balanceo Loja.</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Asesoría</h3>
                  <p className="text-gray-600">
                    Te ayudamos a elegir el neumático ideal para tu vehículo y estilo de conducción. Llantas nuevas en Loja y oferta de llantas.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Precio de Neumáticos en Loja</h2>
          </div>
          <div className="flex justify-center">
            <CardSpotlight className="h-[500px] w-[450px] max-w-full" color="#00FF00">
              <div className="text-center h-full flex flex-col justify-center px-4">
                <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
                <p className="text-2xl font-bold relative z-20 mb-6 text-white">Venta de Neumáticos Loja</p>
                <div className="text-neutral-200 relative z-20 mb-6">
                  <p className="text-lg mb-4">Incluye:</p>
                  <ul className="list-none space-y-2">
                    <li>Neumáticos de marcas reconocidas y llantas nuevas en Loja</li>
                    <li>Instalación profesional, enllantaje y balanceo Loja</li>
                    <li>Balanceo y alineación incluidos</li>
                    <li>Asesoría en selección de neumáticos y oferta de llantas</li>
                  </ul>
                </div>
                <p className="text-neutral-300 relative z-20 text-sm mb-6">
                  <span className="text-[#00FF00] font-bold">CAR ONE TECNICENTRO</span> - Venta de neumáticos Loja, llantas nuevas y enllantaje con garantía y asesoría personalizada.
                </p>
                <Button
                  onClick={openWhatsApp}
                  className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-6 py-2 relative z-20 mx-auto"
                >
                  Ver Precios
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
            <p className="text-lg text-gray-300">¿Necesitas llantas nuevas en Loja? Consulta disponibilidad, precio de llantas en Loja y oferta de llantas en nuestro almacén de llantas en Loja.</p>
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
