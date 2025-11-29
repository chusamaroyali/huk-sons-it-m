/**
 * Enterprise Color System for HUK SONS IT
 * 
 * This file contains all color constants used across the application.
 * It ensures consistency and makes it easy to update colors site-wide.
 * 
 * UPDATED: Now maps exclusively to CSS variables for the new design system.
 */

export const COLORS = {
  // Brand Colors
  brand: {
    primary: 'var(--brand-primary)',   // Graphite
    accent: 'var(--brand-accent)',     // Eucalyptus
    signature: 'var(--brand-signature)', // Bordeaux
  },

  // Neutral Colors
  neutral: {
    bg: 'var(--bg)',
    bgAlt: 'var(--bg-alt)',
    card: 'var(--card-bg)',
    borderSubtle: 'var(--border-subtle)',
    borderStrong: 'var(--border-strong)',
    textHeading: 'var(--text-heading)',
    textBody: 'var(--text-body)',
    textMuted: 'var(--text-muted)',
  },

  // Semantic Colors
  semantic: {
    success: 'var(--success)',
    info: 'var(--info)',
    warning: 'var(--warning)',
    error: 'var(--error)',
  },
} as const;

/**
 * Tailwind class generators for consistent color usage
 */
export const tw = {
  // Background colors
  bg: {
    base: 'bg-[var(--bg)]',
    alt: 'bg-[var(--bg-alt)]',
    card: 'bg-[var(--card-bg)]',
    primary: 'bg-[var(--brand-primary)]',
    accent: 'bg-[var(--brand-accent)]',
    signature: 'bg-[var(--brand-signature)]',
  },

  // Text colors
  text: {
    heading: 'text-[var(--text-heading)]',
    body: 'text-[var(--text-body)]',
    muted: 'text-[var(--text-muted)]',
    primary: 'text-[var(--brand-primary)]',
    accent: 'text-[var(--brand-accent)]',
  },

  // Border colors
  border: {
    subtle: 'border-[var(--border-subtle)]',
    strong: 'border-[var(--border-strong)]',
    primary: 'border-[var(--brand-primary)]',
  },

  // Hover states
  hover: {
    primary: 'hover:bg-[var(--brand-primary)]/90',
    accent: 'hover:bg-[var(--brand-accent)]/90',
    textPrimary: 'hover:text-[var(--brand-primary)]',
  },

  // Focus states
  focus: {
    ring: 'focus:ring-[var(--brand-accent)]',
    ringOffset: 'focus:ring-offset-2',
  },
} as const;

/**
 * Helper function to get color based on theme
 * Note: With CSS variables, theme handling is automatic.
 * This function is kept for compatibility but returns the CSS variable.
 */
export function getColor(
  colorPath: string,
  _theme: 'light' | 'dark' = 'light'
): string {
  const paths = colorPath.split('.');
  let current: any = COLORS;

  for (const path of paths) {
    current = current[path];
    if (!current) return '';
  }

  if (typeof current === 'string') return current;
  return '';
}

