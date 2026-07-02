const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/huanran-peng-00a602aa/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:huanranpeng@gmail.com",
  },
  {
    label: "Resume",
    href: `${import.meta.env.BASE_URL || "/"}resume/Huanran-Peng-Resume_V3.pdf`,
    external: true,
  },
];

export function FixedContactLinks() {
  return (
    <nav
      aria-label="Contact links"
      className="fixed bottom-8 right-8 z-40 hidden items-center gap-8 md:flex lg:bottom-10 lg:right-12"
    >
      {contactLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="text-[12px] font-semibold uppercase leading-none tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background lg:text-sm"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
