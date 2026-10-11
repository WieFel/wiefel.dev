import type { Service } from "$lib/utils/types";

export default [
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform Android & iOS apps built with Flutter — from idea and architecture to a product ready to ship, and maintenance over time.',
    tags: [
      { label: 'Flutter', color: 'primary' },
      { label: 'Android', color: 'secondary' },
      { label: 'iOS', color: 'secondary' },
    ],
  },
  {
    title: 'Web Development',
    description:
      'Modern websites and web apps with a focus on clean UX, performance, and maintainable code — including ongoing maintenance.',
    tags: [
      { label: 'Vue.js', color: 'primary' },
      { label: 'React', color: 'primary' },
      { label: 'Angular', color: 'primary' },
      { label: 'Web', color: 'secondary' },
    ],
  },
  {
    title: 'App Store Publishing',
    description:
      'Play Store and App Store releases — signing, listings, screenshots, review, and updates.',
    tags: [
      { label: 'Play Store', color: 'primary' },
      { label: 'App Store', color: 'primary' },
    ],
  },
  {
    title: 'Web Deployment',
    description:
      'Hosting of sites on a custom domain — DNS, HTTPS, and a setup you can redeploy without starting over.',
    tags: [
      { label: 'Custom Domain', color: 'primary' },
      { label: 'Hosting', color: 'secondary' },
    ],
  },
  {
    title: 'Consulting',
    description:
      'Helping freelancers or companies build apps and websites more efficiently, and supporting them in the publishing and deployment process.',
    tags: [
      { label: 'Apps', color: 'primary' },
      { label: 'Web', color: 'primary' },
      { label: 'Publishing', color: 'secondary' },
    ],
  },
] as Service[];
