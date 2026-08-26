// =========================================================
// DATA — resumen de la clase, organizado por sección
// =========================================================

const SECTIONS = [
  { id: 'idea', num: '01', label: 'La idea' },
  { id: 'negocio', num: '02', label: 'Idea de negocio' },
  { id: 'fuentes', num: '03', label: 'Fuentes' },
  { id: 'identificacion', num: '04', label: 'Identificación' },
  { id: 'evaluacion', num: '05', label: 'Evaluación' },
  { id: 'herramientas', num: '06', label: 'Herramientas' },
  { id: 'seleccion', num: '07', label: 'Selección final' },
  { id: 'proceso', num: '08', label: 'Proceso de innovación' },
];

const IDEA_TRAITS = [
  { title: 'Surge de la creatividad', text: 'Nace al imaginar posibilidades nuevas. No es un don exclusivo de artistas: se entrena con práctica y observación.' },
  { title: 'Responde a una necesidad', text: 'Las ideas con más futuro resuelven una carencia real: personal, social, tecnológica o económica.' },
  { title: 'Es mejorable', text: 'Rara vez nace terminada. Evoluciona mediante análisis, retroalimentación y ajustes sucesivos.' },
  { title: 'Puede volverse proyecto', text: 'Se activa al definir objetivos, estrategias, recursos y actividades concretas.' },
  { title: 'Genera valor', text: 'Produce un beneficio económico, social, educativo, tecnológico o ambiental. A más valor, más impacto.' },
  { title: 'Puede compartirse', text: 'El trabajo colaborativo revela fortalezas y huecos que una sola persona difícilmente vería sola.' },
  { title: 'Es adaptable', text: 'El entorno cambia constantemente; una idea sobrevive si se ajusta a nuevas circunstancias y tecnologías.' },
];

const IDEA_SOURCES = [
  { t: 'Observación', d: 'Analizar el entorno para detectar necesidades o comportamientos.' },
  { t: 'Necesidad', d: '"La necesidad es la madre de la invención": un problema sin resolver.' },
  { t: 'Experiencia', d: 'Las dificultades del día a día suelen inspirar soluciones.' },
  { t: 'Curiosidad', d: 'Cuestionar cómo funcionan las cosas abre nuevas posibilidades.' },
  { t: 'Investigación', d: 'Recopilar datos sobre tendencias, tecnologías y mercados.' },
];

const IDEA_OBSTACLES = [
  'Miedo al fracaso', 'Falta de confianza', 'Resistencia al cambio',
  'Exceso de rutina', 'Falta de información', 'Críticas prematuras', 'Ambientes poco estimulantes',
];

const IDEA_EXAMPLES = [
  { name: 'Amazon', idea: 'Vender libros por internet' },
  { name: 'Google', idea: 'Organizar la información mundial' },
  { name: 'Facebook', idea: 'Conectar personas en una red social' },
  { name: 'Uber', idea: 'Pedir transporte desde el celular' },
  { name: 'Netflix', idea: 'Entretenimiento bajo demanda' },
];

const NEGOCIO_COMPONENTS = [
  { icon: '❗', h: 'Problema o necesidad', p: 'Toda idea de negocio nace de una carencia insatisfecha: fisiológica, social, económica, tecnológica o ambiental.' },
  { icon: '🧩', h: 'Solución propuesta', p: 'Un producto, servicio o modelo que sea efectivo, fácil de usar, accesible, diferente y confiable.' },
  { icon: '🎯', h: 'Mercado objetivo', p: 'El grupo con mayor probabilidad de comprar: segmentado por demografía, geografía, psicografía o conducta.' },
  { icon: '💎', h: 'Propuesta de valor', p: 'La razón por la que alguien te elegiría a ti y no a la competencia.' },
  { icon: '💰', h: 'Modelo de ingresos', p: 'Cómo gana dinero el negocio: venta directa, suscripción, licencias, publicidad, comisiones o franquicias.' },
];

const NEGOCIO_CHARS = [
  { h: 'Resuelve un problema real', p: 'Los consumidores compran soluciones, no productos.' },
  { h: 'Aporta valor', p: 'El cliente percibe un beneficio superior al costo que paga.' },
  { h: 'Es viable', p: 'Puede ejecutarse con los recursos disponibles.' },
  { h: 'Es sostenible', p: 'Puede mantenerse en el tiempo, no solo funcionar una vez.' },
  { h: 'Es escalable', p: 'Puede crecer sin incrementar sus costos en la misma proporción.' },
];

