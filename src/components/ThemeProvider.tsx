import { createContext, useContext, useEffect, useState } from 'react';
import { themeScript } from '@/lib/theme-script';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize theme on mount
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Add theme script to head
    const script = document.createElement('script');
    script.innerHTML = themeScript;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Update theme class and localStorage
    const root = document.documentElement;
    const prevTheme = theme === 'dark' ? 'light' : 'dark';
    
    root.classList.remove(prevTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);

    // Update color scheme meta tag
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', theme);
    }

    // Keep the browser tab icon in sync with the app theme
    const base = import.meta.env.BASE_URL || '/';
    const faviconHref = `${base}images/logo-${theme}.png`;

    const upsertLink = (selector: string, attrs: Record<string, string>) => {
      let link = document.querySelector<HTMLLinkElement>(selector);
      if (!link) {
        link = document.createElement('link');
        document.head.appendChild(link);
      }
      Object.entries(attrs).forEach(([key, value]) => {
        link!.setAttribute(key, value);
      });
    };

    // Use a dedicated dynamic icon link so it always wins precedence
    upsertLink('link[rel="icon"][data-theme-favicon="true"]', {
      rel: 'icon',
      type: 'image/png',
      href: faviconHref,
      'data-theme-favicon': 'true',
    });

    // Helpful for some browsers that still look for "shortcut icon"
    upsertLink('link[rel="shortcut icon"][data-theme-favicon="true"]', {
      rel: 'shortcut icon',
      type: 'image/png',
      href: faviconHref,
      'data-theme-favicon': 'true',
    });

    // Keep Apple touch icon consistent too
    upsertLink('link[rel="apple-touch-icon"][data-theme-favicon="true"]', {
      rel: 'apple-touch-icon',
      href: faviconHref,
      'data-theme-favicon': 'true',
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 