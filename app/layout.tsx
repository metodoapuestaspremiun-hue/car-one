import type { Metadata } from 'next'
import './globals.css'
import { ChatWidget } from '@/components/chat-widget'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Head from 'next/head'
import { FloatingCard } from '@/components/floating-card'

export const metadata: Metadata = {
  title: 'Car One - Servicios Automotrices en Loja',
  description: 'Bienvenido a Car One, disfruta de Nuestros Servicios',
  generator: 'v0.dev',
  metadataBase: new URL('https://www.mecanicaautomotrizloja.com'),
  openGraph: {
    title: 'Car One - Servicios Automotrices en Loja',
    description: 'Bienvenido a Car One, disfruta de Nuestros Servicios',
    url: 'https://www.mecanicaautomotrizloja.com',
    siteName: 'Car One',
    images: [
      {
        url: '/imagen destacada.jpg',
        width: 1200,
        height: 630,
        alt: 'Car One - Servicios Automotrices',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car One - Servicios Automotrices en Loja',
    description: 'Bienvenido a Car One, disfruta de Nuestros Servicios',
    images: ['/imagen destacada.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="google-site-verification" content="dL5MjVWtTqiqFw_fp79LSHvo5ufw5WLSC0VqsmKstBE" />
      </Head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <FloatingCard />
      </body>
    </html>
  )
}
