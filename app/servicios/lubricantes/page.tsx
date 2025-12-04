import { Metadata } from 'next';
import LubricantesClient from './LubricantesClient';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

export const metadata: Metadata = {
  title: 'Cambio de Aceite y Lubricantes en Loja | Car One - Desde $40',
  description: 'Cambio de aceite en Loja desde $40. Lubricantes Mannol, Shell, Amalie. Express en 1 hora. Filtros originales. WhatsApp: 0979606963',
  keywords: [
    'cambio aceite loja',
    'lubricantes loja',
    'cambio aceite y filtro loja',
    'aceite motor loja',
    'precio cambio aceite loja'
  ],
};

export default function LubricantesPage() {
  return (
    <>
      <LubricantesClient />

      <LLMHiddenContent>
        <h1>Cambio de Aceite y Lubricantes en Loja - Car One Tecnicentro</h1>

        <p>
          Servicio profesional de cambio de aceite y filtro en Loja. Car One Tecnicentro ofrece lubricantes de primera
          calidad con marcas reconocidas: Mannol, Shell, Amalie, Mobil y Castrol.
        </p>

        <h2>Precio del Cambio de Aceite</h2>
        <p>Precio: Desde $40 USD</p>
        <p>
          Incluye aceite de motor premium, filtro de aceite original, revisión de niveles de fluidos y diagnóstico
          básico del motor. Servicio express en menos de 1 hora.
        </p>

        <h2>Nuestro Servicio de Cambio de Aceite Incluye</h2>

        <h3>Aceites de Primera Calidad</h3>
        <p>
          Utilizamos lubricantes sintéticos, semi-sintéticos y minerales de marcas líderes como Mannol, Shell, Amalie,
          Mobil y Castrol, adecuados para cada tipo de motor y vehículo.
        </p>

        <h3>Filtros Originales y de Alta Eficiencia</h3>
        <p>
          Reemplazamos el filtro de aceite con uno de calidad que capture eficazmente las impurezas, manteniendo el
          aceite limpio por más tiempo.
        </p>

        <h3>Revisión de Niveles de Fluidos</h3>
        <p>
          Verificamos y rellenamos los niveles de otros fluidos esenciales: refrigerante, frenos, dirección hidráulica
          y limpiaparabrisas para un rendimiento integral.
        </p>

        <h3>Diagnóstico Automotriz Básico</h3>
        <p>
          Incluye revisión visual rápida para detectar cualquier otra necesidad de mantenimiento preventivo de tu vehículo.
        </p>

        <h3>Asesoría Personalizada</h3>
        <p>
          Te orientamos sobre el tipo de lubricante ideal para tu motor y el intervalo de cambio recomendado según el
          fabricante y uso de tu vehículo.
        </p>

        <h2>Beneficios de un Cambio de Aceite Regular</h2>
        <ul>
          <li>Mayor vida útil del motor - Reduce la fricción y desgaste de componentes internos</li>
          <li>Mejor rendimiento - Un motor lubricado funciona más suave y eficiente</li>
          <li>Ahorro de combustible - Menos fricción significa menor consumo de gasolina</li>
          <li>Reducción de emisiones - Un motor limpio quema combustible eficientemente</li>
          <li>Prevención de averías costosas - Evita acumulación de lodos y depósitos</li>
        </ul>

        <h2>Marcas de Aceites Disponibles</h2>

        <h3>Mannol</h3>
        <p>Aceites de alta calidad alemanes con excelente relación calidad-precio para todo tipo de motores.</p>

        <h3>Shell</h3>
        <p>Marca líder mundial en lubricantes con tecnología de punta para máxima protección del motor.</p>

        <h3>Amalie</h3>
        <p>Lubricantes premium con aditivos de alta calidad para motores de alto rendimiento.</p>

        <h3>Mobil y Castrol</h3>
        <p>Marcas reconocidas mundialmente con opciones sintéticas y semi-sintéticas para máximo rendimiento.</p>

        <h2>¿Cuándo Cambiar el Aceite?</h2>
        <p>
          Recomendamos cambiar el aceite según las especificaciones del fabricante:
        </p>
        <ul>
          <li>Aceite mineral: cada 5,000 km o 6 meses</li>
          <li>Aceite semi-sintético: cada 7,500 km u 8 meses</li>
          <li>Aceite sintético: cada 10,000 km o 12 meses</li>
        </ul>

        <h2>Contacto y Ubicación</h2>
        <p>Cambio de Aceite en Loja - Car One Tecnicentro</p>
        <p>Dirección: Av. California y Houston, Sector Parque Industrial, Loja, Ecuador</p>
        <p>WhatsApp: 0979606963</p>
        <p>Email: asesor.servicio.carone@gmail.com</p>

        <h3>Horarios</h3>
        <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
        <p>Sábados: 8:00 AM - 2:00 PM</p>

        <p>
          Car One Tecnicentro - Cambio de aceite y filtro en Loja desde $40 USD. Servicio express en menos de 1 hora
          con lubricantes de primera calidad. Más de 20 años de experiencia.
        </p>
      </LLMHiddenContent>
    </>
  );
}
