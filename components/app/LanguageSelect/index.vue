<template>
  <div v-click-outside="closeDropdown">
    <div class="relative">
      <div
        v-if="isOpen"
        class="absolute bottom-2 w-full border border-input-border py-1 z-10 bg-primary"
      >
        <div
          v-for="(option, index) in languageOptions"
          :key="`option-${index}`"
          class="flex items-center justify-center cursor-pointer hover:bg-white/10 py-1"
          @click="handleClickOption(option)"
        >
          <img
            v-if="option.img"
            :src="option.img"
            class="w-6 h-4 rounded-sm flex-shrink-0 mr-1.5"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="flex items-center gap-1.5 cursor-pointer hover:opacity-80" @click="toggleOpen">
      <img
        v-if="selectedOption?.img"
        :src="selectedOption?.img"
        class="w-6 h-4 border border-white rounded-sm flex-shrink-0 mr-1.5"
        alt=""
      />

      <IconArrow
        class="transition-all ease-in duration-200 w-4 text-white"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { languageOptions } from '~/constants';
import { Language } from '~/resources/enums';
import type { ISelectOption } from '~/components/basic/Select/types';

const props = defineProps({
  modelValue: {
    type: String as PropType<Language>,
    required: true,
  },
});
const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(val: Language) {
    emit('update:modelValue', val);
  },
});

const selectedOption = computed(() => {
  return languageOptions.find((option) => option.value === value.value);
});

const closeDropdown = () => {
  isOpen.value = false;
};

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOption = (option: ISelectOption) => {
  value.value = option.value as Language;
  closeDropdown();
};
</script>
