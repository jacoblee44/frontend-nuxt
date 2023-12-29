<template>
  <Story title="BrandingColorsForm">
    <Variant title="BrandingColorsForm">
      <BrandingColorsForm v-model="formData" @update:model-value="logEvent('Changed', $event)" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const formData = ref({
  accent: '#FEDD38',
  darkAccent: '#AA9428',
  primary: '#A1141A',
  secondary: null,
  dark: '#373737',
});
</script>
