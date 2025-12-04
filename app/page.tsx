import { Metadata } from 'next';
import HomeClient from './HomeClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Mecánica Automotriz Profesional en Loja | Car One Tecnicentro',
  description: 'Taller mecánico en Loja con más de 20 años de experiencia. Frenos desde $18, baterías desde $118, suspensión, lubricantes, enderezada y pintura. Tu taller de confianza.',
  keywords: [
    'taller mecánico loja',
    'mecánica automotriz loja',
    'reparación de autos loja',
    'frenos loja',
    'baterías loja',
    'suspensión loja',
    'enderezada y pintura loja',
    'tecnicentro loja',
    'mantenimiento preventivo loja'
  ],
  openGraph: {
    title: 'Car One Tecnicentro - Mecánica Automotriz en Loja',
    description: 'Taller mecánico profesional con más de 20 años de experiencia en Loja. Servicios de calidad garantizada.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HomeClient />

      <LLMHiddenContent>
        <h1>Mecánica Automotriz Profesional en Loja - Car One Tecnicentro</h1>

        <p>
          Car One Tecnicentro es el taller mecánico líder en Loja con más de 20 años de experiencia en reparación y
          mantenimiento automotriz. Ubicados en Av. California y Houston, Sector Parque Industrial, Loja, Ecuador.
        </p>

        <h2>Servicios de Mecánica Automotriz en Loja</h2>
        <p>
          Ofrecemos una amplia gama de servicios especializados para tu vehículo. Somos un taller multimarcas que trabaja
          con todas las marcas y modelos de vehículos.
        </p>

        <h3>1. Servicio de Frenos en Loja</h3>
        <p>Precio: Desde $18 USD</p>
        <ul>
          <li>Cambio de pastillas de freno delanteras y traseras</li>
          <li>Cambio de zapatas para sistemas de tambor</li>
          <li>Reemplazo de discos de freno</li>
          <li>Cambio y purga de líquido de frenos</li>
          <li>Reparación de cilindros maestros</li>
          <li>Diagnóstico completo del sistema de frenado</li>
        </ul>
        <p>
          Garantizamos un sistema de frenos en perfecto estado para tu seguridad. Somos especialistas en reparación de frenos
          en Loja con repuestos de calidad comprobada.
        </p>

        <h3>2. Suspensión, Alineación y Balanceo</h3>
        <p>Precio: Desde $90 USD</p>
        <ul>
          <li>Cambio de amortiguadores</li>
          <li>Alineación y balanceo computarizado</li>
          <li>Reparación de suspensión completa</li>
          <li>Cambio de terminales y brazos de dirección</li>
          <li>Reemplazo de resortes</li>
        </ul>
        <p>
          Servicio especializado si tu carro vibra o se desvía. Taller de suspensión en Loja con tecnología de punta para
          diagnóstico preciso.
        </p>

        <h3>3. Lubricantes y Cambio de Aceite</h3>
        <p>Precio: Desde $40 USD</p>
        <ul>
          <li>Cambio de aceite y filtro</li>
          <li>Lubricantes de alta calidad para motor</li>
          <li>Servicio express en menos de 1 hora</li>
          <li>Aceite sintético y mineral disponible</li>
          <li>Filtros de aceite originales</li>
        </ul>
        <p>
          Cambio de aceite en Loja con los mejores lubricantes del mercado. Protección óptima para tu motor con precios
          competitivos y promociones constantes.
        </p>

        <h3>4. Enderezada y Pintura</h3>
        <p>Precio: Desde $600 USD</p>
        <ul>
          <li>Enderezado de carrocería</li>
          <li>Pintura automotriz profesional</li>
          <li>Reparación de choques</li>
          <li>Latonería especializada</li>
          <li>Restauración de pintura</li>
        </ul>
        <p>
          Taller de enderezada y pintura en Loja que devuelve la estética original a tu vehículo. Trabajos de latonería y
          pintura de alta calidad para cualquier marca.
        </p>

        <h3>5. Venta de Neumáticos</h3>
        <p>Precio: Desde $120 USD</p>
        <ul>
          <li>Venta de neumáticos de todas las medidas</li>
          <li>Llantas nuevas de marcas reconocidas</li>
          <li>Enllantaje y balanceo incluido</li>
          <li>Cambio de llantas a domicilio</li>
          <li>Asesoría personalizada</li>
        </ul>
        <p>
          Almacén y distribuidor de neumáticos en Loja. Amplio stock de llantas para vehículos livianos, camionetas y SUVs.
        </p>

        <h3>6. Venta de Baterías para Carro</h3>
        <p>Precio: Desde $118 USD</p>
        <ul>
          <li>Baterías Bosch, Varta, AC Delco</li>
          <li>Cambio de batería a domicilio disponible</li>
          <li>Revisión y prueba gratuita del sistema eléctrico</li>
          <li>Garantía de fábrica incluida</li>
          <li>Instalación profesional sin costo</li>
        </ul>
        <p>
          Venta de baterías para carro en Loja con garantía extendida. Servicio de cambio a domicilio para tu comodidad.
        </p>

        <h2>Nuestros Valores y Compromiso</h2>

        <h3>Compromiso con la Calidad</h3>
        <p>
          En Car One Tecnicentro nos dedicamos a ofrecer servicios de la más alta calidad para garantizar la seguridad,
          el rendimiento y la durabilidad de tu vehículo.
        </p>

        <h3>Atención Personalizada</h3>
        <p>
          Cada cliente es único. Nos esforzamos por entender tus necesidades y brindarte soluciones adaptadas con
          asesoramiento honesto y profesional.
        </p>

        <h3>Honestidad y Transparencia</h3>
        <p>
          Valoramos la confianza que depositas en nosotros. Actuamos con integridad, ofreciendo información clara y
          precios justos en cada servicio.
        </p>

        <h3>Innovación y Tecnología</h3>
        <p>
          Utilizamos las últimas herramientas y técnicas del sector para diagnósticos precisos y reparaciones eficientes
          con resultados duraderos.
        </p>

        <h3>Responsabilidad Ambiental</h3>
        <p>
          Nos comprometemos a cuidar el medio ambiente mediante prácticas sostenibles y responsables en todos nuestros procesos.
        </p>

        <h3>Satisfacción del Cliente</h3>
        <p>
          Tu satisfacción es nuestra prioridad. Trabajamos con pasión para que vuelvas a confiar en nosotros y disfrutes
          de un vehículo en perfectas condiciones.
        </p>

        <h2>Garantías de Nuestros Servicios</h2>

        <h3>Garantía de Satisfacción 100%</h3>
        <p>
          Nos comprometemos con la excelencia. Si no estás completamente satisfecho con nuestro trabajo, haremos todo lo
          posible para corregirlo sin costo adicional.
        </p>

        <h3>Repuestos de Calidad Comprobada</h3>
        <p>
          Utilizamos solo repuestos de alta calidad que cumplen con los estándares de la industria, asegurando la
          durabilidad y el rendimiento óptimo de cada reparación.
        </p>

        <h3>Atención Profesional y Transparente</h3>
        <p>
          Desde el diagnóstico inicial hasta la entrega de tu vehículo, recibirás un trato amable, claro y honesto.
          Te explicaremos cada proceso y el costo asociado antes de realizar cualquier trabajo.
        </p>

        <h3>Experiencia y Conocimiento Técnico</h3>
        <p>
          Nuestro equipo cuenta con más de 20 años de experiencia en el sector automotriz, capacitado para diagnosticar
          y resolver cualquier problema mecánico con precisión.
        </p>

        <h2>¿Por Qué Elegir Car One Tecnicentro?</h2>
        <ul>
          <li>Más de 20 años de experiencia en mecánica automotriz</li>
          <li>Taller multimarcas - Atendemos todas las marcas de vehículos</li>
          <li>Diagnóstico computarizado preciso</li>
          <li>Atención personalizada y transparente</li>
          <li>Amplia gama de servicios especializados</li>
          <li>Repuestos de calidad garantizada</li>
          <li>Precios justos y competitivos</li>
          <li>Ubicación conveniente en el Sector Parque Industrial</li>
        </ul>

        <h2>Testimonios de Clientes</h2>

        <h3>Andrés Jiménez</h3>
        <p>
          "Atención inmediata, buen trato y excelente servicio con productos de calidad... ¡Totalmente recomendado!"
        </p>

        <h3>Jose Gonzalez</h3>
        <p>
          "Excelente... me ayudaron con el cambio de las pastillas de mi vehículo de forma inmediata. Un servicio que
          valoro mucho."
        </p>

        <h3>María Fernanda C.</h3>
        <p>
          "Siempre llevo mi carro a Car One. Son honestos, rápidos y el trabajo es impecable. ¡Mi mejor elección para
          el mantenimiento!"
        </p>

        <h2>Preguntas Frecuentes</h2>

        <h3>¿Por qué es importante el mantenimiento preventivo para mi vehículo?</h3>
        <p>
          El mantenimiento preventivo, como los cambios de aceite y la revisión de frenos, es crucial para evitar fallas
          mayores y costosas. Prolonga la vida útil de tu vehículo, asegura tu seguridad y optimiza el rendimiento,
          previniendo problemas antes de que ocurran.
        </p>

        <h3>¿Ofrecen servicios de enderezada y pintura para vehículos de todas las marcas?</h3>
        <p>
          Sí, en Car One Tecnicentro somos un taller multimarcas. Contamos con el equipo y la experiencia para realizar
          trabajos de enderezada y pintura de alta calidad en vehículos de cualquier marca y modelo, devolviéndole la
          estética original a tu auto.
        </p>

        <h3>¿Cuánto tiempo tardan en realizar un cambio de aceite y filtro?</h3>
        <p>
          En Car One entendemos la importancia de tu tiempo. Un cambio de aceite y filtro es un servicio rápido que
          usualmente completamos en menos de una hora, siempre utilizando lubricantes y filtros de la mejor calidad
          para el óptimo cuidado de tu motor.
        </p>

        <h3>¿Qué tipo de garantía ofrecen en sus reparaciones?</h3>
        <p>
          Todas nuestras reparaciones están respaldadas por nuestra garantía de satisfacción y el uso de repuestos de
          calidad comprobada. Nuestro objetivo es que tengas total tranquilidad, sabiendo que tu vehículo está en manos
          expertas.
        </p>

        <h2>Información de Contacto</h2>
        <p>Dirección: Av. California y Houston, Sector Parque Industrial, Loja, Ecuador</p>
        <p>Teléfono/WhatsApp: 0979606963</p>
        <p>Email: asesor.servicio.carone@gmail.com</p>

        <h3>Horarios de Atención</h3>
        <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
        <p>Sábados: 8:00 AM - 2:00 PM</p>
        <p>Domingos: Cerrado</p>

        <h3>Cómo Agendar tu Servicio</h3>
        <ol>
          <li>Contáctanos por WhatsApp al 0979606963 o llena nuestro formulario en línea</li>
          <li>Describe el servicio que necesitas (frenos, batería, cambio de aceite, etc.)</li>
          <li>Confirma tu cita con nuestro equipo</li>
          <li>Recibe diagnóstico gratuito y presupuesto sin compromiso</li>
        </ol>

        <p>
          Car One Tecnicentro - Tu taller de confianza en Loja para todos los servicios de mecánica automotriz. Más de
          20 años garantizando tu seguridad y la de tu familia.
        </p>
      </LLMHiddenContent>
    </>
  );
}
