import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  vuejs,
  // nuxtjs,
  // pinia,
  gsap,
  framermotion,
  // nextjs,
  // grqphql,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  ejad,
  calibro,
  maqam,
  cyborg,
  liberty,
  wareed,
  ycdirectory,
  anime,
  rouvana,
  xora,
  golden,
  aora,
} from "../assets/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Gsap",
    icon: gsap,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue Js",
    icon: vuejs,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "pinia",
  //   icon: pinia,
  // },
  // {
  //   name: "Nuxt Js",
  //   icon: nuxtjs,
  // },
  // {
  //   name: "Next Js",
  //   icon: nextjs,
  // },
  // {
  //   name: "GraphQL",
  //   icon: grqphql,
  // },
  {
    name: "Framer Motion",
    icon: framermotion,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "Ejad Solutions",
    icon: ejad,
    iconBg: "#383E56",
    date: "March 2023 - Jan 2023",
    points: [
      "Built responsive and dynamic user interfaces using Vue 3, Nuxt 3, and Tailwindcss ",
      "Contributed to the development of two major projects: Wareed and Calibro AI",
      "Upgraded the UI for two web applications built on Laravel (maqam writing & Go360).",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Calibro Ai",
    description:
      "A responsive landing page designed for showcasing AI-powered calibration tools. Developed using Nuxt.js, leveraging its SSR capabilities to ensure fast loading times and SEO optimization. Integrated Tailwind CSS for modern and sleek UI design. Played a key role in designing the layout, structuring content, and optimizing performance for a seamless user experience.",
    tags: [
      {
        name: "Nuxt",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: calibro,
    source_code_link: "https://github.com/",
    project_link: "https://calibro-omega.vercel.app/",
  },
  {
    name: "Cyborg",
    description:
      "A futuristic web application developed with Nuxt.js and Tailwind CSS, featuring a sleek, modern design. Integrated Nitro API within Nuxt for efficient backend interaction, enabling dynamic content updates and seamless data handling. The application emphasizes responsiveness and performance, with a focus on delivering a cutting-edge user experience. Designed scalable components using Tailwind CSS to ensure consistency and maintainability.",
    tags: [
      {
        name: "Nuxt",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "pinia",
        color: "yellow-text-gradient",
      },
    ],
    image: cyborg,
    source_code_link: "https://github.com/Golden-abood/Cyborg-app",
    project_link: "https://cyborg-app.vercel.app/",
  },
  {
    name: "Xora SaSS Landing Page",
    description:
      "Developed a modern SaaS landing page designed to present cutting-edge services effectively. Built with Nuxt.js and styled using Tailwind CSS, the project features clean and responsive layouts, smooth transitions, and intuitive navigation. The design includes sections such as Features, Pricing, and Customer Support, showcasing a visually appealing and user-friendly interface. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: xora,
    source_code_link: "https://gitlab.com/abdullah_zahabi/xora",
    project_link: "https://xora-henna.vercel.app/",
  },
  {
    name: "YcDirectory",
    description:
      "A directory platform for exploring Y Combinator startups, built with Next.js 15, employing Server Rendering with the Progressive Partial Rendering (PPR) strategy to optimize performance and content delivery. Authentication is implemented using GitHub with NextAuth, ensuring secure access. The backend is powered by Sanity CMS for flexible content management. Styled with Tailwind CSS, the platform features a clean, responsive design that prioritizes a seamless user experience. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "next-auth",
        color: "blue-text-gradient",
      },
    ],
    image: ycdirectory,
    source_code_link: "https://gitlab.com/abdullah_zahabi/ycdirectory",
    project_link: "https://yc-directory-five-omega.vercel.app/",
  },
  {
    name: "Rouvana Tours",
    description:
      " Currently under development, Rouvana Tours is a modern platform designed for showcasing tour activities and packages. Developed using Nuxt.js, it utilizes Server-Side Rendering (SSR) for SEO and performance optimization. The project features a clean and visually appealing UI, built with Tailwind CSS and ShadCN, and incorporates Pinia for state management. Key highlights include dynamic activity filtering, smooth transitions, and scalable architecture for future enhancements, aiming for a seamless user experience. ",
    tags: [
      {
        name: "Nuxt",
        color: "green-text-gradient",
      },
      {
        name: "pinia",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn/vue",
        color: "white-text-gradient",
      },
    ],
    image: rouvana,
    source_code_link: "/",
    project_link: "https://rouvana-tours.vercel.app/",
  },
  {
    name: "Liberty Market",
    description:
      "A dynamic e-commerce platform designed for showcasing and managing marketplace products. Built with Nuxt.js and styled using Tailwind CSS, the project integrates Nitro API for backend services, ensuring smooth handling of dynamic product data and user interactions. The platform emphasizes a responsive, user-friendly interface optimized for seamless browsing on all devices. It supports advanced features such as product filtering, intuitive navigation, and a clean design aesthetic tailored to modern online shopping experiences. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: liberty,
    source_code_link: "https://github.com/Golden-abood/library-market/",
    project_link: "https://libirty-market.vercel.app/",
  },
  {
    name: "Wareed",
    description:
      "Developed a responsive landing page for the Wareed Application while working at Ejad Solutions. Built using Nuxt.js to ensure optimized performance with Server-Side Rendering (SSR) for better SEO and fast page load times. Integrated Tailwind CSS for a clean, modern UI, focusing on accessibility and usability. Added dynamic content and animations to create an engaging user experience. Collaborated closely with the team to implement a scalable design that aligns with the application's vision and user needs",
    tags: [
      {
        name: "nuxt js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wareed,
    source_code_link: "/",
    project_link: "https://wareed-landing-page.vercel.app/",
  },
  {
    name: "Maqam writing",
    description:
      "Contributed to updating the user interface of the Maqam Writing website while working at Ejad Solutions. Enhanced the UI using CSS and jQuery, ensuring a modern and user-friendly experience. The website was built with Laravel, and the updates focused on improving the design, usability, and overall performance. ",
    tags: [
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "yellow-text-gradient",
      },
    ],
    image: maqam,
    source_code_link: "/",
    project_link: "https://maqamwriting.com/",
  },
  {
    name: "anime vault",
    description:
      "Is a modern web application built with Next.js 14, utilizing Server-Side Rendering (SSR) and Server Actions for optimized performance. It showcases a collection of popular anime series with details such as episodes, ratings, and summaries. The project features infinite scroll for smooth browsing, Framer Motion animations for dynamic interactions, and a visually appealing, responsive design. The platform emphasizes structured data presentation and user-centric design, delivering an engaging experience for anime enthusiasts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer motion",
        color: "white-text-gradient",
      },
    ],
    image: anime,
    source_code_link: "https://github.com/",
    project_link: "https://anime-vault-app-omega.vercel.app/",
  },
  {
    name: "Golden Landing Page ",
    description:
      "A dynamic e-commerce platform designed for showcasing and managing marketplace products. Built with Nuxt.js and styled using Tailwind CSS, the project integrates Nitro API for backend services, ensuring smooth handling of dynamic product data and user interactions. The platform emphasizes a responsive, user-friendly interface optimized for seamless browsing on all devices. It supports advanced features such as product filtering, intuitive navigation, and a clean design aesthetic tailored to modern online shopping experiences. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer motion",
        color: "white-text-gradient",
      },
    ],
    image: golden,
    source_code_link: "https://github.com/Golden-abood/landing_Page_React",
    project_link: "https://landing-page-react-tawny.vercel.app/",
  },
  {
    name: "Aora",
    description:
      " Aora is a full-stack mobile application developed with React Native and Appwrite, featuring a modern and user-friendly interface. Key features include an engaging onboarding screen, secure email authentication, and a dynamic home screen with animated flat lists and pull-to-refresh functionality. The app supports full-text search, tab navigation, and media uploads via a dedicated post creation screen. Users enjoy a detailed profile section with insights, alongside smooth responsiveness and animations powered by the Animatable library. Aora combines advanced features with scalable code architecture for a seamless experience",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
    ],
    image: aora,
    source_code_link: "https://gitlab.com/abdullah_zahabi/aora",
    project_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
