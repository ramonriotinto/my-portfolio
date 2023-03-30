import {
    SiPostgresql,
    SiTypescript,
    SiExpress,
    SiDjango,
} from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact } from "react-icons/fa";

export const stackData = [
    {
        title: "HTML",
        img: FaHtml5,
    },
    {
        title: "CSS",
        img: FaCss3Alt,
    },
    {
        title: "React",
        img: FaReact,
    },
    {
        title: "JS",
        img: FaJs,
    },
    { title: "TypeScript", img: SiTypescript },
    { title: "Express", img: SiExpress },
    {
        title: "Node JS",
        img: FaNode,
    },
    { title: "Python", img: FaPython },
    { title: "Django", img: SiDjango },
    { title: "PostgreSQL", img: SiPostgresql },
    { title: "Git", img: FaGit },
];
