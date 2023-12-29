<template>
  <div>
    <p v-if="label" class="mb-1.5 text-base">{{ label }}</p>
    <div
      class="flex items-center h-9.5 px-5 border gap-5"
      :class="[
        {
          'bg-light': color === 'light',
          'bg-white': color === 'white',
          'border-input-border rounded-sm': !error,
          'border-red-alert rounded-t-sm rounded-bl-sm': error,
        },
        inputBoxClass,
      ]"
    >
      <input
        v-model="value"
        class="w-full bg-transparent outline-none border-none text-sm placeholder:text-shade-8f focus:[&::placeholder]:opacity-0"
        :class="inputClass"
        :placeholder="placeholder"
        :disabled="disabled"
      />

      <slot name="suffix">
        <span v-if="suffix" class="text-sm">{{ suffix }}</span>
      </slot>
    </div>
    <div v-if="error" class="flex items-center justify-end">
      <div class="rounded-b-1.5 border border-t-0 px-1.5 border-red-alert bg-red-ff">
        <span class="text-h5 font-bold">{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  color: {
    type: String as PropType<'white' | 'light'>,
    default: 'white',
  },
  suffix: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  inputBoxClass: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>
