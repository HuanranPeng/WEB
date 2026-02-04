# Case Study → Figma (Workflow A) Template

This repo stores case study content in TypeScript data files under:

- `src/data/case-studies/*.ts`

Fast workflow:

1. Create a Figma page (or file) named “Case Study Content”.
2. Create one big text layer and paste the template below.
3. Fill the placeholders.
4. Copy the filled text back into chat and tell me which case study `id` it is for (existing or new).
5. I will convert it into the correct `Project` + `sections` structure in `src/data/case-studies/`.

Notes:

- Keep everything as plain text. If you want emphasis, use `**bold**` and I’ll convert to the site’s HTML format.
- Image `url` should match files under `public/` (example: `/images/energysage-redesign/hero-image.png`).
- `content` supports HTML in code, but in Figma just write plain text (or simple markdown).

---

## Copy/paste template (YAML)

```yaml
project:
  # Required (used in URL /case-study/:id)
  id: your-project-id
  title: Project Title
  category: Product Design
  year: "2026"
  description: >
    One-sentence summary used on the home/cards.

  # Images (public paths)
  imageUrl: /images/your-project/hero-image.png
  heroImage: /images/your-project/hero-image.png

  # Hero
  heroSubTitle: >
    The big subtitle under the title on the case study page.

  # Meta row
  role: "Your role(s)"
  team: "Timeline or team"

  # Optional SEO (recommended)
  meta:
    title: "Project Title | Huanran Peng Design"
    description: "1–2 sentence SEO description"
    ogImage: /images/your-project/hero-image.png

  # Tags shown on page
  technologies:
    - Figma
    - UX Research

  # Optional testimonial block
  testimonial:
    quote: "Quote text…"
    author: "Name"
    role: "Role"

sections:
  - type: content
    smallTitle: "Section eyebrow (optional)"
    title: "Section title"
    noDivider: false
    content: >
      Paragraphs… (use plain text here; I’ll format it in code)
    subsections:
      - title: "Subsection title (optional)"
        titleVariant: default # or large
        content: >
          Subsection paragraph…

  - type: gallery
    smallTitle: "Gallery eyebrow (optional)"
    title: "Gallery title (optional)"
    layout: "1-col" # 1-col | 2-col | 3-col | left-image | right-image | two-column
    noDivider: false
    containerHidden: false
    content: >
      Optional text shown near the images.
    images:
      - url: /images/your-project/screen-1.png
        alt: "Describe the image"
        caption: "Optional caption"
      - url: /images/your-project/screen-2.png
        alt: "Describe the image"

  - type: instruction
    title: "Instruction / callout title"
    content: >
      Instruction text…
    variant: default # default | info | warning
    # Optional single image
    image:
      url: /images/your-project/diagram.png
      alt: "Diagram"
      caption: "Optional caption"
    # Optional link
    link:
      text: "Link label"
      url: "https://example.com"

  - type: resources
    title: "Resources"
    content: >
      Optional intro text…
    resources:
      - type: figma # figma | github
        title: "File name"
        description: "What is this resource?"
        url: "https://www.figma.com/file/..."
        lastUpdated: "2026-02-04"

  - type: videos
    videos:
      - videoUrl: /some-video.mp4
        caption: "Optional caption"
```
