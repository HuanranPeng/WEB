import { Project } from '../types';

export const locatifyArNavigation: Project = {
  id: 'locatify-ar-navigation',
  title: 'Locatify',
  category: 'AR/VR Design',
  year: 'Oct. – Dec. 2019',
  link: '/case-study/locatify-ar-navigation',
  description:
    'An AR-powered navigation app that helps college students quickly find rooms, events, and classrooms on campus, plus a creator mode for authoring AR content.',

  imageUrl: '/images/locatify-ar-navigation/hero-image.png',
  heroImage: '/images/locatify-ar-navigation/hero-image.png',

  heroSubTitle: 'Augmented Reality navigation design',
  role: 'Usability Study, UX Design',
  team: 'Team Work',

  meta: {
    title: 'Locatify AR Navigation | Huanran Peng Design',
    description:
      'Designing Locatify, an augmented reality navigation experience that helps students quickly locate rooms, events, and classrooms on campus.',
    ogImage: '/images/locatify-ar-navigation/hero-image.png',
    ogUrl: 'https://www.huanranpeng.com/2026/case-study/locatify-ar-navigation',
  },

  sections: [
    {
      type: 'content',
      title: 'Overview',
      content: '',
      subsections: [
        {
          title: 'Background',
          content:
            'We all had this experience of being in a new place and felt that we needed someone to help us find out where to go or what to do next. As a student at the University of Texas at Austin, we visit new buildings and new places very often, but it’s also common that we couldn’t find the places we’re looking for or we don’t knowhow to interact with the facilities in the places.',
        },
        {
          title: 'Summary',
          content:
            'Locatify is an Augmented Reality(AR)-powered application that built for college students to quickly locate places, events, orclassrooms they want to find on campus with the mobile phoneson their hands. Locatify also provides a Creator version on tabletfor users that are more interested in creating AR content.',
        },
      ],
    },
    {
      type: 'instruction',
      headingLevel: 'subsection',
      title: '',
      content: '',
      layout: '2-col',
      items: [
        { title: 'Duration', content: '12 weeks' },
        { title: 'My role', content: 'Usability Study<br />UX Design' },
        { title: 'Tools', content: 'Figma<br />After Effect<br />Miro<br />Trello' },
        {
          title: 'Methods',
          content: 'In-person Moderated Testing<br />Data Collection<br />Synthesis<br />Design Iterations',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Problem',
      layout: 'left-image',
      images: [
        {
          url: '/images/locatify-ar-navigation/medium-fidelity.png',
          alt: 'Locatify mid-fidelity concept screens',
        },
      ],
      content:
        'How might a student find this <span class="text-emphasis">specific room</span> in such a maze like space? They feel <span class="text-emphasis">confused</span> and sometimes <span class="text-emphasis">get lost</span> inside the building.',
    },
    {
      type: 'content',
      title: 'User Research',
      content:
        '<strong>Understanding the User</strong><br />Our target user is the college students who are taking many courses at the same time or they need to join different event during the semester, Therefore, they need to <span class="text-emphasis">locate the buildings and specific room accurately and efficiently</span>.<br /><br />In order to understand what are their painpoints, we designed a survey questionnaire with three sections: 1. Problems and difficulty levels 2. Preferred methods of getting information 3. Preferred type of information<br /><br />We collected <span class="text-emphasis">46 responses</span> in total. Half of our participants have been studying or working at UT for less than a year. The result shows that people find it most difficult when they are trying to find a room on campus and they prefer visual/non-verbal instructions displayed through an application on their mobile phone.',
    },
    {
      type: 'content',
      title: 'Usability Issues',
      content:
        'Based on the insights we got from synthesis, we created a journey map. The map shows that people have many negative experiences when they’re searching to find a room, which aligns with our survey’s results. We identified users’ pain points and our product’s opportunities in the entire journey.',
    },
    {
      type: 'gallery',
      title: 'Process',
      content: '',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/workflow-model.png',
          alt: 'Locatify workflow model',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Low-Fidelity',
      content:
        'We began with low-fidelity wireframes to explore core flows, wayfinding cues, and how AR overlays would appear in context.',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/low-fidelity.png',
          alt: 'Locatify low-fidelity flow',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Usability Testing & Iteration 1',
      content:
        'For the lo-fi prototype, we conducted in-person usability tests with five users and found out several usability issues.',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/usability-testing-1.png',
          alt: 'In-person usability testing',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Medium-Fidelity',
      content:
        'We translated learnings from the lo-fi tests into medium-fidelity designs, refining information hierarchy, on-screen guidance, and state transitions.',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/medium-fidelity.png',
          alt: 'Locatify medium-fidelity screens',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Final Solution',
      content:
        '<ul><li>You can use <span class="text-emphasis">text or voice command</span> to let Locatify know your destination.</li><li>Simply follow and pass the highlighted areas to your destination. Locatify navigates you with the shortest route, but also provides <span class="text-emphasis">Reroute</span> function.</li><li><span class="text-emphasis">Blue arrows</span> guide you in the right direction.</li><li>The big destination icon and your phone vibration show “You are at your destination!”.</li></ul>',
      layout: 'right-image',
      images: [
        {
          url: '/images/locatify-ar-navigation/final-solution.png',
          alt: 'Final Locatify interface',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Video of Final Solution',
      content: '',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/hero-image.png',
          alt: 'Locatify demo video',
          videoUrl: 'https://youtu.be/ORIeoYi5XRc',
          aspectRatio: '16/9',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Future Work',
      layout: 'left-image',
      images: [
        {
          url: '/images/locatify-ar-navigation/future-work-dark-mode.png',
          alt: 'Dark mode prototype screens',
        },
      ],
      content:
        'We built the prototype with Dark Mode to make the instructions easier to see. The Light mode could be switched under setting but more screens need to build and test.',
    },
    {
      type: 'gallery',
      noDivider: true,
      title: '',
      layout: 'right-image',
      images: [
        {
          url: '/images/locatify-ar-navigation/future-work-creator-mockup.png',
          alt: 'AR creation app mockup for tablets',
        },
      ],
      content:
        'We decided to separate the AR creation feature from the original application. Thus we made a mockup screen for this AR creation app. This app is built for tablets to maximize the experience in creating content using AR technology.',
    },
  ],

  technologies: ['Figma', 'After Effects', 'Miro', 'Trello', 'Usability Testing', 'AR/VR'],

  testimonial: {
    quote:
      "Locatify demonstrated how AR can make complex campus navigation more intuitive and efficient for students moving between classes and events.",
    author: 'Project Team Reflection',
    role: 'UX & Research Team',
  },
};
