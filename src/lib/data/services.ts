import type { Service } from "$lib/utils/types";

export default [
  {
    title: 'Flutter App Development',
    description:
      'Cross-platform iOS and Android apps built with Flutter — from idea and architecture to store release and beyond.',
    tags: [
      { label: 'Flutter', color: 'primary' },
      { label: 'iOS', color: 'secondary' },
      { label: 'Android', color: 'secondary' },
    ],
  },
  {
    title: 'Web Development',
    description:
      'Modern websites and web apps with a focus on clean UX, performance, and maintainable code.',
    tags: [
      { label: 'Web', color: 'primary' },
      { label: 'Frontend', color: 'secondary' },
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
