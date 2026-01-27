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
    ogUrl: 'https://www.huanranpeng.com/case-study/heat-pump-marketplace',
  },

  sections: [
    {
      type: 'content',
      smallTitle: 'Overview',
      title: 'Overview',
      content: 'We have launched the <a href="https://heatpumps.energysage.com/" target="_blank" rel="noopener noreferrer">heat pump marketplace</a> in October. As a stepping stone to this, we achieved the result of recruiting 30 consumers to the pilot and running a heat pump marketplace pilot in July. After the pilot, we iterated the design based on the feedback we got from the consumers and met the goal of launching it in October.',
    },
    {
      type: 'gallery',
      smallTitle: 'Overview',
      title: 'Project Overview',
      content: 'Visual overview of the Heat Pump Marketplace project.',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/overview.png',
          alt: 'Heat Pump Marketplace overview',
          caption: 'Project Overview'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Goals',
      title: 'Goals',
      content: 'Our project had three main objectives:',
      subsections: [
        {
          title: '01 - Understand and engage consumers',
          content: 'Use existing customer relationships and market research surveys to learn about heat pump consumers\' problems, motivations and journey and enroll them in a pilot.'
        },
        {
          title: '02 - Develop and refine our consumer value proposition',
          content: 'Develop and refine our consumer value proposition and get heat pumps installed in homes.'
        },
        {
          title: '03 - Educate pilot consumers',
          content: 'Educate pilot consumers and identify content gaps.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Research',
      title: 'Research',
      content: 'Understanding heat pump consumers through research and workflow modeling.',
      layout: '2-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/research-hero.jpg',
          alt: 'Research process',
          caption: 'Research Process'
        },
        {
          url: '/images/heat-pump-marketplace/workflow-model.png',
          alt: 'Workflow model',
          caption: 'Workflow Model'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Usability Issues',
      title: 'Usability Issues',
      content: 'Identifying and addressing usability issues discovered during the pilot phase.',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/usability-issues.jpg',
          alt: 'Usability issues',
          caption: 'Usability Issues Identified'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Process',
      title: 'Process',
      content: 'Our design process involved multiple iterations from pilot to high-fidelity stages.',
      subsections: [
        {
          title: 'Onboarding Flow',
          content: 'We evolved the onboarding flow from a simple pilot version to a more comprehensive high-fidelity solution with location and home information collection.'
        },
        {
          title: 'Dashboard Design',
          content: 'The dashboard went through multiple iterations, starting with a pilot stage design, evolving through mid-fidelity prototypes, to the final high-fidelity solution.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Process',
      title: 'Onboarding Flow Evolution',
      content: 'Evolution of the onboarding flow from pilot to high-fidelity stages.',
      layout: '2-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/onboarding-pilot.png',
          alt: 'Pilot stage onboarding',
          caption: 'Pilot Stage'
        },
        {
          url: '/images/heat-pump-marketplace/onboarding-location.png',
          alt: 'Hi-fi stage location',
          caption: 'Hi-fi Stage - Location'
        },
        {
          url: '/images/heat-pump-marketplace/onboarding-home.png',
          alt: 'Hi-fi stage home',
          caption: 'Hi-fi Stage - Home'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Process',
      title: 'Dashboard Design Evolution',
      content: 'Dashboard design iterations from pilot to mid-fidelity stages.',
      layout: '2-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/dashboard-pilot.png',
          alt: 'Pilot stage dashboard',
          caption: 'Pilot Stage'
        },
        {
          url: '/images/heat-pump-marketplace/dashboard-midfi.png',
          alt: 'Mid-fi stage dashboard',
          caption: 'Mid-fi Stage'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Final Solution',
      title: 'Final Solution',
      content: 'The high-fidelity final solution for the Heat Pump Marketplace.',
      layout: '1-col',
      images: [
        {
          url: '/images/heat-pump-marketplace/final-solution.png',
          alt: 'Final solution',
          caption: 'Hi-fi Stage'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Future Work',
      title: 'Future Work',
      content: 'We will continue monitor the new marketplace and build the Quote Comparison View for the users to help them make smart decisions. ROI Calculator and Instant Estimate are also our main focuses in the next round of iterations.',
    }
  ],

  technologies: ['Wireframe', 'Interviews', 'Usability Testing', 'Prototyping'],
  
  testimonial: {
    quote: 'Successfully launched the heat pump marketplace in October after recruiting 30 consumers to the pilot and iterating based on their feedback.',
    author: 'EnergySage Team',
    role: 'Product Team'
  }
};
