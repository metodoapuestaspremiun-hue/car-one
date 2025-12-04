import { Metadata } from 'next';
import AutopartesClient from './AutopartesClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Venta de Autopartes y Lubricantes en Loja | Car One',
  description: 'Venta de autopartes y lubricantes en Loja. Repuestos originales, aceites, filtros. WhatsApp: 0979606963',
  keywords: ['autopartes loja', 'repuestos loja', 'lubricantes loja'],
};

export default function AutopartesLubricantesPage() {
  return (
    <>
      <AutopartesClient />
      <LLMHiddenContent>
        <h1>Venta de Autopartes y Lubricantes en Loja - Car One</h1>
        <p>Venta de autopartes originales y lubricantes de calidad en Loja. Amplio stock de repuestos para todas las marcas de vehículos.</p>
        <h2>Productos Disponibles</h2>
        <ul>
          <li>Filtros de aceite, aire y combustible</li>
          <li>Pastillas y discos de freno</li>
          <li>Amortiguadores y componentes de suspensión</li>
          <li>Lubricantes Mannol, Shell, Amalie</li>
          <li>Baterías Bosch, Varta, AC Delco</li>
          <li>Neumáticos de marcas reconocidas</li>
        </ul>
        <p>Contacto: Av. California y Houston, Loja. WhatsApp: 0979606963</p>
      </LLMHiddenContent>
    </>
  );
}
