import { useTheme } from './ThemeProvider';
import { cn } from "@/lib/utils";

interface LottieLogoProps {
  className?: string;
}

export function LottieLogo({ className }: LottieLogoProps) {
  const { theme } = useTheme();

  // Theme-aware static logo version
  const logoSrc = theme === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png';
  
  return (
    <div className={cn("cursor-pointer flex items-center", className)}>
      <img 
        src={logoSrc} 
        alt="Huanran Peng" 
        className="h-8 w-auto transition-opacity duration-200 hover:opacity-80"
      />
    </div>
  );
}