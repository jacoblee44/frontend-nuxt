<template>
  <BasicSelect
    v-model="value"
    :color="color"
    :label="label"
    :options="options"
    :show-image="showImage"
    :placeholder="placeholder"
    :error="errorMessage"
  />
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
import type { ISelectOption } from '~/components/basic/Select/types';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<ISelectOption[]>,
    required: true,
  },
  color: {
    type: String as PropType<'white' | 'light'>,
    default: 'white',
  },
  placeholder: {
    type: String,
    default: '',
  },
  showImage: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: '',
  },
});
const { value, errorMessage } = useField(() => props.name);
</script>
