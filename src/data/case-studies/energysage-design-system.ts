import { Project } from '../types';

export const energysageDesignSystem: Project = {
  // Basic Information
  id: 'energysage-design-system',
  title: 'EnergySage Design System',
  category: 'Design Systems',
  year: 'Dec. 2022 - Present',
  link: '/case-study/energysage-design-system',
  description: 'A sustainable design standard and cohesive design language across three EnergySage product platforms.',
  
  // Images for homepage hero
  imageUrl: '/images/energysage-design-system/hero-image.png',
  heroImage: '/images/energysage-design-system/hero-image.png',
  
  // Case Study Page Details
  heroSubTitle: 'A sustainable design standard and cohesion across teams and platforms',
  role: 'Lead Design Systems Designer',
  team: '4 UX Designers, front-end engineering teams, marketing teams',
  
  // SEO Meta Tags
  meta: {
    title: 'EnergySage Design System | Huanran Peng Design',
    description: 'Leading the creation of a sustainable design system for EnergySage to unify three product platforms and improve cross-team efficiency.',
    ogImage: '/images/energysage-design-system/hero-image.png',
    ogUrl: 'https://www.huanranpeng.com/case-study/energysage-design-system',
  },

  sections: [
    {
      type: 'content',
      smallTitle: 'Overview',
      title: 'Overview',
      content: 'As the <span class="text-emphasis">key designer responsible</span> for the Design System project, I worked with 4 designers to create the components and guidance from 0-1. With <span class="text-emphasis">limited resources</span> and weekly design requirements, we made reasonable plans and effective task allocation. The <span class="text-emphasis">design system</span> was created from scratch. I actively reached out and collected voices from <span class="text-emphasis">other teams, development teams, marketing teams</span>, and end users.',
    },
    {
      type: 'content',
      smallTitle: 'Problem',
      title: 'Fragmented Design Across Growing Teams',
      content: 'EnergySage has <span class="text-emphasis">three products</span>: Roof Solar Marketplace, Community Solar Marketplace, and Heat Pump Marketplace. Although there are product connections between each platform, their <span class="text-emphasis">design connections were fragmented</span>. As teams grow, without a <span class="text-emphasis">systematic way to guide different teams</span> to work in one direction, more people joining only makes this gap grow deeper, like the Mariana Trench.',
    },
    {
      type: 'gallery',
      smallTitle: 'Problem Context',
      title: 'The Challenge in Context',
      content: 'The lack of a unified visual and interaction language led to inconsistent experiences, duplicated work, and communication challenges across teams.',
      layout: '1-col',
      images: [
        {
          url: '/images/energysage-design-system/problem-context.jpg',
          alt: 'Context for fragmented design and collaboration challenges',
          caption: 'Context for the design system initiative'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'What',
      title: 'A Systemic Approach and Guardrails',
      content: 'This system aims to create a <span class="text-emphasis">systemic approach and guardrails</span> to help design and development teams utilize components to improve efficiency and maintain continuity and consistency, so that developers can focus on logic and designers can focus on flows and user experience. The system is structured around <span class="text-emphasis">four pillars: Guideline, Tool, Usage, and Component</span>, each supporting both designers and engineers with systemic guardrails, appropriate tips and scenarios, and open, scalable components and patterns.',
    },
    {
      type: 'content',
      smallTitle: 'Challenges',
      title: 'Design and Engineering Challenges',
      content: '',
      subsections: [
        {
          title: 'Designers',
          content: 'When I joined the team, there were only 3 designers. Later the team grew. Due to a <span class="text-emphasis">lack of reasonable constraints</span>, the output of each designer was different. Designers had been struggling with <span class="text-emphasis">standardized UX and UI designs</span>.'
        },
        {
          title: 'Engineers',
          content: 'There was no <span class="text-emphasis">effective communication</span> among different front-end engineering teams. In reality, component code could be reused and maintained to save time, but this was not happening without a <span class="text-emphasis">shared system</span>.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Design System Foundations',
      title: 'Color, Typography, and Spacing',
      content: 'Establishing core visual foundations for the design system, including color styles, typography scales for desktop and mobile, and spacing rules.',
      layout: 'two-column',
      images: [
        {
          url: '/images/energysage-design-system/color-system.png',
          alt: 'Design system color styles',
          caption: 'Color Style'
        },
        {
          url: '/images/energysage-design-system/typography-desktop.png',
          alt: 'Desktop typography scale',
          caption: 'Typography – Desktop'
        },
        {
          url: '/images/energysage-design-system/typography-mobile.png',
          alt: 'Mobile typography scale',
          caption: 'Typography – Mobile'
        },
        {
          url: '/images/energysage-design-system/spacing-1.png',
          alt: 'Spacing rules overview',
          caption: 'Spacing Rules'
        },
        {
          url: '/images/energysage-design-system/spacing-2.png',
          alt: 'More detailed spacing rules',
          caption: 'Spacing Details'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'System Components',
      title: 'Icons, Grid, and Components',
      content: 'Building out icons, grid systems, and components as reusable building blocks for the three product platforms.',
      layout: 'two-column',
      images: [
        {
          url: '/images/energysage-design-system/icons.png',
          alt: 'Design system icons',
          caption: 'Icons'
        },
        {
          url: '/images/energysage-design-system/grid.png',
          alt: 'Grid system',
          caption: 'Grid System'
        },
        {
          url: '/images/energysage-design-system/components.png',
          alt: 'Design system components',
          caption: 'Component Library'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Before & After',
      title: 'Before & After',
      content: 'Comparing the interfaces before and after applying the design system to show visual consistency and UX improvements.',
      layout: 'two-column',
      images: [
        {
          url: '/images/energysage-design-system/before-after-1.png',
          alt: 'Before and after comparison 1',
          caption: 'Before & After – Example 1'
        },
        {
          url: '/images/energysage-design-system/before-after-2.png',
          alt: 'Before and after comparison 2',
          caption: 'Before & After – Example 2'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Conclusion',
      title: 'Laying a Sustainable Design Language',
      content: "Great things in business are never done by one person, they're done by a team of people. This is a monumental and challenging task, and we only have 4 UX designers. This is the first version of an entirely new system, but it has laid a sustainable design language. Design and code are shared. The development team, especially the front-end engineer team, said they can't wait to use it. Designers can also focus more on product and user experience rather than adjusting colors and sizes on visual elements.",
    }
  ],

  technologies: ['Figma', 'Design Tokens', 'Component Libraries', 'Design Systems'],
  
  testimonial: {
    quote: 'The design system laid a sustainable design language where design and code are shared, and teams are excited to adopt it.',
    author: 'EnergySage Front-end Team',
    role: 'Front-end Engineers'
  }
};
