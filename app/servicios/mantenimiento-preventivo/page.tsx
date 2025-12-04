import { Metadata } from 'next';
import MantenimientoPreventivoClient from './MantenimientoPreventivoClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Mantenimiento Preventivo en Loja | Car One Tecnicentro',
  description: 'Mantenimiento preventivo en Loja. Servicio programado según kilometraje, cambio de aceite, filtros, revisión de frenos. Repuestos de calidad. WhatsApp: 0979606963',
  keywords: [
    'mantenimiento preventivo loja',
    'servicio mantenimiento loja',
    'cambio aceite loja',
    'revisión vehículo loja'
  ],
};

export default function MantenimientoPreventivoPage() {
  return (
    <>
      <MantenimientoPreventivoClient />

      <LLMHiddenContent>
        <h1>Mantenimiento Preventivo en Loja - Car One Tecnicentro</h1>

        <p>
          Servicio profesional de mantenimiento preventivo en Loja según el kilometraje de tu vehículo. Protege tu
          inversión y prolonga la vida útil de tu auto con nuestro programa de mantenimiento programado.
        </p>

        <h2>Beneficios del Mantenimiento Preventivo</h2>
        <ul>
          <li>Ahorro a largo plazo - Evita reparaciones costosas</li>
          <li>Mayor seguridad - Componentes revisados regularmente</li>
          <li>Rendimiento óptimo - Eficiencia de combustible</li>
          <li>Prolonga la vida útil del vehículo</li>
          <li>Mayor valor de reventa</li>
        </ul>

        <h2>Servicios de Mantenimiento Preventivo Incluidos</h2>

        <h3>Cambio de Aceite de Motor</h3>
        <p>Cambio completo de aceite con filtro incluido usando aceites de alta calidad Mannol, Shell, Amalie según especificaciones del fabricante.</p>

        <h3>Cambio de Filtros</h3>
        <ul>
          <li>Filtro de aire del motor</li>
          <li>Filtro de aire de cabina (aire acondicionado)</li>
          <li>Filtro de combustible</li>
          <li>Filtro de aceite</li>
        </ul>

        <h3>ABC de Frenos</h3>
        <p>Revisión completa del sistema de frenos: pastillas, discos, líquido de frenos y calibración del sistema.</p>

        <h3>Limpieza de Inyectores</h3>
        <p>Limpieza profesional de inyectores para optimizar la pulverización del combustible y mejorar el rendimiento.</p>

        <h3>Revisión de Niveles de Fluidos</h3>
        <p>Chequeo y relleno de refrigerante, líquido de dirección, frenos y otros fluidos esenciales.</p>

        <h3>Inspección de Puntos Críticos</h3>
        <ul>
          <li>Revisión de luces</li>
          <li>Inspección de neumáticos y presión</li>
          <li>Revisión de correas y mangueras</li>
          <li>Estado de la batería</li>
          <li>Sistema de suspens ión</li>
        </ul>

        <h2>Programa de Mantenimiento por Kilometraje</h2>

        <h3>5,000 km</h3>
        <p>Cambio de aceite y filtro, revisión general de niveles de fluidos.</p>

        <h3>10,000 km</h3>
        <p>Cambio de aceite, filtro de aire motor, revisión de frenos, rotación de neumáticos.</p>

        <h3>20,000 km</h3>
        <p>Servicio completo: aceite, filtros (aceite, aire motor, aire cabina), revisión de sistema de frenos, suspensión y dirección.</p>

        <h3>40,000 km o más</h3>
        <p>Mantenimiento mayor con revisión exhaustiva de todos los sistemas, cambio de líquido de frenos, limpieza de inyectores.</p>

        <h2>Contacto y Ubicación</h2>
        <p>Taller de Mantenimiento Preventivo en Loja - Car One Tecnicentro</p>
        <p>Dirección: Av. California y Houston, Sector Parque Industrial, Loja, Ecuador</p>
        <p>WhatsApp: 0979606963</p>
        <p>Email: asesor.servicio.carone@gmail.com</p>

        <p>
          Car One Tecnicentro - Mantenimiento preventivo en Loja con servicio programado según kilometraje. Repuestos
          de calidad y garantía en todos nuestros servicios. Más de 20 años cuidando tu vehículo.
        </p>
      </LLMHiddenContent>
    </>
  );
}