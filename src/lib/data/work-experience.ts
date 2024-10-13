import type { WorkExperience } from "$lib/utils/types";

export default [
  {
    companySlug: 'secondary',
    company: 'Netscrapers/AIoT Solutions',
    jobTitle: 'Software Engineer - Freelance',
    timeframe: '09/2023 - present',
    current: false,
    location: 'Málaga, Spain',
    description: 'Working as a freelance front end engineer for both companies, using Flutter for mobile apps, like the Feldfühler App and an agricultural irrigation project that is in elaboration. Also working on AI topics and web projects.',
    tags: [{ label: 'Angular', color: 'primary' }, { label: 'Python', color: 'secondary' }, { label: 'Flutter', color: 'primary' }, { label: 'Dart', color: 'secondary' }],
  },
  {
    companySlug: 'secondary',
    company: 'Lynus AG',
    jobTitle: 'Front End Lead',
    timeframe: '11/2020 - 09/2023',
    current: false,
    location: 'Tuggen, Switzerland',
    description: 'Leading the front-end development team, by coordinating and supporting the development of web applications. Developing Android/iOS apps.',
    tags: [{ label: 'Vue.js', color: 'primary' }, { label: 'React', color: 'primary' }, { label: 'Flutter', color: 'primary' }, { label: 'Dart', color: 'secondary' }],
  },
  {
    companySlug: 'secondary',
    company: 'Fraunhofer Italia Research',
    jobTitle: 'Internship',
    timeframe: '08/2018 - 09/2018',
    current: false,
    location: 'Bolzano, Italy',
    description: 'Elaborate concept for the secure communication in the project "DeConPro" (Industry 4.0). Worked on solving the "Job shop scheduling problem" (JSSP) within a factory using a genetic algorithm (GA). Learned how to solder circuit boards using hand soldering and reflow oven techniques.',
    tags: [{ label: 'Java', color: 'secondary' }],
  },
  {
    companySlug: 'primary',
    company: 'fireflow GmbH',
    jobTitle: 'Working Student',
    timeframe: '05/2017 - 09/2017',
    current: false,
    location: 'Munich, Germany',
    description: 'Renew the Fireflow in-house Android apps for fitness. Responsible for the "SummFit - Bodyweight Workouts" fitness app',
    tags: [{ label: 'Android Studio', color: 'primary' }, { label: 'Java', color: 'secondary' }, { label: 'Unity', color: "primary" }],
  }
] as WorkExperience[];

const careerStart = new Date(2012, 12, 16);
export const yearsOfExperience = Math.abs(
  new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);