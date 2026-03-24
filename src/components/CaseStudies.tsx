import { Link } from "react-router-dom";
import { projects } from "@/data/case-studies";
import { useEffect, useRef } from "react";
import { Tags } from "./Tags";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { HeroSection } from "./case-study/HeroSection";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  const caseStudyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (caseStudyRefs.current.length === 0) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    caseStudyRefs.current.forEach((ref) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    const container = document.getElementById("case-studies");
    const targets = caseStudyRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!container || targets.length < 2) {
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }

    let snapping = false;
    let releaseTimeout: number | undefined;
    let lastSnapAt = 0;
    let accumulated = 0;

    const getCurrentIndex = () => {
      const anchorY = 200; // match the visual "active" line
      let bestIndex = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      targets.forEach((el, idx) => {
        const dist = Math.abs(el.getBoundingClientRect().top - anchorY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = idx;
        }
      });
      return bestIndex;
    };

    const scrollToIndex = (index: number) => {
      const target = targets[index];
      const smoother = ScrollSmoother.get();
      snapping = true;

      if (releaseTimeout) {
        window.clearTimeout(releaseTimeout);
      }

      if (smoother) {
        smoother.scrollTo(target, true, "top top");
        releaseTimeout = window.setTimeout(() => {
          snapping = false;
          ScrollTrigger.refresh();
        }, 900);
        return;
      }

      gsap.to(window, {
        duration: 0.8,
        ease: "power2.inOut",
        scrollTo: { y: target, offsetY: 150 },
        onComplete: () => {
          snapping = false;
          ScrollTrigger.refresh();
        },
      });
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // allow browser zoom
      if (snapping) return;

      const deltaY = e.deltaY;
      if (Math.abs(deltaY) < 4) return;

      const rect = container.getBoundingClientRect();
      const anchorY = 200;
      const isWithinCaseStudies = rect.top < anchorY && rect.bottom > anchorY;
      if (!isWithinCaseStudies) return;

      const now = Date.now();
      if (now - lastSnapAt < 500) return;

      accumulated += deltaY;
      const threshold = 80; // reduce accidental trackpad triggers
      if (Math.abs(accumulated) < threshold) return;

      const dir = accumulated > 0 ? 1 : -1;
      const current = getCurrentIndex();
      const next = Math.max(0, Math.min(targets.length - 1, current + dir));
      if (next === current) return;

      accumulated = 0;
      lastSnapAt = now;
      scrollToIndex(next);
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel as EventListener);
      if (releaseTimeout) {
        window.clearTimeout(releaseTimeout);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Determine hero layout and images based on project
  const getHeroConfig = (projectId: string) => {
    switch (projectId) {
      case 'energysage-design-system':
        return {
          layout: 'single' as const,
          singleImage: '/images/energysage-design-system/hero-image.png'
        };
      case 'energysage-redesign':
        return {
          layout: 'single' as const,
          singleImage: '/images/energysage-redesign/hero-image.png'
        };
      case 'space-project':
        return {
          layout: 'single' as const,
          singleImage: '/images/space-project/hero-image.png'
        };
      case 'ai-chatbot-design':
        return {
          layout: 'single' as const,
          singleImage: '/images/ai-chatbot-design/hero-image.png'
        };
      case 'heat-pump-marketplace':
        return {
          layout: 'single' as const,
          singleImage: '/images/heat-pump-marketplace/hero-image.png'
        };
      case 'locatify-ar-navigation':
        return {
          layout: 'single' as const,
          singleImage: '/images/locatify-ar-navigation/hero-image.png'
        };
      default:
        return {
          layout: 'single' as const,
          singleImage: 'https://via.placeholder.com/1200x600/cccccc/666666?text=Hero+Image'
        };
    }
  };

  return (
    <div className="flex flex-grow flex-col gap-12 md:gap-16">
      <h2 className="text-display-md md:text-display-lg lg:text-display-2xl mb-0 mt-4">
        Case Studies
      </h2>
      {projects.map((project, index) => (
        <div
          key={project.id}
          id={project.id}
          data-case-study-item="true"
          className="scroll-mt-40"
          ref={el => caseStudyRefs.current[index] = el}
        >
          <div className="w-full pb-2">
            <Link to={project.link} className="group">
              <HeroSection 
                id={project.id}
                {...getHeroConfig(project.id)}
                className="h-[280px] sm:h-[330px] md:h-[500px] lg:h-[600px]"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-1 md:gap-2 max-w-2xl">
              <div className="flex items-center justify-between mt-4">
                <h3 className="mb-0 text-display-sm md:text-display-md">
                  {project.title}
                </h3>
                <Link to={project.link}>
                  <Button 
                    variant="outline"
                    size="md"
                    icon={ArrowRight}
                    iconPlacement="right"
                  />
                </Link>
              </div>
              <div className="space-y-6 max-w-xl">
                <p className="md:text-body-lg text-foreground/80">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-2">
            <Tags tags={project.technologies} />
          </div>
        </div>
      ))}
    </div>
  );
}