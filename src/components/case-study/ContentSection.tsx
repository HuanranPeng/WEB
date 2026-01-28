import { cn } from '@/lib/utils';
import { ContentSection as ContentSectionType, Subsection } from '@/data/types';

export function ContentSection({ title, content, subsections = [], layout = '2-col' }: ContentSectionType) {
  return (
    <div className={cn(
      "flex flex-col",
      layout === '3-col' && "col-span-3",
      layout === '2-col' && "col-span-2",
      layout === '1-col' && "col-span-1"
    )}>
      <div className="flex flex-col gap-4 md:gap-6 mb-6 md:mb-8">
        <h3 className="text-display-md text-foreground mb-4 md:mb-6">{title}</h3>
        <p className="text-body-lg text-foreground">{content}</p>
      </div>
      {subsections && subsections.length > 0 && (
        <div className="flex flex-col">
          {subsections.map((subsection: Subsection, index: number) => (
            <div key={index} className={cn(
              "flex flex-col gap-2",
              index > 0 && "mt-6 md:mt-8"
            )}>
              {subsection.title && (
                <h4 className="text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-4">{subsection.title}</h4>
              )}
              {subsection.content && (
                <p className="text-body-lg text-foreground">{subsection.content}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 