import { ThreeHero } from '../components/ThreeHero';
import { CaseStudies } from '../components/CaseStudies';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/CTA';
import { AnimatedHeroText } from '@/components/AnimatedHeroText';
import MetaTags from '@/components/MetaTags';

const focusAreas = [
  'Workflow design',
  'Mobile UX',
  'AI interaction',
  'Design systems',
  'Data-heavy products',
];

export function HomePage() {
  return (
    <div id="top">
      <MetaTags 
        canonical="https://www.huanranpeng.com/2026"
      />
      <ThreeHero />
      
      {/* Hero section - full width */}
      <Container className="max-w-screen-2xl">
        <section id="about" className="flex min-h-[78vh] flex-col justify-center pb-12 pt-28 md:min-h-[82vh] md:pb-16 md:pt-32">
          <AnimatedHeroText
            greeting="👋 Hello, I'm Huanran Peng."
            title="Product designer shaping complex workflows across web, mobile, and AI into clear, usable systems."
            highlightPhrases={["complex workflows", "web, mobile, and AI", "clear, usable systems"]}
          />
          <div className="mt-8 flex max-w-3xl flex-wrap gap-2 md:mt-10 md:gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border/70 bg-background/60 px-4 py-2 text-caption font-medium text-muted-foreground backdrop-blur"
              >
                {area}
              </span>
            ))}
          </div>
        </section>
      </Container>

      <Container className="max-w-screen-2xl">
        <section id="case-studies" className="pb-20 md:pb-28">
          <CaseStudies />
        </section>
      </Container>

      <section id="contact">
        <div className="border-t border-border">
          <CTA />
        </div>
      </section>
          
      <Footer />
    </div>
  );
}
