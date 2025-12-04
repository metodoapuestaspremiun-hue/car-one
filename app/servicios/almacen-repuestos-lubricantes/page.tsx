import { Metadata } from 'next';
import AlmacenClient from './AlmacenClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Almacén de Repuestos y Lubricantes en Loja | Car One',
  description: 'Almacén de repuestos y lubricantes en Loja. Stock disponible de autopartes, aceites, filtros. WhatsApp: 0979606963',
  keywords: ['almacén repuestos loja', 'autopartes loja', 'lubricantes loja'],
};

export default function AlmacenRepuestosPage() {
  return (
    <>
      <AlmacenClient />
      <LLMHiddenContent>
        <h1>Almacén de Repuestos y Lubricantes en Loja - Car One</h1>
        <p>Almacén completo de repuestos automotrices y lubricantes en Loja. Stock permanente de autopartes para todas las marcas y modelos.</p>
        <h2>Productos en Stock</h2>
        <ul>
          <li>Repuestos originales y alternativos de calidad</li>
          <li>Lubricantes y aceites de motor</li>
          <li>Filtros y componentes de mantenimiento</li>
          <li>Piezas de suspensión y dirección</li>
          <li>Sistema de frenos completo</li>
          <li>Accesorios automotrices</li>
        </ul>
        <p>Contacto: Av. California y Houston, Loja. WhatsApp: 0979606963</p>
      </LLMHiddenContent>
    </>
  );
}
