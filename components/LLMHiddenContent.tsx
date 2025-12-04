/**
 * LLMHiddenContent - Componente para contenido visible a LLMs pero oculto visualmente
 * 
 * Este componente renderiza contenido en el HTML inicial del servidor que es visible
 * para crawlers y LLMs (ChatGPT, Claude, Perplexity) pero está oculto visualmente
 * para los usuarios mediante CSS off-screen.
 * 
 * IMPORTANTE: 
 * - No usar display: none (Google puede penalizar)
 * - Usar position: absolute con left: -10000px (técnica aceptada)
 * - aria-hidden="true" para evitar duplicación en lectores de pantalla
 * 
 * Uso:
 * ```tsx
 * <LLMHiddenContent>
 *   <h1>Título del Servicio</h1>
 *   <p>Descripción completa...</p>
 * </LLMHiddenContent>
 * ```
 */

export function LLMHiddenContent({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                position: 'absolute',
                left: '-10000px',
                top: 'auto',
                width: '1px',
                height: '1px',
                overflow: 'hidden'
            }}
            aria-hidden="true"
        >
            {children}
        </div>
    );
}
