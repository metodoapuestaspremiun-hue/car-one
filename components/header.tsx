"use client"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"

import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Header principal */}
      <div className="bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-2 py-3 min-h-[56px]">
          <div className="flex items-center justify-between w-full">
            {/* Primera fila - Logo, dirección y menú móvil */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              {/* Logo */}
              <div className="flex-shrink-0 mr-2 lg:mr-0">
                <Link href="/" className="block relative w-[110px] h-[40px] lg:w-[170px] lg:h-[70px]">
                  <Image
                    src="/LOGO-v2.png"
                    alt="Logo Car One"
                    fill
                    sizes="(max-width: 1024px) 110px, 170px"
                    style={{ objectFit: 'contain' }}
                    className="h-auto"
                    priority
                  />
                </Link>
              </div>

              {/* Dirección en móvil/tablet - Texto pequeño */}
              <div className="lg:hidden text-center flex-1 min-w-0 px-1">
                <div className="text-white text-[10px] sm:text-xs font-medium leading-tight truncate">
                  Av. California y Houston
                </div>
              </div>

              {/* Botón de reserva en móvil/tablet - Más compacto */}
              <div className="lg:hidden flex-shrink-0 mx-1">
                <a href="https://wa.me/593979606963" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-2 py-1 text-[10px] sm:text-xs leading-none h-auto whitespace-nowrap">
                    Reserva tu Turno
                  </Button>
                </a>
              </div>

              {/* Menú hamburguesa (Móvil y Tablet) */}
              <div className="flex items-center lg:hidden ml-1">
                <MobileNav />
              </div>
            </div>

            {/* Navegación y botón (Solo Desktop Grande) */}
            <div className="hidden lg:flex flex-1 items-center justify-end gap-4 xl:gap-8">
              {/* Dirección y contacto */}
              <div className="text-right mr-2 xl:mr-6">
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

              {/* Menú horizontal */}
              <nav className="flex items-center space-x-4 xl:space-x-8 flex-wrap justify-center">
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

              {/* Botón Desktop */}
              <a href="https://wa.me/593979606963" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <Button className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-4 py-2 text-base whitespace-nowrap">
                  Reserva tu Turno
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 