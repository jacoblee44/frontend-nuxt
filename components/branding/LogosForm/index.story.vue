<template>
  <Story title="BrandingLogosForm">
    <Variant title="BrandingLogosForm">
      <BrandingLogosForm v-model="formData" @update:model-value="logEvent('Changed', $event)" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const formData = ref({
  whiteBg: '/images/branding/logo-white.png',
  brandingBg: '/images/branding/logo-primary.png',
});
</script>
