<template>
  <div>
    <p v-if="label" class="mb-1.5 text-base">{{ label }}</p>

    <div v-click-outside="closeDropdown">
      <div
        class="h-9.5 w-full flex items-center justify-between border cursor-pointer pl-[13px] pr-2.5 gap-7"
        :class="{
          'bg-light': color === 'light',
          'bg-white': color === 'white',
          'border-input-border rounded-sm': !error,
          'border-red-alert rounded-t-sm rounded-bl-sm': error,
        }"
        @click="toggleOpen"
      >
        <slot
          v-if="$slots.button"
          name="button"
          :value="selectedOption"
          :empty="empty"
          :placeholder="placeholder || label"
        />
        <div v-else class="flex items-center text-sm leading-[16px]">
          <span v-if="empty" class="">{{ placeholder || label }}</span>
          <slot v-else name="option" :option="selectedOption">
            <div class="flex items-center">
              <img
                v-if="selectedOption?.img && showImage"
                :src="selectedOption?.img"
                class="w-[25px] h-[17px] rounded-sm flex-shrink-0 mr-1.5"
                alt=""
              />
              <span class="">{{ selectedOption?.label }}</span>
            </div>
          </slot>
        </div>

        <IconArrow
          class="transition-all ease-in duration-200 w-[13px]"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
      <div class="relative">
        <div
          v-if="isOpen"
          class="absolute top-2 w-full border border-input-border py-1 z-10 rounded-sm max-h-50 overflow-auto"
          :class="{ 'bg-light': color === 'light', 'bg-white': color === 'white' }"
        >
          <div
            v-for="(option, index) in options"
            :key="`option-${index}`"
            class="cursor-pointer flex items-center pl-[13px] pr-2.5 py-1.5"
            :class="{
              'hover:bg-shade-e9': color === 'light',
              'hover:bg-shade-fa': color === 'white',
            }"
            @click="handleClickOption(option)"
          >
            <slot name="option" :option="option" :selected="option.value === modelValue">
              <img
                v-if="option.img && showImage"
                :src="option.img"
                class="w-6 h-4 rounded-sm flex-shrink-0 mr-1.5"
                alt=""
              />
              <span class="text-sm">
                {{ option.label }}
              </span>
            </slot>
          </div>
        </div>
      </div>
      <div v-if="error" class="flex items-center justify-end">
        <div class="rounded-b-1.5 border border-t-0 px-1.5 border-red-alert bg-red-ff">
          <span class="text-h5 font-bold">{{ error }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISelectOption } from './types';

const props = defineProps({
  options: {
    type: Array as PropType<ISelectOption[]>,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: null,
    default: null,
  },
  color: {
    type: String as PropType<'white' | 'light'>,
    default: 'white',
  },
  showImage: {
    type: Boolean,
    default: true,
  },
  error: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);

const selectedOption = computed(() => {
  return props.options.find((option) => option.value === value.value);
});

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});

const empty = computed(() => [undefined, null, ''].includes(value.value));

const closeDropdown = () => {
  isOpen.value = false;
};

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOption = (option: ISelectOption) => {
  value.value = option.value;
  closeDropdown();
};
</script>
