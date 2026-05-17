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
        title: "Needlr",
        description: `Needlr is a location-based search tool for finding tattoo and piercing shops near you. Users enter a zip code and search radius to get a ranked list of local shops, with details like ratings, hours, contact info, and photos pulled live from Google Places.`,
        img: images.NeedlrPreview,
        stack: ['React', 'Vite', 'CSS', 'JavaScript', 'Google Maps JS API', 'Google Places API', 'SVG'],
        url: "https://needlr.netlify.app/",
    },
    {
        title: "Pomodoro Timer",
        description: `A focused productivity tool implementing the Pomodoro Technique — 25-minute work intervals separated by short breaks, with longer rest periods after every four cycles. Built in React with a clean, distraction-free interface designed to keep users in flow.`,
        img: images.PomoDoro,
        stack: ['HTML', 'CSS', 'JavaScript', 'React'],
        url: "https://jd-pomodoro.netlify.app/",
    },
];
