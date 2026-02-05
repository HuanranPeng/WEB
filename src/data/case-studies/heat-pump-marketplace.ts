import { Project } from '../types';

export const heatPumpMarketplace: Project = {
  id: 'heat-pump-marketplace',
  title: 'Heat Pump Marketplace',
  category: 'Product Design',
  year: '2022-Present',
  link: '/case-study/heat-pump-marketplace',
  description: 'A new marketplace to help consumers schedule site visits and compare quotes.',
  
  imageUrl: '/images/heat-pump-marketplace/hero-image.png',
  heroImage: '/images/heat-pump-marketplace/hero-image.png',
  
  heroSubTitle: 'A new marketplace to help consumers schedule site visits and compare quotes.',
  role: 'UX Designer',
  team: 'Team Work',
  
  meta: {
    title: 'Heat Pump Marketplace | Huanran Peng Design',
    description: 'A new marketplace to help consumers schedule site visits and compare quotes for heat pump installations.',
    ogImage: '/images/heat-pump-marketplace/hero-image.png',
    ogUrl: 'https://www.huanranpeng.com/2026/case-study/heat-pump-marketplace',
  },

  sections: [
    {
      type: 'gallery',
      title: 'Overview',
      layout: 'left-image',
      images: [
        {
          url: '/images/heat-pump-marketplace/overview.png',
          alt: 'Heat pump marketplace overview illustration',
        },
      ],
      content:
        'We have launched the <a href="https://heatpumps.energysage.com/" target="_blank" rel="noopener noreferrer">heat pump marketplace</a> in October.<br /><br />As a stepping stone to this, we achieved the result of recruiting 30 consumers to the pilot and running a heat pump marketplace pilot in July. After the pilot, we iterated the design based on feedback we got from the consumers and met the goal of launching it in October.',
    },
    {
      type: 'gallery',
      title: 'goals',
      layout: 'right-image',
      images: [
        {
          url: '/images/heat-pump-marketplace/research-hero.jpg',
          alt: 'Person working on laptop illustration',
        },
      ],
      content:
        '<p><strong>01</strong> Understand and engage consumers: Use existing customer relationships and market research surveys to learn about heat pump consumers’ problems, motivations and journey and enroll them in a pilot.</p><p><strong>02</strong> Develop and refine our consumer value proposition and get heat pumps installed in homes.</p><p><strong>03</strong> Educate pilot consumers.</p>',
    },
    {
      type: 'gallery',
      title: 'Research',
      content: '<strong>Workflow Model</strong>',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/workflow-model.png',
          alt: 'Workflow model diagram',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Usability Issues',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/usability-issues.jpg',
          alt: 'Usability issues audit',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Process',
      headingLevel: 'subsection',
      content: 'Onboarding flow<br />Pilot stage:',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/pilot-onboarding.png',
          alt: 'Pilot onboarding flow screens',
        },
      ],
    },
    {
      type: 'gallery',
      noDivider: true,
      title: '',
      content: 'Hi-fi stage:',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/onboarding-location.png',
          alt: 'High-fidelity onboarding - location step',
        },
        {
          url: '/images/heat-pump-marketplace/onboarding-home.png',
          alt: 'High-fidelity onboarding - home step',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Dashboard design',
      content: 'Pilot stage:',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/dashboard-pilot.png',
          alt: 'Pilot dashboard design',
        },
      ],
    },
    {
      type: 'gallery',
      noDivider: true,
      title: '',
      content: 'Mid-fi stage:',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/dashboard-midfi.png',
          alt: 'Mid-fidelity dashboard design iteration',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Final Solution',
      content: 'Hi-fi stage:',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/final-solution.png',
          alt: 'Final high-fidelity marketplace solution',
        },
      ],
    },
    {
      type: 'content',
      title: 'Future Work',
      content:
        'We will continue monitor the new marketplace and build the Quote Comparison View for the users to help them make smart decisions. ROI Calculator and Instant Estimate are also our main focuses in the next round of iterations.',
    },
  ],

  technologies: ['Wireframe', 'Interviews', 'Usability Testing', 'Prototyping'],
  
  testimonial: {
    quote: 'Successfully launched the heat pump marketplace in October after recruiting 30 consumers to the pilot and iterating based on their feedback.',
    author: 'EnergySage Team',
    role: 'Product Team'
  }
};
