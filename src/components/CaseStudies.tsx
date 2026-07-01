import { Link } from "react-router-dom";
import { projects } from "@/data/case-studies";
import { useEffect, useRef } from "react";
import { Tags } from "./Tags";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCover } from "./ProjectCover";

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

  return (
    <div className="flex flex-grow flex-col">
      <div className="mb-8 flex flex-col gap-3 md:mb-12 md:max-w-3xl">
        <p className="case-study-eyebrow mb-0 text-muted-foreground">Case studies</p>
        <h2 className="mb-0 text-display-md md:text-display-lg lg:text-display-2xl">
          Work that turns complexity into usable systems
        </h2>
        <p className="mb-0 max-w-2xl text-body-md text-muted-foreground md:text-body-lg">
          A focused set of product design projects across healthcare, education, and energy.
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
              <div className="h-[420px] w-full sm:h-[460px] md:h-[520px] lg:h-[640px]">
                <ProjectCover project={project} />
              </div>
            </Link>
          </div>

          <div className="mt-5 flex md:mt-6">
            <Tags tags={project.technologies} mobileJustify="start" />
          </div>
        </div>
      ))}
    </div>
  );
}
