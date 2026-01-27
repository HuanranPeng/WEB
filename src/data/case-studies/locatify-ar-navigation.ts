import { Project } from '../types';

export const locatifyArNavigation: Project = {
  id: 'locatify-ar-navigation',
  title: 'Locatify AR Navigation',
  category: 'AR/VR Design',
  year: '2021',
  link: '/case-study/locatify-ar-navigation',
  description: 'Placeholder description for case study content.',
  
  imageUrl: 'https://via.placeholder.com/1200x600/cccccc/666666?text=Hero+Image',
  heroImage: 'https://via.placeholder.com/1200x600/cccccc/666666?text=Hero+Image',
  
  heroSubTitle: 'Placeholder subtitle for case study',
  role: 'Placeholder Role',
  team: 'Placeholder Team',
  
  meta: {
    title: 'Locatify AR Navigation | Huanran Peng Design',
    description: 'Placeholder meta description',
    ogImage: 'https://via.placeholder.com/1200x630/cccccc/666666?text=OG+Image',
    ogUrl: 'https://yoursite.com/case-study/locatify-ar-navigation',
  },

  sections: [
    {
      type: 'content',
      smallTitle: 'Placeholder Section',
      title: 'Placeholder Title',
      content: 'Placeholder content text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subsections: [
        {
          title: 'Placeholder Subsection',
          content: 'Placeholder subsection content.'
        }
      ]
    },
    {
      type: 'gallery',
      smallTitle: 'Placeholder Gallery',
      title: 'Placeholder Gallery Title',
      content: 'Placeholder gallery description.',
      layout: '2-col',
      images: [
        {
          url: 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+1',
          alt: 'Placeholder image',
          caption: 'Placeholder caption'
        },
        {
          url: 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+2',
          alt: 'Placeholder image',
          caption: 'Placeholder caption'
        }
      ]
    }
  ],

  technologies: ['Figma', 'AR/VR', '3D Design'],
  
  testimonial: {
    quote: 'Placeholder testimonial quote.',
    author: 'Placeholder Author',
    role: 'Placeholder Role'
  }
};
