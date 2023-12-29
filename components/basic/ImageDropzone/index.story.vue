<template>
  <Story title="Basic/ImageDropzone">
    <Variant title="BasicImageDropzone">
      <BasicImageDropzone
        v-model="file"
        class="w-50 h-50"
        placeholder-text="Drop image here"
        @update:model-value="logEvent('onValueChange', { value: $event })"
        @drop="logEvent('onDrop', $event)"
      />
    </Variant>

    <Variant title="Custom preview">
      <BasicImageDropzone
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
      </BasicImageDropzone>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const file: Ref = ref('');
</script>
