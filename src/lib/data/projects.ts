import type { Project } from "$lib/utils/types";

export default [ 
  {
    name: 'This webpage',
    description:
    'My portfolio page showing the projects I made and the work experience that I have.',
    image: 'images/features/open-source.jpg',
    tags: [{ label: 'Svelte', color: 'primary' }],
    type: 'Web App',
    year: '2024',
  },
  {
    name: 'TinyColor 2',
    description:
    'Co-Maintainer of the community fork tinycolor2, forked from the original tinycolor Flutter package.',
    image: 'images/features/open-source.jpg',
    tags: [{ label: 'Svelte', color: 'primary' }],
    type: 'Flutter package',
    year: '2021',
  },
  {
    name: 'Number Paginator',
    description:
    'Maintainer of number_paginator, a Flutter package for implementing pagination using page numbers.',
    image: 'images/features/open-source.jpg',
    tags: [{ label: 'Svelte', color: 'primary' }],
    type: 'Flutter package',
    year: '2021',
  },
  {
    name: 'HSV Color Pickers',
    description:
    'Maintainer of hsv_color_pickers, a Flutter package that offers widgets for picking the different attributes of a HSV color: hue, saturation and value.',
    image: 'images/features/open-source.jpg',
    tags: [{ label: 'Svelte', color: 'primary' }],
    type: 'Flutter package',
    year: '2021',
  },
  {
    name: 'Gallerize',
    description:
    'Maintainer of Gallerize, a Flutter package for creating a gallery (demo) app for developed Flutter packages/widgets.',
    image: 'images/features/open-source.jpg',
    tags: [{ label: 'Svelte', color: 'primary' }],
    type: 'Flutter package',
    year: '2020',
  },
  {
    name: 'GWL Webpage',
    description:
    'The web page of the law office Gapp Wielander Laurenza.',
    image: 'images/features/open-source.jpg',
    tags: [{ label: 'Svelte', color: 'primary' }],
    type: 'Webpage',
    year: '2020',
  },
  {
    name: 'Bleckl',
    description:
    'Re-make of WattenZähler. Point counter for the South Tyrolean card games Watten & Sockn.',
    image: 'images/features/open-source.jpg',
    tags: [{ label: 'Flutter', color: 'secondary' }],
    type: 'App',
    year: '2020',
  },
  {
    name: 'Backdrop',
    description:
    'I am co-maintainer of the Backdrop package of Flutter Community. It implements the backdrop-functionality from the Material Design specification.',
    image: 'images/features/light-dark.jpg',
    type: 'Flutter package',
    year: '2019',
  },
  {
    name: 'Lyrics-Genre-Classification',
    description:
      'TUM seminar project for classifying the genre of a music track only by looking at its lyrics text, using natural language processing (NLP).',
    image: 'images/features/optimized.jpg',
    tags: [{ label: 'Powered by Image Transmutation' }],
    type: 'Seminar Project',
    year: '2019',
  }, 
  {
    name: 'VerkehrsInfo Radio 2000',
    description:
      'Traffic announcements in South Tyrol supported by the traffic reporting centre. Powered by Radio 2000.',
    image: 'images/features/extensible.jpg',
    type: 'App',
    year: '2014',
  }, 
  {
    name: 'dieAntenne - Sportergebnisse',
    description:
      'South Tyrolean live football scores. Powered by Radio Die Antenne. (not officially in use anymore)',
    image: 'images/features/themeable.jpg',
    tags: [{ label: 'Primary Color' }, { label: 'Secondary Color', color: 'secondary' }],
    type: 'App',
    year: '2013',
  }, 
  {
    name: 'WattenZähler',
    description:
      'Point counter for the South Tyrolean card game Watten. (Now replaced by Bleckl)',
    image: 'images/features/markdown.jpg',
    tags: [{ label: 'Native Android', color: 'primary' }],
    type: 'App',
    year: 2012,
  }, 
] as Project[];