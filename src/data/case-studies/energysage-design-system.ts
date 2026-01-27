import { Project } from '../types';

export const energysageDesignSystem: Project = {
  // Basic Information
  id: 'energysage-design-system',
  title: 'EnergySage Design System',
  category: 'Design Systems',
  year: '2022-Present',
  link: '/case-study/energysage-design-system',
  description: 'Placeholder description for case study content.',
  
  // Images for homepage hero
  imageUrl: 'https://via.placeholder.com/1200x600/cccccc/666666?text=Hero+Image',
  heroImage: 'https://via.placeholder.com/1200x600/cccccc/666666?text=Hero+Image',
  
  // Case Study Page Details
  heroSubTitle: 'Placeholder subtitle for case study',
  role: 'Placeholder Role',
  team: 'Placeholder Team',
  
  // SEO Meta Tags
  meta: {
    title: 'EnergySage Design System | Huanran Peng Design',
    description: 'Placeholder meta description',
    ogImage: 'https://via.placeholder.com/1200x630/cccccc/666666?text=OG+Image',
    ogUrl: 'https://yoursite.com/case-study/energysage-design-system',
  },

  sections: [
    {
      type: 'content',
      smallTitle: 'Placeholder Section',
      title: 'Placeholder Title',
      content: 'Placeholder content text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      subsections: [
        {
          title: 'Placeholder Subsection',
          content: 'Placeholder subsection content. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
          title: 'Another Subsection',
          content: 'More placeholder content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Placeholder Gallery',
      title: 'Placeholder Gallery Title',
      content: 'Placeholder gallery description text.',
      layout: '2-col',
      images: [
        {
          url: 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+1',
          alt: 'Placeholder image 1',
          caption: 'Placeholder caption 1'
        },
        {
          url: 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+2',
          alt: 'Placeholder image 2',
          caption: 'Placeholder caption 2'
        },
        {
          url: 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+3',
          alt: 'Placeholder image 3',
          caption: 'Placeholder caption 3'
        },
        {
          url: 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+4',
          alt: 'Placeholder image 4',
          caption: 'Placeholder caption 4'
        }
      ]
    },
    {
      type: 'content',
      smallTitle: 'Another Section',
      title: 'Placeholder Content Section',
      content: 'More placeholder content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      subsections: [
        {
          title: 'Subsection Title',
          content: 'Subsection placeholder content.'
        }
      ]
    }
  ],

  technologies: ['Figma', 'Design Tokens', 'Component Libraries'],
  
  testimonial: {
    quote: 'Placeholder testimonial quote text.',
    author: 'Placeholder Author',
    role: 'Placeholder Role'
  }
};
