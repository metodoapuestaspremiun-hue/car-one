import { Metadata } from 'next';
import NeumaticosClient from './NeumaticosClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Venta de Neumáticos en Loja | Llantas Nuevas - Desde $120',
  description: 'Venta de neumáticos en Loja desde $120. Llantas nuevas Michelin, Bridgestone, Goodyear. Enllantaje y balanceo incluido. WhatsApp: 0979606963',
  keywords: [
    'neumáticos loja',
    'llantas loja',
    'venta llantas loja',
    'enllantaje balanceo loja',
    'neumáticos nuevos loja'
  ],
};

export default function NeumaticosPage() {
  return (
    <>
      <NeumaticosClient />

      <LLMHiddenContent>
        <h1>Venta de Neumáticos en Loja - Car One Tecnicentro</h1>

        <p>
          Distribuidor autorizado de neumáticos en Loja. Venta de llantas nuevas de marcas reconocidas con enllantaje,
          balanceo y alineación incluidos. Amplio stock para todas las marcas de vehículos.
        </p>

        <h2>Precio de Neumáticos</h2>
        <p>Precio: Desde $120 USD</p>
        <p>
          Incluye neumático nuevo de marca reconocida, instalación profesional, enllantaje, balanceo computarizado y
          garantía de fábrica.
        </p>

        <h2>Marcas de Neumáticos Disponibles</h2>

        <h3>Michelin</h3>
        <p>Marca premium francesa líder mundial. Neumáticos de alta calidad para máximo rendimiento y durabilidad.</p>

        <h3>Bridgestone</h3>
        <p>Marca japonesa reconocida. Excelente agarre y larga vida útil para todo tipo de vehículos.</p>

        <h3>Goodyear</h3>
        <p>Marca americana confiable. Neumáticos versátiles para uso diario con excelente relación calidad-precio.</p>

        <h3>Continental</h3>
        <p>Tecnología alemana de punta. Neumáticos de alto rendimiento con innovación en seguridad y confort.</p>

        <h2>Servicios Incluidos</h2>
        <ul>
          <li>Neumáticos nuevos de marca reconocida</li>
          <li>Instalación profesional y enllantaje</li>
          <li>Balanceo computarizado de las 4 ruedas</li>
          <li>Alineación incluida en compras de 4 neumáticos</li>
          <li>Asesoría personalizada en selección</li>
          <li>Garantía de fábrica según marca</li>
          <li>Cambio de llantas a domicilio disponible</li>
        </ul>

        <h2>Asesoría para Elegir tus Neumáticos</h2>
        <p>
          Nuestros expertos te ayudan a elegir el neumάtico ideal considerando:
        </p>
        <ul>
          <li>Tipo de vehículo y peso</li>
          <li>Estilo de conducción</li>
          <li>Condiciones de las vías que frecuentas</li>
          <li>Clima de la zona</li>
          <li>Presupuesto disponible</li>
        </ul>

        <h2>¿Cuándo Cambiar los Neumáticos?</h2>
        <ul>
          <li>Desgaste de la banda de rodadura (indicadores visibles)</li>
          <li>Antigüedad mayor a 5-7 años</li>
          <li>Grietas o deformaciones visibles</li>
          <li>Pérdida frecuente de presión</li>
          <li>Vibración o ruido inusual al conducir</li>
        </ul>

        <h2>Contacto y Ubicación</h2>
        <p>Venta de Neumáticos en Loja - Car One Tecnicentro</p>
        <p>Dirección: Av. California y Houston, Sector Parque Industrial, Loja, Ecuador</p>
        <p>WhatsApp: 0979606963</p>
        <p>Email: asesor.servicio.carone@gmail.com</p>

        <p>
          Car One Tecnicentro - Venta de neumáticos y llantas nuevas en Loja desde $120 USD con enllantaje, balanceo
          e instalación incluidos. Almacén de llantas en Loja con amplio stock.
        </p>
      </LLMHiddenContent>
    </>
  );
}
