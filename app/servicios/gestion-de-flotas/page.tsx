"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Mail, CheckCircle, Shield, Clock, Wrench, Settings, BarChart3, FileText, Zap, Users, DollarSign } from "lucide-react"
import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Header } from "@/components/header"
import { sendWhatsAppWithFeaturedImage } from "@/lib/whatsapp"

export default function GestionFlotasPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/Gestion de FLotas/Image.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Gestión de <span className="text-[#00FF00]">Flotas Vehiculares</span></span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 normal-case font-normal">Optimización Integral en Loja</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Soluciones profesionales de mantenimiento y gestión para flotas vehiculares en Loja. Reduzca costos operativos y maximice la disponibilidad de sus vehículos con nuestro servicio integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Solicitar Cotización
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
                <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
                  Gestión de Flotas en Loja
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-8">
                  Soluciones Especializadas para Empresas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Mantenimiento preventivo programado para flotas</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Planes personalizados según necesidades empresariales</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Atención prioritaria y servicio express</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-6 h-6 text-[#00FF00] flex-shrink-0" />
                    <p className="text-lg">Reportes detallados y control de costos</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CardContainer className="inter-var py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/images/Gestion de FLotas/Image.jpg"
                        alt="Gestión de flotas profesional"
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
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
                Servicios de Gestión de Flotas
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-12">
                Soluciones Completas para tu Empresa en Loja
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Tarjeta 1 - Software Automotriz */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Software Automotriz</h3>
                  <p className="text-gray-600">Herramienta tecnológica para el seguimiento y gestión de cada vehículo.</p>
                </div>
                
                {/* Tarjeta 2 - Programación de Mantenimientos */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Programación de Mantenimientos</h3>
                  <p className="text-gray-600">Agendamiento proactivo de servicios según kilometraje, horas de uso o tiempo.</p>
                </div>
                
                {/* Tarjeta 3 - Historial Detallado */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Historial Detallado</h3>
                  <p className="text-gray-600">Registro completo de todos los servicios realizados, repuestos utilizados y costos asociados.</p>
                </div>
                
                {/* Tarjeta 4 - Diagnóstico Integral */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico Integral</h3>
                  <p className="text-gray-600">Cubrimos todos los servicios mecánicos que tu flota pueda necesitar (frenos, suspensión, motor, transmisión, A/C, etc.).</p>
                </div>
                
                {/* Tarjeta 5 - Gestión de Neumáticos */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión de Neumáticos</h3>
                  <p className="text-gray-600">Control de su estado, reemplazo y rotación para optimizar su vida útil.</p>
                </div>
                
                {/* Tarjeta 6 - Reportes Personalizados */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reportes Personalizados</h3>
                  <p className="text-gray-600">Información clara sobre el rendimiento, costos y eficiencias de tu flota.</p>
                </div>
                
                {/* Tarjeta 7 - Atención Prioritaria */}
                <div className="w-full flex justify-center md:col-span-3">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center w-full max-w-md">
                    <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Atención Prioritaria</h3>
                    <p className="text-gray-600">Garantizamos un servicio ágil para minimizar el tiempo de inactividad de tus unidades.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por Qué Nuestra Gestión de Flotas es la Solución para tu Empresa? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center mb-4">
            Beneficios de Nuestro Servicio de Flotas
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-8">
            Soluciones Estratégicas para Empresas en Loja
          </h3>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            Optimizamos el rendimiento de tu flota vehicular con nuestro software de gestión especializado, reduciendo costos operativos y maximizando la disponibilidad de tus vehículos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 px-4">
            {/* Tarjeta 1 - Reducción de Costos */}
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Reducción de Costos</h3>
                </div>
                <p className="text-gray-600 mt-2 flex-grow">
                  Minimizamos fallas inesperadas y optimizamos los intervalos de mantenimiento.
                </p>
              </div>
            </div>
            
            {/* Tarjeta 2 - Mayor Disponibilidad */}
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mayor Disponibilidad</h3>
                </div>
                <p className="text-gray-600 mt-2 flex-grow">
                  Tus vehículos pasarán menos tiempo en el taller y más tiempo en la carretera.
                </p>
              </div>
            </div>
            
            {/* Tarjeta 3 - Control Total */}
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Control Total</h3>
                </div>
                <p className="text-gray-600 mt-2 flex-grow">
                  Nuestro software automotriz te brinda visibilidad sobre el historial, estado y costos de cada unidad.
                </p>
              </div>
            </div>
            
            {/* Tarjeta 4 - Mantenimiento Programado */}
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mantenimiento Programado</h3>
                </div>
                <p className="text-gray-600 mt-2 flex-grow">
                  Establecemos un plan de mantenimiento preventivo y correctivo ajustado a las necesidades de tu flota.
                </p>
              </div>
            </div>
            
            {/* Tarjeta 5 - Asesoría Especializada */}
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Asesoría Especializada</h3>
                </div>
                <p className="text-gray-600 mt-2 flex-grow">
                  Te brindamos recomendaciones para optimizar el rendimiento y la vida útil de tus vehículos.
                </p>
              </div>
            </div>
            
            {/* Tarjeta 6 - Facturación Centralizada */}
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Facturación Centralizada</h3>
                </div>
                <p className="text-gray-600 mt-2 flex-grow">
                  Simplifica la administración de tus gastos de mantenimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-center mb-4">
            Planes de Gestión de Flotas
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300 text-center mb-8">
            Soluciones a Medida para tu Empresa en Loja
          </h3>
          <CardSpotlight className="h-auto w-full max-w-full" color="#00FF00">
            <div className="text-center h-full flex flex-col justify-center px-4 py-8">
              <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
              <p className="text-2xl font-bold relative z-20 mb-6 text-white">Precios y Planes Personalizados (Solicita una consulta sin compromiso).</p>
              <div className="text-neutral-200 relative z-20 mb-6">
                <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
                  <li>Un plan de mantenimiento adaptado a la envergadura y tipo de tu flota.</li>
                  <li>Acceso a nuestra plataforma de gestión vehicular.</li>
                  <li>Atención técnica especializada para todos tus vehículos.</li>
                  <li>Control y ahorro garantizado en el mantenimiento de tu parque automotor.</li>
                </ul>
              </div>
              <Button
                onClick={() => window.open('https://wa.me/593979606963', '_blank')}
                className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-6 py-2 relative z-20 mx-auto"
              >
                Solicitar Cotización
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
              Contacta a Nuestros Expertos
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00FF00] text-center mb-4">
              Soluciones Personalizadas para tu Flota en Loja
            </h3>
            <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
              ¿Tienes una flota vehicular? Nuestros especialistas están listos para ofrecerte una cotización personalizada y optimizar el mantenimiento de tus vehículos.
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
