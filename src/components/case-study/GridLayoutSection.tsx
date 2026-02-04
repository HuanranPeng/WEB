import { ExternalLink } from 'lucide-react';
import { Banner } from '@/components/ui/banner';
import { Lightbox } from "@/components/Lightbox";
import { cn } from '@/lib/utils';
import { GridLayoutSection as GridLayoutSectionType, InstructionSection as InstructionSectionType, Subsection } from '@/data/types';

export interface GridLayoutSectionProps extends Omit<GridLayoutSectionType | InstructionSectionType, 'type'> {
  type?: 'grid-layout' | 'instruction';
  items?: Subsection[];
  subsections?: Subsection[];
  className?: string;
  itemsLayout?: 'grid' | 'nowrap';
}

export function GridLayoutSection({ 
  title, 
  content, 
  image, 
  link,
  layout,
  headingLevel,
  variant = 'default',
  itemsLayout = 'grid',
  className,
  items = [],
  subsections = []
}: GridLayoutSectionProps) {
  // Use subsections if available (for instruction type), otherwise use items
  const sectionItems = subsections.length > 0 ? subsections : items;
  const itemsGridClass =
    layout === '1-col'
      ? 'grid-cols-1'
      : layout === '2-col'
        ? 'grid-cols-1 md:grid-cols-2'
        : layout === '3-col'
          ? 'grid-cols-1 md:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-2';
  const hasMedia = Boolean(image || sectionItems?.[0]?.videoUrl);
  const TitleTag = headingLevel === 'subsection' ? 'h4' : 'h3';

  if (variant !== 'default' && !image && !sectionItems?.length) {
    return (
      <section className={cn("flex flex-col gap-8", className)}>
        <Banner variant={variant}>
          {content}
        </Banner>
      </section>
    );
  }

  return (
    <section className={cn("flex flex-col", className)}>
      <div className={cn(
        "grid grid-cols-1 gap-8 items-start",
        hasMedia && "md:grid-cols-2"
      )}>
        {/* Text content */}
        <div className="flex flex-col gap-4 md:gap-6">
          {title && (
            <TitleTag className="text-foreground mb-4 md:mb-6">
              {title}
            </TitleTag>
          )}
          {variant !== 'default' ? (
            <Banner variant={variant}>{content}</Banner>
          ) : (
            <div 
              className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[0.5px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {link && (
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-lg font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 underline decoration-[1px] underline-offset-4"
            >
              {link.text}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Image or Video */}
        {(image || sectionItems?.[0]?.videoUrl) && (
          <div className="flex flex-col gap-4">
            {image ? (
              <Lightbox 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-auto rounded-lg"
              />
            ) : sectionItems?.[0]?.videoUrl && (
              <Lightbox 
                images={[{
                  url: sectionItems[0].videoUrl,
                  alt: "Video content",
                  videoUrl: sectionItems[0].videoUrl,
                  aspectRatio: sectionItems[0].aspectRatio
                }]}
              />
            )}
            {(image?.caption || sectionItems?.[0]?.caption) && (
              <p className="text-body-sm text-muted-foreground mt-2 text-center">
                {image?.caption || sectionItems[0].caption}
              </p>
            )}
          </div>
        )}
      </div>

      {sectionItems && sectionItems.length > 0 && !sectionItems[0].videoUrl && (
        <div className={cn(
          itemsLayout === 'nowrap'
            ? "flex flex-nowrap gap-8 overflow-x-auto pb-2"
            : "grid gap-8",
          itemsLayout === 'grid' && itemsGridClass
        )}>
          {sectionItems.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                `flex flex-col gap-2 p-6 rounded-2xl border ${
                variant === 'warning' ? 'bg-warning/10 border-warning' : 'bg-muted/10 border-border'
              }`,
                itemsLayout === 'nowrap' && "shrink-0 w-[280px] md:w-[360px]"
              )}
            >
              {item.title && (
                <h4 className="text-display-sm md:text-display-md lg:text-display-lg text-foreground">
                  {item.title}
                </h4>
              )}
              {item.content && (
                typeof item.content === 'string' ? (
                  <div
                    className="text-body-lg text-foreground"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                ) : (
                  <div className="text-body-lg text-foreground">{item.content}</div>
                )
              )}
              {item.caption && (
                <p className="text-body-md text-muted-foreground !mb-0">
                  {item.caption}
                </p>
              )}
              {item.image?.url && (
                <img 
                  src={item.image.url} 
                  alt={item.title || 'Section image'} 
                  className="w-full h-auto rounded-2xl"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
} 