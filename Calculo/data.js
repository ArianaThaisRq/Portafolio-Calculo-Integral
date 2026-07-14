
const DATA = {
  prerrequisitos: [
    "Resolucion de ecuaciones segundo plano",
    "Factorización trinomio de la forma",
    "Ecuaciones Lineales de la forma",
    "Ecuaciones Lineales y no Lineales",
    "Funciones y sus gráficas",
    "Límites y continuidad",
    "Derivadas e interpretación",
    "Reglas de diferenciación",
    "Álgebra de fracciones",
    "Identidades trigonométricas",
    "Geometría analítica básica"
  ],

  temas: [
{
      id: "introduccion",
      categoria: "Primer Parcial",
      numero: 0,
      titulo: "Introducción al Cálculo Integral",
      contenido: [
        {
          tipo: "texto",
          titulo: "¿Qué es el Cálculo Integral?",
          texto: "En palabras mas de la vida cotidiana, podemos imaginarnos que quieres medir el área de una figura fuera de lo común. El cálculo integral nos ayuda en eso, ya que no podemos medirlo con una regla recta como tal, asi que lo hacemos con diviciones de esta figura en rectángulos delgados. Si sumamos las áreas de miles de los rectangulos, nos aproximariamos al valor real de nuestro vector, mientras mas pequeños los rectangulos, mejor."
        },
        {
          tipo: "imagen",
          html: `<div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap;">
                   <img src="1.png" style="width: 140px; height: auto; border-radius: 8px;" alt="Integrar">
                   <p style="flex: 1; min-width: 200px; margin: 0;"><strong>Integrar</strong> es el conocimiento base que debemos tener, es como decir, sumar todas esas velocidades para saber exactamente qué distancia recorrió la manzana.</p>
                 </div>`
        },
        {
          tipo: "imagen",
          html: `<div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; flex-direction: row-reverse;">
                   <img src="2.png" style="width: 140px; height: auto; border-radius: 8px;" alt="Derivar">
                   <p style="flex: 1; min-width: 200px; margin: 0;"><strong>Derivar</strong> por asi decirlo, es  saber la velocidad a la que cae una manzana. Es "cortar" una función para ver qué tan rápido cambia. La integración es el proceso inverso, necesitamos saber como derivar para aprender a integrar.</p>
                 </div>`
        },
        {
          tipo: "texto",
          titulo: "Fundamentos necesarios para empezar",
          texto: "Para aprender a integrar, no se necesita ser un genio, pero sí tener bien claros algunos cimientos. Piénsalo como construir una casa: si los cimientos son sólidos, el resto se sostiene solo."
        },
        {
          tipo: "texto",
          titulo: "Álgebra básica",
          texto: "La integración es, en gran medida álgebra avanzada.donde manipulamos ecuaciones y factorizamos polinomios (ej. x² − 4 = (x−2)(x+2)) y despejando variables."
        },
        {
          tipo: "texto",
          titulo: "Funciones",
          texto: "Veamoslo de esta forma, una función es esa máquina donde metes un número (x) y sale otro (y). Es vital saber cómo se comportan las funciones básicas: lineales (x), cuadráticas (x²), racionales (1/x) y, sobre todo, cómo funcionan los exponentes y las raíces."
        },
        {
          tipo: "texto",
          titulo: "Trigonometría",
          texto: "No es necesario saberse todas las identidades de memoria, pero sí es importante conocer las funciones básicas (seno, coseno, tangente)."
        },
        {
          tipo: "texto",
          titulo: "Tablas de Fórmulas",
          texto: "En esta tabla se encuentra las formulas mas usadas, sirve como apoyo al momento de integrar:"
        },
        {
          tipo: "imagen",
            html: `<div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; background: #FAF6EC; padding: 2rem; border-radius: 12px; border: 2px solid #D1C7AC;">
           <figure style="margin: 0; text-align: center; width: 45%; min-width: 300px;">
             <img src="integrales.png" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #BDB7AB; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="Tabla de integrales">
             <figcaption style="font-size: 1.1rem; color: #4A4940; margin-top: 1rem; font-weight: bold;">Tabla de Integrales</figcaption>
           </figure>
           <figure style="margin: 0; text-align: center; width: 45%; min-width: 300px;">
             <img src="derivadas.png" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #BDB7AB; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="Tabla de derivadas">
             <figcaption style="font-size: 1.1rem; color: #4A4940; margin-top: 1rem; font-weight: bold;">Tabla de Derivadas</figcaption>
           </figure>
         </div>`
        },
        {
          tipo: "video",
          youtubeId: "VhRb5A2Gihk",
          titulo: "Qué es la integral y Para qué se usa"
        },
        {
          tipo: "nota",
          texto: `📚 <strong>Libro Recomendado:</strong> Si quieres reforzar tus bases de funciones y álgebra antes de integrar, te sugiero revisar <em>Matemáticas Simplificadas (4ta Edición)</em>. <br><br> <a href="https://archive.org/details/matematicas-simplificadas-4ta-edicion/page/XVIII/mode/2up?q=3+funciones" target="_blank" style="display: inline-block; background: #6E8B62; color: #FFFFFF; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Leer libro en Archive.org →</a>`
        }
      ]
    },
    // ---------- Primer Parcial: Integrales ----------
    {
      id: "integrales-inmediatas",
      categoria: "Primer Parcial",
      numero: 1,
      titulo: "Integrales Inmediatas",
      subtitulo: "Propiedades básicas y fórmulas directas",
      contenido: [
        {
          tipo: "texto",
          titulo: "¿Qué son las integrales inmediatas?",
          html: `
            <p style="margin: 0 0 1rem; line-height: 1.65;">Las <strong>integrales inmediatas</strong> son las que se resuelven aplicando directamente una fórmula conocida. Son el punto de partida para integrar: basta reconocer la función, usar su antiderivada y añadir la constante de integración.</p>
            <p style="margin: 0; line-height: 1.65;">También puedes usar la linealidad para separar sumas y restas, o sacar una constante fuera de la integral: <code style="font-weight: 700;">∫ [a·f(x) + b·g(x)] dx = a∫f(x)dx + b∫g(x)dx</code>.</p>`
        },
        {
          tipo: "texto",
          titulo: "La regla de la potencia",
          html: `
            <div style="background: #f7fbff; border-left: 4px solid #4a90a4; border-radius: 6px; padding: 1rem 1.1rem; margin: 0;">
              <p style="margin: 0 0 0.65rem; line-height: 1.65;"><strong>Es importante saber:</strong> que para integrar una potencia de <code>x</code>, se suma <strong>1</strong> al exponente y se divide entre ese nuevo exponente.</p>
              <p style="margin: 0 0 0.65rem;"><code style="font-size: 1.05em; font-weight: 700;">∫ x<sup>n</sup> dx = x<sup>n+1</sup> / (n+1) + C</code>, &nbsp; con <code>n ≠ −1</code>.</p>
              <p style="margin: 0; line-height: 1.65;">Por ejemplo: <code style="font-weight: 700;">∫ x<sup>3</sup> dx = x<sup>4</sup>/4 + C</code>. La excepción es <code>∫ 1/x dx = ln|x| + C</code>.</p>
            </div>
            <p style="margin: 1rem 0 0; line-height: 1.65;"><strong>¿Por qué se escribe <code>C</code>?</strong>En realidad puede ser representada por cualquier tipo de letra, al derivar una constante se obtiene cero, por eso una integral indefinida representa una familia de funciones que difieren solo en una constante. Nunca olvides añadir <strong>+ C</strong>.</p>`
        },
        {
          tipo: "texto",
          titulo: "¿Cómo saber si una integral es inmediata?",
          html: `
            <div style="background: #fffaf0; border-left: 4px solid #d69e2e; border-radius: 6px; padding: 1rem 1.1rem;">
              <p style="margin: 0 0 0.65rem;"><strong>Debemos verificar si:</strong></p>
              <ul style="margin: 0; padding-left: 1.25rem; line-height: 1.75;">
                <li>La función coincide con una fórmula conocida: potencia, exponencial, seno, coseno, secante al cuadrado o <code>1/x</code>.</li>
                <li>Solo hay sumas, restas o constantes multiplicando términos; entonces puedes separar y simplificar.</li>
                <li>No aparece una composición que requiera sustitución, un producto que sugiera integración por partes ni una raíz que exija otra técnica.</li>
              </ul>
            </div>`
        },
        {
          tipo: "texto",
          titulo: "Formulas mas usadas:",
          html: `
            <div style="overflow-x: auto; margin: 0;">
              <table style="width: 100%; border-collapse: collapse; border: 1px solid #d9d9d9; border-radius: 8px; overflow: hidden; font-size: 0.96em;">
                <thead>
                  <tr style="background: #f4f4f4;">
                    <th style="border: 1px solid #d9d9d9; padding: 0.75rem; text-align: left;">Función</th>
                    <th style="border: 1px solid #d9d9d9; padding: 0.75rem; text-align: left;">Integral inmediata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>x<sup>n</sup></code>, <code>n ≠ −1</code></td><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>x<sup>n+1</sup>/(n+1) + C</code></td></tr>
                  <tr><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>1/x</code></td><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>ln|x| + C</code></td></tr>
                  <tr><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>e<sup>x</sup></code></td><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>e<sup>x</sup> + C</code></td></tr>
                  <tr><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>sen(x)</code></td><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>−cos(x) + C</code></td></tr>
                  <tr><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>cos(x)</code></td><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>sen(x) + C</code></td></tr>
                  <tr><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>sec<sup>2</sup>(x)</code></td><td style="border: 1px solid #d9d9d9; padding: 0.7rem;"><code>tan(x) + C</code></td></tr>
                </tbody>
              </table>
            </div>`
        },
        {
          tipo: "texto",
          titulo: "Ejemplo aplicado",
          html: `
            <blockquote style="margin: 0; background: #f5faf6; border-left: 4px solid #6e8b62; border-radius: 6px; padding: 1rem 1.1rem;">
              <p style="margin: 0 0 0.65rem;"><strong>Integra:</strong> <code>∫ (4x<sup>3</sup> − 5/x + 2e<sup>x</sup>) dx</code></p>
              <p style="margin: 0 0 0.65rem; line-height: 1.65;">Separamos los términos y aplicamos las fórmulas: <code>4(x<sup>4</sup>/4) − 5ln|x| + 2e<sup>x</sup></code>.</p>
              <p style="margin: 0;"><strong>Resultado:</strong> <code style="font-size: 1.05em; font-weight: 700;">x<sup>4</sup> − 5ln|x| + 2e<sup>x</sup> + C</code></p>
            </blockquote>`
        },
        {
          tipo: "video",
          youtubeId: "kQxTPxZ1HII",
          titulo: "Mira en youtube para ver el curso completo:",
          etiqueta: "Lista de reproducción de ejemplos",
          descripcion: "Esta lista de reproducción contiene ejemplos resueltos de integrales inmediatas para practicar la regla de la potencia y el uso de fórmulas directas."
        }
      ]
    },

    {
      id: "cambio-variable",
      categoria: "Primer Parcial",
      numero: 2,
      titulo: "El método de cambio de variable",
      subtitulo: "Técnica de sustitución u y du",
      contenido: [
        { tipo: "video", youtubeId: "5Ej7FPMxmPA", titulo: "Integrales por cambio de variable" },
        {
          tipo: "texto",
          titulo: "La integración como álgebra aplicada",
          html: `
            <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 240px;">
                <p style="margin: 0; line-height: 1.65;">El <strong>método de cambio de variable</strong>, también llamado sustitución, es una de las herramientas que nos facilitan el trabajo después de las integrales inmediatas. Si las inmediatas son como las tablas de multiplicar, este método es el <strong>álgebra aplicada a la integración</strong>.</p>
              </div>
              <img src="3.png" style="width: 180px; max-width: 100%; height: auto; border-radius: 8px;" alt="Ilustración del método de cambio de variable">
            </div>
            <p style="margin: 1rem 0 0.65rem; line-height: 1.65;"><strong>¿Para qué sirve?</strong> Para resolver integrales que parecen complicadas, pero que son una integral inmediata disfrazada: hay una función dentro de otra y, cerca, aparece la derivada de la función interna.</p>
            <p style="margin: 0; line-height: 1.65;"><strong>Facilita ya que:</strong>Se basa en la regla de la cadena, pero al revés. Cambiamos una expresión compleja por una integral más simple en <code>u</code>.</p>`
        },
        {
          tipo: "texto",
          titulo: "Pasos para sustituir",
          html: `
            <ol style="margin: 0; padding: 1rem 1rem 1rem 2.2rem; background: #fffaf0; border-left: 4px solid #d69e2e; border-radius: 6px; line-height: 1.8;">
              <li><strong>Elige <code>u</code>:</strong> toma, por lo general, la expresión dentro de un paréntesis, raíz o exponente.</li>
              <li><strong>Deriva <code>u</code>:</strong> calcula <code>du</code> y comprueba que aparece, o puede obtenerse, en la integral original.</li>
              <li><strong>Sustituye todo:</strong> reemplaza las <code>x</code> y <code>dx</code> por <code>u</code> y <code>du</code>.</li>
              <li><strong>Integra y regresa:</strong> resuelve en <code>u</code> y vuelve a la expresión original en <code>x</code>.</li>
            </ol>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "∫ 2x (x² + 1)⁵ dx",
          pasos: [
            { titulo: "Identificar u", descripcion: "Se elige la parte interna cuya derivada también aparece en la integral.", formula: "u = x² + 1" },
            { titulo: "Calcular du", descripcion: "Se deriva u respecto de x.", formula: "du = 2x dx" },
            { titulo: "Sustituir", descripcion: "Se reemplaza en la integral original; ya no queda ninguna x.", formula: "∫ 2x (x² + 1)⁵ dx = ∫ u⁵ du" },
            { titulo: "Integrar", descripcion: "Se aplica la regla de la potencia en u.", formula: "∫ u⁵ du = u⁶/6 + C" },
            { titulo: "Regresar a x", descripcion: "Se sustituye u de nuevo por su expresión en x.", formula: "(x² + 1)⁶/6 + C" }
          ]
        }
      ]
    },

    {
      id: "por-partes",
      categoria: "Primer Parcial",
      numero: 3,
      titulo: "Integración por partes",
      subtitulo: "Fórmula uv menos integral de v du",
      contenido: [
        { tipo: "video", youtubeId: "_T7AE2KEaJY", titulo: "Integración por partes" },
        {
          tipo: "texto",
          titulo: "¿Para qué sirve la integración por partes?",
          html: `
            <p style="margin: 0 0 1rem; line-height: 1.65;">La <strong>integración por partes</strong> es importante usarla cuando la integral es el producto de dos funciones que no tienen una relación obvia de derivada entre sí; es decir, cuando el cambio de variable no encaja. Es la <strong>regla del producto</strong> para derivadas escrita al revés.</p>
            <p style="margin: 0; line-height: 1.65;"><strong>La fórmula:</strong> <code style="font-weight: 700;">∫ u·dv = uv − ∫ v·du</code>. Una forma graciosa o facil de recordarla es: <em>“Un Día Vi Una Vaca Vestida De Uniforme”</em>.</p>`
        },
        {
          tipo: "imagen",
          html: `<figure style="margin: 0; text-align: center;">
                   <img src="ILATE.png" style="width: min(100%, 620px); height: auto; border-radius: 10px; box-shadow: 0 5px 16px rgba(36, 50, 42, 0.14);" alt="Regla ILATE: inversas, logarítmicas, algebraicas, trigonométricas y exponenciales">
                   <figcaption style="margin-top: 0.65rem; color: #57685c; line-height: 1.55;"><strong>ILATE</strong> ordena la prioridad para elegir <code>u</code>: la función que aparezca primero en la lista se toma como <code>u</code>, y el resto de la integral se usa como <code>dv</code>.</figcaption>
                 </figure>`
        },
        {
          tipo: "texto",
          titulo: "Cómo elegir u y dv con ILATE",
          html: `
            <ul style="margin: 0; padding: 1rem 1rem 1rem 2.2rem; background: #fdf9e9; border-left: 4px solid #e9cd6e; border-radius: 6px; line-height: 1.8;">
              <li><strong>I:</strong> funciones inversas trigonométricas, como <code>arcsen x</code> o <code>arctan x</code>.</li>
              <li><strong>L:</strong> funciones logarítmicas, como <code>ln x</code>.</li>
              <li><strong>A:</strong> funciones algebraicas, como <code>x²</code>, <code>3x</code> o constantes.</li>
              <li><strong>T:</strong> funciones trigonométricas, como <code>sen x</code> o <code>cos x</code>.</li>
              <li><strong>E:</strong> funciones exponenciales, como <code>e<sup>x</sup></code> o <code>2<sup>x</sup></code>.</li>
            </ul>`
        },
        {
          tipo: "texto",
          titulo: "Pasos para aplicarlo",
          html: `
            <ol style="margin: 0; padding-left: 1.4rem; line-height: 1.8;">
              <li><strong>Identifica:</strong> elige <code>u</code> con ILATE y define <code>dv</code> como lo que sobra, incluido <code>dx</code>.</li>
              <li><strong>Deriva e integra:</strong> calcula <code>du</code> y <code>v</code>.</li>
              <li><strong>Aplica la fórmula:</strong> sustituye en <code>∫ u·dv = uv − ∫ v·du</code>.</li>
              <li><strong>Resuelve:</strong> la nueva integral debe ser más sencilla.</li>
            </ol>`
        },
        {
          tipo: "texto",
          titulo: "¿Cuándo usar partes y cuándo sustitución?",
          html: `
            <div style="border-left: 4px solid #e9cd6e; padding: 0.15rem 0 0.15rem 1rem; line-height: 1.65;">
              <p style="margin: 0 0 0.65rem;"><strong>Cambio de variable:</strong> úsalo cuando una parte de la función es, o contiene, la derivada de otra; así simplificas una composición mediante una sustitución directa.</p>
              <p style="margin: 0;"><strong>Integración por partes:</strong> úsala ante productos de funciones distintas, donde ninguna es la derivada de la otra. Por ejemplo: <code>∫ x·e<sup>x</sup> dx</code>, <code>∫ x·cos x dx</code> o <code>∫ ln x dx</code>.</p>
            </div>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "∫ x eˣ dx",
          pasos: [
            { titulo: "Elegir u y dv", descripcion: "Se identifican las dos partes del producto siguiendo ILATE.", formula: "u = x   ·   dv = eˣ dx" },
            { titulo: "Calcular du y v", descripcion: "Se deriva u y se integra dv.", formula: "du = dx   ·   v = eˣ" },
            { titulo: "Aplicar la fórmula", descripcion: "Se sustituye en ∫u dv = uv − ∫v du.", formula: "x eˣ − ∫ eˣ dx" },
            { titulo: "Integrar y simplificar", descripcion: "Se resuelve la integral restante y se agrupa.", formula: "eˣ(x − 1) + C" }
          ]
        }
      ]
    },

    {
      id: "sustitucion-trigonometrica",
      categoria: "Primer Parcial",
      numero: 4,
      titulo: "Trigonometría: sustitución e integrales",
      subtitulo: "Dos técnicas trigonométricas, explicadas por separado",
      contenido: [
        { tipo: "video", youtubeId: "jjqvOjQFnhI", titulo: "Integrales por sustitución trigonométrica" },
        {
          tipo: "texto",
          titulo: "¿Cómo usarla?",
          html: `
            <div class="trig-info">
              <p>La <strong>sustitución trigonométrica</strong> es un método especializado para resolver integrales con <strong>raíces cuadradas</strong> que no se simplifican fácilmente mediante un cambio de variable simple.</p>
              <p>Su esencia es convertir una expresión algebraica complicada en una identidad trigonométrica, usando triángulos rectángulos, Pitágoras y las funciones seno, coseno o tangente.</p>
              <p><strong>¿Cuándo utilizarla?</strong> Cuando aparezcan raíces de la forma <code>√(a<sup>2</sup> − x<sup>2</sup>)</code>, <code>√(a<sup>2</sup> + x<sup>2</sup>)</code> o <code>√(x<sup>2</sup> − a<sup>2</sup>)</code>. Se usan, respectivamente, sustituciones con seno, tangente y secante.</p>
            </div>`
        },
        {
          tipo: "imagen",
          html: `<figure class="trig-imagen">
                   <img src="trigonométrica.png" alt="Guía visual de sustitución trigonométrica">
                   <figcaption>El triángulo de referencia permite volver desde el ángulo <code>θ</code> hasta la variable original <code>x</code>.</figcaption>
                 </figure>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "∫ dx / √(4 − x²)",
          pasos: [
            { titulo: "Reconocer la forma", descripcion: "El radical √(a² − x²) indica sustitución con seno.", formula: "√(4 − x²), con a = 2" },
            { titulo: "Sustituir x", descripcion: "Se define x en términos de θ y se calcula dx.", formula: "x = 2 senθ   ·   dx = 2 cosθ dθ" },
            { titulo: "Simplificar el radical", descripcion: "Se usa la identidad pitagórica sen²θ + cos²θ = 1 para eliminar la raíz.", formula: "√(4 − x²) = 2 cosθ" },
            { titulo: "Integrar en θ", descripcion: "Los cosθ se cancelan y la integral queda inmediata.", formula: "∫ dθ = θ + C" },
            { titulo: "Regresar a x", descripcion: "Con el triángulo de referencia (cateto opuesto x, hipotenusa 2) se expresa θ en x.", formula: "arcsen(x/2) + C" }
          ]
        },
        {
          tipo: "texto",
          titulo: "Integrales trigonométricas",
          html: `<div class="separador-trig"><span>Segunda técnica</span></div>`

        },
        { tipo: "video", youtubeId: "fr8uzh3pP88", titulo: "Integrales trigonométricas: potencias de seno y coseno" },
        {
          tipo: "texto",
          titulo: "¿Qué son las integrales trigonométricas?",
          html: `
            <div class="trig-info">
              <p>Las <strong>integrales trigonométricas</strong> Suelen contener funciones como seno, coseno, tangente, cotangente, secante o cosecante, a menudo elevadas a potencias.</p>
              <p>Para resolverlas usamos <strong>identidades trigonométricas</strong> que transforman la expresión en una forma más facil de integrar.</p>
            </div>`
        },
        {
          tipo: "texto",
          titulo: "Para resolverlo lo mas usado es:",
          html: `
            <div class="trig-info trig-estrategias">
              <p><strong>Potencias pares de seno y coseno:</strong> usa reducción de potencia, por ejemplo <code>sen<sup>2</sup>(x) = (1 − cos(2x))/2</code>.</p>
              <p><strong>Productos con potencias impares:</strong> separa una función como diferencial y transforma el resto con <code>sen<sup>2</sup>(x) + cos<sup>2</sup>(x) = 1</code>.</p>
              <p><strong>Tangentes y secantes:</strong> aprovecha que <code>d/dx[tan(x)] = sec<sup>2</sup>(x)</code> para aplicar un cambio de variable.</p>
            </div>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "∫ sen²x dx",
          pasos: [
            { titulo: "Identificar la identidad", descripcion: "Una potencia par de seno se reescribe con la fórmula de reducción de potencia.", formula: "sen²x = (1 − cos2x)/2" },
            { titulo: "Reescribir la integral", descripcion: "Se sustituye la identidad dentro del integrando.", formula: "∫ (1 − cos2x)/2 dx" },
            { titulo: "Separar en dos integrales", descripcion: "Se distribuye para integrar cada término por separado.", formula: "(1/2)∫dx − (1/2)∫cos2x dx" },
            { titulo: "Integrar y simplificar", descripcion: "La segunda integral usa un cambio de variable simple (u = 2x).", formula: "x/2 − sen(2x)/4 + C" }
          ]
        },
        {
          tipo: "texto",
          titulo: "Diferencias clave",
          html: `
            <div class="trig-diferencias">
              <section><h4>Integrales trigonométricas</h4><p>Resuelven expresiones que ya contienen <code>sen(x)</code>, <code>cos(x)</code>, <code>tan(x)</code> y otras funciones trigonométricas.</p><p>Usan <strong>identidades trigonométricas</strong>, como <code>sen<sup>2</sup>(x) + cos<sup>2</sup>(x) = 1</code>, para simplificar potencias o productos.</p></section>
              <section><h4>Sustitución trigonométrica</h4><p>Es un <strong>método de resolución</strong> para integrales que originalmente no tienen funciones trigonométricas, por ejemplo raíces como <code>√(a<sup>2</sup> − x<sup>2</sup>)</code>.</p><p>Usa un triángulo rectángulo como puente y al final permite regresar a la variable original <code>x</code>.</p></section>
            </div>`
        }
      ]
    },

    {
      id: "integrales-impropias",
      categoria: "Primer Parcial",
      numero: 5,
      titulo: "Integrales Impropias",
      subtitulo: "Límites de integración infinitos o discontinuidades",
      contenido: [
        {
          tipo: "texto",
          titulo: "Definición y método de resolución",
          html: `
            <div class="trig-info">
              <p><strong>Definición:</strong> una integral es impropia cuando el intervalo de integración es infinito uno o ambos límites son <code>∞</code>— o cuando la función presenta una discontinuidad infinita, como una asíntota vertical, dentro del intervalo.</p>
              <p><strong>El método:</strong> en lugar de tratar el infinito como un número, se sustituye el valor complicado por una variable, por ejemplo <code>t</code>, y se calcula el límite de la integral definida cuando <code>t</code> tiende a ese valor.</p>
              <p><strong>La lógica matemática:</strong> <code>∫<sub>1</sub><sup>∞</sup> f(x) dx = lim<sub>t→∞</sub> ∫<sub>1</sub><sup>t</sup> f(x) dx</code>. Así, la integral se convierte en un límite que sí sabemos evaluar.</p>
            </div>`
        },
        {
          tipo: "texto",
          titulo: "Convergencia y divergencia",
          html: `
            <p style="margin: 0 0 1rem; line-height: 1.65;"><strong>El propósito</strong> es encontrar áreas bajo curvas que se extienden indefinidamente o se disparan hacia el infinito. El resultado no siempre es un número como tal, por eso distinguimos entre convergencia y divergencia.</p>
            <div class="trig-diferencias">
              <section><h4>Integral convergente</h4><p>El límite existe y da un <strong>número real específico</strong>. El área bajo la curva es finita, aunque la curva se extienda al infinito.</p></section>
              <section><h4>Integral divergente</h4><p>El límite no existe o tiende a <code>∞</code> o <code>−∞</code>. El área no se puede cuantificar con un valor finito.</p></section>
            </div>
            <p style="margin: 1rem 0 0; line-height: 1.65;"><strong>Cómo identificarla:</strong> si al evaluar el límite obtienes un número real, como <code>1</code>, <code>0.5</code> o <code>π</code>, la integral converge. Si crece sin límite o no se estabiliza, diverge.</p>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "∫₁^∞ (1/x²) dx",
          pasos: [
            { titulo: "Plantear el límite", descripcion: "Se cambia el infinito por t y se añade la notación de límite.", formula: "lim(t→∞) ∫₁^t x⁻² dx" },
            { titulo: "Hallar la antiderivada", descripcion: "Se aplica la regla de la potencia para x⁻².", formula: "lim(t→∞) [-1/x]₁^t" },
            { titulo: "Evaluar los límites de integración", descripcion: "Se sustituye t y 1 en la función resultante.", formula: "lim(t→∞) [(-1/t) - (-1/1)]" },
            { titulo: "Calcular el límite", descripcion: "Cuando t crece infinitamente, -1/t tiende a 0.", formula: "0 + 1 = 1" }
          ]
        }
      ]
    },

    // ---------- Segundo Parcial ----------
    {
      id: "teorema-fundamental",
      categoria: "Segundo Parcial",
      numero: 1,
      titulo: "Teorema Fundamental del Cálculo",
      subtitulo: "La relación entre derivada e integral",
      contenido: [
        { tipo: "video", youtubeId: "SCKpUCax5ss", titulo: "Teorema Fundamental del Cálculo" },
        {
          tipo: "texto",
          titulo: "Parte 1: Relación entre derivada e integral",
          texto: "Si integramos una función para encontrar su área acumulada y luego derivas ese resultado, vuelves exactamente a la función con la que empezaste. En otras palabras, la integración y la derivación son operaciones contrarias que se anulan entre sí.",
        },
        {
          tipo: "imagen",
          html: `<div style="text-align: center; margin: 1rem 0;"><img src="4.png" style="max-width: 250px; height: auto; border-radius: 8px;" alt="Explicación visual Parte 1"></div>`
        },
        {
          tipo: "texto",
          titulo: "Parte 2: Cálculo de integrales definidas",
          texto: "Nos da una herramienta práctica para calcular el valor de una integral definida sin tener que hacer sumas infinitas (como las sumas de Riemann). Dice que si tienes una función continua y conoces su antiderivada F(x), entonces la integral de a hasta b es simplemente la diferencia: F(b) - F(a)."
        },
        {
          tipo: "imagen",
          html: `<div style="text-align: center; margin: 1rem 0;"><img src="5.png" style="max-width: 140px; height: auto; border-radius: 8px;" alt="Explicación visual Parte 2"></div>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio de ejemplo",
          enunciado: "Calcular la derivada de G(x) = ∫₀ˣ cos(t²) dt",
          pasos: [
            { 
              titulo: "Identificar el formato", 
              descripcion: "La función debe seguir la estructura G(x) = ∫ₐˣ f(t) dt, donde 'a' es una constante y 'x' es el límite superior.", 
              formula: "G(x) = ∫₀ˣ cos(t²) dt" 
            },
            { 
              titulo: "Reconocer la derivación", 
              descripcion: "Al aplicar d/dx, el Teorema Fundamental del Cálculo establece que la derivada y la integral se cancelan bajo esta estructura.", 
              formula: "d/dx [G(x)] = d/dx [∫₀ˣ cos(t²) dt]" 
            },
            { 
              titulo: "Evaluar el integrando", 
              descripcion: "Simplemente tomamos la función dentro de la integral, f(t), y sustituimos la variable 't' por el límite superior 'x'.", 
              formula: "f(t) = cos(t²) → f(x) = cos(x²)" 
            },
            { 
              titulo: "Resultado final", 
              descripcion: "La tasa de cambio de la función definida como integral es igual al integrando evaluado en x.", 
              formula: "G'(x) = cos(x²)" 
            }
          ]
        }
      ]
    },
{
      id: "fracciones-parciales",
      categoria: "Segundo Parcial",
      numero: 2,
      titulo: "Fracciones Parciales",
      subtitulo: "Descomposición de funciones racionales",
      contenido: [
        { tipo: "video", youtubeId: "sIJtWkE-t3w", titulo: "Introducción a fracciones parciales" },
        {
          tipo: "texto",
          titulo: "¿De qué trata este método?",
          texto: "Las fracciones parciales son una técnica algebraica que usamos para descomponer una fracción compleja en una suma de fracciones más simples, lo cual facilita enormemente la integración. Es ideal para funciones racionales P(x)/Q(x) cuando el grado del numerador es menor que el del denominador."
        },
        {
          tipo: "texto",
          titulo: "Caso 1: Factores lineales distintos",
          texto: "Este caso ocurre cuando el denominador se puede factorizar en términos lineales (de primer grado) que no se repiten."
        },
        {
          tipo: "imagen",
          html: `<div style="text-align: center; margin: 1rem 0;"><img src="6.png" style="max-width: 100%; height: auto; border-radius: 8px;" alt="Ejercicio Caso 1"></div>`
        },
        {
          tipo: "texto",
          titulo: "Caso 2: Factores lineales repetidos",
          texto: "Este caso se presenta cuando uno de los factores lineales aparece elevado a una potencia, lo que significa que el factor se repite. Debemos incluir una fracción por cada potencia del factor, desde la potencia 1 hasta n."
        },
        {
          tipo: "imagen",
          html: `<div style="text-align: center; margin: 1rem 0;"><img src="7.png" style="max-width: 100%; height: auto; border-radius: 8px;" alt="Ejercicio Caso 2"></div>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio de ejemplo — Caso 1",
          enunciado: "∫ (5x − 4) / (x² − x − 2) dx",
          pasos: [
            { titulo: "Factorizar el denominador", descripcion: "Se descompone Q(x) en factores lineales distintos.", formula: "x² − x − 2 = (x − 2)(x + 1)" },
            { titulo: "Plantear la descomposición", descripcion: "Cada factor lineal distinto aporta una fracción simple.", formula: "(5x − 4)/[(x − 2)(x + 1)] = A/(x − 2) + B/(x + 1)" },
            { titulo: "Igualar numeradores", descripcion: "Se multiplican ambos lados por el denominador común.", formula: "5x − 4 = A(x + 1) + B(x − 2)" },
            { titulo: "Evaluar en las raíces", descripcion: "Se sustituye cada raíz del denominador para hallar A y B directamente.", formula: "x = 2 → A = 2   ·   x = −1 → B = 3" },
            { titulo: "Integrar cada término", descripcion: "Cada fracción simple se integra como un logaritmo natural.", formula: "2 ln|x − 2| + 3 ln|x + 1| + C" }
          ]
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio de ejemplo — Caso 2",
          enunciado: "∫ (x + 3) / (x − 1)² dx",
          pasos: [
            { titulo: "Identificar el factor repetido", descripcion: "El denominador es un único factor lineal elevado al cuadrado.", formula: "(x − 1)²" },
            { titulo: "Plantear la descomposición", descripcion: "El factor repetido aporta un término por cada potencia, del 1 hasta n.", formula: "(x + 3)/(x − 1)² = A/(x − 1) + B/(x − 1)²" },
            { titulo: "Igualar numeradores", descripcion: "Se multiplica por el denominador común (x − 1)².", formula: "x + 3 = A(x − 1) + B" },
            { titulo: "Hallar A y B", descripcion: "Se evalúa x = 1 para B, y se iguala el coeficiente de x para A.", formula: "B = 4   ·   A = 1" },
            { titulo: "Integrar cada término", descripcion: "El primer término da un logaritmo; el segundo, una potencia.", formula: "ln|x − 1| − 4/(x − 1) + C" }
          ]
        }
      ]
    },
{
      id: "area-bajo-curva",
      categoria: "Segundo Parcial",
      numero: 3,
      titulo: "Área bajo la curva",
      subtitulo: "De la aproximación por rectángulos a la integral definida",
      contenido: [
        { tipo: "video", youtubeId: "klGkb-joHH0", titulo: "Cómo calcular el área bajo la curva" },
        {
          tipo: "texto",
          titulo: "1. La interpretación de la suma (El origen)",
          html: `
            <p>El área bajo una curva se puede aproximar con rectángulos igualmente espaciados bajo una curva. Para mayor consistencia.</p>
            <ul>
              <li><strong>Partición:</strong> El intervalo [a, b] se divide en subintervalos de igual tamaño.</li>
              <li><strong>Altura:</strong> La altura de cada rectángulo se define según el valor de la función f(x) en el subintervalo.</li>
              <li><strong>Aproximación:</strong> Puedes elegir si las cajas golpean la curva en la esquina izquierda (cajas para zurdos), derecha, el valor máximo o el valor mínimo. Cuantas más cajas uses, más estrechas serán y más precisa será la aproximación.</li>
              <li><strong>Límite:</strong> Cuando el número de rectángulos tiende a infinito, la suma de sus áreas converge exactamente al valor de la integral definida.</li>
            </ul>`
        },
        {
          tipo: "imagen",
          html: `<div style="text-align: center; margin: 1rem 0;"><img src="8.png" style="max-width: 400px; height: auto; border-radius: 8px;" alt="Ejercicio Caso 2"></div>`
        },
        {
          tipo: "texto",
          titulo: "2. El proceso de cálculo paso a paso",
          texto: "Para resolver un ejercicio de este tipo, el flujo de trabajo es: 1. Definir los límites del intervalo [a, b]. 2. Plantear la integral ∫ₐᵇ f(x) dx. 3. Integrar para hallar la antiderivada F(x). 4. Aplicar el Teorema Fundamental del Cálculo calculando F(b) - F(a)."
        },
        {
          tipo: "texto",
          titulo: "3. Consideración crítica: Signos y Eje X",
          html: `
            <p>Un detalle que suele causar confusión en los exámenes es cuando la curva cruza el eje x:</p>
            <ul>
              <li><strong>Área Neta:</strong> Si se integra directamente, las partes debajo del eje x restan al resultado total (área negativa).</li>
              <li><strong>Área Física (Total):</strong> Para medir una superficie real, debes identificar los cruces con el eje x y calcular el valor absoluto de las secciones por separado: ∫ₐᶜ |f(x)| dx = ∫ₐᶜ f(x) dx + |∫_cᵇ f(x) dx|.</li>
            </ul>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "Calcular el área bajo la curva f(x) = x², entre x = 0 y x = 3.",
          pasos: [
            { titulo: "Plantear la integral", descripcion: "El área es la integral definida de f(x) en [a, b].", formula: "A = ∫₀³ x² dx" },
            { titulo: "Hallar la antiderivada", descripcion: "Se aplica la regla de la potencia.", formula: "A = [x³/3]₀³" },
            { titulo: "Evaluar los límites", descripcion: "Se sustituyen el límite superior y el inferior, y se restan.", formula: "A = 27/3 − 0" },
            { titulo: "Resultado", descripcion: "Se simplifica la expresión final.", formula: "A = 9 u²" }
          ]
        }
      ]
    },
{
      id: "volumen-revolucion",
      categoria: "Segundo Parcial",
      numero: 4,
      titulo: "Volumen de Sólido de Revolución",
      subtitulo: "Métodos de Discos, Arandelas y Capas Cilíndricas",
      contenido: [
        { tipo: "video", youtubeId: "BgJhiXhuFhk", titulo: "Volumen de sólido de revolución" },
        {
          tipo: "texto",
          titulo: "¿Qué es un sólido de revolución?",
          html: `
            <p>El <strong>Volumen de un Sólido de Revolución</strong> es la extensión tridimensional del área bajo la curva. Es como imaginar que tomas una región plana y la haces girar rápidamente alrededor de una línea (el eje de rotación, usualmente el eje x o el eje y). Al girar, esa área "barre" un volumen en el espacio.</p>`
        },
        {
          tipo: "texto",
          titulo: "Los dos métodos principales",
          html: `
            <p>Existen dos métodos clásicos para calcular este volumen:</p>
            <ol>
              <li><strong>Método de los Discos:</strong> Cortamos el sólido en rebanadas perpendiculares al eje de rotación[cite: 5]. 
                <ul>
                  <li>Corte sólido (Disco): Area = π · r²</li>
                  <li>Corte con hueco (Arandela): Area = π · (R² - r²)</li>
                </ul>
                La integral es: V = ∫ₐᵇ π · [Radio(x)]² dx.
              </li>
              <li><strong>Método de las Capas Cilíndricas:</strong> Rebanas el sólido paralelo al eje de rotación, creando capas finas como las de una cebolla[cite: 5].
                La integral es: V = ∫ₐᵇ 2π · (radio) · (altura) dx.
              </li>
            </ol>`
        },
        {
          tipo: "imagen",
          html: `<div style="text-align: center; margin: 1rem 0;"><img src="9.png" style="max-width: 100%; height: auto; border-radius: 8px;" alt="Sólido de revolución"></div>`
        },
        {
          tipo: "texto",
          titulo: "¿Cómo decidir cuál usar?",
          html: `
            <ul>
              <li><strong>Discos/Arandelas:</strong> Se usan cuando el rectángulo de referencia es <strong>perpendicular</strong> al eje de rotación.</li>
              <li><strong>Capas Cilíndricas:</strong> Se usan cuando el rectángulo de referencia es <strong>paralelo</strong> al eje de rotación, ideal cuando es más fácil integrar respecto a la variable opuesta.</li>
            </ul>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "Hallar el volumen generado al girar f(x) = √x alrededor del eje X, entre x = 0 y x = 4.",
          pasos: [
            { titulo: "Identificar el método", descripcion: "Se gira f(x) alrededor del eje X: aplica el método de discos.", formula: "V = π ∫₀⁴ [f(x)]² dx" },
            { titulo: "Elevar al cuadrado", descripcion: "Se sustituye f(x) = √x y se simplifica el cuadrado.", formula: "[√x]² = x" },
            { titulo: "Integrar", descripcion: "Se resuelve con la regla de la potencia.", formula: "V = π [x²/2]₀⁴" },
            { titulo: "Evaluar y simplificar", descripcion: "Se sustituyen los límites de integración.", formula: "V = 8π u³" }
          ]
        }
      ]
    },
 {
      id: "longitud-curva",
      categoria: "Segundo Parcial",
      numero: 5,
      titulo: "Longitud de una curva",
      subtitulo: "Cálculo de longitud de arco",
      contenido: [
        { tipo: "video", youtubeId: "-pvD-Ile0Go", titulo: "Longitud de arco con integrales" },
        {
          tipo: "texto",
          titulo: "¿Qué es la longitud de una curva?",
          html: `
            <p>La longitud de una curva es una aplicación del cálculo que nos permite determinar la distancia total recorrida a lo largo de una función f(x) en un intervalo dado [a, b], como si estuviéramos "estirando" la curva y midiéndola con una regla.</p>`
        },
        {
          tipo: "texto",
          titulo: "El concepto matemático",
          html: `
            <p>A diferencia de una línea recta, donde la distancia es fácil de medir, una curva cambia de dirección constantemente. Para resolver esto, el cálculo utiliza un enfoque similar al de la distancia entre dos puntos (Pitágoras):</p>
            <ul>
              <li>Se divide la curva en segmentos infinitesimales extremadamente pequeños.</li>
              <li>Cada segmento se aproxima como una pequeña línea recta (hipotenusa de un triángulo minúsculo).</li>
              <li>Sumamos (integramos) la longitud de todos estos segmentos para obtener el total.</li>
            </ul>`
        },
       
        {
          tipo: "texto",
          titulo: "La fórmula clave",
          html: `
            <p>Para una función f(x) que es derivable en el intervalo [a, b], la longitud de arco L se calcula mediante la siguiente integral:</p>
            <p style="text-align: center; font-size: 1.2em;"><strong>L = ∫ₐᵇ √(1 + [f'(x)]²) dx</strong></p>`
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "Calcular la longitud de f(x) = (2/3)x^(3/2), entre x = 0 y x = 3.",
          pasos: [
            { titulo: "Derivar f(x)", descripcion: "Se calcula f'(x) para usarla en la fórmula de longitud de arco.", formula: "f'(x) = √x" },
            { titulo: "Plantear la integral", descripcion: "Se sustituye en L = ∫√(1 + [f'(x)]²) dx.", formula: "L = ∫₀³ √(1 + x) dx" },
            { titulo: "Integrar", descripcion: "Se aplica la regla de la potencia generalizada.", formula: "L = [(2/3)(1 + x)^(3/2)]₀³" },
            { titulo: "Evaluar y simplificar", descripcion: "Se sustituyen los límites de integración.", formula: "L = 14/3 u" }
          ]
        }
      ]
    },

    {
      id: "cinematica",
      categoria: "Segundo Parcial",
      numero: 6,
      titulo: "Cinemática",
      subtitulo: "Posición, velocidad y aceleración",
      contenido: [
        { tipo: "video", youtubeId: "YXkFshUGU0Q", titulo: "Integrales aplicadas a la cinemática" },
        {
          tipo: "texto",
          titulo: "¿De qué trata este método?",
          texto: "La cinemática es la rama de la física que se encarga de estudiar el movimiento de los objetos sin preocuparse por las causas que lo provocan, es decir, sin tomar en cuenta las fuerzas. Utilizando tres conceptos clave: la posición, la velocidad y la aceleración, así que si a(t) es la aceleración, integrando una vez se obtiene la velocidad v(t) = ∫ a(t) dt, y volviendo a integrar se obtiene la posición s(t) = ∫ v(t) dt. Las constantes de integración se hallan con las condiciones iniciales (v(0), s(0)).",
          formulaClave: "s(t) = ∫ v(t) dt = ∫∫ a(t) dt dt"
        },
        {
          tipo: "ejercicio",
          titulo: "Ejercicio resuelto",
          enunciado: "Una partícula tiene a(t) = 6t (m/s²), con v(0) = 2 m/s y s(0) = 1 m. Hallar s(t) y la posición en t = 2 s.",
          pasos: [
            { titulo: "Integrar la aceleración", descripcion: "Se integra a(t) para obtener v(t); la constante sale de v(0) = 2.", formula: "v(t) = 3t² + 2" },
            { titulo: "Integrar la velocidad", descripcion: "Se integra v(t) para obtener s(t); la constante sale de s(0) = 1.", formula: "s(t) = t³ + 2t + 1" },
            { titulo: "Evaluar en t = 2", descripcion: "Se sustituye t = 2 en la función de posición.", formula: "s(2) = 8 + 4 + 1" },
            { titulo: "Resultado", descripcion: "Posición de la partícula a los 2 segundos.", formula: "s(2) = 13 m" }
          ]
        }
      ]
    }
  ]
};
