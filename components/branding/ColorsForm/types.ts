export interface IBrandingColorsFormData {
  accent: string;
  darkAccent: string;
  primary: string;
  secondary?: string | null;
  dark: string;
}

export type BrandingThemeColor = keyof IBrandingColorsFormData;
