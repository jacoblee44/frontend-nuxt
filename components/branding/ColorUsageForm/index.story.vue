<template>
  <Story title="BrandingColorUsageForm">
    <Variant title="BrandingColorUsageForm">
      <BrandingColorUsageForm
        v-model="formData"
        :colors="colors"
        @update:model-value="logEvent('Changed', $event)"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const colors = {
  accent: '#FEDD38',
  darkAccent: '#AA9428',
  primary: '#A1141A',
  secondary: null,
  dark: '#373737',
};

const formData = ref({
  background: 'primary',
  cta: 'accent',
  listButton: 'primary',
  secondaryButton: 'dark',
  link: 'accent',
  linkOnBackground: 'dark',
});
</script>
