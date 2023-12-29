<template>
  <Story title="Basic/Dropzone">
    <Variant title="Empty State">
      <BasicDropzone class="w-50 h-50" :options="options" placeholder-text="Drop file here" />
    </Variant>

    <Variant title="Filled State">
      <BasicDropzone class="w-50 h-50" :options="options" :empty="false">
        <template #preview>
          <div
            class="w-full h-full bg-contain bg-center bg-no-repeat"
            :style="{ backgroundImage: 'url(/images/avatar-1.png)' }"
          />
        </template>
        <template #actions>
          <div
            class="absolute top-1 right-1 z-[1] w-6 h-6 hidden group-hover:flex items-center justify-center bg-white cursor-pointer hover:opacity-80"
            @click.stop="logEvent('onRemove', {})"
          >
            <IconTrash class="text-accent w-4 h-4" />
          </div>
        </template>
      </BasicDropzone>
    </Variant>

    <Variant title="Full width">
      <BasicDropzone class="h-50" :options="options" full-width />
    </Variant>

    <Variant title="Disabled">
      <BasicDropzone class="w-50 h-50" :options="options" disabled />
    </Variant>

    <Variant title="PDF Mode">
      <BasicDropzone
        class="w-29.5 h-29.5"
        :options="options"
        mode="pdf"
        placeholder-icon-size="50"
        placeholder-text="Drop PDF here"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { type FileUploadOptions } from 'vue3-dropzone';
import { logEvent } from 'histoire/client';

const options: Partial<FileUploadOptions> = {
  onDrop(acceptedFiles, rejectedFiles) {
    logEvent('onDrop', { acceptedFiles, rejectedFiles });
  },
};
</script>
