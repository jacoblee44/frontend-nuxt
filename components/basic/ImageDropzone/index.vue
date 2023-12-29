<template>
  <div class="shrink-0">
    <BasicDropzone
      class="w-full h-full"
      :options="dropzoneOptions"
      :empty="!preview"
      :rounded="rounded"
      :placeholder-icon-size="placeholderIconSize"
      :placeholder-text="placeholderText"
      :disabled="disabled"
    >
      <template v-for="name in Object.keys($slots)" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData" :url="preview"></slot>
      </template>

      <template v-if="!$slots.preview" #preview>
        <slot
          name="preview"
          :url="preview"
          :rounded="rounded"
          :removable="clearable"
          :remove="onClear"
        >
          <BasicImageDropzonePreview
            :url="preview"
            :rounded="rounded"
            :removable="clearable"
            @remove="onClear"
          >
            <template v-if="$slots.remove" #remove="slotData">
              <slot name="remove" v-bind="slotData"></slot>
            </template>
          </BasicImageDropzonePreview>
        </slot>
      </template>
    </BasicDropzone>
  </div>
</template>

<script setup lang="ts">
import type { FileRejectReason, FileUploadOptions } from 'vue3-dropzone';
import type { DropzoneBorderRadius } from '~/components/basic/Dropzone/type';

const props = defineProps({
  options: {
    type: Object as PropType<Partial<FileUploadOptions>>,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: '',
  },
  accept: {
    type: [String, Array] as PropType<string | string[]>,
    default: 'image/*',
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  rounded: {
    type: String as PropType<DropzoneBorderRadius>,
    default: 'sm',
  },
  placeholderIconSize: {
    type: Number,
    default: 80,
  },
  placeholderText: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'drop', 'multipleChange']);

const preview = computed<string | null>({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const onDrop = (acceptFiles: File[], rejectedFiles: FileRejectReason[]) => {
  emit('drop', acceptFiles, rejectedFiles);
  if (acceptFiles.length === 1) {
    const reader = new FileReader();
    reader.readAsDataURL(acceptFiles[0]);
    reader.onload = () => {
      preview.value = reader.result as string;
    };
  }
};

const dropzoneOptions = {
  ...props.options,
  accept: props.accept,
  onDrop,
};

const onClear = () => {
  preview.value = '';
};
</script>
