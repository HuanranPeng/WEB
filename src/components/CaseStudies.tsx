import { Link } from "react-router-dom";
import { projects } from "@/data/case-studies";
import { useEffect, useRef } from "react";
import { Tags } from "./Tags";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getImagePath } from "@/lib/utils";

export function CaseStudies() {
  const caseStudyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (caseStudyRefs.current.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Determine hero layout and images based on project
  const getHeroConfig = (projectId: string) => {
    switch (projectId) {
      case 'medhub-work-hours':
        return {
          layout: 'single' as const,
          singleImage: '/images/medhub-work-hours/figma-program-drilldown.png'
        };
      case 'next-gen-vati':
        return {
          layout: 'single' as const,
          singleImage: '/images/next-gen-vati/figma-student-path.png'
        };
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
    <div className="flex flex-grow flex-col">
      <div className="mb-8 flex flex-col gap-3 md:mb-12 md:max-w-3xl">
        <p className="case-study-eyebrow mb-0 text-muted-foreground">Selected work</p>
        <h2 className="mb-0 text-display-md md:text-display-lg lg:text-display-2xl">
          Selected Design Work
        </h2>
        <p className="mb-0 max-w-2xl text-body-md text-muted-foreground md:text-body-lg">
          Workflow, data, and systems projects across healthcare, education, and energy products.
        </p>
      </div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          id={project.id}
          data-case-study-item="true"
          className="scroll-mt-32 border-t border-border py-12 first:border-t-0 first:pt-0 md:py-16 lg:py-20"
          ref={el => caseStudyRefs.current[index] = el}
        >
          <div className="w-full">
            <Link to={project.link} className="group">
              <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-border/70 bg-[#050505] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] transition-all duration-300 group-hover:border-foreground/25 group-hover:shadow-[0_32px_110px_rgba(0,0,0,0.28)] sm:h-[400px] md:h-[520px] md:p-7 lg:h-[640px] lg:p-9">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_42%)]" />
                <img
                  src={getImagePath(getHeroConfig(project.id).singleImage)}
                  alt={`${project.title} preview`}
                  className="relative z-10 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
              </div>
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:mt-7 md:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] md:gap-8 lg:gap-12">
            <div className="flex flex-col gap-2">
              <p className="case-study-eyebrow mb-0 text-muted-foreground">
                {String(index + 1).padStart(2, '0')} / {project.category}
              </p>
              <h3 className="mb-0 text-display-sm md:text-display-md">
                {project.title}
              </h3>
            </div>
            <div className="flex flex-col gap-5 md:items-start">
              <p className="mb-0 max-w-2xl text-body-md text-foreground/80 md:text-body-lg">
                {project.description}
              </p>
              <Tags tags={project.technologies} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
