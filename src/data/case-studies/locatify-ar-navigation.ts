import { Project } from '../types';

export const locatifyArNavigation: Project = {
  id: 'locatify-ar-navigation',
  title: 'Locatify AR Navigation',
  category: 'AR/VR Design',
  year: 'Oct. – Dec. 2019',
  link: '/case-study/locatify-ar-navigation',
  description:
    'An AR-powered navigation app that helps college students quickly find rooms, events, and classrooms on campus, plus a creator mode for authoring AR content.',

  imageUrl: '/images/locatify-ar-navigation/hero-image.png',
  heroImage: '/images/locatify-ar-navigation/hero-image.png',

  heroSubTitle: 'Augmented reality navigation design for college campuses',
  role: 'Usability Study, UX Design',
  team: 'Student project team, participants from the University of Texas at Austin',

  meta: {
    title: 'Locatify AR Navigation | Huanran Peng Design',
    description:
      'Designing Locatify, an augmented reality navigation experience that helps students quickly locate rooms, events, and classrooms on campus.',
    ogImage: '/images/locatify-ar-navigation/hero-image.png',
    ogUrl: 'https://www.huanranpeng.com/case-study/locatify-ar-navigation',
  },

  sections: [
    {
      type: 'content',
      smallTitle: 'Overview',
      title: 'Overview',
      content:
        'Locatify is an augmented reality (AR) powered application built for college students to quickly locate places, events, or classrooms they want to find on campus using the mobile phones in their hands. Locatify also provides a Creator version on tablet for users who are interested in creating AR content. This project ran for 12 weeks as a team effort, where my primary responsibilities were usability studies and UX design.',
      subsections: [
        {
          title: 'Background',
          content:
            'Students at the University of Texas at Austin frequently visit new buildings and places, but it is common that they cannot find the specific rooms they are looking for or do not know how to interact with the facilities once they arrive. We wanted to provide a clearer, more intuitive way for them to navigate these complex indoor environments.',
        },
        {
          title: 'Summary',
          content:
            'Locatify helps students quickly locate rooms and events with AR guidance, while the Creator version on tablet lets users author and manage AR navigation content.',
        },
      ],
    },
    {
      type: 'content',
      smallTitle: 'Problem',
      title: 'Finding Rooms in Maze-like Spaces',
      content:
        'How might a student find a specific room in such a maze-like space? Students often feel confused and sometimes get lost inside the building, especially when they are under time pressure between classes or events.',
    },
    {
      type: 'content',
      smallTitle: 'User Research',
      title: 'Understanding the User',
      content:
        'Our target users are college students who are taking many courses at the same time or need to join different events during the semester. They need to locate buildings and specific rooms accurately and efficiently.',
      subsections: [
        {
          title: 'Survey Design',
          content:
            'We designed a survey with three sections: problems and difficulty levels, preferred methods of getting information, and preferred types of information. We collected 46 responses, with half of participants studying or working at UT for less than a year.',
        },
        {
          title: 'Key Insights',
          content:
            'Results showed that people found it most difficult to find specific rooms on campus. They preferred visual, non-verbal instructions displayed through an application on their mobile phones.',
        },
      ],
    },
    {
      type: 'content',
      smallTitle: 'Usability Issues',
      title: 'Pain Points and Journey',
      content:
        'To further understand pain points, we used affinity diagramming and created a journey map. The journey showed that people had many negative experiences when searching for rooms, which aligned with survey results. We identified users’ pain points and mapped opportunities for Locatify across the entire journey.',
    },
    {
      type: 'gallery',
      smallTitle: 'Process',
      title: 'Workflow Model',
      content:
        'We created a workflow model to map how students plan, navigate, and arrive at their destinations, which guided the structure of the AR experience.',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/workflow-model.png',
          alt: 'Locatify workflow model',
          caption: 'High-level workflow for Locatify navigation',
        },
      ],
    },
    {
      type: 'gallery',
      smallTitle: 'Process',
      title: 'Low-Fidelity Exploration',
      content:
        'We began with low-fidelity wireframes to explore core flows, wayfinding cues, and how AR overlays would appear in context.',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/low-fidelity.png',
          alt: 'Locatify low-fidelity wireframes',
          caption: 'Low-fidelity navigation concepts',
        },
      ],
    },
    {
      type: 'gallery',
      smallTitle: 'Usability Testing & Iteration 1',
      title: 'Usability Testing – Lo-fi',
      content:
        'For the lo-fi prototype, we conducted in-person moderated usability tests with five users and identified several usability issues around clarity of directions and interaction with AR cues.',
      layout: '2-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/usability-testing-1.png',
          alt: 'In-person usability testing photos',
          caption: 'In-person moderated usability testing',
        },
      ],
    },
    {
      type: 'gallery',
      smallTitle: 'Process',
      title: 'Medium-Fidelity Iterations',
      content:
        'We translated learnings from the lo-fi tests into medium-fidelity designs, refining information hierarchy, on-screen guidance, and state transitions.',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/medium-fidelity.png',
          alt: 'Locatify medium-fidelity screens',
          caption: 'Medium-fidelity flow and AR overlays',
        },
      ],
    },
    {
      type: 'gallery',
      smallTitle: 'Final Solution',
      title: 'Final AR Navigation Experience',
      content:
        'In the final design, students can use text or voice commands to tell Locatify their destination. AR arrows and highlights guide them along the shortest route, with reroute options when they deviate. A large destination icon and phone vibration confirm “you are at your destination.”',
      layout: '1-col',
      images: [
        {
          url: '/images/locatify-ar-navigation/final-solution.png',
          alt: 'Final Locatify AR navigation interface',
          caption: 'Final AR navigation flow and UI',
        },
      ],
    },
    {
      type: 'content',
      smallTitle: 'Future Work',
      title: 'Extending Locatify',
      content:
        'We built the prototype with dark mode to make instructions easier to see. A light mode could be toggled in settings, but more screens need to be built and tested. We also separated the AR creation feature into a dedicated Creator app for tablets, maximizing the experience of authoring AR content. Future work includes maturing the Creator experience and exploring more complex indoor environments.',
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