const FUENTES_INTERNAS = [
  { icon: '💼', h: 'Experiencia laboral', p: 'Observar procesos, problemas y áreas de mejora desde dentro de una industria.' },
  { icon: '🎓', h: 'Conocimientos profesionales', p: 'La educación formal y la capacitación aportan herramientas técnicas aplicables.' },
  { icon: '🛠️', h: 'Habilidades personales', p: 'Capacidades técnicas o blandas que pueden convertirse en la base de un negocio.' },
  { icon: '🎨', h: 'Pasatiempos e intereses', p: 'Muchos emprendimientos nacen de actividades que empezaron como simple afición.' },
];

const FUENTES_EXTERNAS = [
  { icon: '🗣️', h: 'Clientes', p: 'Encuestas, entrevistas, grupos de enfoque y reseñas revelan problemas reales.' },
  { icon: '🏁', h: 'Competidores', p: 'Analizar sus productos y estrategias muestra oportunidades de mejora.' },
  { icon: '⚙️', h: 'Tecnología', p: 'IA, Big Data, IoT, blockchain y realidad aumentada abren nuevos modelos de negocio.' },
  { icon: '📱', h: 'Redes sociales', p: 'Millones de opiniones diarias que pueden transformarse en oportunidades.' },
];

const IDENTIFICACION_STEPS = [
  { h: 'Observación del entorno', p: 'Analizar problemas cotidianos, tendencias y hábitos de consumo.' },
  { h: 'Detección de necesidades', p: 'Identificar carencias básicas, sociales o de desarrollo.' },
  { h: 'Identificación de problemas', p: 'Cada dificultad de una persona es una posible oportunidad.' },
  { h: 'Generación de alternativas', p: 'Proponer varias soluciones posibles al problema detectado.' },
  { h: 'Evaluación de la idea', p: 'Analizar mercado, competencia, costos, riesgos y viabilidad técnica.' },
];

const IDENTIFICACION_QUESTIONS = [
  { q: '¿Qué problema resuelve?', a: 'Toda empresa exitosa soluciona una necesidad específica. Sin un problema real, difícilmente habrá clientes.' },
  { q: '¿Quién tiene ese problema?', a: 'Es fundamental definir con precisión el mercado objetivo.' },
  { q: '¿Con qué frecuencia ocurre?', a: 'Las necesidades recurrentes suelen generar ingresos constantes.' },
  { q: '¿Existe disposición de pago?', a: 'No basta con que exista la necesidad: la gente debe estar dispuesta a invertir dinero en resolverla.' },
  { q: '¿Qué la hace diferente?', a: 'La diferenciación es uno de los factores más importantes para competir.' },
];

const IDENTIFICACION_CHARS = [
  { h: 'Resuelve un problema real', p: 'Mientras más relevante el problema, mayor la oportunidad.' },
  { h: 'Genera valor', p: 'Ahorro de tiempo, dinero, comodidad o seguridad para el cliente.' },
  { h: 'Es viable técnicamente', p: '¿Existe la tecnología y el personal capacitado para producirla?' },
  { h: 'Es rentable', p: 'El mercado, los costos y los márgenes deben sostener el negocio.' },
  { h: 'Tiene potencial de crecimiento', p: 'Las mejores ideas suelen tener posibilidades de expansión.' },
];

const EV_MERCADO = [
  { icon: '📏', h: 'Tamaño del mercado', p: 'Consumidores potenciales según población, segmento, ingresos y frecuencia de compra.' },
  { icon: '📈', h: 'Crecimiento del mercado', p: 'Ventas al alza, nuevas empresas y tendencias sociales favorables son buena señal.' },
  { icon: '🥊', h: 'Análisis de la competencia', p: 'Fortalezas, precios, canales y reputación de quienes ya ofrecen algo similar.' },
  { icon: '🙋', h: 'Clientes potenciales', p: 'Variables demográficas, geográficas, psicográficas y de conducta.' },
];

const EV_TECNICA = [
  { icon: '💻', h: 'Tecnología necesaria', p: 'Equipos, software, sistemas y plataformas requeridas para operar.' },
  { icon: '👥', h: 'Recursos humanos', p: '¿Cuántas personas se necesitan y qué tan fácil es encontrarlas capacitadas?' },
  { icon: '🏭', h: 'Infraestructura', p: 'Oficinas, plantas, equipos o vehículos necesarios para funcionar.' },
  { icon: '⚡', h: 'Capacidad de producción', p: 'Poder satisfacer la demanda proyectada sin saturarse ni sobre-invertir.' },
];

