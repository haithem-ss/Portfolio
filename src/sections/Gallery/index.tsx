import { ProjectType } from "@/types/Project";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import Project01 from "@/images/Project01.png";
import Project02 from "@/images/Project02.png";
import TahsilImage from "@/images/Tahsil.png";
import EdenImage from "@/images/eden.webp";
import EmpireImage from "@/images/Empire.png";
import ProjectMusic from "@/images/ProjectMusic.png";
import RAGProject from "@/images/RAGProject.png";

export default function () {
  let Projects: Array<ProjectType> = [
    {
      image: RAGProject,
      title:
        "Transforming PDF Content into Interactive Q&A with RAG and Vector Databases",
      description:
        "Upload your PDFs, generate personalized questions, and take customized practice tests. Turn your study materials into an interactive learning experience and watch your knowledge grow.",
      linkFigma: null,
      linkArticle: "blog/transforming-pdf-content-into-intearactive-qa",
      linkPreview: "https://rag-haithemss.vercel.app",
      linkGithub: "https://github.com/haithem-ss/RAG_app",
      technologies: ["Nextjs 14", "Pinecone", "Hugging Face", "OpenAI"],
      tags: ["Website", "Personal project", "AI"],
    },
    {
      image: ProjectMusic,
      title: "Music app",
      description:
        "Music app is a mobile application that allows users to listen to music, create playlists, and discover new songs. The app is built using React Native. Users can create an account, log in, and enjoy a seamless music experience. The app also features a search function that enables users to find their favorite songs and artists. Music app is a personal project that showcases my skills in mobile app development.",
      linkFigma: null,
      linkArticle: null,
      linkPreview: null,
      linkGithub: "https://github.com/haithem-ss/MusicApp",
      technologies: ["React native"],
      tags: ["Mobile app", "Personal project"],
    },
    {
      image: EmpireImage,
      title:
        "Empire Business: A Digital Citadel for Coach and Affiliate Empowerment",
      description:
        "Empire Business is a platform where a coach offers and sells courses. Individuals have the option to purchase these courses or join as affiliates to promote the programs and earn commissions",
      linkArticle: null,
      linkFigma: null,
      linkPreview: "https://empirebusiness.net/",
      linkGithub: null,
      technologies: ["Nextjs 14", "Supabase", "PostgreSQL"],
      tags: ["Website", "Freelance project"],
    },
    {
      image: TahsilImage,
      title: "Tahsil: Connecting Minds, Empowering Learning",
      description:
        "Tahsil is more than an education platform; it's a dynamic ecosystem where students and teachers converge to create, collaborate, and learn. As a contributor to this freelance project, I played a crucial role in developing Tahsil's innovative features. From real-time chat for seamless communication to blogs that inspire thought leadership, Tahsil is designed to enrich the learning experience. What sets Tahsil apart is its fully customizable access rights system, granting administrators the power to tailor the platform to their unique educational vision.",
      linkFigma:
        "https://www.behance.net/gallery/189941315/Online-Education-Platform/modules/1074151305",
      linkPreview: "https://tahsiledu.com/",
      linkArticle: null,
      linkGithub: null,
      technologies: ["Nextjs 13", "Firebase", "MongoDB"],
      tags: ["Website", "Freelance project"],
    },
    {
      image: Project01,
      title: "Mobile Banking App: Implementation of Finance UI kit",
      description:
        "Explore the future of digital banking through my Mobile Banking App, where I seamlessly implemented the Finance UI Kit. This project demonstrates my skill in translating intricate designs into a user-friendly mobile application. Users can effortlessly create virtual credit cards and securely transfer money using QR code scanning. Prioritizing simplicity and security, the app offers hassle-free credit card management and smooth transactions, offering a glimpse into the innovative landscape of modern finance management.",
      linkFigma:
        "https://www.figma.com/file/ruSlyaS7Ta3101MZKScGh3/Stream---Finance-UI-Kit-(Community)?type=design&node-id=0%3A1&mode=design&t=qUwqEHV71TKLxbXL-1",
      linkArticle: null,
      linkPreview: null,
      linkGithub:
        "https://github.com/haithem-ss/Finance-UI-KIt-implementation-with-React-Native",
      technologies: ["React Native", "Firebase"],
      tags: ["Website", "Personal project"],
    },
    {
      image: Project02,
      title: "Nir: Explore, Learn, Thrive",
      description:
        "Nir is your gateway to a world of knowledge and growth. Educators inspire, students learn, and passions ignite on this innovative education platform. Dive into expertly curated courses, engage in interactive learning, and connect with a community of knowledge seekers. Nir invites you to explore, learn, and thrive in a vibrant educational ecosystem where every click brings you closer to your aspirations.",
      linkFigma:
        "https://www.figma.com/file/ozfzooZ1e4ZpHG8XyNaqmT/nir?node-id=11%3A4&t=7Rd6IgilfIZWBueg-1",
      linkPreview: null,
      linkArticle: null,
      linkGithub: "https://github.com/haithem-ss/ProjetGL",
      technologies: ["React", "Django rest framework"],
      tags: ["Website", "Personal project"],
    },
    {
      linkArticle: null,
      image: EdenImage,
      title: "EdenTech: Elevating Your Digital Shopping Experience",
      description:
        "Embark on a transformative digital shopping journey with EdenTech, an innovative e-commerce app dedicated to laptops and mobile phones. In my role contributing to this project, I integrated a powerful graph database to shape a state-of-the-art recommendation system. EdenTech doesn't just showcase products; it personalizes your exploration using classic algorithms such as collaborative filtering and content filtering. Experience a new era of tech shopping with EdenTech",
      linkFigma: null,
      linkPreview: null,
      linkGithub: "https://github.com/haithem-ss/MiniProjetBdd",
      technologies: ["React", "Nodejs", "Neo4j"],
      tags: ["Website", "Personal project"],
    },
  ];

  return (
    <>
      <main
        className="px-4 sm:px-20 lg:px-40 max-w-[2000px] m-auto"
        id="Projects"
      >
        <Header />
        <div className=" flex flex-col items-center justify-center gap-10">
          {Projects.map((project: ProjectType) => {
            return (
              <>
                <ProjectCard project={project} />
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
