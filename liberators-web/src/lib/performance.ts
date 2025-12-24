/**
 * Performance utilities for optimizing animations and rendering
 */

// Detect if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Detect if device is low-end based on hardware concurrency
export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4;
  return cores < 4 || memory < 4;
};

// Get optimal animation config based on device capabilities
export const getAnimationConfig = () => {
  const reducedMotion = prefersReducedMotion();
  const lowEnd = isLowEndDevice();

  return {
    enableComplexAnimations: !reducedMotion && !lowEnd,
    enableParticles: !reducedMotion && !lowEnd,
    animationDuration: reducedMotion ? 0.1 : lowEnd ? 0.3 : 0.6,
    particleCount: lowEnd ? 10 : 50,
    enableBlur: !lowEnd,
    enableShadows: !lowEnd,
  };
};

// Debounce for scroll events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Check if element is in viewport (for lazy animations)
export const isInViewport = (element: HTMLElement): boolean => {
  if (typeof window === 'undefined') return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch preload multiple images
export const preloadImages = async (srcs: string[]): Promise<void> => {
  await Promise.all(srcs.map(src => preloadImage(src)));
};


