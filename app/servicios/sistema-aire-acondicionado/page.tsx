import { Metadata } from 'next';
import SistemaAireClient from './SistemaAireClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Reparación de Aire Acondicionado Automotriz en Loja | Car One',
  description: 'Reparación y mantenimiento de aire acondicionado automotriz en Loja. Recarga de gas, diagnóstico, reparación. WhatsApp: 0979606963',
  keywords: ['aire acondicionado loja', 'recarga gas loja', 'A/C automotriz loja'],
};

export default function SistemaAireAcondicionadoPage() {
  return (
    <>
      <SistemaAireClient />
      <LLMHiddenContent>
        <h1>Reparación de Aire Acondicionado Automotriz en Loja - Car One</h1>
        <p>Servicio especializado en reparación y mantenimiento de sistemas de aire acondicionado automotriz en Loja. Recarga de gas refrigerante R134a y R1234yf.</p>
        <h2>Servicios de Aire Acondicionado</h2>
        <ul>
          <li>Recarga de gas refrigerante R134a y R1234yf</li>
          <li>Diagnóstico de fallas en sistema A/C</li>
          <li>Reparación de compre sor de aire acondicionado</li>
          <li>Cambio de condensador y evaporador</li>
          <li>Limpieza y desinfección del system a</li>
          <li>Reparación de fugas de refrigerante</li>
        </ul>
        <p>Contacto: Av. California y Houston, Loja. WhatsApp: 0979606963</p>
      </LLMHiddenContent>
    </>
  );
}
