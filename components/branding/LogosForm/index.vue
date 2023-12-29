<template>
  <div>
    <div
      v-for="control in formControls"
      :key="control.name"
      class="border-y border-shade-eb py-5 mb-2.5"
    >
      <h4 class="font-bold mb-5">{{ control.label }}</h4>
      <BasicImageDropzone
        class="w-full h-11"
        :model-value="modelValue[control.name]"
        :clearable="false"
        :placeholder-icon-size="28"
        @update:model-value="onFormValueChange(control.name, $event)"
      >
        <template #actions="{ empty, open }">
          <div v-if="!empty" class="absolute right-0" @click.stop="">
            <i
              class="new-h24-icon-edit text-accent text-[14px] cursor-pointer hover:opacity-80"
              @click="open"
            />
            <IconTrash
              class="text-accent w-4.5 mt-1 cursor-pointer hover:opacity-80"
              @click="onFormValueChange(control.name, '')"
            />
          </div>
        </template>
      </BasicImageDropzone>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBrandingLogosFormData } from './types';

const props = defineProps({
  modelValue: {
    type: Object as PropType<IBrandingLogosFormData>,
    default: () => ({
      whiteBg: '',
      brandingBg: '',
    }),
  },
});

const emit = defineEmits(['update:modelValue']);

const formControls: {
  name: keyof IBrandingLogosFormData;
  label: string;
}[] = [
  {
    name: 'whiteBg',
    label: 'Logo for white background',
  },
  {
    name: 'brandingBg',
    label: 'Logo for branding background color',
  },
];

const onFormValueChange = (name: keyof IBrandingLogosFormData, value: string | null) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [name]: value,
  });
};
</script>
