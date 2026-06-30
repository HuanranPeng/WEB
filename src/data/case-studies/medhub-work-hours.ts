import { Project } from '../types';

export const medhubWorkHours: Project = {
  id: 'medhub-work-hours',
  title: 'MedHub Work Hours',
  category: 'Enterprise Product Design',
  year: 'Jan 2024-Present',
  link: '/case-study/medhub-work-hours',
  description:
    'Turning work-hour compliance reporting into a clearer workflow for medical education teams.',
  imageUrl: '/images/medhub-work-hours/figma-program-drilldown.png',
  heroImage: '/images/medhub-work-hours/figma-program-drilldown.png',
  heroSubTitle:
    'Helping coordinators move from compliance data to earlier action.',
  role: 'Lead UX Designer',
  timeline: 'Jan 2024-Present',
  team: 'UX, Product, Engineering, Customer Success',
  meta: {
    title: 'MedHub Work Hours | Huanran Peng Design',
    description:
      'A healthcare compliance workflow redesign that consolidates reporting, highlights risk, and supports earlier intervention.',
    ogImage: '/images/medhub-work-hours/figma-program-drilldown.png',
    ogUrl: 'https://www.huanranpeng.com/2026/case-study/medhub-work-hours',
  },
  sections: [
    {
      type: 'content',
      navTitle: 'Overview',
      smallTitle: 'Overview',
      title: 'Coordinators had the data, but action still happened outside the product.',
      content:
        '<p>Medical education teams used MedHub to review resident work-hour compliance, but the real work started after opening the report: comparing data, finding risk, contacting the right person, and documenting follow-up.</p><p><strong>My role:</strong> I led the design direction from static reporting toward a workflow that helps teams identify issues earlier and drill into the right level of detail.</p>',
    },
    {
      type: 'instruction',
      navTitle: 'Problem',
      layout: '3-col',
      smallTitle: 'Problem',
      title: 'The report was detailed, but the workflow was fragmented.',
      content:
        '<p>Research with coordinators, program directors, and a resident showed three problems that mattered most.</p>',
      items: [
        {
          title: 'Too much manual consolidation',
          content:
            '<p>Teams still used exports and spreadsheets to combine submissions, violations, and program context.</p>',
        },
        {
          title: 'Wrong time model',
          content:
            '<p>Calendar reporting did not match how many programs think about rotations and review periods.</p>',
        },
        {
          title: 'Slow follow-up',
          content:
            '<p>Coordinators had to pass context through program directors before residents could resolve issues.</p>',
        },
      ],
    },
    {
      type: 'gallery',
      navTitle: 'Workflow model',
      smallTitle: 'Design direction',
      title: 'Make the report behave like a workflow.',
      content:
        '<p>The core decision was to organize the experience around how compliance teams investigate: program summary, review period, PGY level, and then the resident-level detail that needs attention.</p><p>This keeps the report useful for leadership while still supporting detailed follow-up.</p>',
      layout: 'right-image',
      alignContent: 'center',
      images: [
        {
          url: '/images/medhub-work-hours/figma-program-drilldown.png',
          alt: 'Work Hours report with program, review period, and PGY drill-down',
          displaySize: 'wide',
          caption: 'Program and review-period drill-down exported from the Work-hour-report Figma file.',
        },
      ],
    },
    {
      type: 'gallery',
      navTitle: 'Smart filters',
      smallTitle: 'Key decision',
      title: 'Filtering needed to match compliance logic, not generic table logic.',
      content:
        '<p>The filter system had to support submission status, absence thresholds, violation counts, and how violations are calculated. This made the report more than a spreadsheet view; it became a way to define what risk should be surfaced.</p><p><strong>Decision:</strong> expose compliance-specific filters while keeping defaults broad enough for quick scanning.</p>',
      layout: 'left-image',
      alignContent: 'center',
      images: [
        {
          url: '/images/medhub-work-hours/figma-filter-detail.png',
          alt: 'Work Hours filter configuration for submission rate and violation calculation',
          displaySize: 'contained',
          caption: 'Filter detail exported from the Work-hour-report Figma file.',
        },
      ],
    },
    {
      type: 'instruction',
      navTitle: 'What changed',
      layout: '3-col',
      smallTitle: 'What changed',
      title: 'The redesign focused on three workflow shifts.',
      content:
        '<p>I kept the project story centered on the decisions that changed how teams would use the product.</p>',
      items: [
        {
          title: 'From report list to investigation path',
          content:
            '<p>Users can move from a program summary to the period, PGY, and resident detail that needs review.</p>',
        },
        {
          title: 'From calendar-only to compliance periods',
          content:
            '<p>Filtering supports work-hour review periods and rotation logic instead of forcing a single date model.</p>',
        },
        {
          title: 'From passive data to risk signals',
          content:
            '<p>Submission rate, late timesheets, absences, and violation counts become ways to surface action.</p>',
        },
      ],
    },
    {
      type: 'gallery',
      navTitle: 'Validation',
      smallTitle: 'Validation',
      title: 'Testing confirmed the direction and clarified the roadmap.',
      content:
        '<p>Six users validated the summary view, threshold countdown, direct follow-up entry points, and clearer compliance labels. Testing also exposed two release-critical gaps: in-product violation annotations and a simpler trend chart.</p>',
      layout: 'right-image',
      alignContent: 'center',
      images: [
        {
          url: '/images/medhub-work-hours/concept-testing.png',
          alt: 'Concept testing findings and roadmap gaps',
          displaySize: 'wide',
          caption: 'Validation summary from the case-study source.',
        },
      ],
    },
    {
      type: 'content',
      navTitle: 'Outcome',
      smallTitle: 'Outcome',
      title: 'Validated direction, with impact to measure after release.',
      content:
        '<p>The team aligned around a workflow-based reporting foundation: consolidated visibility, compliance-specific filtering, and progressive drill-down. The estimated operational impact is 2+ hours saved per coordinator per week by reducing manual consolidation, but that number should be measured after release.</p><p>This case should be presented as a workflow redesign and validation story, not as a finished impact story until production metrics are available.</p>',
    },
  ],
  technologies: [
    'Enterprise UX',
    'Workflow Design',
    'Healthcare Compliance',
    'Concept Testing',
  ],
};
