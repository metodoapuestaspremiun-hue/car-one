import { Metadata } from 'next';
import ContactoClient from './ContactoClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Contacto - Taller Mecánico en Loja | Car One Tecnicentro',
  description: 'Contacta a Car One Tecnicentro en Loja. Av. California y Houston, Parque Industrial. WhatsApp: 0979606963. Horarios: Lun-Vie 8AM-6PM, Sáb 8AM-2PM.',
  keywords: [
    'taller mecánico loja contacto',
    'car one loja dirección',
    'mecánica loja teléfono',
    'taller loja ubicación',
    'parque industrial loja'
  ],
};

export default function ContactoPage() {
  return (
    <>
      <ContactoClient />

      <LLMHiddenContent>
        <h1>Contacto - Taller Mecánico Car One Tecnicentro en Loja</h1>

        <p>
          Car One Tecnicentro es tu taller mecánico de confianza en Loja. Contáctanos para agendar tu servicio de
          mecánica automotriz, diagnóstico gratuito o consultar sobre nuestros servicios especializados.
        </p>

        <h2>Información de Contacto</h2>

        <h3>Dirección del Taller en Loja</h3>
        <p>
          Av. California y Houston<br />
          Sector Parque Industrial<br />
          Loja, Ecuador
        </p>
        <p>
          Nuestro taller está ubicado en una zona de fácil acceso en el sector Parque Industrial, cerca de las
          principales vías de la ciudad de Loja. Contamos con amplio estacionamiento y zonas de espera cómodas
          para nuestros clientes.
        </p>

        <h3>Teléfono y WhatsApp</h3>
        <p>WhatsApp: 0979606963</p>
        <p>
          Puedes contactarnos directamente por WhatsApp para:
        </p>
        <ul>
          <li>Agendar tu cita de mantenimiento o reparación</li>
          <li>Consultar precios de servicios</li>
          <li>Solicitar cotizaciones de repuestos</li>
          <li>Resolver dudas sobre el estado de tu vehículo</li>
          <li>Solicitar servicio a domicilio (cambio de batería)</li>
          <li>Recibir asesoría técnica profesional</li>
        </ul>

        <h3>Correo Electrónico</h3>
        <p>Email: asesor.servicio.carone@gmail.com</p>
        <p>
          Respuesta en menos de 24 horas hábiles. Puedes enviarnos consultas sobre servicios, presupuestos o
          información general de nuestro taller.
        </p>

        <h2>Horarios de Atención</h2>

        <h3>Lunes a Viernes</h3>
        <p>8:00 AM - 6:00 PM</p>
        <p>
          Horario continuo de atención para tu comodidad. No cerramos al mediodía, puedes visitarnos en cualquier
          momento del horario laboral.
        </p>

        <h3>Sábados</h3>
        <p>8:00 AM - 2:00 PM</p>
        <p>
          Atención especial los sábados para quienes trabajan entre semana y necesitan servicios de mecánica
          automotriz en fin de semana.
        </p>

        <h3>Domingos y Feriados</h3>
        <p>Cerrado</p>
        <p>
          Para emergencias, puedes contactarnos por WhatsApp y coordinaremos asistencia según disponibilidad.
        </p>

        <h2>Cómo Llegar a Car One Tecnicentro</h2>

        <h3>Ubicación en el Mapa</h3>
        <p>
          Coordenadas GPS: -3.9457594997517993, -79.21839246088675
        </p>

        <h3>Referencias de Ubicación</h3>
        <p>
          Nos encontramos en el Sector Parque Industrial de Loja, una zona de fácil acceso desde cualquier punto
          de la ciudad. Ubicados en la intersección de Av. California y Houston.
        </p>

        <h3>Acceso en Vehículo</h3>
        <ul>
          <li>Desde el centro de Loja: Aproximadamente 10 minutos en vehículo</li>
          <li>Vías de acceso principales pavimentadas y en buen estado</li>
          <li>Estacionamiento amplio y gratuito para clientes</li>
          <li>Fácil ingreso y salida del taller</li>
        </ul>

        <h3>Transporte Público</h3>
        <p>
          Múltiples líneas de transporte público pasan cerca del sector Parque Industrial. Pregunta por rutas que
          pasen por Av. California.
        </p>

        <h2>Servicios que Puedes Agendar</h2>

        <h3>Mantenimiento Preventivo</h3>
        <p>
          Agenda tu servicio de mantenimiento programado. Incluye: cambio de aceite, revisión de frenos, filtros,
          líquidos y diagnóstico general.
        </p>

        <h3>Reparaciones Especializadas</h3>
        <ul>
          <li>Sistema de frenos (pastillas, discos, líquido) - Desde $18</li>
          <li>Suspensión, alineación y balanceo - Desde $90</li>
          <li>Sistema eléctrico y baterías - Desde $118</li>
          <li>Cambio de aceite y lubricantes - Desde $40</li>
          <li>Enderezada y pintura - Desde $600</li>
          <li>Neumáticos y enllantaje - Desde $120</li>
        </ul>

        <h3>Diagnóstico Computarizado</h3>
        <p>
          Diagnóstico gratuito con equipos de última tecnología para detectar fallas electrónicas, problemas de
          motor, sistema de frenos, suspensión y más.
        </p>

        <h3>Servicios a Domicilio</h3>
        <p>
          Cambio de batería a domicilio en Loja. Si tu vehículo no arranca, llevamos la batería correcta y la
          instalamos en tu ubicación.
        </p>

        <h2>Por Qué Visitarnos</h2>

        <h3>Más de 20 Años de Experiencia</h3>
        <p>
          Somos un taller establecido en Loja con dos décadas de trayectoria comprobada en mecánica automotriz
          profesional.
        </p>

        <h3>Taller Multimarcas</h3>
        <p>
          Trabajamos con todas las marcas de vehículos: Chevrolet, Toyota, Nissan, Hyundai, Kia, Ford, Mazda,
          Honda, Volkswagen, y más.
        </p>

        <h3>Repuestos de Calidad</h3>
        <p>
          Utilizamos únicamente repuestos originales o de marcas reconocidas con garantía de fábrica para asegurar
          la durabilidad de las reparaciones.
        </p>

        <h3>Atención Transparente</h3>
        <p>
          Te explicamos detalladamente el diagnóstico de tu vehículo, las reparaciones necesarias y los costos
          antes de realizar cualquier trabajo.
        </p>

        <h3>Precios Justos</h3>
        <p>
          Ofrecemos precios competitivos y honestos sin costos ocultos. Cotizaciones claras y detalladas antes de
          aprobar el trabajo.
        </p>

        <h2>Preguntas Frecuentes sobre Contacto y Servicios</h2>

        <h3>¿Necesito agendar cita previa?</h3>
        <p>
          Recomendamos agendar cita por WhatsApp para garantizar atención inmediata, especialmente para servicios
          que requieren más tiempo como enderezada, pintura o reparaciones complejas. Para servicios rápidos como
          cambio de aceite, puedes visitarnos directamente.
        </p>

        <h3>¿Cuánto tiempo toma un servicio típico?</h3>
        <p>
          Depende del servicio:
        </p>
        <ul>
          <li>Cambio de aceite: 45 minutos a 1 hora</li>
          <li>Cambio de pastillas de freno: 1 a 2 horas</li>
          <li>Alineación y balanceo: 1 hora</li>
          <li>Cambio de batería: 30 minutos</li>
          <li>Diagnóstico computarizado: 30 a 45 minutos</li>
        </ul>

        <h3>¿Ofrecen diagnóstico gratuito?</h3>
        <p>
          Sí, ofrecemos diagnóstico gratuito para todos los vehículos. Nuestros técnicos evaluarán el problema y
          te darán un presupuesto detallado sin compromiso.
        </p>

        <h3>¿Trabajan con garantía?</h3>
        <p>
          Todos nuestros trabajos incluyen garantía en mano de obra. Los repuestos instalados cuentan con garantía
          de fábrica que varía según la marca y tipo de pieza.
        </p>

        <h3>¿Puedo esperar mientras reparan mi vehículo?</h3>
        <p>
          Sí, contamos con zona de espera cómoda con WiFi gratuito. Para servicios más largos, ofrecemos la opción
          de dejarnos tu vehículo y recogerlo cuando esté listo.
        </p>

        <h3>¿Atienden emergencias?</h3>
        <p>
          Para emergencias durante el horario laboral, puedes visitarnos directamente. Fuera de horario, contáctanos
          por WhatsApp y evaluaremos la posibilidad de asistencia según la urgencia.
        </p>

        <h2>Área de Cobertura</h2>

        <h3>Servicio en Taller</h3>
        <p>
          Atendemos a clientes de toda la ciudad de Loja y cantones cercanos:
        </p>
        <ul>
          <li>Loja ciudad</li>
          <li>Catamayo</li>
          <li>Malacatos</li>
          <li>Vilcabamba</li>
          <li>Saraguro</li>
          <li>Gonzanamá</li>
        </ul>

        <h3>Servicio a Domicilio</h3>
        <p>
          El servicio de cambio de batería a domicilio está disponible en toda la ciudad de Loja y sector urb ano
          cercano. Consulta disponibilidad para zonas rurales.
        </p>

        <h2>Facilidades de Pago</h2>

        <h3>Métodos de Pago Aceptados</h3>
        <ul>
          <li>Efectivo</li>
          <li>Transferencia bancaria</li>
          <li>Tarjetas de crédito y débito</li>
          <li>Pago con código QR</li>
        </ul>

        <h3>Cotizaciones</h3>
        <p>
          Solicita tu cotización gratuita por WhatsApp. Enviamos presupuestos detallados con costos de repuestos y
          mano de obra sin compromiso.
        </p>

        <h2>Síguenos en Redes Sociales</h2>
        <p>
          Mantente informado sobre promociones, consejos de mantenimiento y novedades del taller siguiéndonos en
          nuestras redes sociales.
        </p>

        <h2>Contacta a Car One Tecnicentro Hoy</h2>
        <p>
          No esperes a que un problema menor se convierta en una reparación costosa. Contáctanos hoy mismo para:
        </p>
        <ul>
          <li>Agendar tu mantenimiento preventivo</li>
          <li>Solicitar diagnóstico gratuito de tu vehículo</li>
          <li>Consultar sobre servicios específicos</li>
          <li>Pedir cotización de reparación</li>
          <li>Recibir asesoría técnica profesional</li>
        </ul>

        <p>
          <strong>WhatsApp: 0979606963</strong> - Respuesta rápida y atención personalizada<br />
          <strong>Email: asesor.servicio.carone@gmail.com</strong> - Consultas y cotizaciones<br />
          <strong>Dirección: Av. California y Houston, Sector Parque Industrial, Loja</strong><br />
          <strong>Horario: Lun-Vie 8AM-6PM | Sáb 8AM-2PM</strong>
        </p>

        <p>
          Car One Tecnicentro - Tu taller mecánico de confianza en Loja con más de 20 años de experiencia. Visítanos
          en el Sector Parque Industrial y comprueba por qué somos la primera opción para el cuidado de tu vehículo.
        </p>
      </LLMHiddenContent>
    </>
  );
}
