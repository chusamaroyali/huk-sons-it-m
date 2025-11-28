/**
 * Enterprise Color System for HUK SONS IT
 * 
 * This file contains all color constants used across the application.
 * It ensures consistency and makes it easy to update colors site-wide.
 */

export const COLORS = {
  // Primary Brand - Deep Green
  brand: {
    primary: {
      light: '#0F6B4D',
      dark: '#0B4D36',
    },
  },

  // Neutral Base - Clean Surfaces
  neutral: {
    base: {
      light: '#F8FAFC',
      dark: '#0E1116',
    },
    premium: {
      light: '#DDE1E6',
      dark: '#9BA1A7',
    },
    card: {
      light: '#FFFFFF',
      dark: '#1A1E24',
    },
    muted: {
      light: '#DDE1E6',
      dark: '#2A2F36',
    },
  },

  // Accent Colors
  accent: {
    teal: '#19B394', // AI-Centric Teal (consistent in both modes)
    blue: {
      light: '#1A73E8',
      dark: '#3C8DFF',
    },
    gold: {
      light: '#D4A936',
      dark: '#B8922E',
    },
  },

  // Alert/Error
  alert: {
    red: '#E25555', // Consistent in both modes
  },
} as const;

/**
 * Tailwind class generators for consistent color usage
 */
export const tw = {
  // Background colors
  bg: {
    base: 'bg-[#F8FAFC] dark:bg-[#0E1116]',
    card: 'bg-white dark:bg-[#1A1E24]',
    muted: 'bg-[#DDE1E6] dark:bg-[#2A2F36]',
    premium: 'bg-[#DDE1E6] dark:bg-[#9BA1A7]',
    primary: 'bg-[#0F6B4D] dark:bg-[#0B4D36]',
    accent: 'bg-[#19B394]',
    accentBlue: 'bg-[#1A73E8] dark:bg-[#3C8DFF]',
    accentGold: 'bg-[#D4A936] dark:bg-[#B8922E]',
    alert: 'bg-[#E25555]',
  },

  // Text colors
  text: {
    primary: 'text-[#0F6B4D] dark:text-[#F8FAFC]',
    secondary: 'text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70',
    muted: 'text-[#0F6B4D]/60 dark:text-[#F8FAFC]/60',
    accent: 'text-[#19B394]',
    accentBlue: 'text-[#1A73E8] dark:text-[#3C8DFF]',
    accentGold: 'text-[#D4A936] dark:text-[#B8922E]',
    alert: 'text-[#E25555]',
  },

  // Border colors
  border: {
    default: 'border-[#0F6B4D]/12 dark:border-[#9BA1A7]/15',
    muted: 'border-[#0F6B4D]/8 dark:border-[#9BA1A7]/10',
    accent: 'border-[#19B394]',
    accentLight: 'border-[#19B394]/30',
  },

  // Hover states
  hover: {
    bg: 'hover:bg-[#0F6B4D]/5 dark:hover:bg-[#F8FAFC]/5',
    bgStrong: 'hover:bg-[#0F6B4D]/10 dark:hover:bg-[#F8FAFC]/10',
    accent: 'hover:bg-[#19B394]/10',
    accentStrong: 'hover:bg-[#19B394]/20',
    text: 'hover:text-[#19B394]',
    border: 'hover:border-[#19B394]/50',
  },

  // Focus states
  focus: {
    ring: 'focus:ring-[#19B394]',
    ringOffset: 'focus:ring-offset-2',
  },
} as const;

/**
 * Helper function to get color based on theme
 */
export function getColor(
  colorPath: string,
  theme: 'light' | 'dark' = 'light'
): string {
  const paths = colorPath.split('.');
  let current: any = COLORS;

  for (const path of paths) {
    current = current[path];
    if (!current) return '';
  }

  if (typeof current === 'string') return current;
  return current[theme] || current.light || '';
}
