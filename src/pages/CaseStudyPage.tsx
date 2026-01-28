import { Container } from '@/components/ui/container';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Lightbox } from '@/components/Lightbox';
import { Tags } from '@/components/Tags';
import { Section, Project } from '@/data/types';
import { useParams } from 'react-router-dom';
import { projects } from '@/data/case-studies';
import { GridLayoutSection } from '@/components/case-study';
import { HeroSection } from '@/components/case-study/HeroSection';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { getAdjacentProjects } from '@/data/navigation';
import { FlexColumnSection } from '@/components/case-study/FlexColumnSection';
import { InPageNavigation } from '@/components/InPageNavigation';
import MetaTags from '@/components/MetaTags';

export function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((p: Project) => p.id === id);
  const { prev, next } = getAdjacentProjects(id || '');
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div id="top">
      <MetaTags 
        title={project.meta?.title || `${project.title} | Huanran Peng Design`}
        description={project.meta?.description || project.description}
        canonical={`https://www.huanranpeng.com/2026/case-study/${project.id}`}
        ogImage={project.meta?.ogImage || project.heroImage}
      />
      <section className="mt-20">
        <Container className="text-foreground mb-10 md:mb-16">
     
          {/* Back to Home */}
          <Link 
            to="/#top"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full mt-20 w-fit group transition-all duration-300"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="my-4 md:my-6">
            {project.title}
          </h1>
          <div className="max-w-full md:max-w-[80%]">
            <h2 className="text-display-sm md:text-display-lg mb-6 md:mb-8 text-foreground !font-normal">
              {project.heroSubTitle}
            </h2>
          </div>
          
          {/* Role and Team under description */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-10 md:mb-16">
            <div className="flex flex-col gap-2">
              <h3 className="text-display-xs text-foreground">Role</h3>
              <p className="text-body-md text-muted-foreground">{project.role}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-display-xs text-foreground">Timeline</h3>
              <p className="text-body-md text-muted-foreground">{project.team}</p>
            </div>
          </div>
          
          {/* Hero Section */}
          <div className="py-4 md:py-20">
            <div className="w-full h-full rounded-2xl md:rounded-3xl">
              <HeroSection 
                id={project.id}
              />
            </div>
          </div>
        </Container>

        
      </section>

      {/* Project Details */}
      <Container className="relative max-w-screen-2xl">
        <div className="flex justify-center mb-10 md:mb-20">
          <Tags tags={project.technologies} justify="center" />
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8" id="content-with-nav">
          {/* Left sidebar - Navigation (sticky) */}
          <div className="lg:col-span-3">
            <InPageNavigation caseStudyProject={project} />
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="flex flex-col">
                  {project.sections.map((section: Section, index: number) => {
                const isLastSection = index === project.sections.length - 1;
                const isFirstSection = index === 0;
                switch (section.type) {
                  case 'content':
                  case 'process':
                  case 'narrative':
                    return (
                      <div key={index} id={`section-${index}`} className={cn(
                        "flex flex-col",
                        !isFirstSection && "pt-16",
                        !isLastSection && "pb-16 border-b border-border"
                      )}>
                        <h3 className="text-foreground mb-6 md:mb-8">
                          {'smallTitle' in section && section.smallTitle && (
                            <span className="block text-display-xs mb-4">{section.smallTitle}</span>
                          )}
                          {section.title}
                        </h3>
                        {section.content && (
                          <div 
                            className="text-body-lg text-foreground mb-6 md:mb-8"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                          />
                        )}
                        {'subsections' in section && section.subsections && section.subsections.map((subsection, idx) => (
                          <div key={idx} className={cn(
                            "mb-6 md:mb-8",
                            idx === 0 && section.content && "mt-0",
                            idx > 0 && "mt-8"
                          )}>
                            {subsection.title && (
                              <h4 className={cn(
                                "mb-4 md:mb-6",
                                subsection.titleVariant === 'large' ? "text-display-md md:text-display-lg lg:text-display-xl" : "text-display-sm md:text-display-md lg:text-display-lg"
                              )}>
                                {subsection.title}
                              </h4>
                            )}
                            {subsection.content && (
                              <div 
                                className="text-body-lg"
                                dangerouslySetInnerHTML={{ __html: subsection.content }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  case 'instruction':
                    return (
                      <div key={index} id={`section-${index}`} className={cn(
                        !isFirstSection && "pt-16",
                        !isLastSection && "pb-16 border-b border-border"
                      )}>
                        <GridLayoutSection
                          {...section}
                        />
                      </div>
                    );
                  case 'gallery':
                    // Handle different gallery layouts
                    if (section.layout === 'left-image' || section.layout === 'right-image') {
                      // Left image + right content or Right image + left content
                      const isLeftImage = section.layout === 'left-image';
                      const firstImage = section.images?.[0];
                      const remainingImages = section.images?.slice(1) || [];
                      const hasContent = section.content && section.content.trim().length > 0;
                      
                      return (
                        <div key={index} id={`section-${index}`} className={cn(
                          "flex flex-col",
                          !isFirstSection && "pt-16",
                          !isLastSection && "pb-16 border-b border-border"
                        )}>
                          {(section.title || section.smallTitle) && (
                            <div className="flex flex-col mb-6 md:mb-8">
                              {section.smallTitle && (
                                <span className="block text-display-xs mb-4">{section.smallTitle}</span>
                              )}
                              {section.title && (
                                <h2 className="text-foreground mb-4 md:mb-6">
                                  {section.title}
                                </h2>
                              )}
                            </div>
                          )}
                          {firstImage && (
                            <div className={cn(
                              "grid grid-cols-1 md:grid-cols-2 gap-8 items-start",
                              !isLeftImage && "md:grid-flow-dense"
                            )}>
                              {/* Image */}
                              <div className={cn(
                                "flex flex-col gap-4",
                                !isLeftImage && "md:col-start-2"
                              )}>
                                <Lightbox 
                                  images={[firstImage]} 
                                  className="w-full"
                                  containerHidden={section.containerHidden}
                                />
                              </div>
                              {/* Content or remaining images */}
                              <div className={cn(
                                "flex flex-col gap-4",
                                !isLeftImage && "md:col-start-1 md:row-start-1"
                              )}>
                                {hasContent && (
                                  <div 
                                    className="text-body-lg text-foreground"
                                    dangerouslySetInnerHTML={{ __html: section.content || '' }}
                                  />
                                )}
                                {remainingImages.length > 0 && (
                                  <Lightbox 
                                    images={remainingImages} 
                                    className="w-full"
                                    containerHidden={section.containerHidden}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    } else if (section.layout === 'two-column') {
                      // Two images side by side
                      const leftImages = section.images?.filter((_, idx) => idx % 2 === 0) || [];
                      const rightImages = section.images?.filter((_, idx) => idx % 2 === 1) || [];
                      
                      return (
                        <div key={index} id={`section-${index}`} className={cn(
                          "flex flex-col",
                          !isFirstSection && "pt-16",
                          !isLastSection && "pb-16 border-b border-border"
                        )}>
                          {(section.title || section.content || section.smallTitle) && (
                            <div className="flex flex-col mb-6 md:mb-8">
                              {section.smallTitle && (
                                <span className="block text-display-xs mb-4">{section.smallTitle}</span>
                              )}
                              {section.title && (
                                <h2 className="text-foreground mb-4 md:mb-6">
                                  {section.title}
                                </h2>
                              )}
                              {section.content && (
                                <div 
                                  className="text-body-lg text-foreground"
                                  dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                              )}
                            </div>
                          )}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                              {leftImages.map((image, idx) => (
                                <div key={idx}>
                                  <Lightbox 
                                    images={[image]} 
                                    className="w-full"
                                    containerHidden={section.containerHidden}
                                  />
                                  {image.caption && (
                                    <p className="caption mt-2 text-center">{image.caption}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-col gap-4">
                              {rightImages.map((image, idx) => (
                                <div key={idx}>
                                  <Lightbox 
                                    images={[image]} 
                                    className="w-full"
                                    containerHidden={section.containerHidden}
                                  />
                                  {image.caption && (
                                    <p className="caption mt-2 text-center">{image.caption}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      // Default: 1-col, 2-col, 3-col layouts
                      return (
                        <div key={index} id={`section-${index}`} className={cn(
                          "flex flex-col",
                          !isFirstSection && "pt-16",
                          section.layout === '3-col' && "col-span-3",
                          section.layout === '2-col' && "col-span-2",
                          section.layout === '1-col' && "col-span-1",
                          !isLastSection && "pb-16 border-b border-border"
                        )}>
                          {(section.title || section.content || section.smallTitle) && (
                            <div className="flex flex-col mb-6 md:mb-8">
                              {section.smallTitle && (
                                <span className="block text-display-xs mb-4">{section.smallTitle}</span>
                              )}
                              {section.title && (
                                <h2 className="text-foreground mb-4 md:mb-6">
                                  {section.title}
                                </h2>
                              )}
                              {section.content && (
                                <div 
                                  className="text-body-lg text-foreground"
                                  dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                              )}
                            </div>
                          )}
                          <Lightbox 
                            images={section.images} 
                            className={cn(
                              section.layout === '2-col' && "col-span-2",
                              section.layout === '1-col' && "col-span-1",
                              section.className
                            )} 
                            containerHidden={section.containerHidden}
                          />
                        </div>
                      );
                    }
                  case 'resources':
                    return (
                      <div key={index} id={`section-${index}`} className={cn(
                        !isFirstSection && "pt-16",
                        !isLastSection && "pb-16 border-b border-border"
                      )}>
                        <FlexColumnSection
                          title={section.title || ''}
                          content={section.content || ''}
                          items={[{ resources: section.resources }]}
                        />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Testimonial */}
      {project.testimonial && (
        <Container className="relative max-w-4xl my-24 md:my-32">
          <blockquote className="border-l-4 border-primary p-4 my-6 rounded-r-lg max-w-none">
            <p className="text-body-xl italic">{project.testimonial.quote}</p>
            <footer className="text-body-sm mt-2">
              — <cite className="not-italic">{project.testimonial.author}, {project.testimonial.role}</cite>
            </footer>
          </blockquote>
        </Container>
      )}

      <ProjectNavigation prevProject={prev} nextProject={next} />
      
      <Footer />
    </div>
  );
}