<template>
  <div class="flex">
    <AppSubSidebar title="Branding">
      <template #subTitle>
        <BasicTabs :active-tab="activeTab" :tabs="brandingTabs" @change-tab="activeTab = $event" />
      </template>

      <BrandingColorsForm
        v-if="activeTab === BrandingTab.Colors"
        v-model="colorsFormData"
        class="mt-7.5"
      />
      <BrandingColorUsageForm
        v-if="activeTab === BrandingTab.ColorUsage"
        v-model="colorUsageFormData"
        class="border-t border-shade-eb py-5 mt-7.5"
        :colors="colorsFormData"
      />
      <BrandingLogosForm
        v-if="activeTab === BrandingTab.Logos"
        v-model="logosFormData"
        class="mt-7.5"
      />

      <template #footer>
        <div class="grid grid-cols-2 gap-5 border-t border-shade-eb p-5">
          <BasicButton variant="outline">Discard Changes</BasicButton>
          <BasicButton>Publish Changes</BasicButton>
        </div>
      </template>
    </AppSubSidebar>

    <div class="flex-1 flex flex-col h-screen">
      <AppHeader>
        <h2 class="font-bold">Preview of Site Colors</h2>
        <template #tabs>
          <BasicTabs
            :active-tab="activePreview"
            :tabs="previewTabs"
            @change-tab="activePreview = $event"
          />
        </template>
      </AppHeader>

      <div class="flex-1 overflow-auto">
        <div class="p-7.5">Site Preview</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BrandingPreviewTab, BrandingTab } from './types';
import type { ITabItem } from '~/components/basic/Tabs/types';

const route = useRoute();

const brandingTabs: ITabItem[] = [
  { label: 'Colors', value: BrandingTab.Colors },
  { label: 'Color Usage', value: BrandingTab.ColorUsage },
  { label: 'Logos', value: BrandingTab.Logos },
];

const previewTabs: ITabItem[] = [
  { label: 'Home/Discover', value: BrandingPreviewTab.Home },
  { label: 'Action List', value: BrandingPreviewTab.ActionList },
  { label: 'Action Detail', value: BrandingPreviewTab.ActionDetail },
  { label: 'Product Detail', value: BrandingPreviewTab.ProductDetail },
];

const formData = ref({
  colors: {
    accent: '#FEDD38',
    darkAccent: '#AA9428',
    primary: '#A1141A',
    secondary: null,
    dark: '#373737',
  },
  colorUsage: {
    background: 'primary',
    cta: 'accent',
    listButton: 'primary',
    secondaryButton: 'dark',
    link: 'accent',
    linkOnBackground: 'dark',
  },
  logos: {
    whiteBg: '/images/branding/logo-white.png',
    brandingBg: '/images/branding/logo-primary.png',
  },
});

const activeTab = computed({
  get: () => {
    const tab = route.query?.tab as BrandingTab;
    if (Object.values(BrandingTab).includes(tab)) {
      return tab;
    }
    return BrandingTab.Colors;
  },
  set: (value) => {
    navigateTo({
      path: '/site-branding',
      query: {
        tab: value,
        preview: activePreview.value,
      },
      replace: true,
    });
  },
});

const activePreview = computed({
  get: () => {
    const preview = route.query?.preview as BrandingPreviewTab;
    if (Object.values(BrandingPreviewTab).includes(preview)) {
      return preview;
    }
    return BrandingPreviewTab.Home;
  },
  set: (value) => {
    navigateTo({
      path: '/site-branding',
      query: {
        tab: activeTab.value,
        preview: value,
      },
      replace: true,
    });
  },
});

const colorsFormData = computed({
  get: () => formData.value.colors,
  set: (value) => {
    formData.value.colors = value;
  },
});
const colorUsageFormData = computed({
  get: () => formData.value.colorUsage,
  set: (value) => {
    formData.value.colorUsage = value;
  },
});
const logosFormData = computed({
  get: () => formData.value.logos,
  set: (value) => {
    formData.value.logos = value;
  },
});
</script>
