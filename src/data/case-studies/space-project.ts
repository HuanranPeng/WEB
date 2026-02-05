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
    ogUrl: 'https://www.huanranpeng.com/2026/case-study/space-project',
  },

  sections: [
    {
      type: 'content',
      title: 'Overview',
      content: `Mental illness is a widespread condition that impacts a cross-section of the population. According to the National Institute for Mental Health, 18% of adults experienced a mental illness in 2017 such as anxiety or depression. Mental illness is much more prevalent among women (22%) than men (15%). Young adults (age 18-25) are more likely than older adults (age 50+) to experience a mental illness, 26% to 14%. Whereas 20.4 percent of Whites experience mental illness, 28.6 of persons who identify with two or more races experience mental illness. In 2017, the prevalence of mental illness among American Indians was 19%, 16% percent for Blacks, and 15 percent for Latinx persons.`,
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      noDivider: true,
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/problem-1.png',
          alt: 'Mental illness prevalence stats',
        },
      ],
    },
    {
      type: 'content',
      headingLevel: 'subsection',
      title: 'Mental Illness Starts Early in the life cycle',
      content:
        'The onset of mental illness begins early in life. Roughly half of mental health illnesses begin by the middle teen years and three-fourths present by the middle 20s. This highlights the need for early detection and intervention, which improves the chances of reducing the severity-persistence of primary disorders or preventing or delaying the onset of secondary disorders. The lack of intervention over time can lead to a host of behavioral problems and ensuing downstream effects including poor academic performance, engagement in risky behaviors, lower income levels, and suicidality.',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      noDivider: true,
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/problem-2.png',
          alt: 'Early life-cycle onset stats',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Suicide',
      alignContent: 'center',
      layout: 'left-image',
      images: [
        {
          url: '/images/space-project/problem-3.png',
          alt: 'Suicide rate chart (2001–2017)',
        },
      ],
      content:
        'According to the National Institute of Mental Health, the suicide rate in the U.S. increased 31 percent between 2001 and 2017. The suicide rate for men, 22.4 per 100,000 population, is nearly four times as high as the rate for women, 6.1 per 100,000. Suicide rates in the U.S. also vary by race and ethnicity. For example, American Indian/Alaskan Native persons suffer the highest rate of suicide, 22.3 per 100,000. Whites make up the second highest racial and ethnic group, 18.0 per 100,00. The rate among persons who identify as White Hispanic and Black is 7.35 and 7.05, respectively. Among persons ages 10-34, suicide is second only to unintentional injury as the leading cause of death. Suicide is the fourth leading cause of death for persons age 35-54.',
    },
    {
      type: 'content',
      headingLevel: 'subsection',
      title: '',
      noDivider: true,
      content:
        'In a study of nationally representative data from 1991-2017, researchers found that',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/problem-2.png',
          alt: 'Early life-cycle onset stats (reference)',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Problem',
      content:
        '<strong>Barriers to Support</strong><br />According to the National Institute of Mental Health, more than half, 57%, of adults with a mental illness did not receive mental health care in 2017. Women (48%) were more likely than men (35%) to receive mental health services. And whereas 44% of adults age 50+ received mental health services, 35% of adults age 18-25 received services. There are many barriers to accessing care including stigma, low levels of mental health literacy, and financial constraints.',
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/problem-4.png',
          alt: 'Barriers to support (stigma, literacy, insurance)',
        },
      ],
    },
    {
      type: 'content',
      title: 'User Research',
      content:
        'We conducted extensive research to fully understand the mental health crisis. In addition to surveying the literature on the prevalence of mental illness, we examined specific demographic trends, telehealth, culturally relevant care, and clinical and non-clinical services. We also conducted depth-interviews with therapists, peer specialists, mental health professionals, and young users of health-based mobile apps. After designing wireframes we conducted widespread user testing with the key stakeholders noted above. The digital prototype that we created was informed by a series of co-design sessions with care-givers and care-seekers in the mental health space.',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      noDivider: true,
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/research-1.png',
          alt: 'Research summary counts (patients, therapists, co-design sessions)',
        },
      ],
    },
    {
      type: 'content',
      title: 'Usability Issues',
      content:
        '<strong>Key takeaways from persons seeking mental health services</strong><br />Our research included depth-interviews, user testing, and co-design sessions with individuals who have sought out mental health services, used health-based apps, or supported a friend or family member dealing with a mental health condition. Here is a sample of what we are learning…',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      noDivider: true,
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/research-2.png',
          alt: 'Key takeaways cards from persons seeking services',
        },
      ],
    },
    {
      type: 'content',
      headingLevel: 'subsection',
      title: 'Key takeaways from persons offering mental health services',
      content:
        'Our research included depth-interviews, user testing, and co-design sessions with individuals--therapists, peer specialists, and other mental health professionals--who provide mental health services. Here is a sample of what we are learning…',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/research-3.png',
          alt: 'Key takeaways cards from persons offering services',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Process',
      content: '',
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/research-4.png',
          alt: 'Process overview (Empathize, Define, Ideate, Prototype, Test)',
        },
      ],
    },
    {
      type: 'content',
      headingLevel: 'subsection',
      title: 'Ideate',
      content:
        'After our in-depth research, we understand deeply about the problem and the opportunities where we can work on. We conducted brainstorming sessions and iterate our ideas within the team and also with mental health professionals.',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      noDivider: true,
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/research-5.png',
          alt: 'Brainstorming artifacts and synthesis notes',
        },
      ],
    },
    {
      type: 'content',
      headingLevel: 'subsection',
      title: '',
      noDivider: true,
      content: 'We drafted our ideas to envision potential user scenarios.',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      noDivider: true,
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/research-6.png',
          alt: 'Drafted user scenarios and early sketches',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Low-FIedelity',
      content: '',
      noDivider: true,
      layout: '1-col',
      images: [
        {
          url: '/images/space-project/research-7.png',
          alt: 'Low-fidelity wireframes',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Validation & Iteration',
      content:
        'Before moving forward to polish our design, we brought our wireframe to potential users and subject matter experts to hear their perspectives and collect feedback to discover usability issues, and more importantly, discover if the overall idea would actually help them in real life.',
      layout: 'right-image',
      images: [
        {
          url: '/images/space-project/research-8.png',
          alt: 'Validation and iteration session',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Final Solution',
      content: '',
      layout: '1-col',
      images: [
        { url: '/images/space-project/ui-6.png', alt: 'Final solution UI screen 6' },
        { url: '/images/space-project/ui-7.png', alt: 'Final solution UI screen 7' },
        { url: '/images/space-project/ui-8.png', alt: 'Final solution UI screen 8' },
        { url: '/images/space-project/ui-9.png', alt: 'Final solution UI screen 9' },
        { url: '/images/space-project/ui-10.png', alt: 'Final solution UI screen 10' },
        { url: '/images/space-project/ui-11.png', alt: 'Final solution UI screen 11' },
        { url: '/images/space-project/ui-12.png', alt: 'Final solution UI screen 12' },
        { url: '/images/space-project/ui-13.png', alt: 'Final solution UI screen 13' },
        { url: '/images/space-project/ui-14.png', alt: 'Final solution UI screen 14' },
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

