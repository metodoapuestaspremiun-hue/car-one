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

export default function SistemaAireAcondicionadoPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/Aire Acondicionado/image.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Reparación de <span className="text-[#00FF00]">Aire Acondicionado</span></span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 normal-case font-normal">Servicio Profesional en Loja</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Taller especializado en reparación y recarga de aire acondicionado automotriz en Loja. Servicio rápido con garantía. Recupera el frío de tu auto con nuestros técnicos certificados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Consultar Servicio
            </Button>
          </div>
        </div>
      </section>

      {/* ¿Por Qué es Importante el Mantenimiento del A/C Automotriz? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
              Mantenimiento de Aire Acondicionado Automotriz
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-12">
              Beneficios Clave para tu Vehículo en Loja
            </h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6 text-lg text-gray-700">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0 mt-1" />
                    <div><b>Confort Climático:</b> Mantén tu vehículo fresco en verano y desempañado en invierno.</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0 mt-1" />
                    <div><b>Salud y Bienestar:</b> Un sistema limpio evita la acumulación de bacterias y malos olores.</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0 mt-1" />
                    <div><b>Eficiencia Energética:</b> Un A/C en buen estado consume menos combustible.</div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0 mt-1" />
                    <div><b>Prevención de Averías:</b> Detecta fugas o problemas a tiempo antes de que causen daños mayores.</div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/Aire Acondicionado/image.jpg"
                        alt="Sistema de aire acondicionado profesional"
                        width={600}
                        height={400}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Service Includes */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
                Servicios de Aire Acondicionado en Loja
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-8">
                Soluciones Completas para tu Climatización
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Tarjeta 1 - Diagnóstico del sistema */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico del sistema</h3>
                  <p className="text-gray-600">Evaluación completa del sistema de aire acondicionado para identificar fallas y problemas.</p>
                </div>

                {/* Tarjeta 2 - Recarga de gas */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Recarga de gas</h3>
                  <p className="text-gray-600">Recarga de gas refrigerante R134a y R410a con equipos especializados.</p>
                </div>

                {/* Tarjeta 3 - Mantenimiento Preventivo */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mantenimiento Preventivo</h3>
                  <p className="text-gray-600">Mantenimiento preventivo completo del sistema de aire acondicionado para óptimo funcionamiento.</p>
                </div>

                {/* Tarjeta 4 - Cambio de Filtro Secador */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de Filtro Secador</h3>
                  <p className="text-gray-600">Reemplazo del filtro secador para eliminar humedad y contaminantes del sistema.</p>
                </div>

                {/* Tarjeta 5 - Cambio de Aceite de Compresor */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de Aceite de Compresor</h3>
                  <p className="text-gray-600">Cambio de aceite del compresor para mantener la lubricación adecuada del sistema.</p>
                </div>

                {/* Tarjeta 6 - Recarga del Sistema */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Recarga del Sistema</h3>
                  <p className="text-gray-600">Recarga completa del sistema con gas refrigerante de alta calidad y verificación de presión.</p>
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

            {/* Pricing Section */}
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-center mb-4">
                Precios de Aire Acondicionado en Loja
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-300 text-center mb-8">
                Calidad Garantizada al Mejor Precio
              </h3>
              <CardSpotlight className="h-auto w-full max-w-full" color="#00FF00">
                <div className="text-center h-full flex flex-col justify-center px-4 py-8">
                  <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
                  <p className="text-2xl font-bold relative z-20 mb-6 text-white">Recarga de Gas: Varía según el tipo de gas y la cantidad.</p>
                  <div className="text-neutral-200 relative z-20 mb-6">
                    <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
                      <li>Diagnóstico de presión y fugas del sistema.</li>
                      <li>Mano de obra especializada.</li>
                      <li>Uso de gas refrigerante de alta calidad.</li>
                      <li>Precios de reparación de componentes según evaluación.</li>
                    </ul>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-center mb-4">
              Taller de Aire Acondicionado en Loja
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00FF00] text-center mb-4">
              Expertos en Climatización Automotriz
            </h3>
            <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
              ¿Problemas con el aire acondicionado de tu vehículo? Nuestros técnicos certificados están listos para ayudarte con diagnóstico y reparación profesional en Loja.
            </p>
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
