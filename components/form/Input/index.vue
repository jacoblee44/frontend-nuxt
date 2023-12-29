<template>
  <BasicInput v-model="value" :color="color" :placeholder="placeholder" :error="errorMessage" />
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
});
const { value, errorMessage } = useField(() => props.name);
</script>
