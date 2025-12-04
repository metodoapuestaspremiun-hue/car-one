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

export default function LubricantesClient() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/cambio_aceite.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight uppercase">
            Cambio de Aceite y Filtro
            <span className="block text-[#00FF00]">Potencia y Protección para tu Motor en Loja</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            En Car One Tecnicentro, brindamos una amplia variedad de servicios especializados para mantener tu vehículo en perfectas condiciones y garantizar su rendimiento y durabilidad.
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

      {/* Nuestro Servicio de Cambio de Aceite Incluye */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black uppercase text-center">Nuestro Servicio de Cambio de Aceite Incluye:</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            Contamos con la representación de marcas TOP en el mercado nacional como son MANNOL, SHELL, AMALIE, entre otras con el fin de mantener tu motor siempre al 100%.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <Shield className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-12 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Aceites de Primera Calidad</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Utilizamos lubricantes sintéticos, semi-sintéticos y minerales de marcas líderes como Mobil, Castrol y Shell, adecuados para cada tipo de motor y vehículo.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-12 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Filtros Originales y de Alta Eficiencia</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Reemplazamos el filtro de aceite con uno de calidad que capture eficazmente las impurezas, manteniendo el aceite limpio por más tiempo.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <Wrench className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-12 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Revisión de Niveles de Fluidos</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Verificamos y rellenamos los niveles de otros fluidos esenciales (refrigerante, frenos, dirección hidráulica) para un rendimiento integral.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-12 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Diagnóstico Automotriz Básico</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Una revisión visual rápida para detectar cualquier otra necesidad de mantenimiento.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <Phone className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-12 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Asesoría Personalizada</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Te orientamos sobre el tipo de lubricante ideal para tu motor y el intervalo de cambio recomendado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios de un Cambio de Aceite Regular */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black uppercase text-center">Beneficios de un Cambio de Aceite Regular:</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-green-50 to-white border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <Shield className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-180 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Mayor Vida Útil del Motor</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Reduce la fricción y el desgaste de los componentes internos.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-blue-50 to-white border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <Clock className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-180 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Mejor Rendimiento</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Un motor lubricado correctamente funciona de manera más suave y eficiente.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-yellow-50 to-white border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <Wrench className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-180 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Ahorro de Combustible</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Menos fricción significa menor consumo de gasolina.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-purple-50 to-white border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-180 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Reducción de Emisiones</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Un motor limpio quema combustible de manera más eficiente.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-red-50 to-white border-2 border-transparent hover:border-[#00FF00] relative overflow-hidden md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <Shield className="w-10 h-10 text-[#00FF00] mr-4 group-hover:rotate-180 transition-transform duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00FF00] transition-colors duration-300">Prevención de Averías Costosas</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Evita la acumulación de lodos y depósitos que pueden dañar el motor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Precio del Servicio de Lubricantes en Loja</h2>
          <CardSpotlight className="h-auto w-full max-w-full" color="#00FF00">
            <div className="text-center h-full flex flex-col justify-center px-4 py-8">
              <p className="text-5xl font-bold relative z-20 text-[#00FF00] mb-4">Desde $XX</p>
              <p className="text-2xl font-bold relative z-20 mb-6 text-white">Incluye aceite premium y filtro original.</p>
              <div className="text-neutral-200 relative z-20 mb-6">
                <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
                  <li>Aceite de motor de la mejor calidad.</li>
                  <li>Filtro de aceite original o equivalente de alto rendimiento.</li>
                  <li>Revisión completa de niveles de fluidos.</li>
                  <li>Diagnóstico básico del estado general del motor.</li>
                  <li>Asesoría técnica especializada.</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase">Contáctanos</h2>
            <p className="text-lg text-gray-300">Para agendar tu servicio o resolver cualquier duda, contáctanos:</p>
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
