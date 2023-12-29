<template>
  <Story title="Basic/PdfDropZone">
    <Variant title="BasicPdfDropZone">
      <BasicPdfDropzone
        v-model="file"
        class="w-40 h-40"
        placeholder-text="Drop PDF here"
        @update:model-value="logEvent('onValueChange', { value: $event })"
        @drop="logEvent('onDrop', $event)"
      />
    </Variant>

    <Variant title="Custom preview">
      <BasicPdfDropzone
        v-model="file"
        class="w-30 h-30"
        @update:model-value="logEvent('onValueChange', { value: $event })"
        @drop="logEvent('onDrop', $event)"
      >
        <template #preview="{ url }">
          <div
            class="w-full h-full !rounded-full bg-cover bg-center bg-no-repeat bg-center"
            :style="{ backgroundImage: `url(${url})` }"
          />
        </template>
      </BasicPdfDropzone>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const file: Ref = ref('');
</script>
