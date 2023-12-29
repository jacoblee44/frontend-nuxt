<template>
  <BasicColorPicker
    v-model="value"
    :clearable="clearable"
    :disabled="disabled"
    :error="Boolean(errorMessage)"
  />
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const { value, errorMessage } = useField(() => props.name);
</script>
