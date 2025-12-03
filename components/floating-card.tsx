'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingCard() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Don't render anything if the card is closed
  if (!isVisible) return null;

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on the close button
    if ((e.target as HTMLElement).closest('button, a')) {
      return;
    }
    window.location.href = '/servicios/gestion-de-flotas';
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`fixed z-50 cursor-pointer ${isMobile ? 'bottom-4 right-4 w-[calc(100%-2rem)]' : 'bottom-8 right-8 w-72'} bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
      <div className="relative">
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-1 hover:bg-gray-200 transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>
        
        {/* Card Content */}
        <div className="relative h-28 md:h-36 w-full">
          <Image
            src="/images/Gestion de FLotas/Image.jpg"
            alt="Gestión de Flotas"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <h3 className="absolute bottom-3 left-3 right-3 text-white text-base md:text-lg font-bold">
            ¡Te ayudamos con tu gestión de flota!
          </h3>
        </div>
        
        <div className="p-3">
          <p className="text-gray-700 text-xs mb-3">
            Optimiza el rendimiento de tu flota vehicular con nuestros servicios especializados.
          </p>
          <div className="flex justify-between items-center">
            <a 
              href="/servicios/gestion-de-flotas" 
              className="text-xs font-medium text-[#00FF00] hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Más información
            </a>
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://wa.me/593979606963', '_blank');
              }}
              className="bg-[#00FF00] hover:bg-[#00CC00] text-black text-xs font-medium"
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
