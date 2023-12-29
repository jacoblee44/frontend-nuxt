<template>
  <div class="flex items-center gap-2.5">
    <span class="font-bold text-sm">Edit Language</span>
    <BasicSelect v-model="language" :options="languageOptions" color="light" />
  </div>
</template>

<script setup lang="ts">
import { Language } from '~/resources/enums';
import { languageOptions } from '~/constants';

const language = ref(Language.DE);
</script>
