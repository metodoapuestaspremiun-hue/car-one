
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

// Cargar variables de entorno desde .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Error: No se encontraron las variables de entorno de Supabase.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const legacyPosts = [
    {
        title: "Alineación y Balanceo Urgente en Loja para un Viaje de Regreso Seguro",
        slug: "alineacion-y-balanceo-urgente-en-loja-para-un-viaje-de-regreso-seguro",
        excerpt: "¿Sientes vibraciones en el volante o tu auto se desvía? Descubre por qué la alineación y balanceo es crucial antes de viajar y dónde realizarlo en Loja.",
        content: `
      <h2>¿Por qué es vital la alineación y balanceo antes de viajar?</h2>
      <p>Si estás en <strong>Loja</strong> y planeas un viaje por carretera, la seguridad de tu familia es lo primero. La alineación y el balanceo no son solo un mantenimiento rutinario; son esenciales para garantizar que tu vehículo responda correctamente en las curvas y frenadas de nuestras carreteras serranas.</p>
      
      <h3>Señales de que necesitas este servicio urgentemente:</h3>
      <ul>
        <li>El volante vibra a altas velocidades.</li>
        <li>El auto tiende a irse hacia un lado cuando sueltas el volante momentáneamente.</li>
        <li>Desgaste irregular en los neumáticos.</li>
      </ul>

      <p>En <strong>Car One Tecnicentro</strong>, utilizamos tecnología computarizada de última generación para asegurar que tus neumáticos tengan el contacto perfecto con el asfalto.</p>
      
      <h3>Beneficios inmediatos</h3>
      <p>Ahorrarás combustible, extenderás la vida útil de tus llantas y, lo más importante, viajarás con total tranquilidad y seguridad.</p>
    `,
        category: "Mantenimiento",
        focus_keyword: "alineación y balanceo Loja",
        tags: ["alineación", "balanceo", "seguridad vial", "mantenimiento Loja"],
        image: "https://images.unsplash.com/photo-1578844251758-2f71da645217?q=80&w=1200", // Imagen genérica placeholder
        status: "published",
        published_date: new Date().toISOString()
    },
    {
        title: "¿Problemas con tu Auto en Loja? Encuentra la Solución Rápida en Car One",
        slug: "problemas-con-tu-auto-en-loja-encuentra-la-solucion-rapida-en-carone",
        excerpt: "Desde ruidos extraños hasta fallas eléctricas. Diagnosticar correctamente el problema de tu auto en Loja es el primer paso para ahorrar dinero y tiempo.",
        content: `
      <h2>Diagnóstico Automotriz Preciso en Loja</h2>
      <p>¿Tu auto hace un ruido que no reconoces? ¿Sientes que ha perdido potencia al subir las cuestas de Loja? Ignorar estos pequeños síntomas puede llevar a reparaciones costosas. En <strong>Car One Tecnicentro</strong>, nos especializamos en diagnósticos certeros.</p>

      <h3>Problemas comunes que atendemos:</h3>
      <ul>
        <li>Fallas en el sistema de inyección.</li>
        <li>Problemas eléctricos y de batería.</li>
        <li>Sistemas de suspensión desgastados.</li>
      </ul>

      <p>No adivines qué tiene tu auto. Traélo a nuestro taller para un escaneo computarizado completo. Contamos con el equipo humano y técnico para devolverte a la carretera en tiempo récord.</p>
    `,
        category: "Diagnóstico",
        focus_keyword: "taller mecánico Loja",
        tags: ["diagnóstico", "mecánica general", "reparación autos", "Loja"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200",
        status: "published",
        published_date: new Date().toISOString()
    },
    {
        title: "¿Escuchas un Ruido Extraño al Frenar? Posibles Causas y Soluciones en Loja",
        slug: "escuchas-un-ruido-extrano-al-frenar-posibles-causas-y-soluciones-en-loja",
        excerpt: "Ese chirrido metálico no es normal. Conoce las causas principales de los ruidos en los frenos y por qué debes atenderlo hoy mismo en Loja.",
        content: `
      <h2>¡Cuidado! Tus frenos te están avisando</h2>
      <p>El sistema de frenos es el componente de seguridad más importante de tu vehículo. Si escuchas un chirrido, roce o golpe seco al pisar el pedal mientras conduces por <strong>Loja</strong>, es momento de una revisión inmediata.</p>

      <h3>Causas principales del ruido al frenar:</h3>
      <ul>
        <li><strong>Pastillas desgastadas:</strong> El indicador de desgaste metálico está rozando el disco.</li>
        <li><strong>Discos deformados:</strong> Provocan vibraciones y ruidos graves.</li>
        <li><strong>Suciedad o cristalización:</strong> Común si se frena en exceso bajando pendientes.</li>
      </ul>

      <p>Visita <strong>Car One Tecnicentro</strong>. Revisaremos el espesor de tus discos y la vida útil de tus pastillas para garantizar tu seguridad en cada frenada.</p>
    `,
        category: "Seguridad",
        focus_keyword: "frenos Loja",
        tags: ["frenos", "seguridad", "pastillas de freno", "ruidos auto"],
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200",
        status: "published",
        published_date: new Date().toISOString()
    },
    {
        title: "Luz de Check Engine Encendida: Qué Significa y Qué Hacer si te Pasa en Loja",
        slug: "luz-de-check-engine-encendida-que-significa-y-que-hacer-si-te-pasa-en-loja",
        excerpt: "No entres en pánico, pero no lo ignores. La luz de motor puede indicar desde una tapa de gasolina floja hasta problemas serios de motor.",
        content: `
      <h2>La temida luz amarilla en el tablero</h2>
      <p>Ver encenderse el testigo de "Check Engine" mientras conduces por <strong>Loja</strong> puede ser estresante. Esta luz es la forma en que la computadora de tu auto te dice que algo no está funcionando dentro de los parámetros normales.</p>

      <h3>¿Qué debo hacer?</h3>
      <ol>
        <li><strong>Revisa los indicadores:</strong> ¿Hay temperatura alta o baja presión de aceite? Si es así, detente.</li>
        <li><strong>Escucha y siente:</strong> ¿El motor falla o vibra?</li>
        <li><strong>Acude a un profesional:</strong> Necesitas un escáner OBD-II para leer el código de error.</li>
      </ol>

      <p>En <strong>Car One Tecnicentro</strong>, tenemos escáneres multimarca para decodificar exactamente qué le duele a tu auto y solucionarlo antes de que se convierta en una avería mayor.</p>
    `,
        category: "Diagnóstico",
        focus_keyword: "check engine Loja",
        tags: ["check engine", "motor", "diagnóstico electrónico", "taller Loja"],
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200",
        status: "published",
        published_date: new Date().toISOString()
    },
    {
        title: "Sube la Temperatura de tu Auto: 5 Pasos a Seguir si tu Motor se Recalienta en Loja",
        slug: "sube-la-temperatura-de-tu-auto-5-pasos-a-seguir-si-tu-motor-se-recalienta-en-loja",
        excerpt: "El recalentamiento es el enemigo número uno de tu motor. Aprende a reaccionar correctamente para evitar fundir el motor.",
        content: `
      <h2>Cómo actuar ante un recalentamiento del motor</h2>
      <p>Las subidas y el tráfico de <strong>Loja</strong> pueden exigir mucho al sistema de refrigeración de tu auto. Si ves que la aguja de temperatura sube más de lo normal o sale vapor del capó, actúa rápido.</p>

      <h3>5 Pasos Críticos:</h3>
      <ol>
        <li><strong>Detente inmediatamente</strong> en un lugar seguro.</li>
        <li><strong>Apaga el motor.</strong> No intentes llegar "un poquito más lejos".</li>
        <li><strong>NO abras la tapa del radiador</strong> mientras esté caliente. Podrías sufrir quemaduras graves.</li>
        <li><strong>Revisa si hay fugas</strong> de líquido refrigerante (agua verde/roja) bajo el auto.</li>
        <li><strong>Llama a una grúa o asistencia.</strong> No fuerces el motor.</li>
      </ol>

      <p>El recalentamiento suele deberse a fugas, termostatos pegados o ventiladores fallidos. En <strong>Car One Tecnicentro</strong> revisamos todo tu sistema de refrigeración para que esto no te vuelva a pasar.</p>
    `,
        category: "Mantenimiento",
        focus_keyword: "recalentamiento motor Loja",
        tags: ["recalentamiento", "radiador", "motor", "asistencia mecánica"],
        image: "https://images.unsplash.com/photo-1626071476839-4428801d9f03?q=80&w=1200",
        status: "published",
        published_date: new Date().toISOString()
    }
];

async function restorePosts() {
    console.log('🚀 Iniciando restauración de posts legacy...');

    for (const post of legacyPosts) {
        console.log(\`Procesando: \${post.slug}\`);

    // Verificar si ya existe
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', post.slug)
      .single();

    if (existing) {
      console.log(\`✅ El post ya existe. Saltando...\`);
      continue;
    }

    // Insertar si no existe
    const { error } = await supabase
      .from('blog_posts')
      .insert([post]);

    if (error) {
      console.error(\`❌ Error insertando \${post.slug}:\`, error.message);
    } else {
      console.log(\`✨ Post creado exitosamente: \${post.title}\`);
    }
  }

  console.log('🏁 Proceso finalizado.');
}

restorePosts();
