import { Project } from '../types';

const figmaProtoUrl =
  'https://www.figma.com/proto/CJWEd2UegQuG5LcQToQwzT?kind=proto&node-id=968-5758&page-id=884:0&scaling=scale-down&starting-point-node-id=968:4795';
const figmaEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaProtoUrl)}`;

export const aiChatbotDesign: Project = {
  id: 'ai-chatbot-design',
  title: 'Chatbot Design',
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
      type: 'gallery',
      title: 'The Challenge',
      content:
        'How might we develop a <span class="text-emphasis">safe</span> and trustworthy chatbot that provides <span class="text-emphasis">meaningful support</span> to parents with postpartum?',
      layout: 'left-image',
      images: [
        {
          url: '/images/ai-chatbot-design/challenge.png',
          alt: 'Challenge visualization',
        }
      ],
    },
    {
      type: 'content',
      title: 'Process',
      content: 'A <span class="text-emphasis">collaborative, user-centered, iterative design process</span> was used to guide this project, from research, through design and testing. An <span class="text-emphasis">interdisciplinary team</span> helped to shape the collaborative design thinking, which generated useful insights. We are at the Design stage and the next step is to recruit users to test and iterate our solution.',
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
          url: '/images/ai-chatbot-design/process.png',
          alt: 'Design process',
        }
      ]
    },
    {
      type: 'content',
      title: 'Comaparative analysis',
      content:
        '<strong>Understanding the Market</strong><br />From the Chatbot Applications in the market, I analyzed the key features and the main purpose of these applications. At the same time, I did some desk research to produce the chatbot design principles which will guide our next design direction.',
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
          url: '/images/ai-chatbot-design/comparative-analysis.png',
          alt: 'Comparative analysis',
        }
      ]
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Chatbot Design Principles',
      content:
        '1. Personalized the chatbot but avoid pretending to be a human.<br />2. Set user expectations from the start.<br />3. Clearly define your purpose and make the conversation simple<br />4. Minimize data entry requirements.<br />5. Maintain context awareness throughout the conversation.<br />6. Maintain context awareness throughout the conversation.<br />7. Provide easy access to a human agent.<br />8. End the conversation gracefully.',
      layout: 'right-image',
      images: [
        {
          url: '/images/ai-chatbot-design/design-principles.png',
          alt: 'Checklist illustration for design principles',
          variant: 'icon',
        },
      ],
    },
    {
      type: 'content',
      title: 'User Research',
      content:
        'There are three data sources for this project.<br />1. The <span class="text-emphasis">conversation records</span> between support seekers and volunteers in PSI.<br />2. <span class="text-emphasis">Interviews with parents</span> who were suffering from postpartum depression and tried to seek help from PSI.<br />3. <span class="text-emphasis">Interviews with the PSI</span> employees.<br /><br />From the conversational records, we focused on three main concerns among parents: <span class="text-emphasis">emotional validation</span>, <span class="text-emphasis">support</span>, and <span class="text-emphasis">finding resources</span>. The interview data with the parents provided common situations, problems, and feelings. Using these data, we produced 3 typical users as personas to guide the chatbot design.',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content: '',
      noDivider: true,
      layout: 'two-column',
      images: [
        {
          url: '/images/ai-chatbot-design/persona-1.png',
          alt: 'Persona 1',
        },
        {
          url: '/images/ai-chatbot-design/persona-2.png',
          alt: 'Persona 2',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: '',
      content:
        'According to the workflow of PSI volunteers, I extracted the main tasks they have in the process and combined this into the PSI volunteer persona.',
      noDivider: true,
      layout: 'right-image',
      images: [
        {
          url: '/images/ai-chatbot-design/persona-3.png',
          alt: 'PSI volunteer persona',
        },
      ],
    },
    {
      type: 'content',
      title: 'Design process',
      content:
        '<strong>Product Roadmap</strong><br />Based on the requirements from PSI, there are many features they want to achieve in this application. I divided these into different stages and we will focus on the MVP version at first. Our goal is to launch this MVP version around the beginning of 2022 and run another round of iteration according to the feedback from our users.',
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
          url: '/images/ai-chatbot-design/product-roadmap.png',
          alt: 'Product roadmap',
        }
      ]
    },
    {
      type: 'content',
      headingLevel: 'subsection',
      title: 'Work flow design',
      content:
        'This is the workflow I synthesized based on the conversation records and the user interviews. The flow is divided into four stages which can help us to create the conversations we need in the chatbot.',
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
          url: '/images/ai-chatbot-design/workflow.png',
          alt: 'Workflow design',
        }
      ]
    },
    {
      type: 'content',
      headingLevel: 'subsection',
      title: 'Conversation flow design',
      content:
        'We used this chat tree format to explore the possibilities of this conversation. When we built the draft version, we presented them to the PSI volunteers to ask for their feedback. After several rounds of iterations of these conversations, we would create the prototype and plan to invite the users to test this Chatbot app.',
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
          url: '/images/ai-chatbot-design/chat-tree.png',
          alt: 'Conversation flow design (chat tree)',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Current Solution',
      content:
        'Here is the current design solution. We are going to run 2-3 rounds of user tests to validate this design. According to the feedback from users, we will iterate this Chatbot and work with the engineer to launch the MVP version.',
      layout: 'right-image',
      images: [
        {
          url: '/images/ai-chatbot-design/current-solution.png',
          alt: 'Current design solution screens',
        },
      ],
    },
    {
      type: 'gallery',
      title: 'Interactive Prototype',
      content: '',
      layout: '1-col',
      images: [
        {
          url: '/images/ai-chatbot-design/final-interface.png',
          alt: 'Interactive prototype screens',
        },
      ],
    },
    {
      type: 'content',
      title: 'Figma Prototype',
      content: `
        <div class="flex flex-col gap-4">
          <p class="text-body-lg text-foreground">
            Directly interact with the prototype below (or
            <a href="${figmaProtoUrl}" target="_blank" rel="noopener noreferrer">open in a new tab</a>).
          </p>
          <div style="position: relative; width: 100%; padding-top: 56.25%; border-radius: 16px; overflow: hidden; border: 1px solid hsl(var(--border)); background: hsl(var(--muted));">
            <iframe
              src="${figmaEmbedUrl}"
              allowfullscreen
              loading="lazy"
              style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;"
            ></iframe>
          </div>
        </div>
      `,
    },
  ],

  technologies: ['Survey', 'Interviews', 'Usability Testing', 'Prototyping'],
  
  testimonial: {
    quote: 'Designing a safe and trustworthy chatbot that provides meaningful support to parents with postpartum depression requires careful consideration of AI ethics, user trust, and mental health best practices.',
    author: 'PSI Team',
    role: 'Mental Health Professionals'
  }
};
