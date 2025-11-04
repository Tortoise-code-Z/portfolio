import {
  librariesUtils,
  stylesDesign,
  svg,
  tools,
  typeWeb,
  visibility,
} from "./bbdd_consts.js";

const bbdd = {
  aboutDesc: [
    "Comencé a programar de forma independiente en 2022 con CSS Y HTML. Luego de unos meses estudiando, decidí comenzar un curso superior fullstack.",
    "En él, puse a prueba mis habilidades tanto en el lado del cliente como en el backend. Sin embargo, no hay nada que me haya fascinado más que el frontend. Tanto diseñar como programar layouts es una pasión de la que quiero seguir aprendiendo y aportando a todo el que requiera de mi trabajo.",
    "El 9 de noviembre de 2024 finalicé el curso con una nota media de 9.86. Ahora, sigo estudiando por mi cuenta cursos de React + typescript y Git para ofrecer mi mejor versión en este mundo.",
  ],

  strengths: [
    {
      name: "Trabajador",
      iconRef: svg.worker,
    },
    {
      name: "Comunicación",
      iconRef: svg.comunication,
    },
    {
      name: "Perseverancia",
      iconRef: svg.perseverance,
    },
  ],
  works: [
    {
      id: 1,
      name: "Chessmate",
      shortDescription: "Página de aprendizaje de ajedrez",
      about: {
        description: [
          "Chessmate es una plataforma web moderna para aprender ajedrez online mediante cursos interactivos.",
          "Fue diseñada desde cero en Figma y desarrollada con React + TypeScript, simulando un backend completo desde el cliente.",
        ],
        cards: [
          {
            id: 1,
            title: "Registro y login",
            svg: svg.key,
          },
          {
            id: 2,
            title: "Filtro y búsqueda de cursos",
            svg: svg.search,
          },
          {
            id: 3,
            title: "Compra de cursos",
            svg: svg.shop,
          },
          {
            id: 4,
            title: "Dashboard personalizado",
            svg: svg.dashboard,
          },
          {
            id: 5,
            title: "Classrooms virtuales",
            svg: svg.study,
          },
          {
            id: 6,
            title: "Seguimiento de progreso",
            svg: svg.progressCheck,
          },
        ],
      },
      projectRole: typeWeb.frontend,
      year: "2025",
      visibility: visibility.private,
      techStack: {
        tools: {
          fastTools: [
            { id: 1, tool: tools.react },
            { id: 2, tool: tools.ts },
            { id: 3, tool: tools.git },
          ],
          allTools: [
            { id: 1, tool: tools.react },
            { id: 2, tool: tools.ts },
            { id: 3, tool: tools.git },
            { id: 4, tool: tools.vite },
            { id: 5, tool: tools.npm },
            { id: 6, tool: tools.ia },
          ],
        },
        librariesUtils: [
          { id: 1, item: librariesUtils.rQuery },
          { id: 2, item: librariesUtils.zod },
          { id: 3, item: librariesUtils.resolvers },
          { id: 4, item: librariesUtils.zustand },
          { id: 5, item: librariesUtils.rrd },
          { id: 6, item: librariesUtils.rhf },
          { id: 7, item: librariesUtils.eCarrousel },
          { id: 8, item: librariesUtils.rPlayer },
          { id: 9, item: librariesUtils.localstorage },
        ],
        stylesDesign: [
          { id: 1, item: stylesDesign.cssModule },
          { id: 2, item: stylesDesign.figma },
          { id: 3, item: stylesDesign.responsive },
        ],
      },
      development_process: {
        description: [
          "Chessmate se diseñó y desarrolló desde cero con el objetivo de simular una plataforma real de aprendizaje online, pero completamente del lado del cliente, sin backend. El enfoque principal fue rehacer un proyecto anterior de Chessmate e implementarlo con mis nuevos conocimientos actuales de diseño y código.",
          "La arquitectura se planificó  desde Figma, definiendo componentes reutilizables para cada sección (Home, Courses, Dashboard, Classroom, etc). En el desarrollo, utilicé React + TypeScript junto con Zustand para el estado global y React Query para manejar los datos simulados desde localStorage, imitando llamadas a una API real. Con este sistema podría realizar compras, progreso y autenticación sin depender de un servidor, mostrando mensajes y comportamientos dinámicos ante errores o rutas inválidas.",
          "Las rutas privadas se implementaron con React Router Dom, mientras que los formularios se validaron con React Hook Form y Zod. En el apartado visual, CSS Modules, Embla Carousel y React Player ayudaron a mantener un diseño con animaciones suaves y buena performance gracias a la optimización con Vite.",
        ],
        cards: [
          {
            id: 1,
            title: "Validación y feedback visual ante posibles errores",
            svg: svg.warning,
          },
          {
            id: 2,
            title: "Protección de rutas",
            svg: svg.padlock,
          },
          {
            id: 3,
            title: "Sincronización en tiempo real entre componentes",
            svg: svg.sync,
          },
          {
            id: 4,
            title: "Optimización de rendimiento con React-Query",
            svg: svg.tachometer,
          },
        ],
        warningMsg: {
          title:
            "En la versión desplegada en GitHub Pages, se utiliza createHashRouter porque GitHub solo sirve contenido estático y no permite redirecciones dinámicas a rutas profundas.",
          description:
            "Sin embargo, en desarrollo local, puedes cambiar a createBrowserRouter para probar la navegación real con URLs limpias. Esto te permitirá probar protección de rutas y navegación directa (/dashboard, /course/:id, /classroom) como en un entorno de backend real.",
        },
      },
      images: {
        screenshots: [
          {
            id: 1,
            src: "chessmate/screenshot-index.png",
            width: "1920",
            heigth: "922",
            alt: "Home",
          },
          {
            id: 2,
            src: "chessmate/screenshot-classroom.png",
            width: "1920",
            heigth: "911",
            alt: "Classroom",
          },
          {
            id: 3,
            src: "chessmate/screenshot-contact.png",
            width: "1920",
            heigth: "911",
            alt: "Contact",
          },
          {
            id: 4,
            src: "chessmate/screenshot-course-detail.png",
            width: "1920",
            heigth: "914",
            alt: "Course Detail",
          },
          {
            id: 5,
            src: "chessmate/screenshot-course-obtained-classroom.png",
            width: "1920",
            heigth: "909",
            alt: "Course Obtained Classroom",
          },
          {
            id: 6,
            src: "chessmate/screenshot-courses.png",
            width: "1920",
            heigth: "916",
            alt: "Courses",
          },
          {
            id: 7,
            src: "chessmate/screenshot-dashboard.png",
            width: "1920",
            heigth: "906",
            alt: "Dashboard",
          },
          {
            id: 8,
            src: "chessmate/screenshot-login.png",
            width: "1920",
            heigth: "911",
            alt: "Login",
          },
          {
            id: 9,
            src: "chessmate/screenshot-register.png",
            width: "1920",
            heigth: "909",
            alt: "Register",
          },
        ],
        backgroundImg: {
          src: "Chessmate.webp",
          width: "1920",
          heigth: "922",
          alt: "Chessmate",
        },
        workImg: {
          src: "Chessmate-Caricatura.webp",
          width: "1280",
          heigth: "1280",
          alt: "Chessmate",
        },
      },
      config: {
        description: [
          "Para probar comportamientos de error o feedback dinámico, puedes ejecutar directamente código en la consola del navegador para manipular los datos simulados de la “base de datos local”.",
          "Asegúrate de tener la aplicación abierta en modo desarrollo (npm run dev) o en la demo activa.",
        ],
        steps: [
          {
            id: 1,
            title: "Iniciar sesión o registrarte",
            description:
              "Recuerda iniciar sesión en la web (puedes registrarte o usar: usuario -> admin, contraseña -> 1234; si quieres saltarte el paso del registro), para poder estar en el Dashboard y ver toda la lógica de una vez.",
          },
          {
            id: 2,
            title: "'Compra' varios cursos",
            description:
              "Una vez inicias sesión, ve a la page 'Cursos' y en la sección 'Todos los cursos' compra los 2 primeros.",
          },
          {
            id: 3,
            title: "Código para ejecutar en la consola del navegador",
            description: "",
          },
          {
            id: 4,
            title: "Refrescar la página y explorar la aplicación",
            description:
              "Después de guardar los cambios en localStorage, simplemente refresca la página. Podrás observar mensajes por defecto y feedback visual en las secciones que lo requieran.",
          },
          {
            id: 5,
            title: "Ver feedback en cursos por defecto",
            description:
              "Ingresa a 'Caballos' para ver el mensaje de feedback en su Classroom.",
          },
          {
            id: 6,
            title: "Ver feedback en cursos por obtenidos/comprados",
            description:
              "Ingresa a 'Aperturas fundamentales'(ID: 2, previamente comprado en el Paso 2) para observar:Mensajes de feedback.Temas desactivados por seguridad.",
          },
        ],
        noteMsg: {
          title: "Nota",
          description:
            "Para mantener la interfaz limpia, no se han forzado errores en todos los elementos, solo en algunos, con el objetivo de mostrar la funcionalidad de manera clara.",
        },
      },
      links: {
        github: "https://github.com/Tortoise-code-Z/Chessmate-react",
        demo: "https://tortoise-code-z.github.io/Chessmate-react/",
      },
    },
    {
      id: 2,
      name: "Portfolio Web",
      shortDescription:
        "Sitio personal de presentación y proyectos de Víctor Pérez",
      about: {
        description: [
          "Este Portfolio Web es una página personal desarrollada desde cero para mostrar proyectos, habilidades y experiencia como desarrollador frontend.",
          "El sitio fue diseñado en Figma y desarrollado con HTML, CSS y JavaScript puro, priorizando la optimización, la claridad del código y la fluidez en la experiencia de usuario.",
          "Incluye animaciones suaves y un diseño completamente responsive para adaptarse a cualquier dispositivo.",
        ],
        cards: [
          {
            id: 1,
            title: "Diseño responsive",
            svg: svg.responsive,
          },
          {
            id: 2,
            title: "Frontend puro sin frameworks",
            svg: svg.code,
          },
          {
            id: 3,
            title: "Animaciones suaves y transiciones",
            svg: svg.motion,
          },
          {
            id: 4,
            title: "Optimización de rendimiento",
            svg: svg.tachometer,
          },
          {
            id: 5,
            title: "Estructura modular y escalable",
            svg: svg.structure,
          },
          {
            id: 6,
            title: "Diseño atractivo e intuitivo",
            svg: svg.design,
          },
        ],
      },
      projectRole: typeWeb.private,
      year: "2025",
      visibility: visibility.private,
      techStack: {
        tools: {
          fastTools: [
            { id: 1, tool: tools.html },
            { id: 2, tool: tools.css },
            { id: 3, tool: tools.js },
          ],
          allTools: [
            { id: 1, tool: tools.html },
            { id: 2, tool: tools.css },
            { id: 3, tool: tools.js },
            { id: 4, tool: tools.vite },
            { id: 5, tool: tools.git },
            { id: 6, tool: tools.npm },
            { id: 7, tool: tools.figma },
            { id: 8, tool: tools.ia },
          ],
        },
        librariesUtils: [],
        stylesDesign: [
          { id: 1, item: stylesDesign.figma },
          { id: 2, item: stylesDesign.responsive },
        ],
      },
      development_process: {
        description: [
          "El desarrollo del portfolio comenzó con un enfoque centrado en la simplicidad y la velocidad, construyendo toda la arquitectura con HTML, CSS y JavaScript puro para mantener un control total sobre el código.",
          "Se empleó Vite como entorno de desarrollo moderno para acelerar la carga y permitir un flujo de trabajo fluido. Cada sección (Hero, About, Works, Skills, Career, Contact) fue estructurada con código modular y reutilizable.",
          "El diseño se planificó en Figma antes de la implementación, buscando una experiencia limpia y profesional, con animaciones suaves y buena jerarquía visual.",
        ],
        cards: [
          {
            id: 1,
            title: "Diseño planificado desde Figma",
            svg: svg.design,
          },
          {
            id: 2,
            title: "Estructura semántica en HTML5",
            svg: svg.structure,
          },
          {
            id: 3,
            title: "CSS modular para escalabilidad",
            svg: svg.brush,
          },
          {
            id: 4,
            title: "Optimización de rendimiento con Vite",
            svg: svg.tachometer,
          },
        ],
        noteMsg: {
          title: "Nota",
          description:
            "Este portfolio está construido íntegramente en frontend. No utiliza frameworks ni dependencias complejas para mantener su rendimiento óptimo y simplicidad de mantenimiento.",
        },
      },
      images: {
        screenshots: [
          {
            id: 1,
            src: "screenshot-hero.png",
            width: "1920",
            heigth: "911",
            alt: "Hero",
          },
          {
            id: 2,
            src: "screenshot-about.png",
            width: "1920",
            heigth: "913",
            alt: "About",
          },
          {
            id: 3,
            src: "screenshot-works-1.png",
            width: "1920",
            heigth: "907",
            alt: "Works-1",
          },
          {
            id: 4,
            src: "screenshot-works-2.png",
            width: "1920",
            heigth: "919",
            alt: "Works-2",
          },
          {
            id: 5,
            src: "screenshot-skills.png",
            width: "1920",
            heigth: "909",
            alt: "Skills",
          },
          {
            id: 6,
            src: "screenshot-career.png",
            width: "1920",
            heigth: "911",
            alt: "Career",
          },
        ],
        backgroundImg: {
          src: "Portfolio-Proyect.webp",
          width: "1920",
          heigth: "911",
          alt: "Portfolio",
        },
        workImg: {
          src: "Portfolio-Caricatura1.webp",
          width: "1280",
          heigth: "1280",
          alt: "Portfolio",
        },
      },
      config: {
        description: [
          "El proyecto puede ejecutarse fácilmente en entorno local para explorarlo/modificarlo o en la demo web directamente.",
          "En caso de querer ejecutarlo en local, asegúrate de tener Node.js y npm instalados antes de comenzar.",
        ],
        steps: [
          {
            id: 1,
            title: "Clonar el repositorio",
            description:
              "Ejecuta `git clone https://github.com/Tortoise-code-Z/portfolio` en tu terminal.",
          },
          {
            id: 2,
            title: "Instalar dependencias",
            description:
              "Navega al directorio del proyecto (`cd portfolio`) y ejecuta `npm install`.",
          },
          {
            id: 3,
            title: "Ejecutar en modo desarrollo",
            description:
              "Corre `npm run dev` y abre el enlace local en tu navegador para ver el portfolio.",
          },
          {
            id: 4,
            title: "Personalización",
            description:
              "Puedes editar los archivos en `/src/js/` y `/src/css/` para cambiar estilos, texto o estructura.",
          },
        ],
      },
      links: {
        github: "https://github.com/Tortoise-code-Z/portfolio",
        demo: "https://tortoise-code-z.github.io/portfolio/",
      },
    },
    {
      id: 3,
      name: "Astrohub",
      shortDescription: "Aplicación web completa sobre el universo.",
      about: {
        description: [
          "Astrohub es una aplicación web dinámica y completa desarrollada como proyecto final del módulo de desarrollo web del curso FullStack, MasterD.",
          "Inspirada en el universo y la exploración espacial, combina: frontend, backend y base de datos.",
          "El sistema permite registro de usuarios, gestión de perfiles, administración de noticias y control de citas astronómicas, todo desarrollado con HTML, CSS, JavaScript, PHP y MySQL.",
          "El proyecto fue probado y ejecutado en entorno local utilizando XAMPP, integrando tanto la parte pública como los paneles internos de usuario y administrador.",
        ],
        cards: [
          {
            id: 1,
            title: "Registro y autenticación de usuarios",
            svg: svg.key,
          },
          {
            id: 2,
            title: "Gestión de noticias astronómicas",
            svg: svg.news,
          },
          {
            id: 3,
            title: "Panel de administración completo",
            svg: svg.dashboard,
          },
          {
            id: 4,
            title: "Citas astronómicas interactivas",
            svg: svg.calendar,
          },
          {
            id: 5,
            title: "Validación de formularios y contraseñas cifradas",
            svg: svg.security,
          },
          {
            id: 6,
            title: "Diseño responsive con HTML5 y CSS3",
            svg: svg.responsive,
          },
        ],
      },
      projectRole: typeWeb.fullStack,
      year: "2024",
      visibility: visibility.course,
      techStack: {
        tools: {
          fastTools: [
            { id: 1, tool: tools.html },
            { id: 2, tool: tools.css },
            { id: 3, tool: tools.js },
            { id: 4, tool: tools.php },
            { id: 5, tool: tools.mysql },
            { id: 6, tool: tools.apache },
          ],
          allTools: [
            { id: 1, tool: tools.html },
            { id: 2, tool: tools.css },
            { id: 3, tool: tools.js },
            { id: 4, tool: tools.php },
            { id: 5, tool: tools.mysql },
            { id: 8, tool: tools.apache },
          ],
        },
        librariesUtils: [],
        stylesDesign: [
          { id: 1, item: stylesDesign.figma },
          { id: 2, item: stylesDesign.responsive },
        ],
      },
      development_process: {
        description: [
          "Astrohub se desarrolló con un enfoque completo, abarcando tanto frontend como backend. La parte visual fue implementada con HTML5, CSS3 y JavaScript, mientras que la lógica del servidor y la gestión de datos se manejaron mediante PHP y MySQL.",
          "El sistema de autenticación y roles (visitante, usuario y administrador) permite controlar el acceso a cada sección del sitio, gestionando noticias, citas y perfiles desde paneles diferenciados.",
          "La base de datos se creó e importó desde phpMyAdmin y se ejecutó localmente en XAMPP, garantizando un entorno de pruebas funcional y realista.",
        ],
        cards: [
          {
            id: 1,
            title: "Autenticación y roles de usuario",
            svg: svg.key,
          },
          {
            id: 2,
            title: "Paneles separados para usuarios y administradores",
            svg: svg.dashboard,
          },
          {
            id: 3,
            title: "Gestión completa de base de datos con MySQL",
            svg: svg.database,
          },
          {
            id: 4,
            title: "Integración local con XAMPP",
            svg: svg.server,
          },
        ],
        warningMsg: {
          title: "El proyecto funciona en entorno local",
          description:
            "Astrohub está diseñado para ejecutarse con XAMPP (Apache + PHP + MySQL). Para probarlo, es necesario importar la base de datos y acceder desde http://localhost/astrohub/.",
        },
      },
      images: {
        screenshots: [
          {
            id: 1,
            src: "astrohub/screenshot-inicio.png",
            width: "1920",
            heigth: "916",
            alt: "Home",
          },
          {
            id: 2,
            src: "astrohub/screenshot-noticias.png",
            width: "1920",
            heigth: "913",
            alt: "News",
          },
          {
            id: 3,
            src: "astrohub/screenshot-citas.png",
            width: "1920",
            heigth: "911",
            alt: "Cites",
          },
          {
            id: 4,
            src: "astrohub/screenshot--login.png",
            width: "1920",
            heigth: "914",
            alt: "Login",
          },
          {
            id: 5,
            src: "astrohub/screenshot-registro.png",
            width: "1920",
            heigth: "911",
            alt: "Register",
          },
          {
            id: 6,
            src: "astrohub/screenshot-perfil.png",
            width: "1920",
            heigth: "913",
            alt: "Profile",
          },
          {
            id: 7,
            src: "astrohub/screenshot-admin-usuarios.png",
            width: "1920",
            heigth: "916",
            alt: "Users Admin",
          },
          {
            id: 8,
            src: "astrohub/screenshot-admin-noticias.png",
            width: "1920",
            heigth: "914",
            alt: "News Admin",
          },
          {
            id: 9,
            src: "astrohub/screenshot-admin-citas.png",
            width: "1920",
            heigth: "911",
            alt: "Cites Admin",
          },
          {
            id: 10,
            src: "astrohub/screenshot-admin-editar-usuarios.png",
            width: "1920",
            heigth: "911",
            alt: "Edit Users Admin",
          },
          {
            id: 11,
            src: "astrohub/screenshot-admin-editar-noticias.png",
            width: "1920",
            heigth: "913",
            alt: "Edit News Admin",
          },
          {
            id: 12,
            src: "astrohub/screenshot-admin-editar-cita.png",
            width: "1920",
            heigth: "913",
            alt: "Edit Cite Admin",
          },
        ],
        backgroundImg: {
          src: "Astrohub-Proyect.webp",
          width: "1920",
          heigth: "911",
          alt: "Astrohub",
        },
        workImg: {
          src: "Astrohub-Proyect-Caricature.webp",
          width: "1280",
          heigth: "1280",
          alt: "Astrohub",
        },
      },
      config: {
        description: [
          "Astrohub se ejecuta localmente mediante XAMPP. Para instalarlo, copia la carpeta del proyecto dentro de `htdocs` y configura la base de datos en phpMyAdmin.",
          "El archivo `astrohub.sql` incluido permite importar toda la estructura y los datos necesarios.",
        ],
        steps: [
          {
            id: 1,
            title: "Instalar XAMPP",
            description: "Descarga e instala XAMPP (con Apache, PHP y MySQL).",
          },
          {
            id: 2,
            title: "Mover carpeta del proyecto",
            description:
              "Copia la carpeta `astrohub` dentro de la carpeta `htdocs` de XAMPP.",
          },
          {
            id: 3,
            title: "Iniciar servicios",
            description: "Desde el panel de XAMPP, inicia Apache y MySQL.",
          },
          {
            id: 4,
            title: "Configurar base de datos",
            description:
              "Abre phpMyAdmin, crea una base de datos y importa el archivo `astrohub.sql`.",
          },
          {
            id: 5,
            title: "Abrir el sitio en el navegador",
            description:
              "Visita http://localhost/astrohub/ para probar la aplicación.",
          },
          {
            id: 6,
            title: "Acceso de prueba",
            description:
              "Usuario: `lisa12` / Contraseña: `123456` (usuario normal) — Usuario: `root` / Contraseña: `1234567` (administrador).",
          },
        ],
        noteMsg: {
          title: "Nota",
          description:
            "Este proyecto fue desarrollado con fines educativos y está pensado para su ejecución local. Puede ser modificado libremente para aprendizaje o demostraciones personales.",
        },
      },
      links: {
        github: "https://github.com/Tortoise-code-Z/Astrohub",
        demo: null,
      },
    },
  ],
  skills: [
    {
      title: "Web Development",
      tools: [
        "html",
        "css",
        "javascript",
        "typescript",
        "php",
        "mysql",
        "apache",
      ],
    },

    {
      title: "Frameworks / Libraries",
      tools: ["bootstrap", "tailwind", "react + typescript"],
    },
    {
      title: "Development tools / Workflow",
      tools: ["git", "github", "figma", "virtual machines"],
    },
  ],

  career: [
    {
      academy: ["MasterD", "Academy"],
      curse: "Fullstack programing web developer",
      tools: ["html", "css", "javascript", "php", "mysql", "apache", "git"],
      note: {
        state: true,
        value: "9.87",
      },
      hours: "948h",
      year: "2023/2024",
      isFinished: {
        state: true,
        msg: "in progress",
      },
    },
    {
      academy: ["Hola", "mundo", "academy"],
      curse: "React / Typescript course",
      tools: ["react", "typescript"],
      note: {
        state: false,
        value: "",
      },
      hours: "13h",
      year: "2025",
      isFinished: {
        state: true,
        msg: "in progress",
      },
    },
  ],
};

export default bbdd;
