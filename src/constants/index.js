const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "archive",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "OCT 15, 2025",
    title: " Dr. Kalam Young Achiever Award 2025",
    image: "/images/kalam.jpeg",
    link: "https://www.linkedin.com/posts/prasanth-m-736652291_wyf-worldyouthfederation-youngachiever-activity-7387425211463163904-3zsd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbAvpoBSc0kQa4d_KYcHaziCYXYwO6Fym4",
  },
  {
    id: 2,
    date: "May , 2025",
    title: "FINALIST - Top 30 -NER TECH HACKATHON 2.0!",
    image: "/images/NER.jpeg",
    link: "https://www.linkedin.com/posts/prasanth-m-736652291_top30-finalist-hackathon-activity-7342225612922568706-im6O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbAvpoBSc0kQa4d_KYcHaziCYXYwO6Fym4",
  },
  {
    id: 3,
    date: "Nov, 2025",
    title: "Secured a place in the Top 10 - challenge by Volkswagen",
    image: "/images/VK.jpeg",
    link: "https://www.linkedin.com/posts/srieshwar_srieshwar-volkswagen-imobileathon-activity-7403775260078366721-IK4R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbAvpoBSc0kQa4d_KYcHaziCYXYwO6Fym4",
  },
  {
    id: 4,
    date: "June 20 , 2025",
    title: " GRAND FINALE - Top 10 - CATERPILLAR TECH CHALLENGE",
    image: "/images/cat.jpg",
    link: "https://www.linkedin.com/posts/srieshwar_proud-moment-for-sri-eshwar-4-of-our-activity-7328014299728093184-9stb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbAvpoBSc0kQa4d_KYcHaziCYXYwO6Fym4",
  },
  {
    id: 5,
    date: "May , 2025",
    title: "1st place in project expo",
    image: "/images/pj.jpeg",
    link: "https://www.linkedin.com/posts/prasanth-m-736652291_projectexpo-firstplace-innovation-activity-7319707649732685824-wC35?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbAvpoBSc0kQa4d_KYcHaziCYXYwO6Fym4",
  },

  {
    id: 6,
    date: "Jan , 2025",
    title: "3rd place at Futurepreneur 2024",
    image: "/images/fut.jpeg",
    link: "https://www.linkedin.com/posts/srieshwar_srieshwar-studentachievement-congratulations-activity-7283022195344187392-mp-J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbAvpoBSc0kQa4d_KYcHaziCYXYwO6Fym4",
  },
  {
    id: 7,
    date: "Jan , 2025",
    title: "SIH 2024! 🎯 - COLLEGE LEVEL FIRST - WAITLIST (6th position)",
    image: "/images/sih.jpeg",
    link: "https://www.linkedin.com/posts/dharanish-a-m-40a797295_smartearthing-iot-reactnative-ugcPost-7268624942697472000-pKnf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbAvpoBSc0kQa4d_KYcHaziCYXYwO6Fym4",
  },
];

// const techStack = [
//   {
//     category: "LANGUAGES",
//     items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
//   },
//   {
//     category: "Backend",
//     items: ["Node js"],
//   },
//   {
//     category: "Styling",
//     items: ["Tailwind CSS", "Sass", "CSS"],
//   },
//   {
//     category: "Backend",
//     items: ["Node.js", "Express", "NestJS", "Hono"],
//   },
//   {
//     category: "Database",
//     items: ["MongoDB", "SQL"],
//   },
//   {
//     category: "Dev Tools",
//     items: ["Git", "GitHub", "Docker", "Jenkins", "AWS codepipeline"],
//   },
// ];

const techStack = [
  {
    category: "Languages",
    items: ["C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Bun"],
  },
  {
    category: "Databases & Services",
    items: ["MySQL", "MongoDB", "Firebase", "Appwrite"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "VS Code",
      "Git",
      "GitHub",
      "Docker",
      "Jenkins",
      "AWS CodePipeline",
    ],
  },
  {
    category: "Core Concepts",
    items: [
      "Data Structures and algorithm",
      "OOP",
      "MERN Stack",
      "Machine Learning",
      "LLMs",
      "OpenCV",
      "Version Control",
    ],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/GitPrasanth05",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "",
  },
  {
    id: 3,
    text: "Leetcode",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
  {
    id: 4,
    img: "/images/gal4.jpg",
  },
  {
    id: 5,
    img: "/images/gal5.jpg",
  },
  {
    id: 6,
    img: "/images/gal6.jpg",
  },
  {
    id: 7,
    img: "/images/gal7.jpg",
  },
  {
    id: 8,
    img: "/images/gal8.jpg",
  },
  {
    id: 9,
    img: "/images/gal9.jpg",
  },
  {
    id: 10,
    img: "/images/gal10.jpg",
  },
  {
    id: 11,
    img: "/images/gal11.jpg",
  },
  
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/prasanth.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/prasanth-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/prasanth-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/prasanth.jpg",
      description: [
        "Hey! I’m Prasanth M 👋, a full-stack developer and engineering student who loves building systems that are both powerful and practical.",
        "I’m currently an intern at Caterpillar Inc., where I work on real-world engineering and software challenges that demand reliability and performance.",
        "I specialize in web development and multi-domain projects—ranging from clean, scalable web apps to AI-driven systems that blend machine learning with edge computing.",
        "One of my proudest projects is an autonomous rover built using machine learning and monocular depth prediction, deployed on Edge AI hardware like the Jetson Orin Nano.",
        "I’ve completed 6+ impactful projects, earned multiple awards, and I’m always focused on writing code that’s clean, efficient, and built to last.",
        "I’m pursuing a B.E. in Computer & Communication Engineering at Sri Eshwar College, graduating in 2027, after completing my schooling at National Model Matriculation High School.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const achievements = [
  {
    id: 1,
    title: "CREATATHON’24",
    organization: "Sri Eshwar College of Engineering",
    result: "Runner",
    date: "Jan 5, 2024",
    image: "/Achievements pics/CREATATHON.jpg",
  },
  {
    id: 2,
    title: "NEXUS’24",
    organization: "Coimbatore Institute of Technology",
    result: "National Level Semi Finalist",
    date: "Mar 25, 2024",
    image: "/Achievements pics/nexus.jpg",
  },
  {
    id: 3,
    title: "NGI TBI Hackathon",
    organization: "Nehru Institute of Technology",
    result: "Finalist",
    date: "Apr 26, 2024",
    image: "/Achievements pics/ngi.jpg",
  },
  {
    id: 4,
    title: "ELECT-ERA’24",
    organization: "Coimbatore Institute of Technology",
    result: "2nd Place (₹3000)",
    date: "May 3, 2024",
    image: "/Achievements pics/ELECTERA.jpg",
  },
  {
    id: 5,
    title: "Project Expo’24",
    organization: "Sri Eshwar College of Engineering",
    result: "3rd Place",
    date: "Jun 12, 2024",
    image: "/Achievements pics/PROJECT EXPO.jpg",
  },
  {
    id: 6,
    title: "Smart India Hackathon",
    organization: "Ministry of Housing & Urban Affairs",
    result: "Waitlist (Overall 6th)",
    date: "2025",
    image: "/Achievements pics/SIH.jpg",
  },
];

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  archive: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
