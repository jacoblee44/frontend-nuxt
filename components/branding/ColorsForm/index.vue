<template>
  <div>
    <div
      v-for="control in formControls"
      :key="control.name"
      :class="[
        'border-t border-shade-eb py-5',
        control.disabled && 'opacity-46 pointer-events-none',
      ]"
    >
      <div class="flex items-center gap-2">
        <h4 class="font-bold mr-auto">{{ control.label }}</h4>
        <div
          v-if="control.validate && control.validate(modelValue[control.name])"
          class="flex items-center typo-sm text-red-alert font-bold gap-1"
        >
          {{ control.validate(modelValue[control.name]) }}
        </div>
        <BasicColorPicker
          :model-value="modelValue[control.name]"
          :clearable="control.nullable"
          @update:model-value="onFormValueChange(control.name, $event)"
        />
      </div>
      <p class="typo-md mt-2">{{ control.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBrandingColorsFormData } from './types';
import {
  getBrightness,
  hex2rgb,
  hsl2rgb,
  rgb2hex,
  rgb2hsl,
} from '~/components/basic/ColorPicker/utils';

const props = defineProps({
  modelValue: {
    type: Object as PropType<IBrandingColorsFormData>,
    default: () => ({
      accent: '',
      darkAccent: '',
      primary: '',
      secondary: '',
      dark: '',
    }),
  },
});

const emit = defineEmits(['update:modelValue']);

const brightnessValidator = (color?: string | null) => {
  if (!color) {
    return 'Please select color';
  }
  const brightness = getBrightness(color);
  if (!brightness) {
    return 'Invalid color';
  }
  if (brightness > 60) {
    return 'Contrast issue with white';
  }
  return null;
};

const formControls = computed<
  {
    name: keyof IBrandingColorsFormData;
    label: string;
    description: string;
    disabled?: boolean;
    nullable?: boolean;
    validate?: (value?: string | null) => string | null;
  }[]
>(() => [
  {
    name: 'accent',
    label: 'Accent color',
    description:
      'Accent color is used for details, links and special button like "Bid Now". We recommend you select one of your brand color that highlights the content. If your branding is based on one color, use a black shade here.',
    validate: brightnessValidator,
  },
  {
    name: 'darkAccent',
    label: 'Dark Accent color',
    description:
      'Your accent color is too bright for a white background, a dark accent color was automatically defined for enough contrast with white background.',
    disabled: !brightnessValidator(props.modelValue.accent),
    validate: brightnessValidator,
  },
  {
    name: 'primary',
    label: 'Primary',
    description:
      'Primary color that is going to be used mainly as background for several elements, including buttons. Try using a dark color to have a good contrast with the white background, and/or neutral/colors colors such as green, blue, purple.',
    validate: brightnessValidator,
  },
  {
    name: 'secondary',
    label: 'Secondary (optional)',
    description:
      'If choosen, secondary colors can be used as less important elements such as buttons on listing.',
    nullable: true,
  },
  {
    name: 'dark',
    label: 'Dark',
    description:
      'Colors used mainly for text, also as a base for the shades of gray used thorough the site.',
    validate: brightnessValidator,
  },
]);

const onFormValueChange = (name: keyof IBrandingColorsFormData, value: string | null) => {
  const newColors: IBrandingColorsFormData = {
    ...props.modelValue,
    [name]: value,
  };
  if (name === 'accent') {
    if (!value) {
      newColors.darkAccent = '';
    } else {
      const brightness = getBrightness(value);
      if (!brightness || brightness <= 60) {
        newColors.darkAccent = value;
      } else {
        const rgb = hex2rgb(value) as number[];
        const [h, s] = rgb2hsl(rgb[0], rgb[1], rgb[2]);
        const [r, g, b] = hsl2rgb(h, s, 0.4);
        newColors.darkAccent = rgb2hex(r, g, b);
      }
    }
  }
  emit('update:modelValue', newColors);
};
</script>
