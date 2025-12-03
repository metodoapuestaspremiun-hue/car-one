import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="dL5MjVWtTqiqFw_fp79LSHvo5ufw5WLSC0VqsmKstBE" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Car One - Mecánica Automotriz en Loja | Taller Especializado" />
        <meta name="description" content="Taller de mecánica automotriz en Loja. Servicios profesionales de reparación, mantenimiento y diagnóstico para tu vehículo. Más de 20 años de experiencia." />
        <meta name="keywords" content="mecánica automotriz Loja, taller mecánico Loja, reparación de autos Loja, mantenimiento vehicular Loja, mecánica automotriz cerca de mí" />
        <meta name="author" content="Car One" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mecanicaautomotrizloja.com/" />
        <meta property="og:title" content="Car One - Mecánica Automotriz Profesional en Loja" />
        <meta property="og:description" content="Taller de mecánica automotriz en Loja. Servicios profesionales de reparación, mantenimiento y diagnóstico para tu vehículo." />
        <meta property="og:image" content="https://www.mecanicaautomotrizloja.com/images/taller.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mecanicaautomotrizloja.com/" />
        <meta property="twitter:title" content="Car One - Mecánica Automotriz Profesional en Loja" />
        <meta property="twitter:description" content="Taller de mecánica automotriz en Loja. Servicios profesionales de reparación, mantenimiento y diagnóstico para tu vehículo." />
        <meta property="twitter:image" content="https://www.mecanicaautomotrizloja.com/images/taller.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mecanicaautomotrizloja.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
