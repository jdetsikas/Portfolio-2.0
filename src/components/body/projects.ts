import {images} from './images/index.ts';

export const Projects = [
    {
        title: "SingleDadsOutreach",
        description: `A nonprofit community platform built to support single fathers through mentorship, peer networking, and educational resources. The site integrates payment processing via Stripe to facilitate donations and event registrations, and is built on a customised WordPress stack for straightforward content management by non-technical administrators.`,
        img: images.SDO,
        stack: ['HTML', 'SCSS', 'JavaScript', 'WordPress', 'Stripe'],
        url: "https://singledadsoutreach.org/",
    },
    {
        title: "FamilyTreeDNA Discover",
        description: `A data-rich ancestry platform that maps users' haplogroups against the archaeological and historical record. Built with Angular and a NodeJS/GraphQL backend on AWS, the application presents complex genetic data through interactive D3 visualisations and curated storytelling — making frontier research accessible to a general audience.`,
        img: images.DiscoverPreview,
        stack: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'NodeJS', 'AWS', 'GraphQL', 'D3'],
        url: "https://discover.familytreedna.com/",
    },
    {
        title: "Pomodoro Timer",
        description: `A focused productivity tool implementing the Pomodoro Technique — 25-minute work intervals separated by short breaks, with longer rest periods after every four cycles. Built in React with a clean, distraction-free interface designed to keep users in flow.`,
        img: images.PomoDoro,
        stack: ['HTML', 'CSS', 'JavaScript', 'React'],
        url: "https://jd-pomodoro.netlify.app/",
    },
];
