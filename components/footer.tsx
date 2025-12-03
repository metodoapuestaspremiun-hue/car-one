import { MapPin, Phone, Mail, Home, BookOpen, Mail as ContactIcon } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <div className="bg-black text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-6">
        {/* Navigation */}
        <div className="min-w-[120px]">
          <h3 className="text-base font-semibold mb-2 text-[#00FF00]">Navegación</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="flex items-center space-x-1 hover:text-[#00FF00] transition-colors"><Home size={14} /> <span>Inicio</span></Link></li>
            <li><Link href="/blog" className="flex items-center space-x-1 hover:text-[#00FF00] transition-colors"><BookOpen size={14} /> <span>Blog</span></Link></li>
            <li><Link href="/contacto" className="flex items-center space-x-1 hover:text-[#00FF00] transition-colors"><ContactIcon size={14} /> <span>Contacto</span></Link></li>
          </ul>
        </div>
        
        {/* Services - Column 1 */}
        <div className="min-w-[160px]">
          <h3 className="text-base font-semibold mb-2 text-[#00FF00]">Servicios</h3>
          <ul className="space-y-1 text-xs">
            <li><Link href="/servicios/frenos" className="hover:text-[#00FF00] transition-colors">Sistema de Frenos</Link></li>
            <li><Link href="/servicios/suspension" className="hover:text-[#00FF00] transition-colors">Sistema de Suspensión</Link></li>
            <li><Link href="/servicios/mantenimiento-preventivo" className="hover:text-[#00FF00] transition-colors">Mantenimiento Preventivo</Link></li>
            <li><Link href="/servicios/sistema-de-direccion" className="hover:text-[#00FF00] transition-colors">Sistema de Dirección</Link></li>
          </ul>
        </div>
        
        {/* Services - Column 2 */}
        <div className="min-w-[180px]">
          <h3 className="invisible text-base font-semibold mb-2">Servicios</h3>
          <ul className="space-y-1 text-xs">
            <li><Link href="/servicios/sistema-de-transmision" className="hover:text-[#00FF00] transition-colors">Sistema de Transmisión</Link></li>
            <li><Link href="/servicios/sistema-aire-acondicionado" className="hover:text-[#00FF00] transition-colors">Sistema de Aire Acondicionado</Link></li>
            <li><Link href="/servicios/gestion-de-flotas" className="hover:text-[#00FF00] transition-colors">Gestión de Flotas</Link></li>
          </ul>
        </div>
        
        {/* Business Hours */}
        <div className="min-w-[120px]">
          <h3 className="text-base font-semibold mb-2 text-[#00FF00]">Horario</h3>
          <ul className="space-y-1 text-xs">
            <li className="flex justify-between">
              <span>Lun-Vie:</span>
              <span>8-18h</span>
            </li>
            <li className="flex justify-between">
              <span>Sábado:</span>
              <span>9-14h</span>
            </li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="min-w-[200px]">
          <h3 className="text-base font-semibold mb-2 text-[#00FF00]">Contacto</h3>
          <ul className="space-y-1 text-xs">
            <li className="flex items-start space-x-1">
              <MapPin className="flex-shrink-0 mt-0.5 text-[#00FF00]" size={14} />
              <span>Av. California y Houston, Loja</span>
            </li>
            <li className="flex items-center space-x-1">
              <Phone className="text-[#00FF00]" size={14} />
              <a href="tel:+593979606963" className="hover:text-[#00FF00] transition-colors">097 960 6963</a>
            </li>
            <li className="flex items-center space-x-1">
              <Mail className="text-[#00FF00]" size={14} />
              <a href="mailto:asesor.servicio.carone@gmail.com" className="hover:text-[#00FF00] transition-colors truncate">asesor.servicio.carone@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-800 text-center text-gray-400 text-xs">
        <p>Diseñado por <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FF00] transition-colors underline">Cesar Reyes</a> | Car One Tecnicentro</p>
      </div>
    </div>
  );
}
