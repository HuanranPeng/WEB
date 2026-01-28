import { Project } from '../types';

export const spaceProject: Project = {
  id: 'space-project',
  title: 'Space',
  category: 'Product Design',
  year: 'Sep. 2020 - Present',
  link: '/case-study/space-project',
  description:
    'A social support platform that removes barriers in access to mental health services and leverages the power of data, peers, and community.',

  imageUrl: '/images/space-project/hero-image.png',
  heroImage: '/images/space-project/hero-image.png',

  heroSubTitle:
    'A social support platform that removes barriers in access to mental health services and leverages the power of data, peers, and community.',
  role: 'Product Designer',
  team: 'Team Work',

  meta: {
    title: 'Space | Huanran Peng Design',
    description:
      'Designing Space, a social support platform that removes barriers to mental health services and leverages data, peers, and community.',
    ogImage: '/images/space-project/hero-image.png',
    ogUrl: 'https://www.huanranpeng.com/case-study/space-project',
  },

  sections: [
    {
      type: 'content',
      smallTitle: 'Overview',
      title: 'Overview',
      content: '',
      subsections: [
        {
          title: 'Background',
          content:
            'Mental illness is a widespread condition that impacts a cross-section of the population. According to the National Institute for Mental Health, 18% of adults experienced a mental illness in 2017 such as anxiety or depression. Mental illness is more prevalent among women (22%) than men (15%). Young adults (age 18-25) are more likely than older adults (age 50+) to experience a mental illness (26% vs 14%).',
        },
        {
          title: 'Mental Illness Starts Early in the life cycle',
          content:
            'The onset of mental illness begins early in life. Roughly half of mental health illnesses begin by the middle teen years and three-fourths present by the middle 20s. Early detection and intervention can reduce severity and prevent downstream effects such as poor academic performance, risky behaviors, lower income levels, and suicidality.',
        },
        {
          title: 'Suicide',
          content:
            'The suicide rate in the U.S. increased 31 percent between 2001 and 2017. Among persons ages 10-34, suicide is the second leading cause of death. Rates vary by race and ethnicity, highlighting inequities and the need for culturally relevant care and accessible support.',
        },
      ],
    },
    {
      type: 'gallery',
      smallTitle: 'Overview',
      title: 'Context',
      content:
        'A snapshot of research context and early framing that informed the product direction.',
      layout: 'two-column',
      images: [
        {
          url: '/images/space-project/problem-1.png',
          alt: 'Mental health prevalence context',
          caption: 'Context data and framing',
        },
        {
          url: '/images/space-project/problem-2.png',
          alt: 'Early life-cycle onset context',
          caption: 'Early intervention matters',
        },
        {
          url: '/images/space-project/problem-3.png',
          alt: 'Suicide statistics context',
          caption: 'Suicide and demographic trends',
        },
        {
          url: '/images/space-project/problem-4.png',
          alt: 'Barriers to care context',
          caption: 'Barriers to support',
        },
      ],
    },
    {
      type: 'content',
      smallTitle: 'Problem',
      title: 'Barriers to Support',
      content:
        'More than half of adults with a mental illness did not receive mental health care in 2017. There are many barriers to accessing care including stigma, low levels of mental health literacy, and financial constraints.',
    },
    {
      type: 'content',
      smallTitle: 'User Research',
      title: 'User Research',
      content:
        'We conducted <span class="text-emphasis">extensive research</span> to fully understand the mental health crisis. In addition to surveying the literature, we examined demographic trends, telehealth, culturally relevant care, and clinical/non-clinical services. We also conducted <span class="text-emphasis">depth interviews with therapists, peer specialists, mental health professionals</span>, and young users of health-based mobile apps. The prototype was informed by <span class="text-emphasis">co-design sessions</span> with caregivers and care-seekers.',
    },
    {
      type: 'content',
      smallTitle: 'Usability Issues',
      title: 'Key Takeaways',
      content: '',
      subsections: [
        {
          title: 'From persons seeking mental health services',
          content:
            'We synthesized insights from interviews, user testing, and co-design sessions with individuals who have sought mental health services or supported friends/family members dealing with a mental health condition.',
        },
        {
          title: 'From persons offering mental health services',
          content:
            'We also learned from therapists, peer specialists, and mental health professionals who provide services, identifying opportunities to reduce friction, improve trust, and better support referrals and follow-through.',
        },
      ],
    },
    {
      type: 'gallery',
      smallTitle: 'Research & Insights',
      title: 'Evidence and Synthesis',
      content: 'Artifacts and synthesis outputs that guided the design direction.',
      layout: 'two-column',
      images: [
        {
          url: '/images/space-project/research-1.png',
          alt: 'Research artifact 1',
          caption: 'Research and synthesis',
        },
        {
          url: '/images/space-project/research-2.png',
          alt: 'Research artifact 2',
          caption: 'Key takeaways – seekers',
        },
        {
          url: '/images/space-project/research-3.png',
          alt: 'Research artifact 3',
          caption: 'Key takeaways – providers',
        },
        {
          url: '/images/space-project/research-4.png',
          alt: 'Process overview',
          caption: 'Process overview',
        },
      ],
    },
    {
      type: 'content',
      smallTitle: 'Process',
      title: 'Process',
      content: '',
      subsections: [
        {
          title: 'Ideate',
          content:
            'After in-depth research, we conducted brainstorming sessions and iterated ideas within the team and with mental health professionals. We drafted user scenarios to evaluate where Space could reduce barriers and create meaningful support.',
        },
        {
          title: 'Low-Fidelity',
          content:
            'We created low-fidelity wireframes to explore flows, content structure, and interaction patterns before investing in higher fidelity design.',
        },
        {
          title: 'Validation & Iteration',
          content:
            'We brought wireframes to potential users and subject matter experts to collect feedback, discover usability issues, and validate whether the concept would meaningfully help in real life.',
        },
      ],
    },
    {
      type: 'gallery',
      smallTitle: 'Final Solution',
      title: 'Final Solution',
      content: 'Key screens and flows from the final design solution.',
      layout: 'two-column',
      images: [
        { url: '/images/space-project/ui-6.png', alt: 'Final solution screen 6', caption: 'Final UI' },
        { url: '/images/space-project/ui-7.png', alt: 'Final solution screen 7', caption: 'Final UI' },
        { url: '/images/space-project/ui-8.png', alt: 'Final solution screen 8', caption: 'Final UI' },
        { url: '/images/space-project/ui-9.png', alt: 'Final solution screen 9', caption: 'Final UI' },
        { url: '/images/space-project/ui-10.png', alt: 'Final solution screen 10', caption: 'Final UI' },
        { url: '/images/space-project/ui-11.png', alt: 'Final solution screen 11', caption: 'Final UI' },
        { url: '/images/space-project/ui-12.png', alt: 'Final solution screen 12', caption: 'Final UI' },
        { url: '/images/space-project/ui-13.png', alt: 'Final solution screen 13', caption: 'Final UI' },
        { url: '/images/space-project/ui-14.png', alt: 'Final solution screen 14', caption: 'Final UI' },
      ],
    },
  ],

  technologies: ['Survey', 'Interviews', 'Usability Testing', 'Prototyping'],

  testimonial: {
    quote:
      'Space explores how data, peers, and community can reduce barriers to mental health support while building trust and follow-through.',
    author: 'Project Team',
    role: 'Design & Research',
  },
};

