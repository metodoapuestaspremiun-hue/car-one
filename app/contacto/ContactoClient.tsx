"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactoClient() {
    const openWhatsApp = () => {
        window.open("https://wa.me/593979606963", "_blank")
    }
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/taller.jpg')`,
                    marginTop: '-80px',
                    paddingTop: '80px',
                }}
            >
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        <span className="block">Taller Mecánico en <span className="text-[#00FF00]">Loja</span></span>
                        <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 normal-case font-normal">Contacto y Ubicación</span>
                    </h1>
                    <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                        Expertos en reparación automotriz en Loja. Agenda tu cita por WhatsApp o visítanos en el sector Parque Industrial. Servicio profesional garantizado.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Solicita tu Cita</h2>
                                <h3 className="text-xl font-semibold text-gray-700 mb-6">O Escríbenos un Mensaje</h3>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FF00] focus:border-transparent"
                                                placeholder="Tu nombre"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FF00] focus:border-transparent"
                                                placeholder="tu@email.com"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FF00] focus:border-transparent"
                                                placeholder="Tu teléfono"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FF00] focus:border-transparent"
                                                placeholder="¿En qué podemos ayudarte?"
                                                required
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full bg-[#00FF00] hover:bg-[#00CC00] text-black font-medium py-2 px-4 rounded-md transition-colors"
                                            >
                                                Enviar Mensaje
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        Taller Mecánico en Loja
                                    </h2>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                                        Tu Centro de Servicio Automotriz de Confianza
                                    </h3>
                                    <div className="w-16 h-1 bg-[#00FF00] mb-6"></div>
                                    <p className="text-lg text-gray-600 mb-8">
                                        Visita nuestro taller en el sector Parque Industrial de Loja. Expertos en reparación automotriz con atención personalizada y repuestos de calidad. Tu vehículo en las mejores manos.
                                    </p>
                                </div>

                                {/* Contact Cards */}
                                <div className="space-y-6">
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <MapPin className="w-6 h-6 text-[#00FF00] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
                                                    <p className="text-gray-600">
                                                        Av. California y Houston. Sector Parque Industrial<br />
                                                        Loja, Ecuador
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <Phone className="w-6 h-6 text-[#00FF00] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                                                    <p className="text-gray-600 mb-2">0979606963</p>
                                                    <button
                                                        onClick={openWhatsApp}
                                                        className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-4 py-2 rounded text-sm font-medium transition-colors"
                                                    >
                                                        Chatear por WhatsApp
                                                    </button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <Mail className="w-6 h-6 text-[#00FF00] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                                                    <p className="text-gray-600">
                                                        asesor.servicio.carone@gmail.com
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-4">
                                                <Clock className="w-6 h-6 text-[#00FF00] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">Horarios de Atención</h3>
                                                    <p className="text-gray-600">
                                                        Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                                                        Sábados: 8:00 AM - 2:00 PM<br />
                                                        Domingos: Cerrado
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Map */}
                                <div className="mt-8">
                                    <h3 className="font-semibold text-gray-900 mb-4 text-2xl">Nuestra Ubicación en Loja</h3>
                                    <p className="text-gray-600 mb-4">Encuéntranos fácilmente en el sector Parque Industrial, cerca de las principales vías de la ciudad.</p>
                                    <div className="rounded-lg overflow-hidden w-full">
                                        <iframe
                                            src="https://maps.google.com/maps?q=-3.9457594997517993,-79.21839246088675&z=17&output=embed&iwloc=near"
                                            width="100%"
                                            height="450"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-lg shadow-xl"
                                            title="Ubicación de Car One"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Car One Tecnicentro. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    )
}
