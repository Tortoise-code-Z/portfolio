import {
  librariesUtils,
  stylesDesign,
  svg,
  tools,
  typeWeb,
  visibility,
} from "./bbdd_consts.js";
import { localizeDeep } from "../../js/i18n/index.js";

const bbddRaw = {
  aboutDesc: {
    es: [
      "Mi camino en la programación empezó de forma autodidacta en 2022. Lo que comenzó como pura curiosidad por el código se convirtió en mi profesión tras completar mi formación Fullstack, graduándome con una nota de **9.86/10**.",
      "Aunque domino ambos lados del desarrollo, mi verdadera pasión es el **Frontend**. Me fascina el reto de transformar diseños complejos en layouts impecables, centrándome siempre en la precisión técnica y en la experiencia de quien utiliza la web.",
      "Actualmente, sigo evolucionando mi stack tecnológico con **React, TypeScript y Git**. Mi objetivo es ofrecer mi mejor versión profesional, aportando soluciones limpias, escalables y visualmente atractivas a cada proyecto.",
    ],
    en: [
      "My journey in programming began self-taught in 2022. What started as pure curiosity about code became my profession after completing my Fullstack training, graduating with a grade of **9.86/10**.",
      "Although I work across both sides of development, my true passion is the **Frontend**. I love the challenge of turning complex designs into flawless layouts, always focusing on technical precision and on the experience of whoever uses the site.",
      "I'm currently evolving my tech stack with **React, TypeScript and Git**. My goal is to deliver my best professional work, bringing clean, scalable and visually appealing solutions to every project.",
    ],
  },

  strengths: [
    {
      name: { es: "Trabajador", en: "Hard-working" },
      iconRef: svg.worker,
    },
    {
      name: { es: "Comunicación", en: "Communication" },
      iconRef: svg.comunication,
    },
    {
      name: { es: "Perseverancia", en: "Perseverance" },
      iconRef: svg.perseverance,
    },
  ],
  works: [
    {
      id: 1,
      featured: true,
      name: "Chessmate",
      emphasisName: {
        name: ["Chess", "mate"],
        color: "#D56719",
      },
      shortDescription: {
        es: "Página de aprendizaje de ajedrez",
        en: "A chess learning platform",
      },
      about: {
        description: {
          es: [
            "Chessmate es una plataforma web moderna para aprender ajedrez online mediante cursos interactivos.",
            "Fue diseñada desde cero en Figma y desarrollada con React + TypeScript, simulando un backend completo desde el cliente.",
          ],
          en: [
            "Chessmate is a modern web platform to learn chess online through interactive courses.",
            "It was designed from scratch in Figma and built with React + TypeScript, simulating a complete backend from the client side.",
          ],
        },
        cards: [
          {
            id: 1,
            title: { es: "Registro y login", en: "Sign up and login" },
            svg: svg.key,
          },
          {
            id: 2,
            title: {
              es: "Filtro y búsqueda de cursos",
              en: "Course filtering and search",
            },
            svg: svg.search,
          },
          {
            id: 3,
            title: { es: "Compra de cursos", en: "Course purchasing" },
            svg: svg.shop,
          },
          {
            id: 4,
            title: {
              es: "Dashboard personalizado",
              en: "Personalized dashboard",
            },
            svg: svg.dashboard,
          },
          {
            id: 5,
            title: { es: "Classrooms virtuales", en: "Virtual classrooms" },
            svg: svg.study,
          },
          {
            id: 6,
            title: { es: "Seguimiento de progreso", en: "Progress tracking" },
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
            { id: 1, tool: tools.react, icon: svg.react },
            { id: 2, tool: tools.ts, icon: svg.ts },
            { id: 3, tool: tools.git, icon: svg.git },
          ],
          allTools: [
            { id: 1, tool: tools.react, icon: svg.react },
            { id: 2, tool: tools.ts, icon: svg.ts },
            { id: 3, tool: tools.git, icon: svg.git },
            { id: 4, tool: tools.vite, icon: svg.vite },
            { id: 5, tool: tools.npm, icon: svg.npm },
            { id: 6, tool: tools.ia, icon: svg.chatgpt },
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
          { id: 1, item: stylesDesign.cssModule, icon: svg.css },
          { id: 2, item: stylesDesign.figma, icon: svg.figma },
          {
            id: 3,
            item: stylesDesign.responsive,
            icon: svg.responsive,
          },
        ],
      },
      development_process: {
        description: {
          es: [
            "Chessmate se diseñó y desarrolló desde cero con el objetivo de simular una plataforma real de aprendizaje online, pero completamente del lado del cliente, sin backend. El enfoque principal fue rehacer un proyecto anterior de Chessmate e implementarlo con mis nuevos conocimientos actuales de diseño y código.",
            "La arquitectura se planificó  desde Figma, definiendo componentes reutilizables para cada sección (Home, Courses, Dashboard, Classroom, etc). En el desarrollo, utilicé React + TypeScript junto con Zustand para el estado global y React Query para manejar los datos simulados desde localStorage, imitando llamadas a una API real. Con este sistema podría realizar compras, progreso y autenticación sin depender de un servidor, mostrando mensajes y comportamientos dinámicos ante errores o rutas inválidas.",
            "Las rutas privadas se implementaron con React Router Dom, mientras que los formularios se validaron con React Hook Form y Zod. En el apartado visual, CSS Modules, Embla Carousel y React Player ayudaron a mantener un diseño con animaciones suaves y buena performance gracias a la optimización con Vite.",
          ],
          en: [
            "Chessmate was designed and built from scratch with the goal of simulating a real online learning platform, but entirely on the client side, with no backend. The main aim was to rebuild an earlier Chessmate project and implement it with my current design and coding knowledge.",
            "The architecture was planned in Figma, defining reusable components for each section (Home, Courses, Dashboard, Classroom, etc). During development, I used React + TypeScript together with Zustand for global state and React Query to handle the data simulated from localStorage, mimicking calls to a real API. With this system I could handle purchases, progress and authentication without relying on a server, showing dynamic messages and behaviors for errors or invalid routes.",
            "Private routes were implemented with React Router Dom, while forms were validated with React Hook Form and Zod. On the visual side, CSS Modules, Embla Carousel and React Player helped keep a design with smooth animations and good performance thanks to Vite's optimization.",
          ],
        },
        cards: [
          {
            id: 1,
            title: {
              es: "Validación y feedback visual ante posibles errores",
              en: "Validation and visual feedback for potential errors",
            },
            svg: svg.warning,
          },
          {
            id: 2,
            title: { es: "Protección de rutas", en: "Route protection" },
            svg: svg.padlock,
          },
          {
            id: 3,
            title: {
              es: "Sincronización en tiempo real entre componentes",
              en: "Real-time synchronization between components",
            },
            svg: svg.sync,
          },
          {
            id: 4,
            title: {
              es: "Optimización de rendimiento con React-Query",
              en: "Performance optimization with React-Query",
            },
            svg: svg.tachometer,
          },
        ],
        warningMsg: {
          description: {
            es: "En la versión desplegada en GitHub Pages, se utiliza createHashRouter porque GitHub solo sirve contenido estático y no permite redirecciones dinámicas a rutas profundas. Sin embargo, en desarrollo local, puedes cambiar a createBrowserRouter para probar la navegación real con URLs limpias. Esto te permitirá probar protección de rutas y navegación directa (/dashboard, /course/:id, /classroom) como en un entorno de backend real.",
            en: "In the version deployed on GitHub Pages, createHashRouter is used because GitHub only serves static content and does not allow dynamic redirects to deep routes. However, in local development you can switch to createBrowserRouter to test real navigation with clean URLs. This lets you test route protection and direct navigation (/dashboard, /course/:id, /classroom) as in a real backend environment.",
          },
        },
      },
      images: {
        screenshots: [
          {
            id: 1,
            src: "chessmate/screenshot-index.png",
            width: "1920",
            height: "922",
            alt: { es: "Inicio", en: "Home" },
          },
          {
            id: 2,
            src: "chessmate/screenshot-classroom.png",
            width: "1920",
            height: "911",
            alt: { es: "Classroom", en: "Classroom" },
          },
          {
            id: 3,
            src: "chessmate/screenshot-contact.png",
            width: "1920",
            height: "911",
            alt: { es: "Contacto", en: "Contact" },
          },
          {
            id: 4,
            src: "chessmate/screenshot-course-detail.png",
            width: "1920",
            height: "914",
            alt: { es: "Detalle del curso", en: "Course detail" },
          },
          {
            id: 5,
            src: "chessmate/screenshot-course-obtained-classroom.png",
            width: "1920",
            height: "909",
            alt: {
              es: "Classroom Cursos Obtenidos",
              en: "Classroom - Obtained courses",
            },
          },
          {
            id: 6,
            src: "chessmate/screenshot-courses.png",
            width: "1920",
            height: "916",
            alt: { es: "Cursos", en: "Courses" },
          },
          {
            id: 7,
            src: "chessmate/screenshot-dashboard.png",
            width: "1920",
            height: "906",
            alt: { es: "Dashboard", en: "Dashboard" },
          },
          {
            id: 8,
            src: "chessmate/screenshot-login.png",
            width: "1920",
            height: "911",
            alt: { es: "Inicio de sesión", en: "Login" },
          },
          {
            id: 9,
            src: "chessmate/screenshot-register.png",
            width: "1920",
            height: "909",
            alt: { es: "Registro", en: "Sign up" },
          },
        ],
        backgroundImg: {
          src: "Chessmate.webp",
          width: "1920",
          height: "922",
          alt: "Chessmate",
        },
        workImg: {
          src: "Chessmate-Caricatura.webp",
          width: "1280",
          height: "1280",
          alt: "Chessmate",
        },
      },
      config: {
        description: {
          es: [
            "Para probar comportamientos de error o feedback dinámico, puedes ejecutar directamente código en la consola del navegador para manipular los datos simulados de la “base de datos local”.",
            "Asegúrate de tener la aplicación abierta en modo desarrollo (npm run dev) o en la demo activa.",
          ],
          en: [
            "To test error behaviors or dynamic feedback, you can run code directly in the browser console to manipulate the simulated data of the “local database”.",
            "Make sure you have the application open in development mode (npm run dev) or in the active demo.",
          ],
        },
        steps: [
          {
            id: 1,
            title: {
              es: "Iniciar sesión o registrarte",
              en: "Log in or sign up",
            },
            description: {
              es: "Recuerda iniciar sesión en la web (puedes registrarte o usar: usuario -> admin, contraseña -> 1234; si quieres saltarte el paso del registro), para poder estar en el Dashboard y ver toda la lógica de una vez.",
              en: "Remember to log in to the site (you can sign up or use: username -> admin, password -> 1234, if you want to skip the sign-up step), so you can reach the Dashboard and see all the logic at once.",
            },
          },
          {
            id: 2,
            title: {
              es: "'Compra' varios cursos",
              en: "'Buy' several courses",
            },
            description: {
              es: "Una vez inicias sesión, ve a la page 'Cursos' y en la sección 'Todos los cursos' compra los 2 primeros.",
              en: "Once you log in, go to the 'Courses' page and, in the 'All courses' section, buy the first 2.",
            },
          },
          {
            id: 3,
            title: {
              es: "Código para ejecutar en la consola del navegador",
              en: "Code to run in the browser console",
            },
            type: "code",
            description: `// Simular base de datos de cursos en localStorage
const bbdd = JSON.parse(localStorage.getItem("DATA_BASE"));

const newCourses = bbdd.courses.map((c) => {
    if (c.courseID === 1) {
        return {
            ...c,
            courseID: null,
        };
    }

    if (c.courseID === 3) {
        return { ...c, price: null };
    }

    if (c.courseID === 2) {
        return {
            ...c,
            content: {
                ...c.content,
                themes: c.content.themes.map((t) => {
                    if (t.id === 1) return { ...t, id: null };
                    if (t.id === 2) {
                        return {
                            ...t,
                            content: t.content.map((c) =>
                                c.id === 1 ? { ...c, id: null } : c
                            ),
                        };
                    }
                    return t;
                }),
            },
            authors: c.authors.map((a, i) => (i === 0 ? null : a)),
        };
    }
    return c;
});

const newDefaultCourses = bbdd.defaultCourses.map((c) => {
    if (c.courseID === 1) {
        return { ...c, courseID: null };
    }

    if (c.courseID === 2) {
        return {
            ...c,
            content: {
                ...c.content,
                themes: c.content.themes.map((t) =>
                    t.id === 1 ? { ...t, description: null } : t
                ),
            },
        };
    }

    return c;
});

const newComments = bbdd.comments.map((c) =>
    c.id === 27 ? { ...c, id: null } : c
);

const newBBDD = {
    ...bbdd,
    courses: newCourses,
    defaultCourses: newDefaultCourses,
    comments: newComments,
};

// Guardar en localStorage
localStorage.setItem("DATA_BASE", JSON.stringify(newBBDD));

// Confirmar que los datos se guardaron correctamente
console.log(
    "Cursos actualizados en localStorage:",
    JSON.parse(localStorage.getItem("DATA_BASE"))
);`,
          },
          {
            id: 4,
            title: {
              es: "Refrescar la página y explorar la aplicación",
              en: "Refresh the page and explore the application",
            },
            description: {
              es: "Después de guardar los cambios en localStorage, simplemente refresca la página. Podrás observar mensajes por defecto y feedback visual en las secciones que lo requieran.",
              en: "After saving the changes in localStorage, simply refresh the page. You'll see default messages and visual feedback in the sections that require it.",
            },
          },
          {
            id: 5,
            title: {
              es: "Ver feedback en cursos por defecto",
              en: "See feedback on default courses",
            },
            description: {
              es: "Ingresa a 'Caballos' para ver el mensaje de feedback en su Classroom.",
              en: "Go into 'Caballos' to see the feedback message in its Classroom.",
            },
          },
          {
            id: 6,
            title: {
              es: "Ver feedback en cursos por obtenidos/comprados",
              en: "See feedback on obtained/purchased courses",
            },
            description: {
              es: "Ingresa a 'Aperturas fundamentales'(ID: 2, previamente comprado en el Paso 2) para observar: Mensajes de feedback.Temas desactivados por seguridad.",
              en: "Go into 'Aperturas fundamentales' (ID: 2, previously purchased in Step 2) to observe: Feedback messages. Themes disabled for safety.",
            },
          },
        ],
        noteMsg: {
          description: {
            es: "Para mantener la interfaz limpia, no se han forzado errores en todos los elementos, solo en algunos, con el objetivo de mostrar la funcionalidad de manera clara.",
            en: "To keep the interface clean, errors have not been forced on every element, only on some, in order to show the functionality clearly.",
          },
        },
      },
      links: {
        github: "https://github.com/Tortoise-code-Z/Chessmate-react",
        demo: "https://tortoise-code-z.github.io/Chessmate-react/",
      },
    },
    {
      id: 3,
      featured: false,
      name: "Astrohub",
      emphasisName: {
        name: ["Astro", "hub"],
        color: "#4819D5",
      },
      shortDescription: {
        es: "Aplicación web completa sobre el universo",
        en: "A complete web application about the universe",
      },
      about: {
        description: {
          es: [
            "Astrohub es una aplicación web dinámica y completa desarrollada como proyecto final del módulo de desarrollo web del curso FullStack, MasterD.",
            "Inspirada en el universo y la exploración espacial, combina: frontend, backend y base de datos.",
            "El sistema permite registro de usuarios, gestión de perfiles, administración de noticias y control de citas astronómicas, todo desarrollado con HTML, CSS, JavaScript, PHP y MySQL.",
            "El proyecto fue probado y ejecutado en entorno local utilizando XAMPP, integrando tanto la parte pública como los paneles internos de usuario y administrador.",
          ],
          en: [
            "Astrohub is a dynamic, complete web application developed as the final project of the web development module of the FullStack course at MasterD.",
            "Inspired by the universe and space exploration, it combines: frontend, backend and database.",
            "The system allows user registration, profile management, news administration and control of astronomical appointments, all developed with HTML, CSS, JavaScript, PHP and MySQL.",
            "The project was tested and run in a local environment using XAMPP, integrating both the public side and the internal user and admin panels.",
          ],
        },
        cards: [
          {
            id: 1,
            title: {
              es: "Registro y autenticación de usuarios",
              en: "User registration and authentication",
            },
            svg: svg.key,
          },
          {
            id: 2,
            title: {
              es: "Gestión de noticias astronómicas",
              en: "Astronomical news management",
            },
            svg: svg.news,
          },
          {
            id: 3,
            title: {
              es: "Panel de administración completo",
              en: "Complete administration panel",
            },
            svg: svg.dashboard,
          },
          {
            id: 4,
            title: {
              es: "Citas astronómicas interactivas",
              en: "Interactive astronomical appointments",
            },
            svg: svg.calendar,
          },
          {
            id: 5,
            title: {
              es: "Validación de formularios y contraseñas cifradas",
              en: "Form validation and encrypted passwords",
            },
            svg: svg.security,
          },
          {
            id: 6,
            title: {
              es: "Diseño responsive con HTML5 y CSS3",
              en: "Responsive design with HTML5 and CSS3",
            },
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
            { id: 1, tool: tools.html, icon: svg.html },
            { id: 2, tool: tools.css, icon: svg.css },
            { id: 3, tool: tools.js, icon: svg.js },
            { id: 4, tool: tools.php, icon: svg.php },
            { id: 5, tool: tools.mysql, icon: svg.mysql },
            { id: 6, tool: tools.apache, icon: svg.apache },
          ],
          allTools: [
            { id: 1, tool: tools.html, icon: svg.html },
            { id: 2, tool: tools.css, icon: svg.css },
            { id: 3, tool: tools.js, icon: svg.js },
            { id: 4, tool: tools.php, icon: svg.php },
            { id: 5, tool: tools.mysql, icon: svg.mysql },
            { id: 8, tool: tools.apache, icon: svg.apache },
          ],
        },
        librariesUtils: [],
        stylesDesign: [
          { id: 1, item: stylesDesign.figma, icon: svg.figma },
          {
            id: 2,
            item: stylesDesign.responsive,
            icon: svg.responsive,
          },
        ],
      },
      development_process: {
        description: {
          es: [
            "Astrohub se desarrolló con un enfoque completo, abarcando tanto frontend como backend. La parte visual fue implementada con HTML5, CSS3 y JavaScript, mientras que la lógica del servidor y la gestión de datos se manejaron mediante PHP y MySQL.",
            "El sistema de autenticación y roles (visitante, usuario y administrador) permite controlar el acceso a cada sección del sitio, gestionando noticias, citas y perfiles desde paneles diferenciados.",
            "La base de datos se creó e importó desde phpMyAdmin y se ejecutó localmente en XAMPP, garantizando un entorno de pruebas funcional y realista.",
          ],
          en: [
            "Astrohub was developed with a complete approach, covering both frontend and backend. The visual side was implemented with HTML5, CSS3 and JavaScript, while the server logic and data management were handled with PHP and MySQL.",
            "The authentication and roles system (visitor, user and administrator) makes it possible to control access to each section of the site, managing news, appointments and profiles from separate panels.",
            "The database was created and imported from phpMyAdmin and run locally on XAMPP, ensuring a functional and realistic testing environment.",
          ],
        },
        cards: [
          {
            id: 1,
            title: {
              es: "Autenticación y roles de usuario",
              en: "User authentication and roles",
            },
            svg: svg.key,
          },
          {
            id: 2,
            title: {
              es: "Paneles separados para usuarios y administradores",
              en: "Separate panels for users and administrators",
            },
            svg: svg.dashboard,
          },
          {
            id: 3,
            title: {
              es: "Gestión completa de base de datos con MySQL",
              en: "Complete database management with MySQL",
            },
            svg: svg.database,
          },
          {
            id: 4,
            title: {
              es: "Integración local con XAMPP",
              en: "Local integration with XAMPP",
            },
            svg: svg.server,
          },
        ],
        warningMsg: {
          description: {
            es: "El proyecto funciona en entorno local. Astrohub está diseñado para ejecutarse con XAMPP (Apache + PHP + MySQL). Para probarlo, es necesario importar la base de datos y acceder desde http://localhost/astrohub/.",
            en: "The project runs in a local environment. Astrohub is designed to run with XAMPP (Apache + PHP + MySQL). To test it, you need to import the database and access it from http://localhost/astrohub/.",
          },
        },
      },
      images: {
        screenshots: [
          {
            id: 1,
            src: "astrohub/screenshot-inicio.png",
            width: "1920",
            height: "916",
            alt: { es: "Inicio", en: "Home" },
          },
          {
            id: 2,
            src: "astrohub/screenshot-noticias.png",
            width: "1920",
            height: "913",
            alt: { es: "Noticias", en: "News" },
          },
          {
            id: 3,
            src: "astrohub/screenshot-citas.png",
            width: "1920",
            height: "911",
            alt: { es: "Citas", en: "Appointments" },
          },
          {
            id: 4,
            src: "astrohub/screenshot--login.png",
            width: "1920",
            height: "914",
            alt: { es: "Inicio de sesión", en: "Login" },
          },
          {
            id: 5,
            src: "astrohub/screenshot-registro.png",
            width: "1920",
            height: "911",
            alt: { es: "Registro", en: "Sign up" },
          },
          {
            id: 6,
            src: "astrohub/screenshot-perfil.png",
            width: "1920",
            height: "913",
            alt: { es: "Perfil", en: "Profile" },
          },
          {
            id: 7,
            src: "astrohub/screenshot-admin-usuarios.png",
            width: "1920",
            height: "916",
            alt: {
              es: "Administración de Usuarios",
              en: "User administration",
            },
          },
          {
            id: 8,
            src: "astrohub/screenshot-admin-noticias.png",
            width: "1920",
            height: "914",
            alt: {
              es: "Administración de Noticias",
              en: "News administration",
            },
          },
          {
            id: 9,
            src: "astrohub/screenshot-admin-citas.png",
            width: "1920",
            height: "911",
            alt: {
              es: "Administración de citas",
              en: "Appointment administration",
            },
          },
          {
            id: 10,
            src: "astrohub/screenshot-admin-editar-usuarios.png",
            width: "1920",
            height: "911",
            alt: {
              es: "Panel de edición de usuarios",
              en: "User editing panel",
            },
          },
          {
            id: 11,
            src: "astrohub/screenshot-admin-editar-noticias.png",
            width: "1920",
            height: "913",
            alt: {
              es: "Panel de edición de noticias",
              en: "News editing panel",
            },
          },
          {
            id: 12,
            src: "astrohub/screenshot-admin-editar-cita.png",
            width: "1920",
            height: "913",
            alt: {
              es: "Panel de edición de citas",
              en: "Appointment editing panel",
            },
          },
        ],
        backgroundImg: {
          src: "Astrohub-Proyect.webp",
          width: "1920",
          height: "911",
          alt: "Astrohub",
        },
        workImg: {
          src: "Astrohub-Proyect-Caricature.webp",
          width: "1280",
          height: "1280",
          alt: "Astrohub",
        },
      },
      config: {
        description: {
          es: [
            "Astrohub se ejecuta localmente mediante XAMPP. Para instalarlo, copia la carpeta del proyecto dentro de `htdocs` y configura la base de datos en phpMyAdmin.",
            "El archivo `astrohub.sql` incluido permite importar toda la estructura y los datos necesarios.",
          ],
          en: [
            "Astrohub runs locally through XAMPP. To install it, copy the project folder into `htdocs` and set up the database in phpMyAdmin.",
            "The included `astrohub.sql` file lets you import the whole structure and the necessary data.",
          ],
        },
        steps: [
          {
            id: 1,
            title: { es: "Instalar XAMPP", en: "Install XAMPP" },
            description: {
              es: "Descarga e instala XAMPP (con Apache, PHP y MySQL).",
              en: "Download and install XAMPP (with Apache, PHP and MySQL).",
            },
          },
          {
            id: 2,
            title: {
              es: "Mover carpeta del proyecto",
              en: "Move the project folder",
            },
            description: {
              es: "Copia la carpeta `astrohub` dentro de la carpeta `htdocs` de XAMPP.",
              en: "Copy the `astrohub` folder into XAMPP's `htdocs` folder.",
            },
          },
          {
            id: 3,
            title: { es: "Iniciar servicios", en: "Start the services" },
            description: {
              es: "Desde el panel de XAMPP, inicia Apache y MySQL.",
              en: "From the XAMPP panel, start Apache and MySQL.",
            },
          },
          {
            id: 4,
            title: {
              es: "Configurar base de datos",
              en: "Set up the database",
            },
            description: {
              es: "Abre phpMyAdmin, crea una base de datos e importa el archivo `astrohub.sql`.",
              en: "Open phpMyAdmin, create a database and import the `astrohub.sql` file.",
            },
          },
          {
            id: 5,
            title: {
              es: "Abrir el sitio en el navegador",
              en: "Open the site in the browser",
            },
            description: {
              es: "Visita http://localhost/astrohub/ para probar la aplicación.",
              en: "Visit http://localhost/astrohub/ to try the application.",
            },
          },
          {
            id: 6,
            title: { es: "Acceso de prueba", en: "Test access" },
            description: {
              es: "Usuario: `lisa12` / Contraseña: `123456` (usuario normal) — Usuario: `root` / Contraseña: `1234567` (administrador).",
              en: "Username: `lisa12` / Password: `123456` (regular user) — Username: `root` / Password: `1234567` (administrator).",
            },
          },
        ],
        noteMsg: {
          description: {
            es: "Este proyecto fue desarrollado con fines educativos y está pensado para su ejecución local. Puede ser modificado libremente para aprendizaje o demostraciones personales.",
            en: "This project was developed for educational purposes and is intended to run locally. It can be freely modified for learning or personal demos.",
          },
        },
      },
      links: {
        github: "https://github.com/Tortoise-code-Z/Astrohub",
        demo: null,
      },
    },
    {
      id: 2,
      featured: false,
      name: "Portfolio Web",
      emphasisName: {
        name: ["Port", "folio"],
        color: "#1958D5",
      },
      shortDescription: {
        es: "Sitio personal de presentación y proyectos de Víctor Pérez",
        en: "Víctor Pérez's personal presentation and projects site",
      },
      about: {
        description: {
          es: [
            "Este Portfolio Web es una página personal desarrollada desde cero para mostrar proyectos, habilidades y experiencia como desarrollador frontend.",
            "El sitio fue diseñado en Figma y desarrollado con HTML, CSS y JavaScript puro, priorizando la optimización, la claridad del código y la fluidez en la experiencia de usuario.",
            "Incluye animaciones suaves y un diseño completamente responsive para adaptarse a cualquier dispositivo.",
          ],
          en: [
            "This Portfolio Web is a personal site built from scratch to showcase projects, skills and experience as a frontend developer.",
            "The site was designed in Figma and built with plain HTML, CSS and JavaScript, prioritizing optimization, code clarity and a smooth user experience.",
            "It includes smooth animations and a fully responsive design to adapt to any device.",
          ],
        },
        cards: [
          {
            id: 1,
            title: { es: "Diseño responsive", en: "Responsive design" },
            svg: svg.responsive,
          },
          {
            id: 2,
            title: {
              es: "Frontend puro sin frameworks",
              en: "Pure frontend with no frameworks",
            },
            svg: svg.code,
          },
          {
            id: 3,
            title: {
              es: "Animaciones suaves y transiciones",
              en: "Smooth animations and transitions",
            },
            svg: svg.motion,
          },
          {
            id: 4,
            title: {
              es: "Optimización de rendimiento",
              en: "Performance optimization",
            },
            svg: svg.tachometer,
          },
          {
            id: 5,
            title: {
              es: "Estructura modular y escalable",
              en: "Modular, scalable structure",
            },
            svg: svg.structure,
          },
          {
            id: 6,
            title: {
              es: "Diseño atractivo e intuitivo",
              en: "Attractive, intuitive design",
            },
            svg: svg.design,
          },
        ],
      },
      projectRole: typeWeb.frontend,
      year: "2025",
      visibility: visibility.private,
      techStack: {
        tools: {
          fastTools: [
            { id: 1, tool: tools.html, icon: svg.html },
            { id: 2, tool: tools.css, icon: svg.css },
            { id: 3, tool: tools.js, icon: svg.react },
          ],
          allTools: [
            { id: 1, tool: tools.html, icon: svg.html },
            { id: 2, tool: tools.css, icon: svg.css },
            { id: 3, tool: tools.js, icon: svg.js },
            { id: 4, tool: tools.vite, icon: svg.vite },
            { id: 5, tool: tools.git, icon: svg.git },
            { id: 6, tool: tools.npm, icon: svg.npm },
            { id: 7, tool: tools.figma, icon: svg.figma },
            { id: 8, tool: tools.ia, icon: svg.chatgpt },
          ],
        },
        librariesUtils: [{ id: 1, item: librariesUtils.prism }],
        stylesDesign: [
          { id: 1, item: stylesDesign.figma, icon: svg.figma },
          {
            id: 2,
            item: stylesDesign.responsive,
            icon: svg.responsive,
          },
        ],
      },
      development_process: {
        description: {
          es: [
            "El desarrollo del portfolio comenzó con un enfoque centrado en la simplicidad y la velocidad, construyendo toda la arquitectura con HTML, CSS y JavaScript puro para mantener un control total sobre el código.",
            "Se empleó Vite como entorno de desarrollo moderno para acelerar la carga y permitir un flujo de trabajo fluido. Cada sección (Hero, About, Works, Skills, Career, Contact) fue estructurada con código modular y reutilizable.",
            "El diseño se planificó en Figma antes de la implementación, buscando una experiencia limpia y profesional, con animaciones suaves y buena jerarquía visual.",
          ],
          en: [
            "Development of the portfolio started with a focus on simplicity and speed, building the whole architecture with plain HTML, CSS and JavaScript to keep full control over the code.",
            "Vite was used as a modern development environment to speed up loading and enable a smooth workflow. Each section (Hero, About, Works, Skills, Career, Contact) was structured with modular, reusable code.",
            "The design was planned in Figma before implementation, aiming for a clean, professional experience with smooth animations and good visual hierarchy.",
          ],
        },
        cards: [
          {
            id: 1,
            title: {
              es: "Diseño planificado desde Figma",
              en: "Design planned in Figma",
            },
            svg: svg.design,
          },
          {
            id: 2,
            title: {
              es: "Estructura semántica en HTML5",
              en: "Semantic HTML5 structure",
            },
            svg: svg.structure,
          },
          {
            id: 3,
            title: {
              es: "CSS modular para escalabilidad",
              en: "Modular CSS for scalability",
            },
            svg: svg.brush,
          },
          {
            id: 4,
            title: {
              es: "Optimización de rendimiento con Vite",
              en: "Performance optimization with Vite",
            },
            svg: svg.tachometer,
          },
        ],
        noteMsg: {
          description: {
            es: "Este portfolio está construido íntegramente en frontend. No utiliza frameworks ni dependencias complejas para mantener su rendimiento óptimo y simplicidad de mantenimiento.",
            en: "This portfolio is built entirely in frontend. It uses no frameworks or complex dependencies in order to keep its performance optimal and maintenance simple.",
          },
        },
      },
      images: {
        screenshots: [
          {
            id: 1,
            src: "screenshot-home-hero.png",
            width: "1920",
            height: "950",
            alt: { es: "Inicio", en: "Home" },
          },
          {
            id: 2,
            src: "screenshot-home-profile.png",
            width: "1920",
            height: "952",
            alt: { es: "Sobre mi", en: "About me" },
          },
          {
            id: 3,
            src: "screenshot-home-profile-strengths.png",
            width: "1920",
            height: "954",
            alt: { es: "Fortalezas", en: "Strengths" },
          },
          {
            id: 4,
            src: "screenshot-home-works.png",
            width: "1920",
            height: "957",
            alt: { es: "Proyectos", en: "Projects" },
          },
          {
            id: 5,
            src: "screenshot-home-works-backCard.png",
            width: "1920",
            height: "957",
            alt: { es: "Reverso de tarjeta", en: "Card back" },
          },
          {
            id: 6,
            src: "screenshot-home-skills.png",
            width: "1920",
            height: "952",
            alt: { es: "Habilidades", en: "Skills" },
          },
          {
            id: 7,
            src: "screenshot-home-career.png",
            width: "1920",
            height: "946",
            alt: { es: "Carrera", en: "Career" },
          },
          {
            id: 8,
            src: "screenshot-home-footer.png",
            width: "1920",
            height: "953",
            alt: { es: "Pie de página", en: "Footer" },
          },
          {
            id: 9,
            src: "screenshot-project-detail-hero.png",
            width: "1920",
            height: "954",
            alt: {
              es: "Inicio - Detalle de Proyecto",
              en: "Home - Project detail",
            },
          },
          {
            id: 10,
            src: "screenshot-project-detail-about.png",
            width: "1920",
            height: "955",
            alt: {
              es: "Sobre el Proyecto - Detalle de Projecto",
              en: "About the project - Project detail",
            },
          },
          {
            id: 11,
            src: "screenshot-project-detail-techStack.png",
            width: "1920",
            height: "952",
            alt: {
              es: "Stack Tecnológico - Detalle de Projecto",
              en: "Tech stack - Project detail",
            },
          },
          {
            id: 12,
            src: "screenshot-project-detail-devProcess.png",
            width: "1920",
            height: "954",
            alt: {
              es: "Proceso de Desarrollo - Detalle de Projecto",
              en: "Development process - Project detail",
            },
          },
          {
            id: 13,
            src: "screenshot-project-detail-gallery.png",
            width: "1920",
            height: "948",
            alt: {
              es: "Galería - Detalle de Projecto",
              en: "Gallery - Project detail",
            },
          },
          {
            id: 14,
            src: "screenshot-project-detail-aditionalConfigs.png",
            width: "1920",
            height: "951",
            alt: {
              es: "Configuraciones adicionales - Detalle de Projecto",
              en: "Additional settings - Project detail",
            },
          },
          {
            id: 15,
            src: "screenshot-project-detail-footer.png",
            width: "1920",
            height: "955",
            alt: {
              es: "Pie de página - Detalle de Projecto",
              en: "Footer - Project detail",
            },
          },
        ],
        backgroundImg: {
          src: "Portfolio-Proyect.webp",
          width: "1920",
          height: "911",
          alt: "Portfolio",
        },
        workImg: {
          src: "Portfolio-Caricatura1.webp",
          width: "1280",
          height: "1280",
          alt: "Portfolio",
        },
      },
      config: {
        description: {
          es: [
            "El proyecto puede ejecutarse fácilmente en entorno local para explorarlo/modificarlo o en la demo web directamente.",
            "En caso de querer ejecutarlo en local, asegúrate de tener Node.js y npm instalados antes de comenzar.",
          ],
          en: [
            "The project can easily be run locally to explore/modify it, or viewed directly in the web demo.",
            "If you want to run it locally, make sure you have Node.js and npm installed before starting.",
          ],
        },
        steps: [
          {
            id: 1,
            title: { es: "Clonar el repositorio", en: "Clone the repository" },
            description: {
              es: "Ejecuta `git clone https://github.com/Tortoise-code-Z/portfolio` en tu terminal.",
              en: "Run `git clone https://github.com/Tortoise-code-Z/portfolio` in your terminal.",
            },
          },
          {
            id: 2,
            title: {
              es: "Instalar dependencias",
              en: "Install dependencies",
            },
            description: {
              es: "Navega al directorio del proyecto (`cd portfolio`) y ejecuta `npm install`.",
              en: "Navigate to the project directory (`cd portfolio`) and run `npm install`.",
            },
          },
          {
            id: 3,
            title: {
              es: "Ejecutar en modo desarrollo",
              en: "Run in development mode",
            },
            description: {
              es: "Corre `npm run dev` y abre el enlace local en tu navegador para ver el portfolio.",
              en: "Run `npm run dev` and open the local link in your browser to see the portfolio.",
            },
          },
          {
            id: 4,
            title: { es: "Personalización", en: "Customization" },
            description: {
              es: "Puedes editar los archivos en `/src/js/` y `/src/css/` para cambiar estilos, texto o estructura.",
              en: "You can edit the files in `/src/js/` and `/src/css/` to change styles, text or structure.",
            },
          },
        ],
      },
      links: {
        github: "https://github.com/Tortoise-code-Z/portfolio",
        demo: "https://tortoise-code-z.github.io/portfolio/",
      },
    },
  ],
  skills: [
    {
      title: { es: "Desarrollo web", en: "Web development" },
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
      title: { es: "Librerías / Frameworks ", en: "Libraries / Frameworks" },
      tools: ["bootstrap", "tailwind", "react + typescript"],
    },
    {
      title: { es: "Herramientas / Workflow", en: "Tools / Workflow" },
      tools: ["git", "github", "figma", "virtual machines"],
    },
  ],

  career: [
    {
      academy: "Academia#MasterD",
      curse: {
        es: "Curso de programación FullStack",
        en: "FullStack programming course",
      },
      tools: ["html", "css", "javascript", "php", "mysql", "apache", "git"],
      note: {
        state: true,
        value: "9.87",
      },
      hours: "948h",
      year: "2023/2024",
      isFinished: {
        state: true,
        msg: { es: "En progreso", en: "In progress" },
      },
    },
    {
      academy: "Academia#Hola#Mundo",
      curse: {
        es: "Curso de React / Typescript",
        en: "React / Typescript course",
      },
      tools: ["react", "typescript"],
      note: {
        state: false,
        value: "",
      },
      hours: "13h",
      year: "2025",
      isFinished: {
        state: true,
        msg: { es: "En progreso", en: "In progress" },
      },
    },
  ],
};

/**
 * Content database resolved to the active locale. Every `{ es, en }` field in
 * `bbddRaw` is collapsed to its active-locale value, so consumers keep importing
 * the default export and reading plain strings/arrays as before.
 */
const bbdd = localizeDeep(bbddRaw);

export default bbdd;
