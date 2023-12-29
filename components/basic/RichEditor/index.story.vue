<template>
  <Story title="Basic/RichEditor">
    <Variant title="RichEditor">
      <div class="flex justify-center p-10">
        <BasicRichEditor v-model="content" />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicRichEditor from './index.vue';
const content = ref('');
</script>
