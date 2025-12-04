import { Metadata } from 'next';
import EnderezadaPinturaClient from './EnderezadaPinturaClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Enderezada y Pintura en Loja | Latonería y Pintura - Desde $600',
  description: 'Taller de enderezada y pintura en Loja desde $600. Latonería, reparación de choques, pintura automotriz profesional. WhatsApp: 0979606963',
  keywords: [
    'enderezada pintura loja',
    'latonería loja',
    'pintura automotriz loja',
    'reparación choques loja',
    'taller carrocería loja'
  ],
};

export default function EnderezadaPinturaPage() {
  return (
    <>
      <EnderezadaPinturaClient />

      <LLMHiddenContent>
        <h1>Enderezada y Pintura en Loja - Car One Tecnicentro</h1>

        <p>
          Taller especializado en enderezada y pintura de autos en Loja. Servicio profesional de latonería, reparación
          de choques y pintura automotriz con acabado de fábrica.
        </p>

        <h2>Precio de Enderezada y Pintura</h2>
        <p>Precio: Desde $600 USD</p>
        <p>
          El precio varía según la extensión del daño. Incluye valoración, enderezado de carrocería, preparación de
          superficie, pintura automotriz y acabado profesional.
        </p>

        <h2>Servicio de Enderezada</h2>
        <p>
          Reparación profesional de abolladuras, deformaciones y daños en la carrocería. Utilizamos equipos especializados
          de enderezado para devolver la forma or iginal a tu vehículo.
        </p>
        <ul>
          <li>Enderezado de puertas, capó y guardabarros</li>
          <li>Reparación de chasis y estructura</li>
          <li>Corrección de abolladuras sin pintura (PDR)</li>
          <li>Soldadura especializada en carrocería</li>
        </ul>

        <h2>Servicio de Latonería</h2>
        <p>
          Trabajo de latonería profesional para reparar daños mayores en la carrocería. Reemplazo de paneles, soldadura
          y restauración completa de la estructura del vehículo.
        </p>

        <h2>Proceso de Pintura Automotriz</h2>

        <h3>1. Evaluación y Presupuesto</h3>
        <p>Diagnóstico completo de los daños y cotización detallada sin compromiso.</p>

        <h3>2. Preparación de Superficie</h3>
        <p>Lijado, masillado y preparación profesional de la superficie. Sellado de imperfecciones y nivelación perfecta.</p>

        <h3>3. Aplicación de Pintura</h3>
        <p>Pintura automotriz de alta calidad con igualación perfecta del color original. Aplicación en cabina de pintura.</p>

        <h3>4. Acabado y Pulido</h3>
        <p>Aplicación de barniz protector UV, pulido profesional y acabado espejo que devuelve el brillo original.</p>

        <h2>Tipos de Pintura Disponibles</h2>
        <ul>
          <li>Pintura sólida (colores estándar)</li>
          <li>Pintura metálica</li>
          <li>Pintura perlada</li>
          <li>Pintura mate (bajo pedido)</li>
        </ul>

        <h2>Reparación de Choques</h2>
        <p>
          Especialistas en reparación de vehículos accidentados. Trabajamos con aseguradoras y ofrecemos servicio
          completo de restauración después de choques y accidentes.
        </p>
        <ul>
          <li>Evaluación de daños post-accidente</li>
          <li>Cotización para compañías de seguros</li>
          <li>Reparación estructural completa</li>
          <li>Enderezado de chasis</li>
          <li>Reemplazo de paneles</li>
          <li>Pintura y acabado final</li>
        </ul>

        <h2>Garantía del Servicio</h2>
        <p>
          Garantizamos la calidad de nuestro trabajo de enderezada y pintura:
        </p>
        <ul>
          <li>Garantía en pintura contra defectos de aplicación</li>
          <li>Resistencia a decoloración UV</li>
          <li>Acabado duradero y profesional</li>
          <li>Seguimiento post-servicio</li>
        </ul>

        <h2>¿Por Qué Elegir Car One para Enderezada y Pintura?</h2>
        <ul>
          <li>Más de 20 años de experiencia en latonería y pintura</li>
          <li>Personal técnico especializado y certificado</li>
          <li>Equipos y cabina de pintura profesional</li>
          <li>Pintura automotriz de alta calidad</li>
          <li>Igualación exacta del color original</li>
          <li>Trabajo con aseguradoras</li>
          <li>Precios competitivos y transparentes</li>
        </ul>

        <h2>Contacto y Ubicación</h2>
        <p>Taller de Enderezada y Pintura en Loja - Car One Tecnicentro</p>
        <p>Dirección: Av. California y Houston, Sector Parque Industrial, Loja, Ecuador</p>
        <p>WhatsApp: 0979606963</p>
        <p>Email: asesor.servicio.carone@gmail.com</p>

        <p>
          Car One Tecnicentro - Enderezada y pintura de autos en Loja desde $600 USD. Taller especializado en latonería,
          reparación de choques y pintura automotriz profesional. Más de 20 años devolviendo el aspecto original a tu vehículo.
        </p>
      </LLMHiddenContent>
    </>
  );
}
