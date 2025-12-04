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

export default function SistemaDireccionPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/Sistema de direccion/image.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Reparación de <span className="text-[#00FF00]">Sistema de Dirección</span></span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 normal-case font-normal">Mantenimiento y Reparación en Loja</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Reparación de dirección hidráulica y mecánica en Loja. Recupera el control preciso de tu vehículo con garantía.
          </p>
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Reserva tu turno
          </Button>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                  Taller Especializado en Sistemas de Dirección
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                  Soluciones Profesionales para tu Vehículo en Loja
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Car One Tecnicentro ofrecemos servicios especializados en reparación y mantenimiento de sistemas de dirección hidráulica y mecánica. Nuestro equipo de expertos cuenta con la tecnología y experiencia necesarias para devolverle a tu vehículo la precisión y suavidad al volante.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00FF00] flex-shrink-0" />
                    <span className="text-gray-700">Diagnóstico computarizado del sistema</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00FF00] flex-shrink-0" />
                    <span className="text-gray-700">Repuestos originales y de calidad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00FF00] flex-shrink-0" />
                    <span className="text-gray-700">Garantía en todos nuestros trabajos</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/Sistema de direccion/image.jpg"
                        alt="Sistema de dirección profesional"
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

      {/* ¿Por Qué Es Vital un Sistema de Dirección en Óptimas Condiciones? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
              Importancia del Sistema de Dirección en tu Vehículo
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-12">
              Mantén el Control Total y la Seguridad en Cada Recorrido
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#00FF00]/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#00FF00] rounded-full"></div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">Seguridad Activa</h3>
                <p className="text-gray-700 text-center leading-relaxed">Te permite mantener el control del vehículo en todo momento, evitando accidentes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#00FF00]/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#00FF00] rounded-full"></div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">Conducción Confortable</h3>
                <p className="text-gray-700 text-center leading-relaxed">Reduce el esfuerzo al girar el volante y minimiza vibraciones indeseadas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#00FF00]/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#00FF00] rounded-full"></div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">Desgaste Uniforme</h3>
                <p className="text-gray-700 text-center leading-relaxed">Un sistema de dirección alineado previene el desgaste prematuro e irregular de las llantas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#00FF00]/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#00FF00] rounded-full"></div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">Rendimiento Óptimo</h3>
                <p className="text-gray-700 text-center leading-relaxed">Mejora la maniobrabilidad y la respuesta del vehículo en carretera.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios en Sistema de Dirección Incluyen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
              Servicios de Sistema de Dirección en Loja
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-12">
              Soluciones Integrales para el Control de tu Vehículo
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de Cremallera</h3>
                <p className="text-gray-600">Reemplazo de este componente clave para una dirección precisa.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Articulaciones y Terminales</h3>
                <p className="text-gray-600">Sustitución de piezas desgastadas que afectan la estabilidad y el control.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de Guardapolvos</h3>
                <p className="text-gray-600">Protege las piezas móviles del sistema de dirección de la suciedad y el agua.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aceite Hidráulico</h3>
                <p className="text-gray-600">Asegura el correcto funcionamiento de la dirección asistida y previene el sobrecalentamiento.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bomba de Dirección</h3>
                <p className="text-gray-600">Diagnóstico y reparación para garantizar la asistencia adecuada al girar.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-xs">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Alineación</h3>
                <p className="text-gray-600">Ajuste preciso de los ángulos de las ruedas tras cualquier intervención en la dirección.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precio del Servicio de Dirección en Loja */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-center mb-4">
            Precios de Reparación de Dirección en Loja
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300 text-center mb-8">
            Servicio Profesional con Garantía de Calidad
          </h3>
          <CardSpotlight className="h-auto w-full max-w-full" color="#00FF00">
            <div className="text-center h-full flex flex-col justify-center px-4 py-8">
              <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
              <p className="text-2xl font-bold relative z-20 mb-6 text-white">Diagnóstico completo del sistema de dirección.</p>
              <div className="text-neutral-200 relative z-20 mb-6">
                <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
                  <li>Mano de obra especializada para el cambio o reparación.</li>
                  <li>Uso de repuestos de calidad garantizada.</li>
                  <li>Revisión final de la alineación tras la intervención.</li>
                </ul>
              </div>
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
              Taller de Dirección en Loja
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00FF00] text-center mb-4">
              Agenda tu Diagnóstico sin Costo
            </h3>
            <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
              Expertos en reparación de dirección en Loja. Servicio profesional con garantía para tu vehículo.
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