const EV_FINANCIERA = [
  { icon: '🏗️', h: 'Inversión inicial', p: 'Constitución legal, maquinaria, tecnología, inventario y capital de trabajo.' },
  { icon: '⚖️', h: 'Punto de equilibrio', p: 'El nivel de ventas necesario para no ganar ni perder dinero.' },
  { icon: '🧾', h: 'Costos fijos y variables', p: 'Renta y sueldos no cambian; materia prima y comisiones sí, según ventas.' },
  { icon: '💧', h: 'Flujo de efectivo y ROI', p: 'Tener liquidez día a día, y medir cuánto retorna cada peso invertido.' },
];

const EV_LEGAL = [
  { icon: '📄', h: 'Permisos y licencias', p: 'Registro fiscal, permisos sanitarios, uso de suelo y protección civil.' },
  { icon: '🔏', h: 'Propiedad intelectual', p: 'Marcas, patentes y derechos de autor evitan que copien tu idea.' },
  { icon: '✅', h: 'Cumplimiento normativo', p: 'Seguridad, datos personales, derechos laborales y protección al consumidor.' },
];

const EV_RIESGOS = [
  { h: 'Financieros', p: 'Disponibilidad y administración del dinero.' },
  { h: 'Operativos', p: 'Errores internos o fallas en los procesos.' },
  { h: 'Tecnológicos', p: 'Dependencia de herramientas o sistemas.' },
  { h: 'Comerciales', p: 'Relacionados con el mercado y los consumidores.' },
  { h: 'Legales', p: 'Incumplimiento de leyes o contratos.' },
];

const FODA = [
  { f: 'F', word: 'Fortalezas', desc: 'Recursos y capacidades internas que te hacen destacar frente a la competencia.' },
  { f: 'O', word: 'Oportunidades', desc: 'Condiciones externas favorables: cambios económicos, sociales o tecnológicos.' },
  { f: 'D', word: 'Debilidades', desc: 'Aspectos internos que limitan tu desempeño y reducen tu competitividad.' },
  { f: 'A', word: 'Amenazas', desc: 'Factores externos que pueden afectar negativamente a la empresa.' },
];

const CANVAS_BLOCKS = [
  { id: 'partners', h: 'Socios clave', d: 'Las alianzas estratégicas que hacen posible el modelo.' },
  { id: 'activities', h: 'Actividades clave', d: 'Las tareas más importantes para generar valor.' },
  { id: 'value', h: 'Propuesta de valor', d: 'Los beneficios que resuelven la necesidad del cliente: innovación, calidad, personalización o precio.' },
  { id: 'relations', h: 'Relación con clientes', d: 'Cómo interactúa la empresa con quienes le compran.' },
  { id: 'segments', h: 'Segmentos de clientes', d: 'A quién te diriges: mercado masivo, nicho, segmentado o diversificado.' },
  { id: 'resources', h: 'Recursos clave', d: 'Activos físicos, intelectuales, humanos y financieros indispensables.' },
  { id: 'channels', h: 'Canales', d: 'Los medios por los que entregas tu propuesta de valor.' },
  { id: 'costs', h: 'Estructura de costos', d: 'Todos los gastos: fijos (renta, sueldos) y variables (materia prima, comisiones).' },
  { id: 'revenue', h: 'Fuentes de ingreso', d: 'Cómo obtiene dinero la organización: venta directa, suscripción, licencias o publicidad.' },
];

const DESIGN_PHASES = [
  { n: '1', h: 'Empatizar', p: 'Conocer a fondo al usuario mediante observación, entrevistas, encuestas y grupos focales.', tech: ['Observación', 'Entrevistas', 'Encuestas', 'Grupos focales'] },
  { n: '2', h: 'Definir', p: 'Organizar la información recopilada para identificar con claridad el problema real.', tech: ['Síntesis de hallazgos', 'Declaración del problema'] },
  { n: '3', h: 'Idear', p: 'Generar múltiples alternativas de solución sin restricciones iniciales.', tech: ['Brainstorming', 'Mapas mentales', 'Método SCAMPER', 'Seis sombreros para pensar'] },
  { n: '4', h: 'Prototipar', p: 'Construir representaciones tangibles de la solución, desde bocetos hasta apps piloto.', tech: ['Bocetos', 'Maquetas', 'Simulaciones', 'Aplicaciones piloto'] },
  { n: '5', h: 'Evaluar', p: 'Los usuarios prueban la solución para detectar errores y obtener retroalimentación real.', tech: ['Pruebas de usuario', 'Retroalimentación', 'Mejora continua'] },
];

