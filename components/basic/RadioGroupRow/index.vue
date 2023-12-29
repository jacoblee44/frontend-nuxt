<template>
  <div class="flex gap-2 justify-between">
    <slot v-if="label" name="label" :label="label" :value="value">
      <h4 class="font-bold mb-2">{{ label }}</h4>
    </slot>

    <BasicRadio
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :checked="option.value === value"
      :disabled="disabled"
      @click="value = option.value"
    >
      <template v-for="name in Object.keys($slots)" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData"></slot>
      </template>
    </BasicRadio>
  </div>
</template>

<script setup lang="ts">
import type { IRadioOption } from './types';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<IRadioOption[]>,
    required: true,
  },
  modelValue: {
    type: null,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>
