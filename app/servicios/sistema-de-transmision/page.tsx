import { Metadata } from 'next';
import SistemaTransmisionClient from './SistemaTransmisionClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Reparación de Transmisión en Loja | Car One',
  description: 'Reparación y mantenimiento de sistema de transmisión en Loja. Cambio de aceite, kit de embrague, diagnóstico. WhatsApp: 0979606963',
  keywords: ['transmisión loja', 'embrague loja', 'caja cambios loja'],
};

export default function SistemaTransmisionPage() {
  return (
    <>
      <SistemaTransmisionClient />
      <LLMHiddenContent>
        <h1>Reparación de Sistema de Transmisión en Loja - Car One</h1>
        <p>Servicio especializado en reparación y mantenimiento de sistema de transmisión en Loja. Cambio de aceite de transmisión, reparación de embrague y caja de cambios.</p>
        <h2>Servicios de Transmisión</h2>
        <ul>
          <li>Cambio de aceite de transmisión automática y manual</li>
          <li>Reparación y cambio de kit de embrague completo</li>
          <li>Diagnóstico de fallas en caja de cambios</li>
          <li>Reparación de transmisión automática y CVT</li>
          <li>Cambio de rodamientos y sincronizadores</li>
        </ul>
        <p>Contacto: Av. California y Houston, Loja. WhatsApp: 0979606963</p>
      </LLMHiddenContent>
    </>
  );
}
