import { Project } from '../types';

export const aiChatbotDesign: Project = {
  id: 'ai-chatbot-design',
  title: 'AI Chatbot for Mental Health Support',
  category: 'AI Interaction Design',
  year: '2020-Present',
  link: '/case-study/ai-chatbot-design',
  description: 'Designing a safe and trustworthy AI chatbot that provides meaningful support to parents with postpartum depression, exploring conversational design patterns and AI ethics in healthcare.',
  
  imageUrl: '/images/ai-chatbot-design/hero-image.png',
  heroImage: '/images/ai-chatbot-design/hero-image.png',
  
  heroSubTitle: 'Support parents who are suffering from Postpartum Depression',
  role: 'AI Interaction Designer & UX Researcher',
  team: 'Interdisciplinary team including mental health professionals, PSI volunteers',
  
  meta: {
    title: 'AI Chatbot Design for Mental Health | Huanran Peng Design',
    description: 'Designing conversational AI interfaces for mental health support with focus on trust, safety, and meaningful user interactions.',
    ogImage: '/images/ai-chatbot-design/hero-image.png',
    ogUrl: 'https://www.huanranpeng.com/2026/case-study/ai-chatbot-design',
  },

  sections: [
    {
      type: 'content',
      smallTitle: 'Overview',
      title: 'Overview',
      content: '',
      subsections: [
        {
          title: 'PROBLEMS',
          content: 'Postpartum depression (PPD) is a common mental health issue for parents, which usually occurs after childbirth and includes symptoms such as depression, anxiety, and obsessive-compulsive disorder.'
        },
        {
          title: 'Project goal',
          content: 'With the growing number of parents suffering from postpartum depression, AI has shown some meaningful and useful applications healthcare in diagnosing disease, interpreting images, or providing suggestions. For this project, we explore the possible solutions of AI to support mental health and design a chatbot for the parents who are suffering from postpartum depression.'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'The Challenge',
      title: 'The Challenge',
          content: 'How might we develop a <span class="text-emphasis">safe and trustworthy chatbot</span> that provides meaningful support to parents with postpartum?',
    },
    {
      type: 'gallery',
      smallTitle: 'The Challenge',
      title: 'Problem Statement',
        content: 'Visual representation of the challenge we are addressing.',
      layout: '1-col',
      images: [
        {
          url: '/images/ai-chatbot-design/challenge.png',
          alt: 'Challenge visualization',
          caption: 'The Challenge'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Process',
      title: 'Process',
      content: 'A <span class="text-emphasis">collaborative, user-centered, iterative design process</span> was used to guide this project, from research, through design and testing. An <span class="text-emphasis">interdisciplinary team</span> helped to shape the collaborative design thinking, which generated useful insights. We are at the Design stage and the next step is to recruit users to test and iterate our solution.',
    },
    {
      type: 'gallery',
      smallTitle: 'Process',
      title: 'Design Process',
      content: 'Our collaborative, user-centered, iterative design process.',
      layout: '1-col',
      images: [
        {
          url: '/images/ai-chatbot-design/process.png',
          alt: 'Design process',
          caption: 'Design Process'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Comparative Analysis',
      title: 'Comparative Analysis',
      content: 'From the Chatbot Applications in the market, I analyzed the key features and the main purpose of these applications. At the same time, I did some desk research to produce the chatbot design principles which will guide our next design direction.',
      subsections: [
        {
          title: 'Chatbot Design Principles',
          content: '1. Personalized the chatbot but avoid pretending to be a human.<br>2. Set user expectations from the start.<br>3. Clearly define your purpose and make the conversation simple<br>4. Minimize data entry requirements.<br>5. Maintain context awareness throughout the conversation.<br>6. Maintain context awareness throughout the conversation.<br>7. Provide easy access to a human agent.<br>8. End the conversation gracefully.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Comparative Analysis',
      title: 'Market Analysis & Design Principles',
      content: 'Understanding the market and establishing design principles.',
      layout: 'two-column',
      images: [
        {
          url: '/images/ai-chatbot-design/comparative-analysis.png',
          alt: 'Comparative analysis',
          caption: 'Understanding the Market'
        },
        {
          url: '/images/ai-chatbot-design/design-principles.png',
          alt: 'Design principles',
          caption: 'Chatbot Design Principles'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'User Research',
      title: 'User Research',
      content: 'There are three data sources for this project: 1. The conversation records between support seekers and volunteers in PSI. 2. Interviews with parents who were suffering from postpartum depression and tried to seek help from PSI. 3. Interviews with the PSI employees.',
      subsections: [
        {
          title: 'Understanding the User',
          content: 'From the conversational records, we focused on <span class="text-emphasis">three main concerns among parents: emotional validation, support, and finding resources</span>. The interview data with the parents provided common situations, problems, and feelings. Using these data, we produced 3 typical users as personas to guide the chatbot design.'
        },
        {
          title: 'PSI Volunteer Persona',
          content: 'According to the workflow of PSI volunteers, I extracted the main tasks they have in the process and combined this into the PSI volunteer persona.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'User Research',
      title: 'User Personas',
      content: 'Three personas created from user research data.',
      layout: 'two-column',
      images: [
        {
          url: '/images/ai-chatbot-design/persona-1.png',
          alt: 'Persona 1',
          caption: 'Persona 1'
        },
        {
          url: '/images/ai-chatbot-design/persona-2.png',
          alt: 'Persona 2',
          caption: 'Persona 2'
        },
        {
          url: '/images/ai-chatbot-design/persona-3.png',
          alt: 'Persona 3 - PSI Volunteer',
          caption: 'Persona 3 - PSI Volunteer'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Design Process',
      title: 'Design Process',
      content: '',
      subsections: [
        {
          title: 'Product Roadmap',
          content: 'Based on the requirements from PSI, there are many features they want to achieve in this application. I divided these into different stages and we will focus on the MVP version at first. Our goal is to launch this MVP version around the beginning of 2022 and run another round of iteration according to the feedback from our users.'
        },
        {
          title: 'Work flow design',
          content: 'This is the workflow I synthesized based on the conversation records and the user interviews. The flow is divided into four stages which can help us to create the conversations we need in the chatbot.'
        },
        {
          title: 'Conversation flow design',
          content: 'We used this chat tree format to explore the possibilities of this conversation. When we built the draft version, we presented them to the PSI volunteers to ask for their feedback. After several rounds of iterations of these conversations, we would create the prototype and plan to invite the users to test this Chatbot app.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Design Process',
      title: 'Design Process Details',
      content: 'Product roadmap, workflow design, and conversation flow.',
      layout: 'two-column',
      images: [
        {
          url: '/images/ai-chatbot-design/roadmap.png',
          alt: 'Product roadmap',
          caption: 'Product Roadmap'
        },
        {
          url: '/images/ai-chatbot-design/workflow.png',
          alt: 'Workflow design',
          caption: 'Work Flow Design'
        },
        {
          url: '/images/ai-chatbot-design/chat-tree.png',
          alt: 'Conversation flow design',
          caption: 'Conversation Flow Design'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Current Solution',
      title: 'Current Solution',
      content: 'Here is the current design solution. We are going to run 2-3 rounds of user tests to validate this design. According to the feedback from users, we will iterate this Chatbot and work with the engineer to launch the MVP version.',
      layout: '1-col',
      images: [
        {
          url: '/images/ai-chatbot-design/current-solution.png',
          alt: 'Current solution',
          caption: 'Hi-fi Design Solution'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Interactive Prototype',
      title: 'Interactive Prototype',
      content: 'The interactive prototype is ready for user testing. We plan to run 2-3 rounds of user tests to validate this design and iterate based on feedback before launching the MVP version.',
    }
  ],

  technologies: ['Survey', 'Interviews', 'Usability Testing', 'Prototyping', 'AI/ML'],
  
  testimonial: {
    quote: 'Designing a safe and trustworthy chatbot that provides meaningful support to parents with postpartum depression requires careful consideration of AI ethics, user trust, and mental health best practices.',
    author: 'PSI Team',
    role: 'Mental Health Professionals'
  }
};
