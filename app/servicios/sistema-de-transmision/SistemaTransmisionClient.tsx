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

export default function SistemaTransmisionPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/Sistema de Transmision/image.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Reparación de <span className="text-[#00FF00]">Transmisión</span></span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 normal-case font-normal">Mantenimiento Especializado en Loja</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Reparación de transmisiones automáticas y mecánicas en Loja. Servicio profesional con garantía en repuestos y mano de obra.
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

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">


            {/* ¿Por Qué Confiar en Nosotros para tu Transmisión? */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
                  Taller Especializado en Transmisiones
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
                  ¿Por Qué Somos Tu Mejor Opción en Loja?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg"><b>Técnicos Especializados:</b> Nuestro personal tiene amplia experiencia en el diagnóstico y reparación de todo tipo de transmisiones.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg"><b>Diagnóstico Preciso:</b> Identificamos la causa raíz de ruidos, vibraciones o problemas al cambiar de marcha.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg"><b>Repuestos de Calidad:</b> Utilizamos componentes originales o de marcas equivalentes que garantizan durabilidad y rendimiento.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg"><b>Tecnología y Herramientas Adecuadas:</b> Contamos con el equipo necesario para un servicio eficiente y preciso.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/Sistema de Transmision/image.jpg"
                        alt="Sistema de transmisión profesional"
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

      {/* Nuestros Servicios en Sistema de Transmisión Incluyen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
              Servicios de Transmisión en Loja
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-12">
              Soluciones Integrales para tu Sistema de Transmisión
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-[#00FF00]/30 transition-all duration-300">
                <div className="bg-[#00FF00]/20 w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#00FF00] rounded"></div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Cambio de Kit de Embrague</h3>
                <p className="text-gray-700 leading-relaxed">Reemplazo completo del sistema de embrague para un funcionamiento óptimo.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-[#00FF00]/30 transition-all duration-300">
                <div className="bg-[#00FF00]/20 w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#00FF00] rounded"></div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Cambio de Crucetas</h3>
                <p className="text-gray-700 leading-relaxed">Sustitución de crucetas desgastadas para eliminar vibraciones y ruidos.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-[#00FF00]/30 transition-all duration-300">
                <div className="bg-[#00FF00]/20 w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#00FF00] rounded"></div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Cambio de Rodamiento Centro Cardán</h3>
                <p className="text-gray-700 leading-relaxed">Reemplazo del rodamiento central para un funcionamiento suave del cardán.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-[#00FF00]/30 transition-all duration-300">
                <div className="bg-[#00FF00]/20 w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#00FF00] rounded"></div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Cambio de Ejes</h3>
                <p className="text-gray-700 leading-relaxed">Sustitución de ejes dañados para restaurar la tracción y potencia.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-[#00FF00]/30 transition-all duration-300">
                <div className="bg-[#00FF00]/20 w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#00FF00] rounded"></div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Cambio de Juntas Homocinéticas</h3>
                <p className="text-gray-700 leading-relaxed">Reemplazo de juntas para mantener la transmisión de potencia eficiente.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-[#00FF00]/30 transition-all duration-300">
                <div className="bg-[#00FF00]/20 w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#00FF00] rounded"></div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Cambio Líquido de Embrague</h3>
                <p className="text-gray-700 leading-relaxed">Renovación del líquido hidráulico para un embrague responsivo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precio del Servicio de Transmisión en Loja */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-center mb-4">
            Precios de Reparación de Transmisión en Loja
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300 text-center mb-8">
            Servicio Profesional con Garantía de Calidad
          </h3>
          <CardSpotlight className="h-auto w-full max-w-full" color="#00FF00">
            <div className="text-center h-full flex flex-col justify-center px-4 py-8">
              <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
              <p className="text-2xl font-bold relative z-20 mb-6 text-white">Servicio de Transmisión Profesional</p>
              <div className="text-neutral-200 relative z-20 mb-6">
                <p className="text-lg mb-4">Incluye:</p>
                <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
                  <li>Diagnóstico completo del sistema de transmisión</li>
                  <li>Mano de obra especializada y técnicos certificados</li>
                  <li>Repuestos de calidad garantizada</li>
                  <li>Pruebas de funcionamiento post-reparación</li>
                </ul>
              </div>
              <p className="text-neutral-300 relative z-20 text-sm mb-6">
                <span className="text-[#00FF00] font-bold">CAR ONE TECNICENTRO</span> - Expertos en sistema de transmisión con tecnología avanzada y garantía en el trabajo.
              </p>
              <Button
                onClick={openWhatsApp}
                className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-6 py-2 relative z-20 mx-auto"
              >
                Reserva tu turno
              </Button>
            </div>
          </CardSpotlight>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-center mb-4">
              Taller de Transmisión en Loja
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00FF00] text-center mb-4">
              Expertos en Reparación de Transmisiones
            </h3>
            <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
              ¿Problemas con la transmisión de tu vehículo? Nuestros técnicos certificados están listos para ayudarte con diagnóstico y reparación profesional en Loja.
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
