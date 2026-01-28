import { cn } from '@/lib/utils';
import { ContentSection as ContentSectionType, Subsection } from '@/data/types';

export function ContentSection({ title, content, subsections = [], layout = '2-col' }: ContentSectionType) {
  return (
    <div className={cn(
      "flex flex-col",
      layout === '4-col' && "col-span-4",
      layout === '3-col' && "col-span-3",
      layout === '2-col' && "col-span-2",
      layout === '1-col' && "col-span-1"
    )}>
      <div className="flex flex-col gap-4 md:gap-6 mb-6 md:mb-8">
        {title && (
          <h3 className="text-display-md text-foreground mb-4 md:mb-6">{title}</h3>
        )}
        <div
          className="text-body-lg text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[0.5px] [&_img]:w-full [&_img]:h-auto [&_img]:rounded-2xl [&_img]:my-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      {subsections && subsections.length > 0 && (
        layout === '4-col' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {subsections.map((subsection: Subsection, index: number) => (
              <div key={index} className="flex flex-col gap-3">
                {subsection.title && (
                  <h4 className="text-display-xs text-foreground text-center">
                    {subsection.title}
                  </h4>
                )}
                {subsection.content && typeof subsection.content === 'string' && (
                  <div
                    className="text-body-md text-foreground text-left [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[0.5px]"
                    dangerouslySetInnerHTML={{ __html: subsection.content }}
                  />
                )}
                {subsection.content && typeof subsection.content !== 'string' && (
                  <div className="text-body-md text-foreground text-left">
                    {subsection.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col">
            {subsections.map((subsection: Subsection, index: number) => (
              <div key={index} className={cn(
                "flex flex-col gap-2",
                index > 0 && "mt-6 md:mt-8"
              )}>
                {subsection.title && (
                  <h4 className="text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-4">{subsection.title}</h4>
                )}
                {subsection.content && typeof subsection.content === 'string' && (
                  <div
                    className="text-body-lg text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[0.5px]"
                    dangerouslySetInnerHTML={{ __html: subsection.content }}
                  />
                )}
                {subsection.content && typeof subsection.content !== 'string' && (
                  <div className="text-body-lg text-foreground">
                    {subsection.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
} 