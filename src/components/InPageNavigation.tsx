import { useEffect, useRef, useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { projects } from '@/data/case-studies';
import { Project, Section } from '@/data/types';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

interface NavItem {
  title: string;
  items: Array<{
    id: string;
    label: string;
    href: string;
  }>;
}

interface InPageNavigationProps {
  className?: string;
  caseStudyProject?: Project;
}

// Safely extract a title from a Section union (VideoSection has no title)
const getSectionTitle = (section: Section): string | undefined => {
  if (section.navTitle?.trim()) return section.navTitle;
  if (!('title' in section)) return undefined;
  const maybeTitle = (section as { title?: unknown }).title;
  return typeof maybeTitle === 'string' ? maybeTitle : undefined;
};

// Helper function to generate navigation items for a case study
const generateCaseStudyNavigation = (project: Project): NavItem[] => {
  const items: NavItem['items'] = [];
  project.sections.forEach((section: Section, index: number) => {
    // Only show major section headers in the in-page nav
    if ((section as { headingLevel?: string }).headingLevel === 'subsection') return;
    const title = getSectionTitle(section)?.trim();
    if (!title) return; // Only include real section titles in navigation
    items.push({
      id: `section-${index}`,
      label: title,
      href: `#section-${index}`
    });
  });

  return [{
    title: project.title,
    items: items
  }];
};

// Homepage navigation
const homepageNavigation: NavItem[] = [
  {
    title: 'Case Studies',
    items: projects.map(project => ({
      id: project.id,
      label: project.title,
      href: `#${project.id}`
    }))
  }
];

export function InPageNavigation({ className, caseStudyProject }: InPageNavigationProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);
  const sectionTriggersRef = useRef<ScrollTrigger[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Memoize navigation sections to prevent unnecessary recalculations
  const navigationSections = useMemo(() => {
    return caseStudyProject 
      ? generateCaseStudyNavigation(caseStudyProject)
      : homepageNavigation;
  }, [caseStudyProject?.id]);
  
  // Memoize all items
  const allItems = useMemo(() => {
    return navigationSections.flatMap(section => section.items);
  }, [navigationSections]);
  
  // Initialize activeId with first item
  const [activeId, setActiveId] = useState<string>(allItems.length > 0 ? allItems[0].id : '');

  useEffect(() => {
    if (!navRef.current) return;

    // Wait for DOM and ScrollSmoother to be ready
    const setupTriggers = () => {
      // Find the content container (same for homepage and case study pages)
      const contentContainer = document.getElementById('content-with-nav');
      
      if (!contentContainer) {
        return false; // Return false to retry
      }

      // Clean up previous triggers
      if (pinTriggerRef.current) {
        pinTriggerRef.current.kill();
        pinTriggerRef.current = null;
      }
      sectionTriggersRef.current.forEach(trigger => trigger.kill());
      sectionTriggersRef.current = [];

      // Find the main content area to use as trigger
      // Handle both layouts: homepage (content first, nav second) and case study (nav first, content second)
      const sidebarContainer = navRef.current?.parentElement;
      const gridContainer = sidebarContainer?.parentElement;
      
      if (!gridContainer) {
        return false;
      }
      
      // Find the main content column. Case studies use a compact nav column,
      // while the homepage keeps the wider original layout.
      // It could be before or after the sidebar
      let mainContent: HTMLElement | null = null;
      const children = Array.from(gridContainer.children);
      
      for (const child of children) {
        if (
          child !== sidebarContainer &&
          (child.classList.contains('lg:col-span-9') || child.classList.contains('lg:col-span-11'))
        ) {
          mainContent = child as HTMLElement;
          break;
        }
      }
      
      if (!mainContent) {
        return false;
      }

      // Use main content as trigger - pin navigation while main content scrolls
      // This is the exact same approach used on homepage
      pinTriggerRef.current = ScrollTrigger.create({
        trigger: mainContent,
        start: "top top+=128px",
        end: "bottom bottom-=128px", // Pin until main content reaches bottom
        pin: navRef.current,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });

      // Create ScrollTrigger instances for each navigation item to track active state
      allItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const trigger = ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveId(item.id),
            onEnterBack: () => setActiveId(item.id),
          });
          sectionTriggersRef.current.push(trigger);
        }
      });

      // Set initial active state if needed
      if (allItems.length > 0) {
        const firstItemId = allItems[0].id;
        if (!activeId || !allItems.some(item => item.id === activeId)) {
          setActiveId(firstItemId);
        }
      }

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
      return true;
    };

    // Wait for ScrollSmoother to be fully initialized
    // Use multiple attempts with increasing delays (same as homepage)
    let attemptCount = 0;
    const maxAttempts = 5;
    let initTimeout: NodeJS.Timeout;
    
    const trySetup = () => {
      attemptCount++;
      const success = setupTriggers();
      
      if (!success && attemptCount < maxAttempts) {
        initTimeout = setTimeout(trySetup, 200 * attemptCount); // Increasing delay
      } else if (success) {
        // Force refresh after successful setup
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    };
    
    // Start after initial delay
    initTimeout = setTimeout(trySetup, 300);

    return () => {
      clearTimeout(initTimeout);
      if (pinTriggerRef.current) {
        pinTriggerRef.current.kill();
        pinTriggerRef.current = null;
      }
      sectionTriggersRef.current.forEach(trigger => trigger.kill());
      sectionTriggersRef.current = [];
    };
  }, [caseStudyProject?.id, allItems.length]); // Only depend on project ID and items count

  const handleNavClick = (href: string, itemId?: string) => {
    // Handle external links (Medium articles)
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    // Optimistically update active state for instant feedback
    if (itemId) {
      setActiveId(itemId);
    }

    // Use GSAP ScrollToPlugin for internal anchor links
    const element = document.querySelector(href);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: element,
          offsetY: 150 // Offset to account for fixed navigation header
        },
        ease: "power2.inOut",
        onComplete: () => {
          // Refresh ScrollTrigger after programmatic scroll
          ScrollTrigger.refresh();
        }
      });
    }
  };

  return (
    <div 
      ref={navRef} 
      className={cn(
        "group/nav relative z-30 hidden w-12 lg:block",
        className
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsExpanded(false);
        }
      }}
      style={{
        maxHeight: 'calc(100vh - 8rem)',
        overflow: 'visible'
      }}
    >
      <nav
        className={cn(
          "mt-4 max-h-[calc(100vh-8rem)] overflow-x-hidden overflow-y-auto border border-border/60 bg-background/85 shadow-sm backdrop-blur-md transition-all duration-300",
          isExpanded ? "w-[280px] rounded-2xl px-3 py-4" : "w-12 rounded-full px-0 py-3"
        )}
        aria-label="Page sections"
      >
        <div className="space-y-3">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h4
                className={cn(
                  "mb-2 truncate px-3 text-[10px] font-medium uppercase leading-none tracking-[0.14em] text-muted-foreground transition-all duration-200",
                  isExpanded ? "opacity-80" : "h-0 overflow-hidden opacity-0"
                )}
              >
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.href, item.id)}
                        title={!isExpanded ? item.label : undefined}
                        className={cn(
                          "flex w-full items-center rounded-full transition-all duration-200",
                          "hover:bg-muted hover:text-foreground",
                          "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                          isExpanded ? "gap-3 px-3 py-2 text-left" : "h-8 justify-center px-0",
                          isActive 
                            ? "bg-muted text-foreground font-medium" 
                            : "text-muted-foreground"
                        )}
                        aria-current={isActive ? 'page' : undefined}
                        aria-label={item.label}
                      >
                        <span
                          className={cn(
                            "shrink-0 rounded-full transition-all duration-200",
                            isActive ? "h-2.5 w-2.5 bg-foreground" : "h-1.5 w-1.5 bg-muted-foreground/45",
                            !isActive && "group-hover/nav:bg-muted-foreground/70"
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={cn(
                            "min-w-0 truncate !text-body-xs transition-all duration-200",
                            isExpanded ? "w-full translate-x-0 opacity-100" : "w-0 -translate-x-1 overflow-hidden opacity-0"
                          )}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
