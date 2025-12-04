import { Metadata } from 'next';
import FrenosClient from './FrenosClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Servicio de Frenos Automotrices en Loja | Car One Tecnicentro - Desde $18',
  description: 'Reparación de frenos en Loja desde $18. Cambio de pastillas, discos, líquido de frenos. Diagnóstico gratuito. Taller especializado con garantía. WhatsApp: 0979606963',
  keywords: [
    'frenos loja',
    'cambio pastillas frenos loja',
    'reparación frenos loja',
    'taller frenos loja',
    'revisión frenos loja',
    'líquido de frenos loja',
    'discos de freno loja',
    'mantenimiento frenos loja'
  ],
};

export default function FrenosPage() {
  return (
    <>
      <FrenosClient />

      <LLMHiddenContent>
        <h1>Servicio de Frenos Automotrices en Loja - Car One Tecnicentro</h1>

        <p>
          Taller especializado en reparación y mantenimiento de frenos en Loja. Car One Tecnicentro cuenta con más de
          20 años de experiencia garantizando la seguridad de tu sistema de frenado.
        </p>

        <h2>Precio del Servicio de Frenos</h2>
        <p>Precio: Desde $18 USD</p>
        <p>
          Nuestro servicio de frenos incluye diagnóstico completo del sistema, cambio de pastillas, revisión y
          rectificación de discos, y verificación del líquido de frenos.
        </p>

        <h2>Servicios de Frenos que Ofrecemos en Loja</h2>

        <h3>1. Cambio de Pastillas de Freno</h3>
        <p>
          Reemplazo profesional de pastillas de freno delanteras y traseras con repuestos de calidad garantizada.
          Utilizamos pastillas de marcas reconocidas que cumplen con los estándares de seguridad.
        </p>

        <h3>2. Cambio de Zapatas de Freno</h3>
        <p>
          Servicio especializado de cambio de zapatas de freno para sistemas de freno de tambor. Instalación profesional
          con repuestos garantizados.
        </p>

        <h3>3. Cambio de Discos de Freno</h3>
        <p>
          Reemplazo profesional de discos de freno delanteros y traseros. Rectificado de discos cuando es posible para
          optimizar costos sin comprometer la seguridad.
        </p>

        <h3>4. Cambio de Líquido de Frenos</h3>
        <p>
          Reemplazo completo y purga del sistema de líquido de frenos para mantener la eficiencia del frenado. Utilizamos
          líquidos DOT3, DOT4 o DOT5 según las especificaciones de tu vehículo.
        </p>

        <h3>5. Reparación de Cilindros de Freno</h3>
        <p>
          Reparación y reemplazo de cilindros maestros y cilindros de rueda para un sistema de frenos óptimo. Diagnóstico
          preciso de fugas y problemas de presión.
        </p>

        <h3>6. Cambio de Cables de Freno de Estacionamiento</h3>
        <p>
          Servicio especializado de reemplazo de cables del freno de mano para mayor seguridad. Ajuste profesional del
          sistema de freno de estacionamiento.
        </p>

        <h2>¿Qué Incluye Nuestro Servicio de Frenos?</h2>
        <ul>
          <li>Diagnóstico completo del sistema de frenos sin costo</li>
          <li>Inspección de pastillas, discos, tambores y zapatas</li>
          <li>Verificación del nivel y estado del líquido de frenos</li>
          <li>Revisión de cilindros maestros y de rueda</li>
          <li>Prueba de frenado después del servicio</li>
          <li>Repuestos de marcas reconocidas con garantía</li>
          <li>Instalación profesional por técnicos especializados</li>
        </ul>

        <h2>¿Por Qué Elegir Car One para el Servicio de Frenos?</h2>

        <h3>Seguridad Garantizada</h3>
        <p>
          Tu seguridad es nuestra prioridad número uno. Trabajamos únicamente con repuestos de calidad comprobada que
          cumplen con los estándares internacionales de seguridad.
        </p>

        <h3>Técnicos Especializados</h3>
        <p>
          Nuestro equipo cuenta con más de 20 años de experiencia en sistemas de frenado. Capacitación constante en las
          últimas tecnologías y procedimientos de seguridad.
        </p>

        <h3>Diagnóstico Gratuito</h3>
        <p>
          Ofrecemos diagnóstico completo del sistema de frenos sin costo. Te explicamos detalladamente el estado de tu
          sistema de frenado y las reparaciones necesarias antes de realizar cualquier trabajo.
        </p>

        <h3>Repuestos de Calidad</h3>
        <p>
          Trabajamos con marcas líderes en la industria automotriz. Todos nuestros repuestos cuentan con garantía de
          fábrica y cumplen con las especificaciones del fabricante de tu vehículo.
        </p>

        <h3>Servicio Rápido</h3>
        <p>
          Entendemos la importancia de tu tiempo. El servicio básico de frenos (cambio de pastillas) se completa en
          aproximadamente 1 a 2 horas, dependiendo del modelo de vehículo.
        </p>

        <h2>Señales de que Necesitas Revisar tus Frenos</h2>
        <ul>
          <li>Ruidos al frenar (chirridos, rechinidos o golpes)</li>
          <li>Vibración en el pedal o volante al frenar</li>
          <li>Pedal de freno esponjoso o que se hunde hasta el fondo</li>
          <li>Mayor distancia de frenado de lo habitual</li>
          <li>Luz de advertencia de frenos encendida en el tablero</li>
          <li>El vehículo se desvía hacia un lado al frenar</li>
          <li>Olor a quemado después de frenar</li>
        </ul>

        <h2>Recomendaciones de Mantenimiento</h2>
        <p>
          Para mantener tu sistema de frenos en óptimas condiciones, recomendamos:
        </p>
        <ul>
          <li>Revisar pastillas de freno cada 10,000 km</li>
          <li>Cambiar líquido de frenos cada 20,000 km o según manual del vehículo</li>
          <li>Inspección visual del sistema cada vez que se cambie el aceite</li>
          <li>Atender inmediatamente cualquier ruido o comportamiento anormal</li>
          <li>No esperar a que las pastillas estén completamente gastadas</li>
        </ul>

        <h2>Garantía del Servicio</h2>
        <p>
          Todos nuestros trabajos de frenos incluyen:
        </p>
        <ul>
          <li>Garantía en mano de obra</li>
          <li>Garantía de fábrica en repuestos instalados</li>
          <li>Seguimiento post-servicio sin costo</li>
          <li>Revisión gratuita después de 500 km</li>
        </ul>

        <h2>Contacto y Ubicación</h2>
        <p>Taller de Frenos en Loja - Car One Tecnicentro</p>
        <p>Dirección: Av. California y Houston, Sector Parque Industrial, Loja, Ecuador</p>
        <p>WhatsApp: 0979606963</p>
        <p>Email: asesor.servicio.carone@gmail.com</p>

        <h3>Horarios de Atención</h3>
        <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
        <p>Sábados: 8:00 AM - 2:00 PM</p>
        <p>Domingos: Cerrado</p>

        <h3>Cómo Agendar tu Servicio de Frenos</h3>
        <ol>
          <li>Contáctanos por WhatsApp al 0979606963</li>
          <li>Describe los síntomas o problemas que presenta tu vehículo</li>
          <li>Agenda una fecha y hora conveniente para ti</li>
          <li>Recibe diagnóstico gratuito al llegar al taller</li>
          <li>Aprueba el presupuesto antes de iniciar el trabajo</li>
        </ol>

        <p>
          Car One Tecnicentro - Tu taller de confianza en Loja para reparación y mantenimiento de frenos. Más de 20 años
          garantizando tu seguridad en la carretera. Servicio profesional desde $18 USD.
        </p>
      </LLMHiddenContent>
    </>
  );
}
