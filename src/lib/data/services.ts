import type { Service } from "$lib/utils/types";

export default [
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform Android & iOS apps built with Flutter — from idea and architecture to store release and beyond.',
    tags: [
      { label: 'Flutter', color: 'primary' },
      { label: 'Android', color: 'secondary' },
      { label: 'iOS', color: 'secondary' },
    ],
  },
  {
    title: 'Web Development',
    description:
      'Modern websites and web apps with a focus on clean UX, performance, and maintainable code.',
    tags: [
      { label: 'Vue.js', color: 'primary' },
      { label: 'React', color: 'primary' },
      { label: 'Angular', color: 'primary' },
    ],
  },
  {
    title: 'Flutter Packages & Open Source',
    description:
      'Custom Flutter packages, widgets, and library maintenance — drawing on years of pub.dev and community work.',
    tags: [
      { label: 'pub.dev', color: 'primary' },
      { label: 'Open Source', color: 'secondary' },
    ],
  },
  {
    title: 'AI-Powered Features',
    description:
      'Integrating AI and machine learning into mobile and web products, from prototypes to production features.',
    tags: [
      { label: 'AI', color: 'primary' },
      { label: 'ML', color: 'secondary' },
    ],
  },
] as Service[];
