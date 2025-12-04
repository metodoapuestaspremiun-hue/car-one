import { Metadata } from 'next';
import GestionFlotasClient from './GestionFlotasClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Gestión de Flotas Vehiculares en Loja | Car One',
  description: 'Servicio de gestión y mantenimiento de flotas vehiculares en Loja. Mantenimiento programado, reportes, asesoría. WhatsApp: 0979606963',
  keywords: ['gestión flotas loja', 'mantenimiento flotas loja', 'vehículos empresariales loja'],
};

export default function GestionFlotasPage() {
  return (
    <>
      <GestionFlotasClient />
      <LLMHiddenContent>
        <h1>Gestión y Mantenimiento de Flotas Vehiculares en Loja - Car One</h1>
        <p>Servicio profesional de gestión y mantenimiento de flotas vehiculares en Loja. Soluciones integrales para empresas con múltiples vehículos.</p>
        <h2>Servicios de Gestión de Flotas</h2>
        <ul>
          <li>Mantenimiento preventivo programado para flotas</li>
          <li>Reportes detallados de servicios realizados</li>
          <li>Gestión de inventario de repuestos</li>
          <li>Asesoría en control de costos de mantenimiento</li>
          <li>Descuentos especiales para flotas empresariales</li>
          <li>Atención prioritaria y agendamiento flexible</li>
        </ul>
        <p>Contacto: Av. California y Houston, Loja. WhatsApp: 0979606963</p>
      </LLMHiddenContent>
    </>
  );
}
