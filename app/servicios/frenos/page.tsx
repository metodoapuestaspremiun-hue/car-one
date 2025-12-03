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

export default function FrenosPage() {
  const openWhatsApp = () => {
    sendWhatsAppWithFeaturedImage()
  }

  const slideData = [
    {
      title: "Servicio de Frenos",
      button: "Reservar Ahora - $18",
      src: "/images/pastillas_frenos.jpg",
    },
    {
      title: "Seguridad Garantizada",
      button: "Consultar Servicio",
      src: "/images/taller.jpg",
    },
    {
      title: "Repuestos de Calidad",
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/pastillas_frenos.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight uppercase">
            <span className="block">Servicio de <span className="text-[#00FF00]">Frenos</span> Automotrices</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 normal-case">Mantenimiento y Reparación en Loja</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Reparación de frenos en Loja. Servicio profesional con repuestos garantizados. Diagnóstico gratuito para tu vehículo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Reservar Servicio - $18
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black uppercase">
                  Taller Especializado en Frenos Automotrices en Loja
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700">
                  Soluciones Profesionales para el Sistema de Frenos de tu Vehículo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Diagnóstico completo del sistema de frenos, revisión de frenos en Loja y reparación de frenos cerca de mí</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Repuestos de marcas reconocidas y garantizadas para cambio de pastillas de freno Loja</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Servicio rápido y eficiente en taller de frenos en Loja</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Técnicos especializados en reparación de frenos Loja y mantenimiento de frenos</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/pastillas_frenos.jpg"
                        alt="Servicio de frenos profesional"
                        width={600}
                        height={400}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>

            {/* Nuestros Servicios de Sistema de Frenos Incluyen */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black uppercase text-center">
                Servicios de Frenos Automotrices
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-700 text-center">
                Especialistas en Reparación y Mantenimiento en Loja
              </h3>
              {/* Grid de tarjetas de servicios */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                {/* Tarjeta 1 */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de pastillas</h3>
                  <p className="text-gray-600">Reemplazo profesional de pastillas de freno delanteras y traseras con repuestos de calidad garantizada.</p>
                </div>

                {/* Tarjeta 2 */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de zapatas</h3>
                  <p className="text-gray-600">Servicio especializado de cambio de zapatas de freno para sistemas de freno de tambor.</p>
                </div>

                {/* Tarjeta 3 */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de discos de freno</h3>
                  <p className="text-gray-600">Reemplazo profesional de discos de freno delanteros y traseros con repuestos de calidad garantizada.</p>
                </div>

                {/* Tarjeta 4 */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de líquido de frenos</h3>
                  <p className="text-gray-600">Reemplazo completo y purga del sistema de líquido de frenos para mantener la eficiencia del frenado.</p>
                </div>

                {/* Tarjeta 5 - Cambio de cilindros de freno */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de cilindros de freno</h3>
                  <p className="text-gray-600">Reparación y reemplazo de cilindros maestros y de rueda para un sistema de frenos óptimo.</p>
                </div>

                {/* Tarjeta 6 - Cambio de cables de freno de estacionamiento */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de cables de freno de estacionamiento</h3>
                  <p className="text-gray-600">Servicio especializado de reemplazo de cables del freno de mano para mayor seguridad.</p>
                </div>
              </div>

              
              <div className="text-center mt-8">
                <Button
                  onClick={() => window.open('https://wa.me/593979606963', '_blank')}
                  size="lg"
                  className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Consultar Servicios - WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Pricing */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Precios de Reparación de Frenos en Loja</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-300">Calidad Garantizada a los Mejores Precios</h3>
          </div>

          <div className="flex justify-center">
            <CardSpotlight className="h-[500px] w-[450px] max-w-full" color="#00FF00">
              <div className="text-center h-full flex flex-col justify-center px-4">
                <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
                <p className="text-2xl font-bold relative z-20 mb-6 text-white">Reparación de Frenos Loja</p>
                <div className="text-neutral-200 relative z-20 mb-6">
                  <p className="text-lg mb-4">Incluye:</p>
                  <ul className="list-none space-y-2">
                    <Step title="Diagnóstico completo del sistema de frenos en Loja" />
                    <Step title="Cambio de pastillas de freno Loja" />
                    <Step title="Revisión y rectificación de discos de freno Loja" />
                    <Step title="Verificación y cambio de líquido de frenos precio Loja" />
                  </ul>
                </div>
                <p className="text-neutral-300 relative z-20 text-sm mb-6">
                  <span className="text-[#00FF00] font-bold">CAR ONE TECNICENTRO</span> - Taller de frenos en Loja, reparación de frenos cerca de mí y servicio de frenos automotriz con garantía.
                </p>
                <Button
                  onClick={openWhatsApp}
                  className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-6 py-2 relative z-20 mx-auto"
                >
                  Reservar Ahora
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase">Taller de Frenos en Loja</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#00FF00]">Agenda tu Diagnóstico Gratis</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Visita nuestro taller especializado en reparación de frenos en Loja. Diagnóstico gratuito y atención personalizada para tu vehículo.</p>
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

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white text-sm">{title}</p>
    </li>
  )
}

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-[#00FF00] mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  )
}
