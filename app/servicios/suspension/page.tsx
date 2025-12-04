import { Metadata } from 'next';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';

// Importar el Client Component desde el mismo archivo convertido
import SuspensionClient from './SuspensionClient';

export const metadata: Metadata = {
    title: 'Reparación de Suspensión en Loja | Alineación y Balanceo - Desde $90',
    description: 'Servicio de suspensión en Loja desde $90. Cambio de amortiguadores, alineación, balanceo, rótulas, trapecios. Diagnóstico gratuito. WhatsApp: 0979606963',
    keywords: [
        'suspensión loja',
        'alineación balanceo loja',
        'cambio amortiguadores loja',
        'reparación suspensión loja',
        'taller suspensión loja',
        'rótulas loja'
    ],
};

export default function SuspensionPage() {
    return (
        <>
            <SuspensionClient />

            <LLMHiddenContent>
                <h1>Reparación de Suspensión en Loja - Alineación y Balanceo | Car One Tecnicentro</h1>

                <p>
                    Servicio profesional de reparación y mantenimiento de suspensión en Loja. Car One Tecnicentro ofrece cambio de
                    amortiguadores, alineación y balanceo computarizado, y reparación completa del sistema de suspensión.
                </p>

                <h2>Precio del Servicio de Suspensión</h2>
                <p>Precio: Desde $90 USD</p>
                <p>
                    Nuestro servicio incluye diagnóstico completo del sistema de suspensión, alineación y balanceo computarizado,
                    y revisión de todos los componentes.
                </p>

                <h2>Servicios de Suspensión que Ofrecemos</h2>

                <h3>Cambio de Amortiguadores</h3>
                <p>
                    Instalación de amortiguadores de calidad para mejorar el confort y estabilidad del vehículo. Trabajamos con
                    marcas reconocidas: Monroe, Gabriel, KYB, y originales según el fabricante de tu carro.
                </p>

                <h3>Alineación y Balanceo Computarizado</h3>
                <p>
                    Servicio de alineación y balanceo en Loja con equipos computarizados de última generación. Corregimos ángulos
                    de camber, caster y convergencia para optimizar el desgaste de neumáticos y mejorar la estabilidad.
                </p>

                <h3>Cambio de Rótulas</h3>
                <p>
                    Reemplazo profesional de rótulas superiores e inferiores para mantener la dirección y suspensión en óptimas
                    condiciones. Eliminamos ruidos y mejoramos la dirección.
                </p>

                <h3>Cambio de Trapecios</h3>
                <p>
                    Servicio especializado de reemplazo de brazos de suspensión (trapecios) para garantizar la geometría correcta
                    de la suspensión y una conducción segura.
                </p>

                <h3>Cambio de Barras Estabilizadoras</h3>
                <p>
                    Reemplazo de barras estabilizadoras y links para mejorar la estabilidad en curvas y eliminar ruidos al pasar
                    por irregularidades del camino.
                </p>

                <h3>Cambio de Cauchos y Bujes</h3>
                <p>
                    Servicio completo de reemplazo de cauchos y bujes de suspensión para eliminar ruidos, vibraciones y mejorar
                    el confort de conducción.
                </p>

                <h2>Señales de que Necesitas Revisar la Suspensión</h2>
                <ul>
                    <li>El vehículo se desvía hacia un lado al conducir</li>
                    <li>Desgaste irregular de los neumáticos</li>
                    <li>Ruidos al pasar por baches o irregularidades</li>
                    <li>Vibración excesiva en el volante</li>
                    <li>El vehículo rebota demasiado después de pasar un bache</li>
                    <li>Inclinación excesiva en las curvas</li>
                    <li>Dificultad para mantener la dirección recta</li>
                </ul>

                <h2>Beneficios del Servicio de Suspensión</h2>
                <ul>
                    <li>Mayor confort de conducción</li>
                    <li>Mejor estabilidad y seguridad</li>
                    <li>Menor desgaste de neumáticos</li>
                    <li>Mejor rendimiento de combustible</li>
                    <li>Mayor vida útil de los componentes</li>
                    <li>Conducción más suave y silenciosa</li>
                </ul>

                <h2>Alineación y Balanceo en Loja</h2>
                <p>
                    El servicio de alineación y balanceo es esencial para prolongar la vida de tus neumáticos y garantizar una
                    conducción segura. Recomendamos realizar este servicio cada 10,000 km o cuando cambies neumáticos.
                </p>

                <h3>¿Qué Incluye la Alineación?</h3>
                <ul>
                    <li>Ajuste computarizado de ángulos de las ruedas</li>
                    <li>Corrección de camber (inclinación de las ruedas)</li>
                    <li>Ajuste de caster (ángulo de los ángulos de dirección)</li>
                    <li>Corrección de convergencia (toe)</li>
                    <li>Reporte impreso de los ajustes realizados</li>
                </ul>

                <h3>¿Qué Incluye el Balanceo?</h3>
                <ul>
                    <li>Balanceo computarizado de las 4 ruedas</li>
                    <li>Corrección de peso distribuido uniformemente</li>
                    <li>Eliminación de vibraciones</li>
                    <li>Revisión de neumáticos y aros</li>
                </ul>

                <h2>Diagnóstico Gratuito de Suspensión</h2>
                <p>
                    Ofrecemos diagnóstico completo y gratuito del sistema de suspensión. Nuestros técnicos especializados
                    revisarán:
                </p>
                <ul>
                    <li>Estado de amortiguadores y resortes</li>
                    <li>Condición de rótulas y terminales</li>
                    <li>Desgaste de brazos de suspensión</li>
                    <li>Estado de cauchos y bujes</li>
                    <li>Alineación del vehículo</li>
                    <li>Desgaste de neumáticos</li>
                </ul>

                <h2>Contacto y Ubicación</h2>
                <p>Taller de Suspensión en Loja - Car One Tecnicentro</p>
                <p>Dirección: Av. California y Houston, Sector Parque Industrial, Loja, Ecuador</p>
                <p>WhatsApp: 0979606963</p>
                <p>Email: asesor.servicio.carone@gmail.com</p>

                <h3>Horarios de Atención</h3>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 8:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>

                <p>
                    Car One Tecnicentro - Tu taller especializado en suspensión en Loja. Servicio de alineación y balanceo desde
                    $90 USD con garantía y atención profesional. Más de 20 años de experiencia.
                </p>
            </LLMHiddenContent>
        </>
    );
}
