import IconBxLink from "../icons/IconBxLink";
import IconExternalLink from "../icons/IconExternalLink";
import IconGithub from "../icons/IconGithub";
import Line from "../components/Line";
import FadeInDiv from "../components/FadeInDiv";
import Bullets from "../components/Bullets";
import { useState } from "react";
import IconChevronCompactDown from "../icons/IconChevronCompactDown";

import PeekoThumbnail from "../images/peeko-thumbnail.png";
import PotatoDBThumbnail from "../images/potatodb-thumbnail.png";
// import StockAIThumbnail from "../images/stockai-thumbnail.png";
import WeSchoolThumbnail from "../images/weschool-thumbnail.png";
import SwordyTypeThumbnail from "../images/swordytype-thumbnail.png";
import AxcellentThumbnail from "../images/axcellent-thumbnail.png";
import GpacalcThumbnail from "../images/gpacalc-thumbnail.png";

enum Techs {
    HTML = "HTML",
    CSS = "CSS",
    JAVASCRIPT = "JavaScript",
    TYPESCRIPT = "TypeScript",
    TAILWIND = "TailwindCSS",
    SASS = "SASS",
    EJS = "EJS",
    REACT = "React",
    NODE = "Node.js",
    EXPRESS = "Express",
    NEST = "Nest",
    MONGODB = "MongoDB",
    PYTHON = "Python",
    AWS = "AWS",
    NPM = "NPM",
    TELEGRAF = "Telegraf.js",
}

interface IProject {
    title: string;
    description: string;
    image: string;
    repo: string;
    link?: string;
    stack: string[];
}

const projectsData: IProject[] = [
    {
        title: "Peeko - Social Media Web App",
        description:
            "A social media web application that features authentication, validation, file uploads, and various CRUD operations",
        image: PeekoThumbnail,
        repo: "https://github.com/MoBakour/peeko",
        link: "https://peeko.netlify.com",
        stack: [
            Techs.REACT,
            Techs.NODE,
            Techs.EXPRESS,
            Techs.MONGODB,
            Techs.TAILWIND,
            Techs.AWS,
            Techs.TYPESCRIPT,
        ],
    },
    {
        title: "PotatoDB - NPM Library for Creating Filesystem Databases",
        description:
            "An npm library for creating and managing local filesystem based databases in Node.js servers",
        image: PotatoDBThumbnail,
        repo: "https://github.com/MoBakour/potatodb",
        link: "https://potatodb.onrender.com",
        stack: [Techs.NODE, Techs.NPM, Techs.JAVASCRIPT],
    },
    // {
    // 	title: "StockAI - Stock Prediction AI",
    // 	description:
    // 		"Stock prediction AI project built with Python, Pandas, Scikit-learn, NumPy. With a web interface built with React and TypeScript.",
    // 	image: StockAIThumbnail,
    // 	repo: "https://github.com/MoBakour/stockai-interface",
    // 	link: "https://stock-ai.netlify.app",
    // 	stack: [Techs.PYTHON, Techs.TYPESCRIPT, Techs.REACT, Techs.TAILWIND],
    // },
    {
        title: "WeSchool - Class Management Web App",
        description:
            "A web app for managing school classrooms and students. Features authentication, validation, and various CRUD operations.",
        image: WeSchoolThumbnail,
        repo: "https://github.com/MoBakour/WeSchool",
        link: "https://weschool.onrender.com",
        stack: [
            Techs.NODE,
            Techs.EXPRESS,
            Techs.MONGODB,
            Techs.SASS,
            Techs.EJS,
            Techs.JAVASCRIPT,
        ],
    },
    {
        title: "Advanced GPA Calculator Tool",
        description:
            "An advanced GPA calculator tool enriched with many useful features such as real-time calculation, saving data for future visits, grading system customization ability, toggling semesters for calculation, and sharing results via links",
        image: GpacalcThumbnail,
        repo: "https://github.com/MoBakour/gpa_calculator_tool",
        link: "https://gpa-calculator-tool.netlify.app",
        stack: [Techs.REACT, Techs.TAILWIND, Techs.TYPESCRIPT],
    },
    {
        title: "Axcellent - A Telegram Utility Bot",
        description:
            "A telegram utility tools bot equipped with various helpful tools that allow downloading videos from different platforms, uploading images to the cloud, converting file formats, and more.",
        image: AxcellentThumbnail,
        repo: "https://github.com/MoBakour/Axcellent",
        stack: [Techs.TYPESCRIPT, Techs.TELEGRAF],
    },
    {
        title: "SwordyType - Customizable Typing Speed Test Game",
        description:
            "A customizable typing speed test game website that offers multiple test modes, languages, and settings.",
        image: SwordyTypeThumbnail,
        repo: "https://github.com/MoBakour/SwordyType",
        link: "https://swordytype.netlify.app",
        stack: [Techs.HTML, Techs.CSS, Techs.JAVASCRIPT],
    },
];

interface IProjectCard {
    project: IProject;
}

const ProjectCard = ({ project }: IProjectCard) => {
    return (
        <a href={project.repo} target="_blank">
            <div className="group-hover/container:opacity-60 md:!opacity-100 hover:!opacity-100 group/card p-4 py-6 flex sm:flex-col-reverse gap-4 transition rounded-lg hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg md:hover:bg-transparent md:hover:shadow-none md:hover:drop-shadow-none cursor-pointer">
                <div className="flex flex-col w-fit gap-2">
                    <img
                        src={project.image}
                        alt="Project image"
                        className="w-[160px] h-[96px] max-w-max"
                    />
                    <div className="flex justify-center items-center gap-2">
                        <a
                            href={project.repo}
                            className="text-2xl m-2 transition hover:text-slate-200"
                            title="Github repo"
                            target="_blank"
                        >
                            <IconGithub />
                        </a>
                        {project.link && (
                            <a
                                href={project.link}
                                className="text-2xl m-2 transition hover:text-slate-200"
                                title="Live demo"
                                target="_blank"
                            >
                                <IconBxLink />
                            </a>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-slate-200 font-bold text-lg group-hover/card:text-teal-400 md:group-hover/card:text-slate-200 transition">
                        {project.title}
                        <IconExternalLink className="inline-block ml-2 mb-2" />
                    </h3>
                    <p className="text-sm">{project.description}</p>
                    <Bullets bullets={project.stack} />
                </div>
            </div>
        </a>
    );
};

const Projects = () => {
    const CHUNK = 4;
    const [count, setCount] = useState(CHUNK);
    const [showIncrement, setShowIncrement] = useState(
        projectsData.length > CHUNK
    );

    const incrementCount = () => {
        setShowIncrement(projectsData.length > count + CHUNK);
        setCount((prev) => (prev += CHUNK));
    };

    return (
        <section>
            <h2 className="uppercase text-lg font-bold">Projects</h2>

            <div className="p-4 relative group/container flex flex-col gap-6">
                {/* decoration lines */}
                <Line top left horizontal size="long" />
                <Line top left vertical size="short" />

                {projectsData.slice(0, count).map((project) => (
                    <FadeInDiv percentage={10} key={project.title}>
                        <ProjectCard project={project} />
                    </FadeInDiv>
                ))}
            </div>

            {showIncrement && (
                <button
                    className="hover:text-teal-400 w-fit m-auto flex flex-col justify-center items-center transition cursor-pointer"
                    onClick={incrementCount}
                >
                    <p>Show more</p>
                    <IconChevronCompactDown />
                </button>
            )}
        </section>
    );
};

export default Projects;
