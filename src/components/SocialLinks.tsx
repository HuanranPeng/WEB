import { socialLinks } from "@/data/social-links"
import { ResumeIcon } from "@/components/icons/social"
import { Button } from "./ui/button"

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  const resumeHref = `${import.meta.env.BASE_URL || "/"}resume/Huanran-Peng-Resume_V3.pdf`;

  const resumeLink = {
    icon: ResumeIcon,
    href: resumeHref,
    label: "Resume",
  };

  const linkedInIndex = socialLinks.findIndex((l) => l.label === "LinkedIn");
  const links =
    linkedInIndex >= 0
      ? [
          ...socialLinks.slice(0, linkedInIndex + 1),
          resumeLink,
          ...socialLinks.slice(linkedInIndex + 1),
        ]
      : [resumeLink, ...socialLinks];

  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="ghost"
            size="icon"
            className="p-[13px]"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </Button>
        </a>
      ))}
    </div>
  );
} 