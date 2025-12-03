import { ReactNode } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from './header';

interface BlogLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function BlogLayout({ 
  children, 
  title = 'Blog Automotriz Loja',
  description = 'Consejos y tips de mecánica automotriz Loja. Aprende a cuidar tu auto con expertos de Car One Tecnicentro.',
  showHeader = true,
  showFooter = true 
}: BlogLayoutProps) {
  const openWhatsApp = () => {
    window.open("https://wa.me/593979606963", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {showHeader && <Header />}

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/taller.jpg')`,
          marginTop: showHeader ? '-80px' : '0',
          paddingTop: showHeader ? '80px' : '0',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="block text-[#00FF00]">{title}</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>

      {/* Contact Section */}
      {showFooter && (
        <>
          <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes Dudas sobre tu Vehículo?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Nuestros expertos están listos para ayudarte. Contáctanos para recibir asesoría personalizada sobre el
                mantenimiento y cuidado de tu vehículo.
              </p>
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-[#00FF00] hover:bg-[#00CC00] text-black px-8 py-4 text-lg font-semibold"
              >
                Consulta con Nuestros Expertos
              </Button>
            </div>
          </section>

          <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contáctanos</h2>
                <p className="text-lg text-gray-300">¿Necesitas más información? Estamos aquí para ayudarte.</p>
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

          {/* Footer */}
          <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo_servicios.jpg"
                  alt="Car One Tecnicentro"
                  width={300}
                  height={100}
                  className="h-auto mx-auto mb-4"
                />
              </Link>
              <p className="text-gray-400">Diseñado por automatizotunegocio - cesarreyesjaramillo.com</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
