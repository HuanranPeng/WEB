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

// Helper function to generate navigation items for a case study
const generateCaseStudyNavigation = (project: Project): NavItem[] => {
  const items = project.sections.map((section: Section, index: number) => {
    // VideoSection doesn't have title, so we need to handle it
    const title = 'title' in section ? section.title : undefined;
    return {
      id: `section-${index}`,
      label: title || `Section ${index + 1}`,
      href: `#section-${index}`
    };
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
      
      // Find the main content column (lg:col-span-9)
      // It could be before or after the sidebar
      let mainContent: HTMLElement | null = null;
      const children = Array.from(gridContainer.children);
      
      for (const child of children) {
        if (child !== sidebarContainer && child.classList.contains('lg:col-span-9')) {
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
      className={cn("hidden lg:block", className)}
      style={{
        maxHeight: 'calc(100vh - 8rem)',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <nav className="bg-background/80 backdrop-blur-sm rounded-lg pl-4 pr-0 py-4 mt-4">
        <div className="space-y-3">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-body-caption font-medium text-foreground mb-3">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.href, item.id)}
                        className={cn(
                          "block w-full text-left px-3 py-2 !text-body-xs transition-all duration-200 rounded-md",
                          "hover:bg-muted hover:text-foreground",
                          "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                          isActive 
                            ? "bg-muted text-foreground font-medium" 
                            : "text-muted-foreground"
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
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