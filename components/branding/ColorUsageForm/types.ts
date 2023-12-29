import type { BrandingThemeColor } from '~/components/branding/ColorsForm/types';

export interface IBrandingColorUsageFormData {
  background: BrandingThemeColor;
  cta: BrandingThemeColor;
  listButton: BrandingThemeColor;
  secondaryButton: BrandingThemeColor;
  link: BrandingThemeColor;
  linkOnBackground: BrandingThemeColor;
}
