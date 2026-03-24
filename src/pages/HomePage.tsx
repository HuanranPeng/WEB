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
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollToPlugin, ScrollSmoother);

export function HomePage() {
  return (
    <div id="top">
      <MetaTags 
        canonical="https://www.huanranpeng.com/2026"
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
          <Button
            size="lg"
            icon={ArrowRight}
            iconPlacement="right"
            className="w-fit"
            onClick={() => {
              const target =
                document.querySelector<HTMLElement>('[data-case-study-item="true"]') ??
                document.getElementById('case-studies');
              if (!target) return;

              const smoother = ScrollSmoother.get();
              if (smoother) {
                smoother.scrollTo(target, true, 'top top');
                return;
              }

              gsap.to(window, {
                duration: 1,
                scrollTo: { y: target, offsetY: 150 },
                ease: 'power2.inOut',
              });
            }}
          >
            Continue to Case
          </Button>
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