const SCAMPER = [
  { l: 'S', w: 'Sustituir', d: 'Reemplazar algún elemento del producto, servicio o proceso.' },
  { l: 'C', w: 'Combinar', d: 'Unir dos o más elementos para crear una nueva solución.' },
  { l: 'A', w: 'Adaptar', d: 'Tomar una idea existente y ajustarla a una nueva situación.' },
  { l: 'M', w: 'Modificar', d: 'Alterar tamaño, forma, apariencia o funcionalidad.' },
  { l: 'P', w: 'Poner en otros usos', d: 'Buscar aplicaciones alternativas para un producto o recurso.' },
  { l: 'E', w: 'Eliminar', d: 'Simplificar quitando elementos innecesarios.' },
  { l: 'R', w: 'Reordenar / invertir', d: 'Cambiar el orden habitual de las cosas.' },
];

const SELECCION_CRITERIOS = [
  { icon: '💹', h: 'Rentabilidad', p: '¿Vale la pena invertir? Se mide con margen de utilidad, ROI, punto de equilibrio y flujo de efectivo.' },
  { icon: '🔧', h: 'Factibilidad técnica', p: '¿Existe la tecnología, el equipo humano y los procesos para desarrollarla?' },
  { icon: '⚖️', h: 'Viabilidad legal', p: 'Cumplir la legislación evita multas, clausuras, demandas y pérdida de reputación.' },
  { icon: '📊', h: 'Escalabilidad', p: 'Capacidad de crecer sin incrementar los costos en la misma proporción.' },
  { icon: '💡', h: 'Innovación', p: 'Crear algo nuevo o mejorar significativamente lo que ya existe.' },
  { icon: '🛡️', h: 'Ventaja competitiva', p: 'Un atributo difícil de copiar, valioso para el cliente, sostenible y rentable.' },
];

const SELECCION_OBJETIVOS = [
  'Identificar la mejor oportunidad', 'Optimizar el uso de recursos', 'Reducir riesgos',
  'Aumentar la probabilidad de éxito', 'Facilitar la planeación estratégica',
];

const SELECCION_ERRORES = [
  'Enamorarse de la idea', 'No investigar el mercado', 'Subestimar los costos',
  'Ignorar a la competencia', 'No evaluar los riesgos',
];

const PROCESO_INNOVACION = [
  { h: 'Observación', p: 'Analizar el entorno para detectar problemas, necesidades y tendencias.' },
  { h: 'Investigación', p: 'Recopilar y analizar información para reducir la incertidumbre.' },
  { h: 'Generación de ideas', p: 'Producir múltiples soluciones posibles con pensamiento divergente.' },
  { h: 'Selección de ideas', p: 'Evaluar viabilidad técnica, financiera, comercial, operativa y legal.' },
  { h: 'Desarrollo', p: 'Diseñar y construir los elementos necesarios para que la solución funcione.' },
  { h: 'Prototipado', p: 'Crear una versión preliminar para probar rápido y a bajo costo.' },
  { h: 'Validación', p: 'Comprobar con pruebas piloto, MVP o beta testing que el mercado sí lo quiere.' },
  { h: 'Implementación', p: 'Producción, comercialización, marketing, capacitación y distribución.' },
  { h: 'Mejora continua', p: 'Filosofía Kaizen: pequeños ajustes constantes a partir de datos reales.' },
];

