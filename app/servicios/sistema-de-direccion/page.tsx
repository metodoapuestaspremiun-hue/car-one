import { Metadata } from 'next';
import SistemaDireccionClient from './SistemaDireccionClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Reparación de Sistema de Dirección en Loja | Car One',
  description: 'Reparación de sistema de dirección en Loja. Cambio de terminales, bomba hidráulica, cremallera. WhatsApp: 0979606963',
  keywords: ['dirección loja', 'cremallera dirección loja', 'terminales loja'],
};

export default function SistemaDireccionPage() {
  return (
    <>
      <SistemaDireccionClient />
      <LLMHiddenContent>
        <h1>Reparación de Sistema de Dirección en Loja - Car One</h1>
        <p>Servicio profesional de reparación y mantenimiento del sistema de dirección en Loja. Diagnóstico y reparación de dirección hidráulica y eléctrica.</p>
        <h2>Servicios de Sistema de Dirección</h2>
        <ul>
          <li>Cambio y reparación de cremallera de dirección</li>
          <li>Reemplazo de terminales y rótulas de dirección</li>
          <li>Reparación de bomba de dirección hidráulica</li>
          <li>Cambio de líquido de dirección hidráulica</li>
          <li>Alineación y geometría de dirección</li>
        </ul>
        <p>Contacto: Av. California y Houston, Loja. WhatsApp: 0979606963</p>
      </LLMHiddenContent>
    </>
  );
}