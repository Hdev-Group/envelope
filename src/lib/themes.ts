export interface Theme {
  name: string
  displayName: string
  description: string
  colors: {
    background: string
    foreground: string
    card: string
    cardForeground: string
    popover: string
    popoverForeground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    destructive: string
    border: string
    input: string
    ring: string
    sidebar: string
    sidebarForeground: string
    sidebarPrimary: string
    sidebarPrimaryForeground: string
    sidebarAccent: string
    sidebarAccentForeground: string
    sidebarBorder: string
    sidebarRing: string
  }
}

export const themes: Theme[] = [
  // Light Theme
  {
    name: "light",
    displayName: "Light",
    description: "Clean and bright interface",
    colors: {
      background: "oklch(1 0 0)",
      foreground: "oklch(0.145 0 0)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.145 0 0)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.145 0 0)",
      primary: "oklch(0.205 0 0)",
      primaryForeground: "oklch(0.985 0 0)",
      secondary: "oklch(0.97 0 0)",
      secondaryForeground: "oklch(0.205 0 0)",
      muted: "oklch(0.97 0 0)",
      mutedForeground: "oklch(0.556 0 0)",
      accent: "oklch(0.97 0 0)",
      accentForeground: "oklch(0.205 0 0)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.922 0 0)",
      input: "oklch(0.922 0 0)",
      ring: "oklch(0.708 0 0)",
      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.145 0 0)",
      sidebarPrimary: "oklch(0.205 0 0)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.97 0 0)",
      sidebarAccentForeground: "oklch(0.205 0 0)",
      sidebarBorder: "oklch(0.922 0 0)",
      sidebarRing: "oklch(0.708 0 0)",
    },
  },

  // Dark Theme
  {
    name: "dark",
    displayName: "Dark",
    description: "Deep dark theme",
    colors: {
      background: "oklch(0.08 0.005 240)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.12 0.005 240)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.12 0.005 240)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.922 0 0)",
      primaryForeground: "oklch(0.08 0.005 240)",
      secondary: "oklch(0.18 0.005 240)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.18 0.005 240)",
      mutedForeground: "oklch(0.708 0 0)",
      accent: "oklch(0.18 0.005 240)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.556 0 0)",
      sidebar: "oklch(0.12 0.005 240)",
      sidebarForeground: "oklch(0.985 0 0)",
      sidebarPrimary: "oklch(0.488 0.243 264.376)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.18 0.005 240)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.556 0 0)",
    },
  },

  // Ocean Blue Theme
  {
    name: "ocean",
    displayName: "Ocean",
    description: "Deep blue oceanic theme",
    colors: {
      background: "oklch(0.12 0.05 240)",
      foreground: "oklch(0.95 0.02 240)",
      card: "oklch(0.16 0.05 240)",
      cardForeground: "oklch(0.95 0.02 240)",
      popover: "oklch(0.16 0.05 240)",
      popoverForeground: "oklch(0.95 0.02 240)",
      primary: "oklch(0.65 0.15 220)",
      primaryForeground: "oklch(0.95 0.02 240)",
      secondary: "oklch(0.22 0.05 240)",
      secondaryForeground: "oklch(0.95 0.02 240)",
      muted: "oklch(0.22 0.05 240)",
      mutedForeground: "oklch(0.7 0.02 240)",
      accent: "oklch(0.55 0.12 200)",
      accentForeground: "oklch(0.95 0.02 240)",
      destructive: "oklch(0.65 0.2 25)",
      border: "oklch(0.3 0.05 240)",
      input: "oklch(0.25 0.05 240)",
      ring: "oklch(0.65 0.15 220)",
      sidebar: "oklch(0.14 0.05 240)",
      sidebarForeground: "oklch(0.95 0.02 240)",
      sidebarPrimary: "oklch(0.65 0.15 220)",
      sidebarPrimaryForeground: "oklch(0.95 0.02 240)",
      sidebarAccent: "oklch(0.22 0.05 240)",
      sidebarAccentForeground: "oklch(0.95 0.02 240)",
      sidebarBorder: "oklch(0.3 0.05 240)",
      sidebarRing: "oklch(0.65 0.15 220)",
    },
  },

  // Forest Green Theme
  {
    name: "forest",
    displayName: "Forest",
    description: "Natural green forest theme",
    colors: {
      background: "oklch(0.1 0.03 150)",
      foreground: "oklch(0.95 0.02 150)",
      card: "oklch(0.14 0.03 150)",
      cardForeground: "oklch(0.95 0.02 150)",
      popover: "oklch(0.14 0.03 150)",
      popoverForeground: "oklch(0.95 0.02 150)",
      primary: "oklch(0.6 0.15 140)",
      primaryForeground: "oklch(0.95 0.02 150)",
      secondary: "oklch(0.2 0.03 150)",
      secondaryForeground: "oklch(0.95 0.02 150)",
      muted: "oklch(0.2 0.03 150)",
      mutedForeground: "oklch(0.7 0.02 150)",
      accent: "oklch(0.55 0.12 120)",
      accentForeground: "oklch(0.95 0.02 150)",
      destructive: "oklch(0.65 0.2 25)",
      border: "oklch(0.28 0.03 150)",
      input: "oklch(0.24 0.03 150)",
      ring: "oklch(0.6 0.15 140)",
      sidebar: "oklch(0.12 0.03 150)",
      sidebarForeground: "oklch(0.95 0.02 150)",
      sidebarPrimary: "oklch(0.6 0.15 140)",
      sidebarPrimaryForeground: "oklch(0.95 0.02 150)",
      sidebarAccent: "oklch(0.2 0.03 150)",
      sidebarAccentForeground: "oklch(0.95 0.02 150)",
      sidebarBorder: "oklch(0.28 0.03 150)",
      sidebarRing: "oklch(0.6 0.15 140)",
    },
  },

  // Sunset Orange Theme
  {
    name: "sunset",
    displayName: "Sunset",
    description: "Warm sunset orange theme",
    colors: {
      background: "oklch(0.11 0.04 40)",
      foreground: "oklch(0.95 0.02 40)",
      card: "oklch(0.15 0.04 40)",
      cardForeground: "oklch(0.95 0.02 40)",
      popover: "oklch(0.15 0.04 40)",
      popoverForeground: "oklch(0.95 0.02 40)",
      primary: "oklch(0.65 0.18 50)",
      primaryForeground: "oklch(0.95 0.02 40)",
      secondary: "oklch(0.21 0.04 40)",
      secondaryForeground: "oklch(0.95 0.02 40)",
      muted: "oklch(0.21 0.04 40)",
      mutedForeground: "oklch(0.7 0.02 40)",
      accent: "oklch(0.6 0.15 30)",
      accentForeground: "oklch(0.95 0.02 40)",
      destructive: "oklch(0.65 0.2 25)",
      border: "oklch(0.29 0.04 40)",
      input: "oklch(0.25 0.04 40)",
      ring: "oklch(0.65 0.18 50)",
      sidebar: "oklch(0.13 0.04 40)",
      sidebarForeground: "oklch(0.95 0.02 40)",
      sidebarPrimary: "oklch(0.65 0.18 50)",
      sidebarPrimaryForeground: "oklch(0.95 0.02 40)",
      sidebarAccent: "oklch(0.21 0.04 40)",
      sidebarAccentForeground: "oklch(0.95 0.02 40)",
      sidebarBorder: "oklch(0.29 0.04 40)",
      sidebarRing: "oklch(0.65 0.18 50)",
    },
  },

  // Purple Nebula Theme
  {
    name: "nebula",
    displayName: "Nebula",
    description: "Cosmic purple nebula theme",
    colors: {
      background: "oklch(0.09 0.06 300)",
      foreground: "oklch(0.95 0.02 300)",
      card: "oklch(0.13 0.06 300)",
      cardForeground: "oklch(0.95 0.02 300)",
      popover: "oklch(0.13 0.06 300)",
      popoverForeground: "oklch(0.95 0.02 300)",
      primary: "oklch(0.7 0.2 280)",
      primaryForeground: "oklch(0.95 0.02 300)",
      secondary: "oklch(0.19 0.06 300)",
      secondaryForeground: "oklch(0.95 0.02 300)",
      muted: "oklch(0.19 0.06 300)",
      mutedForeground: "oklch(0.7 0.02 300)",
      accent: "oklch(0.6 0.18 320)",
      accentForeground: "oklch(0.95 0.02 300)",
      destructive: "oklch(0.65 0.2 25)",
      border: "oklch(0.27 0.06 300)",
      input: "oklch(0.23 0.06 300)",
      ring: "oklch(0.7 0.2 280)",
      sidebar: "oklch(0.11 0.06 300)",
      sidebarForeground: "oklch(0.95 0.02 300)",
      sidebarPrimary: "oklch(0.7 0.2 280)",
      sidebarPrimaryForeground: "oklch(0.95 0.02 300)",
      sidebarAccent: "oklch(0.19 0.06 300)",
      sidebarAccentForeground: "oklch(0.95 0.02 300)",
      sidebarBorder: "oklch(0.27 0.06 300)",
      sidebarRing: "oklch(0.7 0.2 280)",
    },
  },

  // Rose Gold Theme
  {
    name: "rose",
    displayName: "Rose Gold",
    description: "Elegant rose gold theme",
    colors: {
      background: "oklch(0.12 0.03 15)",
      foreground: "oklch(0.95 0.02 15)",
      card: "oklch(0.16 0.03 15)",
      cardForeground: "oklch(0.95 0.02 15)",
      popover: "oklch(0.16 0.03 15)",
      popoverForeground: "oklch(0.95 0.02 15)",
      primary: "oklch(0.65 0.12 25)",
      primaryForeground: "oklch(0.95 0.02 15)",
      secondary: "oklch(0.22 0.03 15)",
      secondaryForeground: "oklch(0.95 0.02 15)",
      muted: "oklch(0.22 0.03 15)",
      mutedForeground: "oklch(0.7 0.02 15)",
      accent: "oklch(0.6 0.1 350)",
      accentForeground: "oklch(0.95 0.02 15)",
      destructive: "oklch(0.65 0.2 25)",
      border: "oklch(0.3 0.03 15)",
      input: "oklch(0.26 0.03 15)",
      ring: "oklch(0.65 0.12 25)",
      sidebar: "oklch(0.14 0.03 15)",
      sidebarForeground: "oklch(0.95 0.02 15)",
      sidebarPrimary: "oklch(0.65 0.12 25)",
      sidebarPrimaryForeground: "oklch(0.95 0.02 15)",
      sidebarAccent: "oklch(0.22 0.03 15)",
      sidebarAccentForeground: "oklch(0.95 0.02 15)",
      sidebarBorder: "oklch(0.3 0.03 15)",
      sidebarRing: "oklch(0.65 0.12 25)",
    },
  },

  // Cyberpunk Theme
  {
    name: "cyberpunk",
    displayName: "Cyberpunk",
    description: "Neon cyberpunk theme",
    colors: {
      background: "oklch(0.08 0.02 180)",
      foreground: "oklch(0.9 0.1 180)",
      card: "oklch(0.12 0.02 180)",
      cardForeground: "oklch(0.9 0.1 180)",
      popover: "oklch(0.12 0.02 180)",
      popoverForeground: "oklch(0.9 0.1 180)",
      primary: "oklch(0.7 0.25 180)",
      primaryForeground: "oklch(0.08 0.02 180)",
      secondary: "oklch(0.18 0.02 180)",
      secondaryForeground: "oklch(0.9 0.1 180)",
      muted: "oklch(0.18 0.02 180)",
      mutedForeground: "oklch(0.65 0.05 180)",
      accent: "oklch(0.75 0.3 320)",
      accentForeground: "oklch(0.08 0.02 180)",
      destructive: "oklch(0.7 0.25 0)",
      border: "oklch(0.25 0.1 180)",
      input: "oklch(0.2 0.05 180)",
      ring: "oklch(0.7 0.25 180)",
      sidebar: "oklch(0.1 0.02 180)",
      sidebarForeground: "oklch(0.9 0.1 180)",
      sidebarPrimary: "oklch(0.7 0.25 180)",
      sidebarPrimaryForeground: "oklch(0.08 0.02 180)",
      sidebarAccent: "oklch(0.18 0.02 180)",
      sidebarAccentForeground: "oklch(0.9 0.1 180)",
      sidebarBorder: "oklch(0.25 0.1 180)",
      sidebarRing: "oklch(0.7 0.25 180)",
    },
  },

  // Monochrome Theme
  {
    name: "monochrome",
    displayName: "Monochrome",
    description: "Pure black and white theme",
    colors: {
      background: "oklch(0.05 0 0)",
      foreground: "oklch(0.98 0 0)",
      card: "oklch(0.08 0 0)",
      cardForeground: "oklch(0.98 0 0)",
      popover: "oklch(0.08 0 0)",
      popoverForeground: "oklch(0.98 0 0)",
      primary: "oklch(0.98 0 0)",
      primaryForeground: "oklch(0.05 0 0)",
      secondary: "oklch(0.15 0 0)",
      secondaryForeground: "oklch(0.98 0 0)",
      muted: "oklch(0.15 0 0)",
      mutedForeground: "oklch(0.7 0 0)",
      accent: "oklch(0.25 0 0)",
      accentForeground: "oklch(0.98 0 0)",
      destructive: "oklch(0.6 0 0)",
      border: "oklch(0.2 0 0)",
      input: "oklch(0.18 0 0)",
      ring: "oklch(0.5 0 0)",
      sidebar: "oklch(0.07 0 0)",
      sidebarForeground: "oklch(0.98 0 0)",
      sidebarPrimary: "oklch(0.98 0 0)",
      sidebarPrimaryForeground: "oklch(0.05 0 0)",
      sidebarAccent: "oklch(0.15 0 0)",
      sidebarAccentForeground: "oklch(0.98 0 0)",
      sidebarBorder: "oklch(0.2 0 0)",
      sidebarRing: "oklch(0.5 0 0)",
    },
  },

  // Warm Cream Theme
  {
    name: "cream",
    displayName: "Warm Cream",
    description: "Soft warm cream theme",
    colors: {
      background: "oklch(0.97 0.02 60)",
      foreground: "oklch(0.2 0.02 60)",
      card: "oklch(0.99 0.01 60)",
      cardForeground: "oklch(0.2 0.02 60)",
      popover: "oklch(0.99 0.01 60)",
      popoverForeground: "oklch(0.2 0.02 60)",
      primary: "oklch(0.45 0.08 40)",
      primaryForeground: "oklch(0.97 0.02 60)",
      secondary: "oklch(0.92 0.02 60)",
      secondaryForeground: "oklch(0.2 0.02 60)",
      muted: "oklch(0.92 0.02 60)",
      mutedForeground: "oklch(0.5 0.02 60)",
      accent: "oklch(0.85 0.04 50)",
      accentForeground: "oklch(0.2 0.02 60)",
      destructive: "oklch(0.6 0.15 25)",
      border: "oklch(0.88 0.02 60)",
      input: "oklch(0.88 0.02 60)",
      ring: "oklch(0.6 0.08 40)",
      sidebar: "oklch(0.95 0.02 60)",
      sidebarForeground: "oklch(0.2 0.02 60)",
      sidebarPrimary: "oklch(0.45 0.08 40)",
      sidebarPrimaryForeground: "oklch(0.97 0.02 60)",
      sidebarAccent: "oklch(0.92 0.02 60)",
      sidebarAccentForeground: "oklch(0.2 0.02 60)",
      sidebarBorder: "oklch(0.88 0.02 60)",
      sidebarRing: "oklch(0.6 0.08 40)",
    },
  },
]

export function applyTheme(theme: Theme) {
  const root = document.documentElement

  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVar = key.replace(/([A-Z])/g, "-$1").toLowerCase()
    root.style.setProperty(`--${cssVar}`, value)
  })
}

export function getTheme(name: string): Theme | undefined {
  return themes.find((theme) => theme.name === name)
}
