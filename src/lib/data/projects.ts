import type { Project } from "$lib/utils/types";

export default [
  {
    name: 'This webpage',
    description:
      'My portfolio page showing the projects I made and the work experience that I have.',
    image: 'images/sample-image.png',
    tags: [{ label: 'Web Page', color: 'primary' }, { label: '2024', color: 'secondary' }],
    type: 'Web App',
    year: '2024',
  },
  {
    name: 'This Person Does Not Exist',
    description:
      'Flutter app reproducing the web page thispersondoesnotexist.com, which generates not existing people using AI.',
    image: 'images/projects/thispersondoesnotexist.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2024', color: 'secondary' }],
    type: 'Flutter package',
    year: '2023',
  },
  {
    name: 'Gamper-Schwienbacher',
    description:
      'Web page of the engineering office Gamper-Schwienbacher.',
    image: 'images/projects/gamper-schwienbacher.jpeg',
    tags: [{ label: 'Web Page', color: 'primary' }, { label: '2023', color: 'secondary' }],
    type: 'Flutter package',
    year: '2023',
  },
  {
    name: 'TinyColor 2',
    description:
      'Co-Maintainer of the community fork tinycolor2, forked from the original tinycolor Flutter package.',
    image: 'images/projects/flutter.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2021', color: 'secondary' }],
    type: 'Flutter package',
    year: '2021',
  },
  {
    name: 'Number Paginator',
    description:
      'Maintainer of number_paginator, a Flutter package for implementing pagination using page numbers.',
    image: 'images/projects/flutter.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2021', color: 'secondary' }],
    type: 'Flutter package',
    year: '2021',
  },
  {
    name: 'HSV Color Pickers',
    description:
      'Maintainer of hsv_color_pickers, a Flutter package that offers widgets for picking the different attributes of a HSV color: hue, saturation and value.',
    image: 'images/projects/flutter.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2021', color: 'secondary' }],
    type: 'Flutter package',
    year: '2021',
  },
  {
    name: 'Gallerize',
    description:
      'Maintainer of Gallerize, a Flutter package for creating a gallery (demo) app for developed Flutter packages/widgets.',
    image: 'images/projects/flutter.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2020', color: 'secondary' }],
    type: 'Flutter package',
    year: '2020',
  },
  {
    name: 'GWL Webpage',
    description:
      'The web page of the law office Gapp Wielander Laurenza.',
    image: 'images/projects/gwl.jpeg',
    tags: [{ label: 'Web Page', color: 'primary' }, { label: '2020', color: 'secondary' }],
    type: 'Webpage',
    year: '2020',
  },
  {
    name: 'Bleckl',
    description:
      'Flutter app. Re-make of WattenZähler. Point counter for the South Tyrolean card games Watten & Sockn.',
    image: 'images/projects/bleckl.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2020', color: 'secondary' }],
    type: 'App',
    year: '2020',
  },
  {
    name: 'Backdrop',
    description:
      'I am co-maintainer of the Backdrop package of Flutter Community. It implements the backdrop-functionality from the Material Design specification.',
    image: 'images/projects/flutter_community.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2019', color: 'secondary' }],
    type: 'Flutter package',
    year: '2019',
  },
  {
    name: 'Lyrics-Genre-Classification',
    description:
      'TUM seminar project for classifying the genre of a music track only by looking at its lyrics text, using natural language processing (NLP).',
    image: 'images/projects/deep-learning.jpeg',
    tags: [{ label: 'Seminar Project', color: 'primary' }, { label: '2019', color: 'secondary' }],
    type: 'Seminar Project',
    year: '2019',
  },
  {
    name: 'VerkehrsInfo Radio 2000',
    description:
      'Native Android app for traffic announcements in South Tyrol. Supported by the traffic reporting centre. Powered by Radio 2000.',
    image: 'images/projects/verkehrsinfo.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2014', color: 'secondary' }],
    type: 'App',
    year: '2014',
  },
  {
    name: 'dieAntenne - Sportergebnisse',
    description:
      'Native Android app for South Tyrolean live football scores. Powered by Radio Die Antenne.',
    image: 'images/projects/dieantenne.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2013', color: 'secondary' }],
    type: 'App',
    year: '2013',
  },
  {
    name: 'WattenZähler',
    description:
      'Native Android point counter app for the South Tyrolean card game Watten. (Now replaced by Bleckl)',
    image: 'images/projects/wattenzaehler.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2012', color: 'secondary' }],
    type: 'App',
    year: 2012,
  },
] as Project[];