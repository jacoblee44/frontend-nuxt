<template>
  <div
    class="group relative w-7 h-7 border border-dark rounded-sm"
    :class="[disabled && 'opacity-0.6', error ? 'border-error' : 'border-dark']"
    :style="{ background: value || emptyPattern }"
  >
    <input v-model="value" class="w-full h-full opacity-0" type="color" :disabled="disabled" />
    <slot v-if="clearable && value" name="clear">
      <i
        class="new-h24-icon-close absolute -top-1 -right-1 text-[10px] hidden group-hover:block hover:opacity-80 cursor-pointer"
        @click="value = null"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const emptyPattern = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath fill='none' stroke='%23373737' stroke-width='1' d='M0 0L24 24M 0 24L24 0'/%3e%3c/svg%3e")`;

const value = computed<string | null>({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>