// =========================================================
// RENDER HELPERS
// =========================================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderFlipCards() {
  const grid = $('[data-flip-group]');
  IDEA_TRAITS.forEach((trait, i) => {
    const card = el('div', 'flip-card');
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-face flip-front">
          <span class="flip-num">0${i + 1}</span>
          <h4>${trait.title}</h4>
          <span class="flip-cta">Toca para ver más</span>
        </div>
        <div class="flip-face flip-back"><p>${trait.text}</p></div>
      </div>`;
    card.addEventListener('click', () => card.classList.toggle('is-flipped'));
    grid.appendChild(card);
  });
}

function renderChips(containerId, items, muted) {
  const c = document.getElementById(containerId);
  items.forEach(item => {
    const text = typeof item === 'string' ? item : `${item.t}`;
    const chip = el('span', 'chip', text);
    if (typeof item === 'object' && item.d) chip.title = item.d;
    c.appendChild(chip);
  });
}

function renderExamples() {
  const row = document.getElementById('ideaExamples');
  IDEA_EXAMPLES.forEach(ex => {
    const card = el('div', 'example');
    card.innerHTML = `<span class="example-name">${ex.name}</span><span class="example-idea">${ex.idea}</span>`;
    row.appendChild(card);
  });
}

function renderInfoCards(containerId, items) {
  const c = document.getElementById(containerId);
  items.forEach(item => {
    const card = el('div', 'info-card');
    card.innerHTML = `
      ${item.icon ? `<span class="ic-icon">${item.icon}</span>` : ''}
      <h4>${item.h}</h4>
      <p>${item.p}</p>`;
    c.appendChild(card);
  });
}

function renderPillGrid(containerId, items) {
  const c = document.getElementById(containerId);
  items.forEach(item => {
    const card = el('div', 'pill-card');
    card.innerHTML = `<h5>${item.h}</h5><p>${item.p}</p>`;
    c.appendChild(card);
  });
}

function renderTimeline(containerId, items, vertical) {
  const c = document.getElementById(containerId);
  items.forEach((item, i) => {
    const li = el('li', 'timeline-item');
    li.innerHTML = `
      <span class="t-num">${vertical ? i + 1 : i + 1}</span>
      <h4>${item.h}</h4>
      <p>${item.p}</p>`;
    c.appendChild(li);
  });
}

function renderAccordion(containerId, items, letterKey, wordKey, descKey, qMode) {
  const c = document.getElementById(containerId);
  items.forEach((item, i) => {
    const wrap = el('div', 'accordion-item');
    const heading = qMode ? item.q : item.w;
    const letter = qMode ? String(i + 1).padStart(2, '0') : item.l;
    const desc = qMode ? item.a : item.d;
    wrap.innerHTML = `
      <button class="accordion-header" aria-expanded="false">
        <span class="ah-left">
          <span class="ah-letter">${letter}</span>
          <h4>${heading}</h4>
        </span>
        <svg class="accordion-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <div class="accordion-panel"><div class="accordion-panel-inner">${desc}</div></div>`;
    const btn = wrap.querySelector('.accordion-header');
    const panel = wrap.querySelector('.accordion-panel');
    btn.addEventListener('click', () => {
      const isOpen = wrap.classList.contains('is-open');
      wrap.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + 'px' : '0px';
    });
    c.appendChild(wrap);
  });
}

function renderRiskRow() {
  const c = document.getElementById('evRiesgos');
  EV_RIESGOS.forEach(r => {
    const card = el('div', 'risk-card');
    card.innerHTML = `<h5>${r.h}</h5><p>${r.p}</p>`;
    c.appendChild(card);
  });
}

function renderFoda() {
  const grid = document.getElementById('fodaGrid');
  FODA.forEach(item => {
    const cell = el('div', 'foda-cell');
    cell.dataset.f = item.f;
    cell.innerHTML = `
      <div>
        <span class="fc-letter">${item.f}</span>
        <div class="fc-word">${item.word}</div>
      </div>
      <p class="fc-desc">${item.desc}</p>`;
    cell.addEventListener('click', () => cell.classList.toggle('is-open'));
    grid.appendChild(cell);
  });
}

function renderCanvas() {
  const grid = document.getElementById('canvasGrid');
  CANVAS_BLOCKS.forEach(b => {
    const block = el('div', 'canvas-block');
    block.dataset.b = b.id;
    block.innerHTML = `<h5>${b.h}</h5><p class="cb-desc">${b.d}</p>`;
    block.addEventListener('click', () => block.classList.toggle('is-open'));
    grid.appendChild(block);
  });
}

function renderStepper() {
  const container = document.getElementById('designStepper');
  const tabsWrap = el('div', 'stepper-tabs');
  const panelsWrap = el('div');
  DESIGN_PHASES.forEach((phase, i) => {
    const tab = el('button', 'stepper-tab' + (i === 0 ? ' is-active' : ''), `<span class="st-n">${phase.n}</span> ${phase.h}`);
    tab.addEventListener('click', () => {
      $$('.stepper-tab', tabsWrap).forEach(t => t.classList.remove('is-active'));
      $$('.stepper-panel', panelsWrap).forEach(p => p.classList.remove('is-active'));
      tab.classList.add('is-active');
      panelsWrap.children[i].classList.add('is-active');
    });
    tabsWrap.appendChild(tab);

    const panel = el('div', 'stepper-panel' + (i === 0 ? ' is-active' : ''));
    panel.innerHTML = `<h4>${phase.n}. ${phase.h}</h4><p>${phase.p}</p>
      <div class="st-techniques">${phase.tech.map(t => `<span class="chip accent">${t}</span>`).join('')}</div>`;
    panelsWrap.appendChild(panel);
  });
  container.appendChild(tabsWrap);
  container.appendChild(panelsWrap);
}

