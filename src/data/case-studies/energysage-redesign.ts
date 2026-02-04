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
    // --- Problems ---
    {
      type: 'gallery',
      smallTitle: 'The Problems',
      title: 'What are the problems?',
      content:
        'The website has <span class="text-emphasis">complex and abundant information</span>, making it difficult for users to find the information they need. The <span class="text-emphasis">outdated design of the website</span> undermines user confidence and discourages users from placing large solar energy orders through our website.',
      layout: 'right-image',
      images: [
        {
          url: '/images/energysage-redesign/problem-image.png',
          alt: 'Current EnergySage website interface',
          caption: 'Current website interface',
        },
      ],
    },

    // --- Process ---
    {
      type: 'instruction',
      title: 'What are the process?',
      content:
        'Our redesign process focused on <span class="text-emphasis">four key areas</span>: Design System, Information Architecture, Above The Fold, and Product Landing Page.',
      items: [
        {
          title: 'Design System',
          content:
            'Establishing a <span class="text-emphasis">comprehensive design system</span> with responsive grid, color, typography, and button components.',
        },
        {
          title: 'Information Architecture',
          content: 'Redesigning the information architecture to improve search traffic and user navigation.',
        },
        {
          title: 'Above The Fold',
          content: 'Analyzing and optimizing the most important content displayed above the fold.',
        },
        {
          title: 'Product Landing Page',
          content: 'Creating effective product landing pages that guide users to the main marketplace.',
        },
      ],
    },

    // --- Design system ---
    {
      type: 'gallery',
      smallTitle: 'Design System',
      title: 'Design System',
      content:
        'Establishing core design system components including responsive grid system, color palette, typography, and button components.',
      layout: '1-col',
      images: [
        {
          url: '/images/energysage-redesign/design-system-grid.png',
          alt: 'Responsive grid system',
          caption: 'Responsive Grid System',
        },
        {
          url: '/images/energysage-redesign/design-system-color.png',
          alt: 'Color palette tokens',
          caption: 'Color',
        },
        {
          url: '/images/energysage-redesign/design-system-typography.png',
          alt: 'Typography scale and styles',
          caption: 'Typography',
        },
        {
          url: '/images/energysage-redesign/design-system-buttons.png',
          alt: 'Button component states and variants',
          caption: 'Button Components',
        },
      ],
    },

    // --- Information Architecture ---
    {
      type: 'gallery',
      smallTitle: 'Information Architecture',
      title: 'Information Architecture',
      content: 'Our website is experiencing a <span class="text-emphasis">decline in search traffic</span>.',
      layout: '1-col',
      images: [
        {
          url: '/images/energysage-redesign/ia-traffic.png',
          alt: 'Share of high-volume keyword traffic over time',
          caption: 'Share of high-volume keyword traffic over time',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Current IA Audit',
      content: '',
      layout: '1-col',
      images: [
        {
          url: '/images/energysage-redesign/ia-3.png',
          alt: 'EnergySage site map (March 2023)',
          caption: 'EnergySage site map (March 2023)',
        },
      ],
    },
    {
      type: 'instruction',
      headingLevel: 'subsection',
      title: 'Opportunity',
      content: 'A well-designed IA improves both search discoverability and the user experience.',
      items: [
        {
          title: 'Search engines',
          content:
            "A well-designed IA can help search engines understand the content and structure of the website, making it easier for them to crawl and index the website's pages.",
        },
        {
          title: 'Users',
          content:
            'By organizing and labeling content in a clear and consistent manner, IA can also improve the user experience by making it easier for users to find the information they need.',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Design Exploration',
      content:
        'Compact design <span class="text-emphasis">looks clean and frees up space</span> on the screen for other important content. Hidden content behind a collapsible navigation menu may be <span class="text-emphasis">difficult for search engines</span> to crawl.',
      noDivider: true,
      layout: 'left-image',
      images: [
        {
          url: '/images/energysage-redesign/ia-compact.png',
          alt: 'Compact navigation exploration',
          caption: 'Compact design',
        },
      ],
    },
    {
      type: 'gallery',
      content:
        '<span class="text-emphasis">Double navigation bar</span> gives opportunity to highlight more content. <span class="text-emphasis">Quickly access</span> content without having to drill down. Expanded menu design shows you the breadth of our content.',
      noDivider: true,
      layout: 'left-image',
      images: [
        {
          url: '/images/energysage-redesign/ia-double.png',
          alt: 'Double navigation bar exploration',
          caption: 'Double navigation bar',
        },
      ],
    },
    {
      type: 'instruction',
      headingLevel: 'subsection',
      title: 'Design Solution',
      content:
        'Collapsible navigation menu can provide more room for links and categories, while still allowing users to see all of their options at once. Expanded navigation keeps products and services in a more prominent position, provides users with quick access to important links while still keeping the experience streamlined.',
    },
    {
      type: 'gallery',
      title: '',
      content: '',
      noDivider: true,
      layout: '1-col',
      images: [
        {
          url: '/images/energysage-redesign/ia-6.png',
          alt: 'Top navigation solution (header)',
          caption: 'Navigation structure',
        },
        {
          url: '/images/energysage-redesign/ia-7.png',
          alt: 'Expanded navigation solution',
          caption: 'Expanded navigation menu',
        },
      ],
    },
    {
      type: 'instruction',
      headingLevel: 'subsection',
      title: 'Success Metrics',
      content:
        'Our goals include improving organic traffic, decreasing time spent on task, achieving click-depth analysis ≤3, and decreasing bounce rate.',
      items: [
        { title: 'Organic Traffic', content: 'Improve' },
        { title: 'Time spent on task', content: 'Decrease' },
        { title: 'Click-depth analysis', content: '≤3' },
        { title: 'Bounce rate', content: 'Decrease' },
      ],
    },

    // --- Above the fold ---
    {
      type: 'content',
      smallTitle: 'Above The Fold',
      title: 'Above The Fold',
      content:
        '<ul><li>Analyze and determine the most important content to display above the fold.</li><li>Design a clear and compelling headline that communicates the website&#39;s value.</li><li>Keep the layout simple and easy to navigate, with clear call-to-actions.</li></ul>',
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Challenges',
      content: 'Requires a significant amount of time to implement.',
      noDivider: true,
      layout: 'right-image',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-1.png',
          alt: 'Above-the-fold exploration (challenge 1)',
          caption: 'Challenge',
        },
      ],
    },
    {
      type: 'gallery',
      content: 'Highlighting the core marketplace before the other products ready.',
      noDivider: true,
      layout: 'right-image',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-2.png',
          alt: 'Above-the-fold exploration (challenge 2)',
          caption: 'Challenge',
        },
      ],
    },
    {
      type: 'gallery',
      content: 'Simplifying the call-to-action (CTA) on the website to better direct users to the main market.',
      noDivider: true,
      layout: 'right-image',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-3.png',
          alt: 'Above-the-fold exploration (challenge 3)',
          caption: 'Challenge',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Design Exploration',
      content: '',
      layout: 'two-column',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-4.png',
          alt: 'Hero design exploration option A',
          caption: 'Option A',
        },
        {
          url: '/images/energysage-redesign/above-fold-5.png',
          alt: 'Hero design exploration option B',
          caption: 'Option B',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      alignContent: 'center',
      title: '5-Second Test',
      content:
        '5 seconds represents the amount of time a visitor will make a judgment and decide to engage with or abandon a site upon landing there.<br /><br />We tested: What do you remember? What can you do on this site? Who’s this site for? What was the name of the company?',
      layout: 'left-image',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-6.png',
          alt: '5-second test icon',
          variant: 'icon',
        },
      ],
    },
    {
      type: 'gallery',
      title: '',
      content: '',
      layout: '1-col',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-7.png',
          alt: 'Above-the-fold test matrix',
          caption: 'Exploration matrix',
        },
      ],
    },
    {
      type: 'instruction',
      headingLevel: 'subsection',
      title: 'Messages Tested',
      layout: '3-col',
      content: '',
      items: [
        {
          title: '44% trusted',
          content: 'Save thousands by switching to clean energy for your home.',
          caption: '5 minutes can get you the best prices from top installers.',
        },
        {
          title: '60% trusted',
          content: 'EnergySage shoppers save ~20% versus going it alone.',
          caption: 'Easily shop for solar and more with vetted, local installers.',
        },
        {
          title: '68% trusted',
          content: 'Compare and save on clean home energy solutions.',
          caption: 'Research and shop through our network of pre-screened, local installers.',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Images Tested',
      content: '',
      layout: '3-col',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-1.png',
          alt: 'Image test variant 1',
          caption: '40% trusted',
        },
        {
          url: '/images/energysage-redesign/above-fold-2.png',
          alt: 'Image test variant 2',
          caption: '60% trusted',
        },
        {
          url: '/images/energysage-redesign/above-fold-3.png',
          alt: 'Image test variant 3',
          caption: '67% trusted',
        },
      ],
    },
    {
      type: 'gallery',
      headingLevel: 'subsection',
      title: 'Result',
      content: '',
      layout: '1-col',
      className: 'w-full max-w-[760px] mx-auto',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-1.png',
          alt: 'Result variant A',
          caption: 'Overall score (50%)',
        },
      ],
    },
    {
      type: 'gallery',
      noDivider: true,
      title: '',
      // smaller gap between result rows (closer to Figma) without starting a new "section"
      content: '<div class="h-8"></div>',
      layout: 'two-column',
      images: [
        {
          url: '/images/energysage-redesign/above-fold-2.png',
          alt: 'Result variant B',
          caption: 'Overall score (47%)',
        },
        {
          url: '/images/energysage-redesign/above-fold-3.png',
          alt: 'Result variant C',
          caption: 'Overall score (43%)',
        },
      ],
    },
  ],

  technologies: ['Figma', 'UX Research', 'Information Architecture', 'Design Systems'],
  
  testimonial: {
    quote: 'The redesign process focused on improving search traffic and user experience through systematic design improvements.',
    author: 'EnergySage Team',
    role: 'Product Team'
  }
};
