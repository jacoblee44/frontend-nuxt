<template>
  <Story title="App/LanguageSelect">
    <Variant title="Sidebar Language Select">
      <div class="bg-primary p-10 pt-30">
        <div class="flex items-center">
          <AppLanguageSelect v-model="language" />
        </div>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import AppLanguageSelect from './index.vue';
import { Language } from '~/resources/enums';

const language = ref<Language>(Language.EN);
</script>
