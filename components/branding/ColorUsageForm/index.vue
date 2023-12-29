<template>
  <div>
    <div v-for="control in formControls" :key="control.name" class="mb-5">
      <BasicSelect
        :model-value="modelValue[control.name]"
        :label="control.label"
        :options="colorOptions"
        placeholder="Select color"
        @update:model-value="onFormValueChange(control.name, $event)"
      >
        <template #option="{ option }">
          <div
            class="group relative w-7 h-6 border border-dark rounded-sm"
            :style="{ background: option.color }"
          />
          <span class="typo-sm ml-4">{{ option.label }}</span>
        </template>
      </BasicSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBrandingColorUsageFormData } from './types';
import type {
  BrandingThemeColor,
  IBrandingColorsFormData,
} from '~/components/branding/ColorsForm/types';

const props = defineProps({
  modelValue: {
    type: Object as PropType<IBrandingColorUsageFormData>,
    default: () => ({}),
  },
  colors: {
    type: Object as PropType<IBrandingColorsFormData>,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const formControls: {
  name: keyof IBrandingColorUsageFormData;
  label: string;
}[] = [
  {
    name: 'background',
    label: 'Background color',
  },
  {
    name: 'cta',
    label: 'Call to Action buttons (Bid now on Lot)',
  },
  {
    name: 'listButton',
    label: 'Buttons on listing',
  },
  {
    name: 'secondaryButton',
    label: 'Secondary buttons',
  },
  {
    name: 'link',
    label: 'Links (including icons with action)',
  },
  {
    name: 'linkOnBackground',
    label: 'Links (including icons with action) on background color',
  },
];

const colorOptions = computed(() => {
  const colorNames: Record<BrandingThemeColor, string> = {
    accent: 'Accent color',
    darkAccent: 'Dark Accent color',
    primary: 'Primary color',
    secondary: 'Secondary color',
    dark: 'Dark color',
  };

  return Object.entries(props.colors)
    .map(([name, color]) => ({
      label: colorNames[name as BrandingThemeColor],
      value: name,
      color,
    }))
    .filter((option) => !!option.color);
});

const onFormValueChange = (name: keyof IBrandingColorUsageFormData, value: BrandingThemeColor) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [name]: value,
  });
};
</script>
