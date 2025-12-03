"use client"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Header principal */}
      <div className="bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-2 py-3 min-h-[56px]">
        <div className="flex items-center justify-between w-full">
        {/* Primera fila - Logo, dirección y menú móvil */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo más pequeño */}
          <div className="flex-shrink-0">
            <div className="relative w-[90px] h-[30px] md:w-[140px] md:h-[50px]">
              <Image 
                src="/LOGO.png" 
                alt="Logo Car One" 
                fill
                sizes="(max-width: 768px) 90px, 140px"
                style={{objectFit: 'contain'}} 
                className="h-auto"
                priority
              />
            </div>
          </div>

          {/* Dirección en móvil - Texto más pequeño y sin recorte */}
          <div className="md:hidden text-center flex-1 min-w-0 px-1">
            <div className="text-white text-[10px] font-medium leading-tight">
              Av. California y Houston
            </div>
          </div>

          {/* Botón de reserva en móvil - Más compacto */}
          <div className="md:hidden flex-shrink-0">
            <a href="https://wa.me/593979606963" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-1.5 py-0.5 text-[10px] leading-none h-auto">
                Reserva tu Turno
              </Button>
            </a>
          </div>

          {/* Menú móvil */}
          <div className="flex items-center md:hidden ml-1">
            <MobileNav />
          </div>
        </div>
        
        {/* Información de contacto - Solo en pantallas pequeñas de escritorio */}
        <div className="hidden md:block lg:hidden ml-2 mr-4">
          <div className="text-white text-xs leading-tight">
            <div>Av. California y Houston</div>
            <div className="text-[#00FF00] font-medium">097 960 6963</div>
            <div className="text-gray-300 text-[11px]">Abierto 8:00 - 18:00</div>
          </div>
        </div>

        {/* Navegación y botón */}
        <div className="flex-1 flex items-center justify-end gap-2 md:gap-4 lg:gap-8">
          {/* Dirección y contacto - Solo en escritorio grande */}
          <div className="hidden lg:block text-right mr-2 lg:mr-6">
            <div className="text-white text-sm whitespace-nowrap">
              Av. California y Houston
              <span className="text-gray-400"> • Sector Parque Industrial</span>
            </div>
            <div className="flex items-center justify-end gap-2 text-sm">
              <a href="tel:+593979606963" className="text-[#00FF00] font-medium hover:underline whitespace-nowrap">
                097 960 6963
              </a>
              <span className="text-white">•</span>
              <span className="text-gray-300 whitespace-nowrap">Abierto 8:00 - 18:00</span>
            </div>
          </div>
          {/* Menú horizontal solo en escritorio */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-wrap justify-center">
            <a href="/" className="text-white hover:text-[#00FF00] transition-colors font-medium whitespace-nowrap">Home</a>
            <div className="relative group">
              <button className="text-white hover:text-[#00FF00] transition-colors font-medium flex items-center">
                Servicios
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/servicios/frenos" className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 transition-colors">Sistema de Frenos</a>
                  <a href="/servicios/suspension" className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 transition-colors">Sistema de Suspensión</a>
                  <a href="/servicios/mantenimiento-preventivo" className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 transition-colors">Mantenimiento Preventivo</a>
                  <a href="/servicios/sistema-de-direccion" className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 transition-colors">Sistema de Dirección</a>
                  <a href="/servicios/sistema-de-transmision" className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 transition-colors">Sistema de Transmisión</a>
                  <a href="/servicios/sistema-aire-acondicionado" className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 transition-colors">Sistema de Aire Acondicionado</a>
                  <a href="/servicios/gestion-de-flotas" className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 transition-colors">Gestión de Flotas</a>
                </div>
              </div>
            </div>
            <a href="/servicios/autopartes-y-lubricantes" className="text-[#00FF00] hover:text-[#00CC00] transition-colors font-medium whitespace-nowrap font-bold">Autopartes y Lubricantes</a>
            <a href="/blog" className="text-white hover:text-[#00FF00] transition-colors font-medium whitespace-nowrap">Blog</a>
            <a href="/contacto" className="text-white hover:text-[#00FF00] transition-colors font-medium whitespace-nowrap">Contacto</a>
          </nav>
          {/* Botón solo en escritorio */}
          <a href="https://wa.me/593979606963" target="_blank" rel="noopener noreferrer" className="hidden md:block flex-shrink-0">
            <Button className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-2 py-1 text-xs sm:text-base whitespace-nowrap">
              Reserva tu Turno
            </Button>
          </a>
          {/* Menú hamburguesa solo en móvil (el botón se movió arriba) */}
          <div className="hidden md:flex items-center gap-2">
            <MobileNav />
          </div>
        </div>
        </div>
      </div>
      </div>
    </header>
  )
} 