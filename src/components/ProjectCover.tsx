import { Project } from "@/data/types";
import { cn, getImagePath } from "@/lib/utils";

type CoverConfig = {
  keyword: string;
  headline: string;
  signal: string;
  accent: string;
  accentSoft: string;
  artifactImage?: string;
  artifactFit?: "cover" | "contain";
  artifactPosition?: string;
};

const coverConfigs: Record<string, CoverConfig> = {
  "next-gen-vati": {
    keyword: "Learning Path",
    headline: "Guided prep paths for students and educators",
    signal: "Learning workflow / intervention context",
    accent: "#ec3f6d",
    accentSoft: "rgba(236, 63, 109, 0.18)",
    artifactImage: "/images/next-gen-vati/figma-student-path.png",
    artifactFit: "contain",
  },
  "medhub-work-hours": {
    keyword: "Compliance",
    headline: "Compliance reporting as an action workflow",
    signal: "Operational data / drill-down decisions",
    accent: "#5bb8ff",
    accentSoft: "rgba(91, 184, 255, 0.16)",
    artifactImage: "/images/medhub-work-hours/figma-program-drilldown.png",
    artifactFit: "cover",
    artifactPosition: "left top",
  },
  "energysage-design-system": {
    keyword: "System",
    headline: "A shared product language across platforms",
    signal: "Tokens / components / governance",
    accent: "#7bd88f",
    accentSoft: "rgba(123, 216, 143, 0.16)",
    artifactImage: "/images/energysage-design-system/components.png",
    artifactFit: "cover",
    artifactPosition: "center top",
  },
  "heat-pump-marketplace": {
    keyword: "Marketplace",
    headline: "A clearer path from interest to quote",
    signal: "Consumer marketplace / service journey",
    accent: "#f4b860",
    accentSoft: "rgba(244, 184, 96, 0.16)",
    artifactImage: "/images/heat-pump-marketplace/final-marketplace.png",
    artifactFit: "cover",
    artifactPosition: "center 18%",
  },
  "energysage-redesign": {
    keyword: "Redesign",
    headline: "Modernizing home electrification education",
    signal: "IA / content strategy / conversion",
    accent: "#9d8cff",
    accentSoft: "rgba(157, 140, 255, 0.17)",
    artifactImage: "/images/energysage-redesign/hero-image.png",
    artifactFit: "cover",
    artifactPosition: "center top",
  },
  "ai-chatbot-design": {
    keyword: "AI Chat",
    headline: "Trustworthy support through conversation",
    signal: "AI interaction / healthcare ethics",
    accent: "#ff7ab6",
    accentSoft: "rgba(255, 122, 182, 0.16)",
    artifactImage: "/images/ai-chatbot-design/final-interface.png",
    artifactFit: "contain",
  },
  "locatify-ar-navigation": {
    keyword: "AR Navigation",
    headline: "AR wayfinding for complex campus spaces",
    signal: "Spatial UX / navigation feedback",
    accent: "#56d6c9",
    accentSoft: "rgba(86, 214, 201, 0.16)",
    artifactImage: "/images/locatify-ar-navigation/final-solution.png",
    artifactFit: "contain",
  },
  "space-project": {
    keyword: "Community",
    headline: "Peer support with data and community",
    signal: "Mental health access / social support",
    accent: "#8aa4ff",
    accentSoft: "rgba(138, 164, 255, 0.17)",
    artifactImage: "/images/space-project/hero-image.png",
    artifactFit: "cover",
    artifactPosition: "center top",
  },
};

const fallbackCover: CoverConfig = {
  keyword: "Case Study",
  headline: "A focused product design case study",
  signal: "Problem framing / design decisions",
  accent: "#ffffff",
  accentSoft: "rgba(255, 255, 255, 0.12)",
};

interface ProjectCoverProps {
  project: Project;
  className?: string;
}

export function ProjectCover({ project, className }: ProjectCoverProps) {
  const config = coverConfigs[project.id] ?? fallbackCover;

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-[#050505] shadow-[0_18px_54px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:border-foreground/25 group-hover:shadow-[0_22px_70px_rgba(0,0,0,0.2)]",
        className
      )}
      style={{
        background:
          `radial-gradient(circle at 75% 25%, ${config.accentSoft}, transparent 34%), ` +
          "linear-gradient(135deg, #101010 0%, #050505 54%, #121212 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.08),transparent_34%)]" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl md:h-96 md:w-96"
        style={{ backgroundColor: config.accentSoft }}
      />

      <div className="relative z-10 grid h-full grid-rows-[auto_1fr] gap-5 p-6 text-white sm:gap-7 sm:p-8 md:gap-8 md:p-10 lg:p-12">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <h4 className="mb-0 max-w-[16ch] text-[1.625rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[2.25rem] md:max-w-[18ch] md:text-[3.25rem] lg:text-[4.1rem]">
              {project.title}
            </h4>
            <p className="mb-0 mt-3 text-sm leading-snug text-white/48 md:text-base">
              {project.category} / {config.keyword}
            </p>
          </div>
        </div>

        <div className="grid min-h-0 items-end gap-5 sm:gap-7 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:items-center md:gap-8">
          <div className="max-w-sm self-end">
            <p className="mb-0 text-base font-medium leading-tight text-white sm:text-body-lg md:mb-3 md:text-display-sm">
              {config.headline}
            </p>
            <p className="mb-0 hidden text-sm leading-relaxed text-white/45 md:block md:text-base">
              {config.signal}
            </p>
          </div>

          <div className="min-h-0">
            <DesignArtifact config={config} project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignArtifact({ config, project }: { config: CoverConfig; project: Project }) {
  const artifactImage = config.artifactImage ?? project.heroImage ?? project.imageUrl;
  const objectFit = config.artifactFit ?? "cover";

  return (
    <div className="relative mx-auto h-32 max-w-xl sm:h-40 md:h-80">
      <div className="absolute inset-0 rounded-[1.6rem] border border-white/12 bg-white/[0.055] p-2 shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur md:rounded-[2rem] md:p-3">
        <div className="relative h-full overflow-hidden rounded-[1.1rem] bg-black/40 md:rounded-[1.5rem]">
          <img
            src={getImagePath(artifactImage)}
            alt={`${project.title} interface preview`}
            className={cn(
              "h-full w-full opacity-85 saturate-[0.9]",
              objectFit === "contain" ? "object-contain p-4 md:p-6" : "object-cover"
            )}
            style={{ objectPosition: config.artifactPosition ?? "center" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>
      </div>
    </div>
  );
}
