import { ThreeHero } from '../components/ThreeHero';
import { CaseStudies } from '../components/CaseStudies';
import { Footer } from '../components/Footer';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/CTA';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedHeroText } from '@/components/AnimatedHeroText';
import { InPageNavigation } from '@/components/InPageNavigation';
import MetaTags from '@/components/MetaTags';

export function HomePage() {
  return (
    <div id="top">
      <MetaTags 
        canonical="https://www.trice.design"
      />
      <ThreeHero />
      
      {/* Hero section - full width */}
      <Container>
        <section id="about" className='flex flex-col justify-center h-screen gap-8 md:gap-12'>
          <AnimatedHeroText
            greeting="👋 Hello, I'm Huanran Peng."
            title="Product Designer blending design systems and AI interaction design to deliver measurable product value."
            highlightPhrases={["design systems", "AI interaction design", "product value"]}
          />
          <a 
            href="mailto:huanranpeng@gmail.com"
            className="w-fit"
          >
            <Button 
              size="lg"
              icon={ArrowRight}
              iconPlacement="right"
            >
              Let's Talk
            </Button>
          </a>
        </section>
      </Container>

      {/* Content sections with navigation sidebar */}
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8" id="content-with-nav">
          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
              <section id="case-studies">
                <CaseStudies />
              </section>
            </div>
          </div>
          
          {/* Navigation sidebar - hidden on mobile, visible on lg and up */}
          <div className="lg:col-span-3">
            <InPageNavigation />
          </div>
        </div>
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
