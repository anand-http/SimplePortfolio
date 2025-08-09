import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "vistagram",
    title: "VistaGram - A Social Media Web App",
    description:
      "Vistagram is a full-stack social media web application built using the MERN stack. Vistagram allows users to create accounts, upload photos, view others’ posts, like, and commentall in a clean, responsive UI.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/anand-http/VistaGram-SocailMediaWebApp",
    url: "https://vistagramm.netlify.app/",
    tags: ["React.js", "Express.js", "MongoDB", "Node.js", "Cloudinary", "Redux"],
  },
  {
    id: "oyo-clone",
    title: "OYO Clone With Payment Gateway",
    description:
      "A full-stack hotel booking web application inspired by OYO, built with the MERN stack. It features user authentication, hotel listings, room details, booking functionality, and a responsive design.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/anand-http/OyoClone",
    url: "https://oyo-clone-chi.vercel.app/",
    tags: ["Next.js", "Redux", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
  },
  {
    id: "todo-mobile-app",
    title: "Full Stack Todo Mobile App",
    description:
      "A cross-platform React Native mobile app designed to boost personal productivity. It includes user authentication, task management, and a clean, intuitive interface. Built for users to organize their day efficiently.",
    icon: "/skills/react-native.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/anand-http/fullStackTodoMobileApp",
    tags: ["React Native", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "Redux"],
  },
];
export default projects;
