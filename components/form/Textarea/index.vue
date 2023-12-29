<template>
  <BasicTextarea
    v-model="value"
    :color="color"
    :placeholder="placeholder"
    :error="errorMessage"
    :rows="rows"
  />
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
const props = defineProps({
  name: {
    type: String,
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
  rows: {
    type: Number,
    default: null,
  },
});
const { value, errorMessage } = useField(() => props.name);
</script>
