<template>
  <div>
    <AppLanguageSelect v-model="selectedLanguage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, setLocale } = useI18n();
const selectedLanguage = ref(locale.value);

watch(selectedLanguage, (language) => {
  setLocale(language);
});
</script>
