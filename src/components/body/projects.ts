import {images} from './images/index.ts';

export const Projects = [
    {
        title: "SingleDadsOutreach",
        description: `SingleDadsOutreach is a nonprofit community platform dedicated to supporting single fathers through mentorship, peer networking, education, and practical resources. The site connects custodial dads with experienced mentors, 
            parenting workshops, and supportive events designed to help them build strong, stable family environments and navigate the unique challenges of fatherhood.`,
        img: images.SDO,
        stack: ['HTML', 'SCSS', 'JavaScript', 'WordPress', 'Stripe'],
        url: "https://singledadsoutreach.org/",
    },
    {
        title: "FamilyTreeDNA Discover",
        description: `Discover™ is a research-driven ancestry platform that connects users’ haplogroups to human history. Designed both for people who already have their DNA test results and those curious about their ancestral roots, Discover combines 
            modern genetic science, ancient DNA research, interactive visuals, maps, and storytelling to help users interpret their lineage in a historical 
            and geographical context.`,
        img: images.DiscoverPreview,
        stack: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'NodeJS', 'AWS', 'GraphQL', 'D3'],
        url: "https://discover.familytreedna.com/",
    },
    {
        title: "Pomodoro Timer",
        description: `The Simple Pomodoro Timer is a lightweight productivity app designed to help users manage their time and maintain 
            focus using the Pomodoro Technique. The app allows users to start a 25-minute focused work session, followed by a short break, 
            with longer breaks after several cycles.`,
        img: images.PomoDoro,
        stack: ['HTML', 'CSS', 'JavaScript', 'React'],
        url: "https://jd-pomodoro.netlify.app/",
    },
    // {
    //     title: "Portfolio",
    //     description: `This very website! My personal web application designed to showcase professional skills and projects in a clean and visually appealing way. 
    //         This site provides a central hub where potential employers, collaborators, or clients can learn more about my work and easily get in touch.`,
    //     img: images.Desktop,
    //     stack: ['HTML', 'SCSS', 'JavaScript', 'React', 'NodeJS'],
    //     url: "https://jdetsi-portfolio.netlify.app/",
    // }
];