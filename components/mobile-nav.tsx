"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-white hover:text-[#00FF00] hover:bg-white/10"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <>
          {/* Fondo semitransparente para cerrar el menú al hacer click fuera */}
          <div
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          />
          {/* Drawer card panel */}
          <aside className="fixed top-6 right-4 h-[90vh] w-[90vw] max-w-xs bg-black/95 z-[1000] border border-gray-800 shadow-2xl flex flex-col animate-slide-in rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="text-white font-bold text-xl">
                <span className="text-[#00FF00]">CAR ONE</span> TECNICENTRO
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="text-white hover:text-[#00FF00] hover:bg-white/10"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links - Solo lo solicitado */}
            <nav className="flex-1 p-6 flex flex-col gap-2 overflow-y-auto">
              <a
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors font-bold text-lg"
              >
                Home
              </a>
              <a
                href="/servicios/autopartes-y-lubricantes"
                onClick={closeMenu}
                className="block px-4 py-3 text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors font-bold text-lg"
              >
                Autopartes y Lubricantes
              </a>

              <div className="px-4 pt-2 pb-1 text-[#00FF00] font-semibold text-base border-b border-[#00FF00] mb-1 select-none cursor-default">
                Servicios
              </div>
              <a href="/servicios/frenos" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Sistema de Frenos</a>
              <a href="/servicios/suspension" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Sistema de Suspensión</a>
              <a href="/servicios/lubricantes" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Almacén de Lubricantes</a>
              <a href="/servicios/mantenimiento-preventivo" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Mantenimiento Preventivo</a>
              <a href="/servicios/sistema-de-direccion" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Sistema de Dirección</a>
              <a href="/servicios/sistema-de-transmision" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Sistema de Transmisión</a>
              <a href="/servicios/sistema-aire-acondicionado" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Sistema de Aire Acondicionado</a>
              <a href="/servicios/almacen-repuestos-lubricantes" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Almacén de Repuestos y Lubricantes</a>
              <a href="/servicios/gestion-de-flotas" onClick={closeMenu} className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors text-base">Gestión de Flotas</a>

              <a
                href="/blog"
                onClick={closeMenu}
                className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors font-bold text-lg mt-2"
              >
                Blog
              </a>
              <a
                href="/contacto"
                onClick={closeMenu}
                className="block px-4 py-3 text-white hover:text-[#00FF00] hover:bg-gray-800/50 rounded-lg transition-colors font-bold text-lg"
              >
                Contacto
              </a>
            </nav>
          </aside>
          {/* Animación para el drawer */}
          <style jsx global>{`
            @keyframes slide-in {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slide-in 0.25s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </>
      )}
    </div>
  )
} 