// =========================================================
// UI SYSTEMS: tabs, rail, reveal, mobile nav
// =========================================================
function initTabs() {
  $$('.tabs').forEach(group => {
    const buttons = $$('.tab-btn', group);
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tabTarget;
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        $$('.tab-panel', group).forEach(p => {
          p.classList.toggle('is-active', p.dataset.tabPanel === target);
        });
      });
    });
  });
}

function buildRail() {
  const nodesList = document.getElementById('railNodes');
  const heroChips = document.getElementById('heroChips');
  const sectionEls = SECTIONS.map(s => document.getElementById(s.id));
  const totalHeight = SECTIONS.length - 1;

  SECTIONS.forEach((s, i) => {
    const li = el('li', 'rail-node');
    li.style.top = (i / totalHeight) * 100 + '%';
    li.dataset.id = s.id;
    li.innerHTML = `
      <button class="rail-node-btn" aria-label="Ir a ${s.label}">
        <span class="rail-dot"></span>
        <span class="rail-label">${s.num} · ${s.label}</span>
      </button>`;
    li.querySelector('button').addEventListener('click', () => {
      document.getElementById(s.id).scrollIntoView({ behavior: 'smooth' });
      closeMobileRail();
    });
    nodesList.appendChild(li);

    const chip = el('a', 'hero-chip', `${s.num} — ${s.label}`);
    chip.href = `#${s.id}`;
    chip.dataset.scroll = '';
    heroChips.appendChild(chip);
  });

  function updateRail() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
    document.getElementById('railFill').style.height = pct + '%';
    document.getElementById('mobileProgressFill').style.width = pct + '%';

    let activeIndex = 0;
    sectionEls.forEach((sec, i) => {
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5) activeIndex = i;
    });
    $$('.rail-node', nodesList).forEach((node, i) => {
      node.classList.toggle('is-active', i === activeIndex);
    });
  }

  window.addEventListener('scroll', updateRail, { passive: true });
  updateRail();
}

function closeMobileRail() {
  document.getElementById('rail').classList.remove('is-open');
  document.getElementById('mobileNavToggle').setAttribute('aria-expanded', 'false');
}

function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const rail = document.getElementById('rail');
  toggle.addEventListener('click', () => {
    const isOpen = rail.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-scroll]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (id && id.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function initReveal() {
  const items = $$('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

// =========================================================
// INIT
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderFlipCards();
  renderChips('ideaSources', IDEA_SOURCES);
  renderChips('ideaObstacles', IDEA_OBSTACLES, true);
  renderExamples();

  renderInfoCards('negocioComponents', NEGOCIO_COMPONENTS);
  renderPillGrid('negocioChars', NEGOCIO_CHARS);

  renderInfoCards('fuentesInternas', FUENTES_INTERNAS);
  renderInfoCards('fuentesExternas', FUENTES_EXTERNAS);

  renderTimeline('identificacionTimeline', IDENTIFICACION_STEPS, false);
  renderAccordion('identificacionQuestions', IDENTIFICACION_QUESTIONS, null, null, null, true);
  renderPillGrid('identificacionChars', IDENTIFICACION_CHARS);

  renderInfoCards('evMercado', EV_MERCADO);
  renderInfoCards('evTecnica', EV_TECNICA);
  renderInfoCards('evFinanciera', EV_FINANCIERA);
  renderInfoCards('evLegal', EV_LEGAL);
  renderRiskRow();

  renderFoda();
  renderCanvas();
  renderStepper();
  renderAccordion('scamperAccordion', SCAMPER, 'l', 'w', 'd', false);

  renderInfoCards('seleccionCriterios', SELECCION_CRITERIOS);
  renderChips('seleccionObjetivos', SELECCION_OBJETIVOS);
  renderChips('seleccionErrores', SELECCION_ERRORES, true);

  renderTimeline('procesoTimeline', PROCESO_INNOVACION, true);

  buildRail();
  initTabs();
  initMobileNav();
  initSmoothScroll();
  initReveal();
});
