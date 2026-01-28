import { Project } from '../types';

export const energysageRedesign: Project = {
  id: 'energysage-redesign',
  title: 'EnergySage Redesign',
  category: 'Product Design',
  year: '2022-Present',
  link: '/case-study/energysage-redesign',
  description: 'The project is aiming to launch a modernized core educational experience that positions EnergySage to be the premier destination for home electrification on search and beyond!',
  
  imageUrl: '/images/energysage-redesign/hero-image.png',
  heroImage: '/images/energysage-redesign/hero-image.png',
  
  heroSubTitle: 'The project is aiming to launch a modernized core educational experience that positions EnergySage to be the premier destination for home electrification on search and beyond!',
  role: 'UX Researcher UX Designer',
  team: 'Oct. 2022 - Present',
  
  meta: {
    title: 'EnergySage Redesign | Huanran Peng Design',
    description: 'Modernizing EnergySage core educational experience to position it as the premier destination for home electrification.',
    ogImage: '/images/energysage-redesign/hero-image.png',
    ogUrl: 'https://www.huanranpeng.com/2026/case-study/energysage-redesign',
  },

  sections: [
    {
      type: 'gallery',
      smallTitle: 'The Problems',
      title: 'What are the problems?',
      content: 'The website has <span class="text-emphasis">complex and abundant information</span>, making it difficult for users to find the information they need. The <span class="text-emphasis">outdated design</span> of the website undermines user confidence and discourages users from placing large solar energy orders through our website.',
      layout: 'right-image',
      images: [
        {
          url: '/images/energysage-redesign/problem-image.png',
          alt: 'EnergySage website showing complex information',
          caption: 'Current website interface'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'The Process',
      title: 'What are the process?',
      content: 'Our redesign process focused on <span class="text-emphasis">four key areas</span>: Design System, Information Architecture, Above The Fold, and Product Landing Page.',
      layout: '4-col',
      subsections: [
        {
          title: 'Design System',
          content: 'Establishing a <span class="text-emphasis">comprehensive design system</span> with responsive grid, color, typography, and button components.'
        },
        {
          title: 'Information Architecture',
          content: 'Redesigning the information architecture to improve search traffic and user navigation.'
        },
        {
          title: 'Above The Fold',
          content: 'Analyzing and optimizing the most important content displayed above the fold.'
        },
        {
          title: 'Product Landing Page',
          content: 'Creating effective product landing pages that guide users to the main marketplace.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Design System',
      title: 'Design System',
      content: 'Establishing core design system components including responsive grid system, color palette, typography, and button components.',
      layout: '1-col',
      images: [
        {
          url: '/images/energysage-redesign/design-system-grid.png',
          alt: 'Responsive Grid System',
          caption: 'Responsive Grid System'
        },
        {
          url: '/images/energysage-redesign/design-system-color.png',
          alt: 'Color',
          caption: 'Color'
        },
        {
          url: '/images/energysage-redesign/design-system-typography.png',
          alt: 'Typography',
          caption: 'Typography'
        },
        {
          url: '/images/energysage-redesign/design-system-buttons.png',
          alt: 'Button',
          caption: 'Button'
        }
      ]
    },
    {
      type: 'content',
      noDivider: true,
      smallTitle: 'Information Architecture',
      title: 'Information Architecture',
      content: 'Our website is experiencing a <span class="text-emphasis">decline in search traffic</span>.<img src="/images/energysage-redesign/ia-traffic.png" alt="Share of high-volume keyword traffic over time" />',
      subsections: [
        {
          title: 'Current IA Audit',
          content: 'We conducted a comprehensive audit of the current information architecture to identify pain points and opportunities.'
        },
        {
          title: 'Opportunity',
          content: 'A well-designed IA can help search engines understand the content and structure of the website, making it easier for them to crawl and index the website\'s pages. By organizing and labeling content in a clear and consistent manner, IA can also improve the user experience by making it easier for users to find the information they need.'
        },
        {
          title: 'Design Exploration',
          content: 'We explored three navigation approaches: compact design that looks clean and frees up space but may hide content behind collapsible menus; double navigation bar that gives opportunity to highlight more content and quickly access content; and expanded menu design that shows the breadth of our content.'
        },
      ]
    },
    {
      type: 'gallery',
      noDivider: true,
      layout: 'left-image',
      images: [
        {
          url: '/images/energysage-redesign/ia-compact.png',
          alt: 'Compact navigation design exploration',
          caption: 'Compact design'
        }
      ],
      content: 'Compact design <span class="text-emphasis">looks clean and frees up space</span> on the screen for other important content. Hidden content behind a collapsible navigation menu may be <span class="text-emphasis">difficult for search engines</span> to crawl.'
    },
    {
      type: 'gallery',
      noDivider: true,
      layout: 'left-image',
      images: [
        {
          url: '/images/energysage-redesign/ia-double.png',
          alt: 'Double navigation bar design exploration',
          caption: 'Double navigation bar'
        }
      ],
      content: '<span class="text-emphasis">Double navigation bar</span> gives opportunity to highlight more content. <span class="text-emphasis">Quickly access</span> content without having to drill down. Expanded menu design shows you the breadth of our content.'
    },
    {
      type: 'content',
      smallTitle: '',
      title: '',
      content: '',
      subsections: [
        {
          title: 'Design Solution',
          content: 'Collapsible navigation menu can provide more room for links and categories, while still allowing users to see all of their options at once. Expanded navigation keeps products and services in a more prominent position, provides users with quick access to important links while still keeping the experience streamlined.'
        },
        {
          title: 'Success Metrics',
          content: 'Our goals include improving organic traffic, decreasing time spent on task, achieving click-depth analysis ≤3, and decreasing bounce rate.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Information Architecture',
      title: 'IA Design Process',
      content: 'Exploring different navigation approaches and site structure solutions.',
      layout: 'two-column',
      images: [
        {
          url: '/images/energysage-redesign/ia-1.png',
          alt: 'Current IA audit',
          caption: 'Current IA Audit'
        },
        {
          url: '/images/energysage-redesign/ia-2.png',
          alt: 'Design exploration',
          caption: 'Design Exploration'
        },
        {
          url: '/images/energysage-redesign/ia-3.png',
          alt: 'Site map',
          caption: 'Global Site Map'
        },
        {
          url: '/images/energysage-redesign/ia-4.png',
          alt: 'Navigation design',
          caption: 'Navigation Design'
        },
        {
          url: '/images/energysage-redesign/ia-5.png',
          alt: 'Navigation exploration',
          caption: 'Navigation Exploration'
        },
        {
          url: '/images/energysage-redesign/ia-6.png',
          alt: 'Navigation solution',
          caption: 'Navigation Solution'
        },
        {
          url: '/images/energysage-redesign/ia-7.png',
          alt: 'Success metrics',
          caption: 'Success Metrics'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Above The Fold',
      title: 'Above The Fold',
      content: 'Analyze and determine the most important content to display above the fold. Design a clear and compelling headline that communicates the website\'s value. Keep the layout simple and easy to navigate, with clear call-to-actions.',
      subsections: [
        {
          title: 'Challenges',
          content: 'Requires a significant amount of time to implement. Highlighting the core marketplace before the other products ready. Simplifying the call-to-action (CTA) on the website to better direct users to the main market.'
        },
        {
          title: '5-Second Test',
          content: '5 seconds represents the amount of time a visitor will make a judgment and decide to engage with or abandon a site upon landing there. We tested: What do you remember? What can you do on this site? Who\'s this site for? What was the name of the company?'
        },
        {
          title: 'Messages Tested',
          content: 'We tested three message variations: "Save thousands by switching to clean energy for your home - 5 minutes can get you the best prices from top installers" (44% trusted); "EnergySage shoppers save ~20% versus going it alone - Easily shop for solar and more with vetted, local installers" (60% trusted); "Compare and save on clean home energy solutions - Research and shop through our network of pre-screened, local installers" (68% trusted).'
        },
        {
          title: 'Images Tested',
          content: 'We tested different hero images: Version 1 (40% trusted), Version 2 (60% trusted), Version 3 (67% trusted).'
        },
        {
          title: 'Result',
          content: 'Overall scores: Version 1 (50%), Version 2 (47%), Version 3 (43%).'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Above The Fold',
      title: 'Above The Fold Design Exploration',
      content: 'Testing different messages and images to optimize the hero section.',
      layout: 'two-column',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-1.png',
          alt: 'Message testing',
          caption: 'Messages Tested'
        },
        {
          url: '/images/energysage-redesign/above-fold-2.png',
          alt: 'Image testing',
          caption: 'Images Tested'
        },
        {
          url: '/images/energysage-redesign/above-fold-3.png',
          alt: 'Test results',
          caption: 'Test Results'
        },
        {
          url: '/images/energysage-redesign/above-fold-4.png',
          alt: 'Hero design option 1',
          caption: 'Hero Design Option 1'
        },
        {
          url: '/images/energysage-redesign/above-fold-5.png',
          alt: 'Hero design option 2',
          caption: 'Hero Design Option 2'
        },
        {
          url: '/images/energysage-redesign/above-fold-6.png',
          alt: 'Hero design option 3',
          caption: 'Hero Design Option 3'
        },
        {
          url: '/images/energysage-redesign/above-fold-7.png',
          alt: 'Final result',
          caption: 'Final Result'
        },
        {
          url: '/images/energysage-redesign/above-fold-8.png',
          alt: 'Overall score',
          caption: 'Overall Score'
        }
      ]
    }
  ],

  technologies: ['Figma', 'UX Research', 'Information Architecture', 'Design Systems'],
  
  testimonial: {
    quote: 'The redesign process focused on improving search traffic and user experience through systematic design improvements.',
    author: 'EnergySage Team',
    role: 'Product Team'
  }
};
