import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Rss, Twitch, Github, Crop, Pencil, Computer, Book, Rocket, Speech} from "lucide-react";
import { FaInstagram, FaFacebook , FaTiktok } from "react-icons/fa";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={2} />,
        src: "https://github.com/BrandonDeveloper08",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={2} />,
        src: "https://www.linkedin.com/in/brandon-nu%C3%B1ez-346a07308/",
    },
    {
        id: 3,
        logo: <FaTiktok size={25} strokeWidth={1} />,
        src: "https://www.tiktok.com/@brandondev.nuez",
    },
    {
        id: 4,
        logo: <FaInstagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/brandondevnunez/",
    },
    {
        id: 5,
        logo: <FaFacebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/profile.php?id=61555195312851",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Diseñador Frontend",
        subtitle: "TechSolutions",
        description: "Colabore con el diseño de una pagina web a un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Dic 2022 ",
    },
    {
        id: 2,
        title: "Especialsta en Desarrollo Frontend",
        subtitle: "Estudiala",
        description: "Trabaje en una app web que contribuye a la educación de los estudiantes, brindando una plataforma interactiva y accesible para el aprendizaje en línea.",
        date: "Ago 2023",
    },
    {
        id: 3,
        title: "Desarrolador FullStack",
        subtitle: "Freelancer",
        description: "Desarrollé una aplicación web completa que abarca tanto el frontend como el backend, utilizando tecnologías modernas para crear una experiencia de usuario fluida y eficiente.",
        date: "Jun 2024",
    },
    {
        id: 4,
        title: "Desarrollador de Apps Móviles",
        subtitle: "App Master",
        description: "Colabore en el desarrollo de una aplicación móvil innovadora que mejora la experiencia del usuario y optimiza la funcionalidad de la plataforma.",
        date: "May 2025",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 50,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 100,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 15,
        text: "Certificaciones",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "App Educativa",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "https://www.estudiala.com/",
    },
    {
        id: 2,
        title: "Shopping Guitar",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/BrandonDeveloper08/guitarla",
        urlDemo: "https://guitarla-react-ts-reducers.netlify.app/",
    },
    {
        id: 3,
        title: "App Fitness",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/BrandonDeveloper08/calorie-tracker",
        urlDemo: "https://calorie-tracker-web.netlify.app/",
    },
    {
        id: 4,
        title: "Lyrics App",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/BrandonDeveloper08/lyrics",
        urlDemo: "https://lirycs-dev.netlify.app/",
    },
    {
        id: 5,
        title: "Search Image App",
        image: "/image-5.jpg",
        urlGithub: "https://github.com/BrandonDeveloper08/pixabay",
        urlDemo: "https://pixabay-dev.netlify.app/",    
    },
    {
        id: 6,
        title: "Memorama Game",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "https://brandodevelop.github.io/Memorama/",
    },
    {
        id: 7,
        title: "CRM Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "https://brandodevelop.github.io/CRM/",
    },
    {
        id: 8,
        title: "App para Ligar",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "https://www.picanteai.com/",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "Antes solo teníamos un Facebook caótico. Brandon nos hizo un sitio web donde los clientes ahora ven el menú, reservan y piden delivery. Todo automatizado. Las reservas subieron 40% el primer mes. Fue como cambiar el triciclo por un auto eléctrico.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Ana María",
        description:
            "Nuestro sitio parecía de los 2000. Brandon lo modernizó, sumó pagos online y reservas con horario. Ahora atendemos más y contestamos menos el teléfono.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Gonzalo López",
        description:
            "Nos hizo una web con sistema de reservas mejor que cualquier app. Ahora todo es online, sin llamadas, con recordatorios por WhatsApp. Ahorra tiempo, evita errores y nos hace ver pro.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Carlos Sanchez",
        description:
            "Le pedí a Brandon un sitio con actitud, que se vea brutal y funcione. Lo hizo: diseño potente, fotos, videos, reservas online y hasta QR en el local. Pensó en el negocio, no solo en la web.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Laura Snow",
        description:
            "Queríamos elegancia y profesionalismo y  lo clavó. La web parece de una franquicia internacional, con formularios inteligentes, captación de leads y seguimiento automático. Un cambio total.",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "Le pedí una app para entrenadores y entregó una plataforma robusta, simple y escalable. Me ayudó a lanzar el MVP, validarlo y conseguir mis primeros 10 clientes. Fue como tener un socio tech.",
        imageUrl: "/profile6.png",
    },
];