"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Phone,
  MapPin,
  Mail,
  CheckCircle,
  Shield,
  Users,
  Star,
  Wrench,
  Car,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef, type TouchEvent } from "react"
import Carousel from "@/components/ui/carousel"
import { MobileNav } from "@/components/mobile-nav"
import { Header } from "@/components/header"
import { useForm } from "react-hook-form"
import { createWhatsAppHandler } from "@/lib/whatsapp"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentGuarantee, setCurrentGuarantee] = useState(0)
  const [currentService, setCurrentService] = useState(0)
  const [currentValue, setCurrentValue] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Form handling
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmitContact = async (data: any) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.problem,
          message: `Consulta desde la página principal: ${data.problem}`
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Error de conexión. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Refs para los sliders
  const guaranteeSliderRef = useRef<HTMLDivElement>(null)
  const testimonialSliderRef = useRef<HTMLDivElement>(null)
  const serviceSliderRef = useRef<HTMLDivElement>(null)

  // Variables para el manejo de touch
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const images = [
    { src: "/images/testimonio_2.jpg", alt: "Taller Car One - Vista general" },
    { src: "/images/testimonio_3.jpg", alt: "Reparación de motor Honda" },
    { src: "/images/taller.jpg", alt: "Instalaciones del taller" },
    { src: "/images/pastillas_frenos.jpg", alt: "Cambio de pastillas de frenos" },
    { src: "/images/cambio_amortiguador.jpg", alt: "Reparación de suspensión y amortiguadores" },
    { src: "/images/cambio_aceite.jpg", alt: "Cambio de aceite y lubricantes" },
    { src: "/images/Enderezado_pintura.webp", alt: "Enderezado y pintura de carrocería" },
    { src: "/images/cambio_neumaticos.jpeg", alt: "Cambio de neumáticos" },
    { src: "/images/test_bateria.jpg", alt: "Prueba y cambio de baterías" },
  ]

  const services = [
    {
      title: "Frenos: Tu Seguridad es Nuestra Prioridad",
      description: "En Car One Tecnicentro somos el taller automotriz Loja especializado en reparación de frenos Loja. Garantizamos un sistema de frenos en perfecto estado para tu seguridad. Si buscas taller de frenos en Loja, cambio de pastillas de freno Loja o mantenimiento de frenos, somos tu mejor opción de mecánico de confianza en Loja.",
      price: "$18",
      image: "/images/pastillas_frenos.jpg",
    },
    {
      title: "Suspensión, Alineación y Balanceo: Confort y Estabilidad",
      description: "¿Tu carro vibra o se va de lado? Nuestro tecnicentro en Loja ofrece servicio de suspensión en Loja, alineación y balanceo Loja, y cambio de amortiguadores Loja. Somos taller de suspensión en Loja y expertos en alineación y balanceo cerca de ti.",
      price: "$90",
      image: "/images/cambio_amortiguador.jpg",
    },
    {
      title: "Lubricantes: Protección para tu Motor",
      description: "¿Buscas cambio de aceite Loja? Realizamos cambio de aceite y filtro Loja, lubricantes para carro en Loja y servicio de cambio de aceite express Loja. Consulta por precio cambio de aceite en Loja y promociones en nuestro taller mecánico en Loja.",
      price: "$40",
      image: "/images/cambio_aceite.jpg",
    },
    {
      title: "Enderezada y Pintura",
      description: "Especialistas en enderezada y pintura de autos Loja. Si necesitas taller de latonería y pintura en Loja, restauración de pintura automotriz o reparación de choques Loja, somos tu taller de carrocería en Loja de confianza.",
      price: "$600",
      image: "/images/Enderezado_pintura.webp",
    },
    {
      title: "Venta de Neumáticos",
      description: "Venta de neumáticos Loja, llantas nuevas en Loja y enllantaje y balanceo Loja. Somos distribuidor de neumáticos Loja y ofrecemos cambio de llantas a domicilio Loja y almacén de llantas en Loja.",
      price: "$120",
      image: "/images/cambio_neumaticos.jpeg",
    },
    {
      title: "Venta de Baterías",
      description: "Venta de baterías para carro Loja, baterías Bosch en Loja y cambio de batería a domicilio Loja. Revisión de batería de carro gratis y garantía de baterías para carro en nuestro tecnicentro en Loja.",
      price: "$118",
      image: "/images/test_bateria.jpg",
    },
  ]

  const testimonials = [
    {
      name: "Andrés Jiménez",
      title: "Atención inmediata y excelente servicio",
      content:
        "Atención inmediata, buen trato y excelente servicio con productos de calidad... ¡Totalmente recomendado!",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Jose Gonzalez",
      title: "Eficiencia y rapidez inigualables",
      content:
        "Excelente... me ayudaron con el cambio de las pastillas de mi vehículo de forma inmediata. Un servicio que valoro mucho.",
      image: "/images/testimonio_2.jpg",
    },
    {
      name: "María Fernanda C.",
      title: "Mi auto como nuevo, ¡sin preocupaciones!",
      content:
        "Siempre llevo mi carro a Car One. Son honestos, rápidos y el trabajo es impecable. ¡Mi mejor elección para el mantenimiento!",
      image: "/images/testimonio_3.jpg",
    },
  ]

  const guarantees = [
    {
      title: "Garantía de Satisfacción 100%",
      content:
        "Nos comprometemos con la excelencia. Si no estás completamente satisfecho con nuestro trabajo, haremos todo lo posible para corregirlo.",
    },
    {
      title: "Repuestos de Calidad Comprobada",
      content:
        "Utilizamos solo repuestos de alta calidad que cumplen con los estándares de la industria, asegurando la durabilidad y el rendimiento óptimo de cada reparación.",
    },
    {
      title: "Atención Profesional y Transparente",
      content:
        "Desde el diagnóstico inicial hasta la entrega de tu vehículo, recibirás un trato amable, claro y honesto. Te explicaremos cada proceso y el costo asociado.",
    },
    {
      title: "Experiencia y Conocimiento Técnico",
      content:
        "Nuestro equipo cuenta con años de experiencia en el sector automotriz, capacitado para diagnosticar y resolver cualquier problema mecánico con precisión.",
    },
    {
      title: "Tecnología de Vanguardia",
      content:
        "Utilizamos equipos modernos y herramientas especializadas que nos permiten ofrecer diagnósticos precisos y reparaciones eficientes en menor tiempo.",
    },
    {
      title: "Servicio Post-Venta Excepcional",
      content:
        "Nuestro compromiso continúa después de la reparación. Ofrecemos seguimiento y soporte para asegurar que tu vehículo funcione perfectamente.",
    },
  ]

  // Carousel data for pricing section
  const pricingSlideData = [
    {
      title: "Servicios de Calidad",
      button: "Ver Todos los Servicios",
      src: "/images/taller.jpg",
    },
    {
      title: "Precios Transparentes",
      button: "Consultar Precios",
      src: "/images/testimonio_2.jpg",
    },
    {
      title: "Experiencia Profesional",
      button: "Conocer Más",
      src: "/images/testimonio_3.jpg",
    },
    {
      title: "Garantía Asegurada",
      button: "Reservar Turno",
      src: "/images/pastillas_frenos.jpg",
    },
  ]

  const valores = [
    {
      title: "Compromiso con la calidad",
      content: "En Car One Tecnicentro, nos dedicamos a ofrecer servicios de la más alta calidad para garantizar la seguridad, el rendimiento y la durabilidad de tu vehículo."
    },
    {
      title: "Atención personalizada",
      content: "Cada cliente es único. Nos esforzamos por entender tus necesidades y brindarte soluciones adaptadas, con asesoramiento honesto y profesional."
    },
    {
      title: "Honestidad y transparencia",
      content: "Valoramos la confianza que depositas en nosotros. Por eso, actuamos con integridad, ofreciendo información clara y precios justos en cada servicio."
    },
    {
      title: "Innovación y tecnología",
      content: "Utilizamos las últimas herramientas y técnicas del sector para diagnósticos precisos y reparaciones eficientes, asegurando resultados duraderos."
    },
    {
      title: "Responsabilidad ambiental",
      content: "Nos comprometemos a cuidar el medio ambiente mediante prácticas sostenibles y responsables en cada uno de nuestros procesos."
    },
    {
      title: "Satisfacción del cliente",
      content: "Tu satisfacción es nuestra prioridad. Trabajamos con pasión para que vuelvas a confiar en nosotros y disfrutes de un vehículo en perfectas condiciones."
    }
  ]

  // Funciones para manejar eventos táctiles
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEndGuarantee = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentGuarantee((prev) => (prev + 1) % guarantees.length)
    }
    if (touchStart - touchEnd < -75) {
      setCurrentGuarantee((prev) => (prev - 1 + guarantees.length) % guarantees.length)
    }
  }

  const handleTouchEndTestimonial = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }
    if (touchStart - touchEnd < -75) {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  const handleTouchEndService = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentService((prev) => (prev + 1) % services.length)
    }
    if (touchStart - touchEnd < -75) {
      setCurrentService((prev) => (prev - 1 + services.length) % services.length)
    }
  }

  const handleTouchEndLightbox = () => {
    if (touchStart - touchEnd > 75) {
      nextImage()
    }
    if (touchStart - touchEnd < -75) {
      prevImage()
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])



  const openLightbox = (index: number) => {
    setLightboxImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setLightboxImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setLightboxImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length)
  }

  const nextValue = () => {
    setCurrentValue((prev) => (prev + 1) % valores.length)
  }

  const prevValue = () => {
    setCurrentValue((prev) => (prev - 1 + valores.length) % valores.length)
  }

  const nextGuarantee = () => {
    setCurrentGuarantee((prev) => (prev + 1) % guarantees.length)
  }

  const prevGuarantee = () => {
    setCurrentGuarantee((prev) => (prev - 1 + guarantees.length) % guarantees.length)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox()
      }
    }

    if (lightboxOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen])

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header - Estandarizado */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/taller.jpg')`,
        }}
        aria-label="Bienvenido a Car One - Taller de Mecánica Automotriz en Loja"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Mecánica Automotriz Profesional</span>
            <span className="block">en Loja - <span className="text-[#00FF00]">Car One</span></span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Taller mecánico en Loja con más de 20 años de experiencia. Especialistas en reparación de autos, mantenimiento preventivo y diagnóstico computarizado. Tu taller de confianza en Loja.
          </p>
          <Button
            onClick={createWhatsAppHandler()}
            size="lg"
            className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Reserva tu turno
          </Button>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">Mecánica Automotriz de Calidad en Loja</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
            En Car One nos enorgullece ofrecer servicios de mecánica automotriz profesional en Loja, con estándares de calidad que nos distinguen:
          </p>
          
          {/* Desktop Grid - unchanged */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valores.map((valor, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:rotate-1">
                <h3 className="text-xl font-semibold mb-2 text-[#00FF00]">{valor.title}</h3>
                <p className="text-gray-700">{valor.content}</p>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentValue * 100}%)` }}
              >
                {valores.map((valor, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2 text-[#00FF00]">{valor.title}</h3>
                      <p className="text-gray-700">{valor.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevValue}
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors"
                disabled={currentValue === 0}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <div className="flex space-x-2">
                {valores.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValue(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentValue === index ? "bg-[#00FF00]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextValue}
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors"
                disabled={currentValue >= valores.length - 1}
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-900 text-white" style={{ minHeight: "300px" }}>
        <div className="container mx-auto px-4 max-w-4xl text-center flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Servicio de Mecánica Automotriz en Loja</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#00FF00]">Tu Vehículo en las Mejores Manos</h3>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            En Car One entendemos la importancia de tu vehículo en tu vida diaria. Por eso ofrecemos servicios de mecánica automotriz integral en Loja, desde mantenimiento preventivo hasta reparaciones complejas. Nuestro compromiso es con la calidad, la transparencia y tu total satisfacción, utilizando repuestos de primera y tecnología de punta.
          </p>
        </div>
      </section>

      {/* How to Contract Services */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/testimonio_3.jpg')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 id="contratar-servicios" className="text-3xl md:text-4xl font-bold mb-4 text-white">Servicio de Mecánica Rápida en Loja</h2>
            <h3 className="text-2xl font-semibold mb-6 text-[#00FF00]">¿Necesitas Reparación o Mantenimiento?</h3>
            <p className="text-lg max-w-3xl mx-auto">
              En Car One hacemos que la reparación de tu vehículo sea rápida y sin complicaciones. Sigue estos sencillos pasos para agendar tu servicio de mecánica en Loja:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4 text-white">Agenda tu Servicio de Mecánica</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-[#00FF00] text-black">1</Badge>
                  <p>
                    <strong>Contáctanos:</strong> Envíanos un mensaje por WhatsApp o llena nuestro formulario con tus
                    datos y el problema de tu vehículo.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-[#00FF00] text-black">2</Badge>
                  <p>
                    <strong>Describe tu Necesidad:</strong> Cuéntanos qué servicio requieres (reparación de motor,
                    frenos, pintura, etc.) y la marca de tu vehículo.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-[#00FF00] text-black">3</Badge>
                  <p>
                    <strong>Confirma tu Cita:</strong> Nuestro equipo te contactará rápidamente para confirmar la fecha
                    y hora de tu visita, y si lo deseas, podrás pedir la primera consulta gratuita.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Solicita tu Diagnóstico Gratis</h3>
              <form onSubmit={handleSubmit(onSubmitContact)} className="space-y-4">
                <Input
                  placeholder="Nombre completo"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  {...register("name", { required: "Este campo es requerido" })}
                />
                <Input
                  placeholder="Teléfono"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  {...register("phone", { required: "Este campo es requerido" })}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  {...register("email", { required: "Este campo es requerido" })}
                />
                <Input
                  placeholder="Problema del vehículo"
                  className="bg-white/30 border-white/30 text-white placeholder:text-white/70"
                  {...register("problem", { required: "Este campo es requerido" })}
                />
                <Button type="submit" className="w-full bg-[#00FF00] hover:bg-[#00CC00] text-black" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>
                {submitStatus === 'success' && (
                  <p className="text-green-500 text-center mt-2">Mensaje enviado con éxito!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center mt-2">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* Guarantees Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Garantía en Servicios de Mecánica Automotriz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              En Car One Loja, respaldamos nuestro trabajo con garantías reales. Tu satisfacción es nuestra prioridad en cada servicio de mecánica, mantenimiento o reparación de vehículos.
            </p>
          </div>

          {/* Desktop Grid - unchanged */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="bg-[#00FF00]/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#00FF00] rounded-full"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 leading-tight">{guarantee.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm md:text-base leading-relaxed">{guarantee.content}</p>
                  <Button asChild className="bg-[#00FF00] text-black hover:bg-[#00CC00] w-full">
                    <a href="#contratar-servicios">Conocer Más</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentGuarantee * 100}%)` }}
              >
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white border border-gray-200 shadow-lg">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="bg-[#00FF00]/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <div className="w-8 h-8 bg-[#00FF00] rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-bold mb-4 text-gray-900 leading-tight">{guarantee.title}</h3>
                        <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">{guarantee.content}</p>
                        <Button asChild className="bg-[#00FF00] text-black hover:bg-[#00CC00] w-full">
                          <a href="#contratar-servicios">Conocer Más</a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevGuarantee}
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors"
                disabled={currentGuarantee === 0}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <div className="flex space-x-2">
                {guarantees.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGuarantee(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentGuarantee === index ? "bg-[#00FF00]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextGuarantee}
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors"
                disabled={currentGuarantee >= guarantees.length - 1}
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Clientes Satisfechos con Nuestro Servicio de Mecánica</h2>
            <h3 className="text-2xl font-semibold mb-6 text-[#00FF00]">Experiencias Reales en Nuestro Taller de Loja</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La confianza de nuestros clientes es nuestro mejor respaldo. Conoce lo que dicen quienes ya han experimentado nuestro servicio de mecánica profesional en Loja:
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2 text-gray-900">{testimonial.title}</h3>
                  <p className="text-gray-600">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div
              className="relative overflow-hidden"
              ref={testimonialSliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEndTestimonial}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border border-gray-200 bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mr-4 object-cover"
                          style={{ width: 'auto', height: 'auto' }}
                          />
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <h3 className="font-bold mb-2 text-gray-900">{testimonial.title}</h3>
                        <p className="text-gray-600">{testimonial.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? "bg-[#00FF00]" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Car One */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Taller Mecánico Especializado en Loja
              </h2>
              <h3 className="text-2xl font-semibold mb-6 text-[#00FF00]">¿Por Qué Somos tu Mejor Opción en Mecánica Automotriz?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <p className="text-lg">Más de 20 años de experiencia a tu servicio.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <p className="text-lg">Taller multimarcas: Expertos en todas las marcas de vehículos.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <p className="text-lg">Diagnóstico preciso y soluciones efectivas.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <p className="text-lg">Atención personalizada y transparente.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <p className="text-lg">Amplia gama de servicios: Desde mantenimiento hasta enderezada y pintura.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <p className="text-lg">Repuestos de calidad garantizada.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openLightbox(currentSlide)}
              >
                <div className="relative h-[300px] group">
                  <Image
                    src={images[currentSlide].src || "/placeholder.svg"}
                    alt={images[currentSlide].alt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentSlide(index)
                      }}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? "bg-[#00FF00]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEndLightbox}
        >
          {/* Close button - fixed at top right corner */}
          <button
            onClick={closeLightbox}
            className="fixed top-4 right-4 z-[60] bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            style={{ position: "fixed" }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation buttons */}
          <div className="w-full max-w-4xl relative">
            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-[55]"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-[55]"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image container */}
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-full max-w-full max-h-[70vh] flex items-center justify-center">
                <Image
                  src={images[lightboxImage].src || "/placeholder.svg"}
                  alt={images[lightboxImage].alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Image counter and title */}
          <div className="bg-black/70 text-white px-4 py-2 rounded-lg mt-4 text-center">
            <p className="text-sm font-medium">{images[lightboxImage].alt}</p>
            <p className="text-xs text-gray-300">
              {lightboxImage + 1} de {images.length}
            </p>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2 w-full max-w-4xl">
            <div className="flex space-x-2 px-4 overflow-x-auto pb-2 snap-x">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all snap-center ${
                    lightboxImage === index ? "border-[#00FF00]" : "border-white/30"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* FAQ Section with Enhanced Overlay */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/cambio-liquido.jpg')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Preguntas Frecuentes sobre la Reparación de Vehículos en Loja
            </h2>
            <p className="text-lg text-gray-200">
              ¿Tienes dudas sobre el cuidado de tu vehículo o la reparación de vehículos en Loja? Aquí respondemos a las
              preguntas más comunes para que tomes la mejor decisión.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white">
                  ¿Por qué es importante el mantenimiento preventivo para mi vehículo?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-200">
                  El mantenimiento preventivo, como los cambios de aceite y la revisión de frenos, es crucial para
                  evitar fallas mayores y costosas. Prolonga la vida útil de tu vehículo, asegura tu seguridad y
                  optimiza el rendimiento, previniendo problemas antes de que ocurran.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white">
                  ¿Ofrecen servicios de enderezada y pintura para vehículos de todas las marcas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-200">
                  Sí, en Car One Tecnicentro somos un taller multimarcas. Contamos con el equipo y la experiencia para
                  realizar trabajos de enderezada y pintura de alta calidad en vehículos de cualquier marca y modelo,
                  devolviéndole la estética original a tu auto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white">
                  ¿Cuánto tiempo tardan en realizar un cambio de aceite y filtro?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-200">
                  En Car One, entendemos la importancia de tu tiempo. Un cambio de aceite y filtro es un servicio rápido
                  que usualmente completamos en menos de una hora, siempre utilizando lubricantes y filtros de la mejor
                  calidad para el óptimo cuidado de tu motor.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white">
                  ¿Qué tipo de garantía ofrecen en sus reparaciones de motor?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-200">
                  Todas nuestras reparaciones de motor están respaldadas por nuestra garantía de satisfacción y el uso
                  de repuestos de calidad comprobada. Nuestro objetivo es que tengas total tranquilidad, sabiendo que tu
                  vehículo está en manos expertas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white">
                  ¿Por qué Car One es la mejor opción para la reparación de vehículos en Loja?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-200">
                  Con más de 20 años de experiencia, un equipo altamente calificado, atención transparente, precios
                  justos y una amplia gama de servicios especializados, Car One Tecnicentro es tu aliado de confianza
                  para cualquier necesidad de reparación y mantenimiento vehicular en Loja.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactanos" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contáctanos Directamente</h2>
            <p className="text-lg text-gray-300">
              ¿Listo para darle a tu vehículo el cuidado que se merece? Comunícate con nosotros hoy mismo.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Contact Info - Horizontal Layout */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                  <h4 className="font-semibold text-white mb-1">Correo Electrónico</h4>
                  <p className="text-gray-300 text-sm">asesor.servicio.carone@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
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
      </section>
    </div>
  )
}
