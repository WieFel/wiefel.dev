import type { Project } from "$lib/utils/types";

export default [
  {
    name: 'Park Radio',
    description:
      'Flutter app for streaming the Argentinian radio channel Park.',
    image: 'images/projects/park.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2025', color: 'secondary' }],
    playStore: 'https://play.google.com/store/apps/details?id=ar.com.park',
    appStore: 'https://apps.apple.com/us/app/park-radio/id6741716276'
  },
  {
    name: 'This Person Does Not Exist',
    description:
      'Flutter app reproducing the web page thispersondoesnotexist.com, which generates not existing people using AI.',
    image: 'images/projects/thispersondoesnotexist.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2024', color: 'secondary' }],
    playStore: 'https://play.google.com/store/apps/details?id=dev.wiefel.thispersondoesnotexist',
    appStore: 'https://apps.apple.com/us/app/this-person-does-not-exist/id6476830001'
  },
  {
    name: 'Gamper-Schwienbacher',
    description:
      'Web page of the engineering office Gamper-Schwienbacher.',
    image: 'images/projects/gamper-schwienbacher.jpeg',
    tags: [{ label: 'Web Page', color: 'primary' }, { label: '2023', color: 'secondary' }],
    webpage: 'https://gamper-schwienbacher.com'
  },
  {
    name: 'TinyColor 2',
    description:
      'Co-Maintainer of the community fork tinycolor2, forked from the original tinycolor Flutter package.',
    image: 'images/projects/flutter.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2021', color: 'secondary' }],
    github: 'https://github.com/TinyCommunity/tinycolor2',
    pubDev: 'https://pub.dev/packages/tinycolor2',
  },
  {
    name: 'Number Paginator',
    description:
      'Maintainer of number_paginator, a Flutter package for implementing pagination using page numbers.',
    image: 'images/projects/flutter.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2021', color: 'secondary' }],
    github: 'https://github.com/WieFel/number_paginator',
    pubDev: 'https://pub.dev/packages/number_paginator'
  },
  {
    name: 'HSV Color Pickers',
    description:
      'Maintainer of hsv_color_pickers, a Flutter package that offers widgets for picking the different attributes of a HSV color: hue, saturation and value.',
    image: 'images/projects/flutter.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2021', color: 'secondary' }],
    github: 'https://github.com/WieFel/hsv_color_pickers',
    pubDev: 'https://pub.dev/packages/hsv_color_pickers'
  },
  {
    name: '3D Printing Projects',
    description: 'I love designing and printing 3D designs with my Creality Ender 3 Pro printer. Some of my designs are available on Thingiverse.',
    image: 'images/projects/3d_print.jpg',
    tags: [{ label: '3D Printing', color: 'primary' }, { label: '2020 - now', color: 'secondary' }],
    webpage: 'https://www.thingiverse.com/wiefel/designs'
  },
  {
    name: 'Gallerize',
    description:
      'Maintainer of Gallerize, a Flutter package for creating a gallery (demo) app for developed Flutter packages/widgets.',
    image: 'images/projects/flutter.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2020', color: 'secondary' }],
    github: 'https://github.com/WieFel/gallerize',
    pubDev: 'https://pub.dev/packages/gallerize'
  },
  {
    name: 'GWL Webpage',
    description:
      'The web page of the law office Gapp Wielander Laurenza.',
    image: 'images/projects/gwl.jpeg',
    tags: [{ label: 'Web Page', color: 'primary' }, { label: '2020', color: 'secondary' }],
    webpage: 'https://gwl.it'
  },
  {
    name: 'Bleckl',
    description:
      'Flutter app. Re-make of WattenZähler. Point counter for the South Tyrolean card games Watten & Sockn.',
    image: 'images/projects/bleckl.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2020', color: 'secondary' }],
    playStore: 'https://play.google.com/store/apps/details?id=wattenzaehler.activities',
    appStore: 'https://apps.apple.com/us/app/bleckl/id1479732838'
  },
  {
    name: 'Backdrop',
    description:
      'I am co-maintainer of the Backdrop package of Flutter Community. It implements the backdrop-functionality from the Material Design specification.',
    image: 'images/projects/flutter_community.jpeg',
    tags: [{ label: 'Flutter Package', color: 'primary' }, { label: '2019', color: 'secondary' }],
    github: 'https://github.com/fluttercommunity/backdrop',
    pubDev: 'https://pub.dev/packages/backdrop'
  },
  {
    name: 'Lyrics-Genre-Classification',
    description:
      'TUM seminar project for classifying the genre of a music track only by looking at its lyrics text, using natural language processing (NLP).',
    image: 'images/projects/deep-learning.jpeg',
    tags: [{ label: 'Seminar Project', color: 'primary' }, { label: '2019', color: 'secondary' }],
    github: 'https://github.com/WieFel/LyricsGenreClassification'
  },
  {
    name: 'VerkehrsInfo Radio 2000',
    description:
      'Native Android app for traffic announcements in South Tyrol. Supported by the traffic reporting centre. Powered by Radio 2000.',
    image: 'images/projects/verkehrsinfo.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2014', color: 'secondary' }],
    playStore: 'https://play.google.com/store/apps/details?id=com.main.verkehrsinfo'
  },
  {
    name: 'dieAntenne - Sportergebnisse',
    description:
      'Native Android app for South Tyrolean live football scores. Powered by Radio Die Antenne.',
    image: 'images/projects/dieantenne.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2013', color: 'secondary' }],
    playStore: 'https://play.google.com/store/apps/details?id=com.main.antenne'
  },
  {
    name: 'WattenZähler',
    description:
      'Native Android point counter app for the South Tyrolean card game Watten. (Now replaced by Bleckl)',
    image: 'images/projects/wattenzaehler.jpeg',
    tags: [{ label: 'App', color: 'primary' }, { label: '2012', color: 'secondary' }],
    playStore: 'https://play.google.com/store/apps/details?id=wattenzaehler.activities'
  },
] as Project[];