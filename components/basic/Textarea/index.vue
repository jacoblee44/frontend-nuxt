<template>
  <div>
    <p v-if="label" class="mb-1.5 text-base">{{ label }}</p>

    <textarea
      v-model="value"
      class="w-full h-full block px-5 py-2.5 outline-none border text-sm placeholder:text-shade-8f focus:[&::placeholder]:opacity-0 resize-none"
      :class="{
        'bg-light': color === 'light',
        'bg-white': color === 'white',
        'border-input-border rounded-sm': !error,
        'border-red-alert rounded-t-sm rounded-bl-sm': error,
      }"
      :placeholder="placeholder"
      :rows="rows"
    />

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
  rows: {
    type: Number,
    default: null,
  },
  error: {
    type: String,
    default: '',
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
