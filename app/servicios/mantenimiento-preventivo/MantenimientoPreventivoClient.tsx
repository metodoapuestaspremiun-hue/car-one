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

export default function MantenimientoPreventivoClient() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/Mantenimiento preventivo/image.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Mantenimiento <span className="text-[#00FF00]">Preventivo</span> en Loja</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 normal-case font-normal">Protege tu Inversión y Alarga la Vida de tu Vehículo</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Mantenimiento preventivo en Loja. Evita fallas costosas con servicio programado según kilometraje. Repuestos de calidad garantizada.
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
                  Taller Especializado en Mantenimiento Preventivo
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                  Servicio Profesional para el Cuidado de tu Vehículo en Loja
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Car One Tecnicentro ofrecemos servicios de mantenimiento preventivo diseñados para cada etapa de tu vehículo. Nuestro programa de mantenimiento por kilometraje asegura que cada componente reciba la atención que necesita, cuando la necesita, previniendo fallas y alargando la vida útil de tu automóvil.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00FF00] flex-shrink-0" />
                    <span className="text-gray-700">Revisión completa según el kilometraje</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00FF00] flex-shrink-0" />
                    <span className="text-gray-700">Uso de repuestos originales y de calidad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00FF00] flex-shrink-0" />
                    <span className="text-gray-700">Garantía en todos nuestros servicios</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/Mantenimiento preventivo/image.jpg"
                        alt="Mantenimiento preventivo profesional"
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

      {/* ¿Por Qué es Crucial el Mantenimiento Preventivo? - Sección Centrada */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
              Beneficios del Mantenimiento Preventivo en Loja
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-12">
              Invierte en la Salud de tu Vehículo y Ahorra a Largo Plazo
            </h3>

            {/* Primera fila - 2 columnas con 2 cards cada una */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Primera columna */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Ahorro a Largo Plazo</h3>
                  <p className="text-gray-700">Evita reparaciones costosas al identificar problemas antes de que se agraven.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Mayor Seguridad</h3>
                  <p className="text-gray-700">Componentes revisados y en buen estado minimizan el riesgo de fallas inesperadas.</p>
                </div>
              </div>

              {/* Segunda columna */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Rendimiento Óptimo</h3>
                  <p className="text-gray-700">Tu vehículo mantendrá su eficiencia de combustible y potencia original.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Prolonga la Vida Útil</h3>
                  <p className="text-gray-700">Un mantenimiento adecuado protege el motor y los sistemas vitales de tu auto.</p>
                </div>
              </div>
            </div>

            {/* Card centrada */}
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 max-w-md w-full">
                <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">Valor de Reventa</h3>
                <p className="text-gray-700 text-center">Un historial de mantenimiento completo aumenta el valor de tu vehículo en el mercado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Específicos de Mantenimiento Preventivo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
              Servicios de Mantenimiento Preventivo en Loja
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-12">
              Soluciones Completas para el Cuidado de tu Vehículo
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tarjeta 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de Aceite Motor</h3>
                <p className="text-gray-600">Cambio completo de aceite de motor con filtro incluido. Utilizamos aceites de alta calidad según especificaciones del fabricante.</p>
              </div>

              {/* Tarjeta 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de Filtro de Aire Motor</h3>
                <p className="text-gray-600">Reemplazo del filtro de aire del motor para garantizar una combustión óptima y proteger el motor de impurezas.</p>
              </div>

              {/* Tarjeta 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de Filtro de Aire Cabina</h3>
                <p className="text-gray-600">Sustitución del filtro de aire acondicionado para mantener un ambiente saludable dentro del vehículo.</p>
              </div>

              {/* Tarjeta 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio Filtro Combustible</h3>
                <p className="text-gray-600">Reemplazo del filtro de combustible para proteger el sistema de inyección y garantizar un flujo limpio de combustible.</p>
              </div>

              {/* Tarjeta 5 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ABC de Frenos</h3>
                <p className="text-gray-600">Revisión completa del sistema de frenos: pastillas, discos, líquido de frenos y calibración del sistema.</p>
              </div>

              {/* Tarjeta 6 - Limpieza de Inyectores */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limpieza de Inyectores</h3>
                <p className="text-gray-600">Limpieza profesional de inyectores para optimizar la pulverización del combustible y mejorar el rendimiento del motor.</p>
              </div>

              {/* Tarjeta 7 - Revisión de Niveles de Fluidos */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center mx-auto sm:mx-0">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Revisión de Niveles de Fluidos</h3>
                <p className="text-gray-600">Chequeo y relleno de refrigerante, líquido de dirección, frenos y otros fluidos esenciales del vehículo.</p>
              </div>

              {/* Tarjeta 8 - Inspección General */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center mx-auto sm:mx-0">
                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inspección de puntos críticos</h3>
                <p className="text-gray-600">Revisión completa de luces, neumáticos, correas, mangueras y batería para detectar posibles problemas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precio del Mantenimiento Preventivo en Loja */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-center mb-4">
            Precios de Mantenimiento Preventivo en Loja
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300 text-center mb-8">
            Inversión Inteligente para la Larga Vida de tu Vehículo
          </h3>
          <CardSpotlight className="h-auto w-full max-w-full" color="#00FF00">
            <div className="text-center h-full flex flex-col justify-center px-4 py-8">
              <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
              <p className="text-2xl font-bold relative z-20 mb-6 text-white">Servicio completo según el kilometraje recomendado por el fabricante.</p>
              <div className="text-neutral-200 relative z-20 mb-6">
                <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
                  <li>Utilización de repuestos y fluidos de alta calidad.</li>
                  <li>Diagnóstico general del estado de tu vehículo.</li>
                  <li>Asesoría personalizada sobre futuras necesidades de mantenimiento.</li>
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
              Taller de Mantenimiento Preventivo en Loja
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00FF00] text-center mb-4">
              Agenda tu Cita de Mantenimiento Hoy Mismo
            </h3>
            <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
              Visita nuestro taller especializado en mantenimiento preventivo en Loja. Nuestro equipo de expertos está listo para atenderte con el mejor servicio para tu vehículo.
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