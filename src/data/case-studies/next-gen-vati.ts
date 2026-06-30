import { Project } from '../types';

export const nextGenVati: Project = {
  id: 'next-gen-vati',
  title: 'NCLEX Prep Learning Path',
  category: 'Product Strategy',
  year: 'May 2024-Dec 2025',
  link: '/case-study/next-gen-vati',
  description:
    'Reframing ATI’s NCLEX prep experience around clear next steps for students and better intervention context for educators.',
  imageUrl: '/images/next-gen-vati/figma-student-path.png',
  heroImage: '/images/next-gen-vati/figma-student-path.png',
  heroSubTitle:
    'Helping nursing students know what to do next in a compressed NCLEX prep timeline.',
  role: 'Lead UX Designer',
  timeline: 'May 2024-Dec 2025',
  team: 'UX, Product, Engineering, Clinical',
  meta: {
    title: 'NCLEX Prep Learning Path | Huanran Peng Design',
    description:
      'A platform redesign for ATI Nursing Education that turns a fragmented NCLEX preparation experience into a guided student path and educator support workflow.',
    ogImage: '/images/next-gen-vati/figma-student-path.png',
    ogUrl: 'https://www.huanranpeng.com/2026/case-study/next-gen-vati',
  },
  sections: [
    {
      type: 'content',
      navTitle: 'Overview',
      smallTitle: 'Overview',
      title: 'VATI was built for a 12-week program. Many students had about 30 days.',
      content:
        '<p>Virtual ATI helps nursing students prepare for the NCLEX, but the experience had become fragmented across student study, remediation, and educator support. Students often needed a simple answer: <strong>what should I do next?</strong></p><p><strong>My role:</strong> I led the product direction for a guided learning path, defined the core path logic, and shaped the educator workspace needed to support intervention.</p>',
    },
    {
      type: 'instruction',
      navTitle: 'Problem',
      layout: '3-col',
      smallTitle: 'Problem',
      title: 'The issue was not the content. It was the system around the content.',
      content:
        '<p>Research and stakeholder conversations pointed to three connected problems.</p>',
      items: [
        {
          title: 'Students felt lost',
          content:
            '<p>They saw many activities, but did not always know what mattered next.</p>',
        },
        {
          title: 'Progress was hard to interpret',
          content:
            '<p>Practice, proficiency, midpoint readiness, and Green Light status needed clearer relationships.</p>',
        },
        {
          title: 'Educators lacked context',
          content:
            '<p>Support required reconstructing a student story across tools, alerts, and progress data.</p>',
        },
      ],
    },
    {
      type: 'gallery',
      navTitle: 'Guided path',
      smallTitle: 'Insight',
      title: 'The dashboard should guide action, not display everything.',
      content:
        '<p>We compared an all-modules dashboard with a path-based model. The all-modules version made the system visible, but increased decision load. The path model gave students a sequence, a current focus, and a clearer sense of progress.</p><p><strong>Decision:</strong> make the student home experience a guided path.</p>',
      layout: 'left-image',
      alignContent: 'center',
      images: [
        {
          url: '/images/next-gen-vati/figma-student-path.png',
          alt: 'Virtual ATI path-based student dashboard',
          displaySize: 'wide',
          caption: 'Student path view exported from the VATI Figma file.',
        },
      ],
    },
    {
      type: 'gallery',
      navTitle: 'Student path',
      smallTitle: 'Student experience',
      title: 'The path turned a long prep program into clear next steps.',
      content:
        '<p>The path needed to support changing activity counts, completed and locked states, midpoint readiness, and proficiency feedback. I defined rules so the interface could stay readable as the plan changed.</p><p>This moved the design from a static dashboard to a flexible system for sequence, state, and confidence.</p>',
      layout: 'two-column',
      images: [
        {
          url: '/images/next-gen-vati/figma-proficiency-drawer.png',
          alt: 'Proficiency drawer showing category progress and Green Light readiness',
          displaySize: 'phone',
          caption: 'Proficiency drawer gives students a readable view of progress and readiness.',
        },
        {
          url: '/images/next-gen-vati/figma-countdown.png',
          alt: 'Countdown card showing progress toward a key assessment',
          displaySize: 'card',
          caption: 'Countdown card makes the next milestone visible without opening a separate report.',
        },
      ],
    },
    {
      type: 'gallery',
      navTitle: 'Educator workspace',
      smallTitle: 'Educator experience',
      title: 'Educators needed a support workspace, not another handoff.',
      content:
        '<p>The educator view had to bring together student progress, proficiency, alerts, and support history. The goal was to help educators decide who needed attention and why, without rebuilding context manually.</p><p><strong>Decision:</strong> organize educator work around intervention, not around platform boundaries.</p>',
      layout: 'left-image',
      alignContent: 'center',
      images: [
        {
          url: '/images/next-gen-vati/figma-educator-students-list.png',
          alt: 'Educator student list with attention-needed summary and progress table',
          displaySize: 'wide',
          caption: 'Educator workspace exported from the VATI Figma file.',
        },
      ],
    },
    {
      type: 'gallery',
      navTitle: 'Responsive rules',
      smallTitle: 'Responsive behavior',
      title: 'The path also needed to work beyond desktop.',
      content:
        '<p>Desktop carried the initial product scope, but the path system needed responsive rules early because students check progress and next steps across contexts.</p>',
      layout: 'right-image',
      alignContent: 'center',
      images: [
        {
          url: '/images/next-gen-vati/figma-mobile-home.png',
          alt: 'Mobile version of the Virtual ATI student home experience',
          displaySize: 'phone',
          caption: 'Mobile path treatment exported from the VATI Figma file.',
        },
      ],
    },
    {
      type: 'instruction',
      navTitle: 'MVP scope',
      layout: '2-col',
      smallTitle: 'Scope',
      title: 'The MVP focused on clarity before deeper personalization.',
      content:
        '<p>The project had many possible directions: AI guidance, adaptive remediation, educator task management, mobile behavior, and reporting. I kept the core story centered on the system decisions that made the experience understandable.</p>',
      items: [
        {
          title: 'MVP focus',
          content:
            '<p>Guided student path, clearer proficiency feedback, countdowns to key assessments, and educator context.</p>',
        },
        {
          title: 'Deferred depth',
          content:
            '<p>Deeper AI workflows, advanced alert management, and measured post-launch impact should be shown only when evidence is available.</p>',
        },
      ],
    },
    {
      type: 'content',
      navTitle: 'Outcome',
      smallTitle: 'Outcome',
      title: 'The result was an aligned product direction, not yet a measured impact story.',
      content:
        '<p>The team aligned around a path-based student experience, a context-rich educator workspace, and implementation rules for variable activity sequences. The next proof points should be satisfaction, time to find the next task, remediation follow-through, completion, and educator workload.</p><p>This case should be presented as a product strategy and system design case unless shipped metrics are added later.</p>',
    },
  ],
  technologies: [
    'Product Strategy',
    'Education Technology',
    'Platform Redesign',
    'User Research',
  ],
};
