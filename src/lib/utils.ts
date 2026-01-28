import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Manages scrollbar width to prevent content shift
 * Call this when opening/closing components that affect the scrollbar
 */
export function manageScrollbarWidth(isOpen: boolean) {
  if (typeof window === 'undefined') return;

  if (isOpen) {
    // Calculate and set scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    document.body.classList.add('overflow-hidden');
  } else {
    // Reset scrollbar width
    document.documentElement.style.setProperty('--scrollbar-width', '0px');
    document.body.classList.remove('overflow-hidden');
  }
}

/**
 * Get the correct image path with base URL
 * Handles both absolute paths (starting with /) and relative paths
 */
export function getImagePath(path: string): string {
  if (!path) return path;
  
  // If path is already a full URL, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Get base URL from Vite (includes /2026/ in production)
  const base = import.meta.env.BASE_URL || '/';
  
  // If path starts with /, it's an absolute path - prepend base
  if (path.startsWith('/')) {
    // Remove leading slash, then add base and path
    return `${base}${path.slice(1)}`;
  }
  
  // Relative path - just prepend base
  return `${base}${path}`;
}
