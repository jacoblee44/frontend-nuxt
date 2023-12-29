<template>
  <div class="relative">
    <Listbox v-model="country">
      <ListboxLabel v-if="label" class="inline-block mb-1.5 text-base">{{ label }}</ListboxLabel>
      <ListboxButton
        class="h-9.5 w-full flex items-center justify-between bg-white border border-input-border rounded-sm cursor-pointer pl-3.5 pr-2.5 gap-1 outline-none"
        :class="buttonClass"
      >
        <slot name="button" :value="country" :placeholder="placeholder">
          <span v-if="!country" class="text-sm truncate">{{ placeholder }}</span>
          <div v-if="country" class="flex items-center gap-5 text-sm">
            <span :class="'shrink-0 fi fi-' + country.iso2.toLowerCase()" />
            <span class="flex-1 truncate">{{ country.name }}</span>
          </div>
        </slot>

        <IconArrow class="transition-all ease-in duration-200 w-[13px] ui-open:rotate-180" />
      </ListboxButton>

      <transition
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-50 w-full bg-white border border-input-border py-1 z-10 rounded-sm overflow-auto outline-none"
          :class="dropdownClass"
        >
          <div class="sticky top-0 z-10 bg-white px-1">
            <BasicInput
              v-model="search"
              placeholder="Search"
              @keydown="(e) => e.stopPropagation()"
            />
          </div>

          <ListboxOption
            v-for="option in filteredOptions"
            v-slot="{ active, selected }"
            :key="option.iso2"
            :value="option"
          >
            <slot name="option" :option="option" :active="active" :selected="selected">
              <div
                class="flex items-center gap-5 hover:bg-shade-fa text-sm px-3 py-1.5 cursor-pointer"
                :class="{ 'bg-shade-fa': active || selected }"
              >
                <span :class="'shrink-0 fi fi-' + option.iso2.toLowerCase()" />
                <span class="flex-1 truncate">{{ option.name }}</span>
              </div>
            </slot>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import * as countryList from 'country-list-js';
import { getCountryCallingCode } from 'libphonenumber-js';
import type { ICountrySelectOption } from './types';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  buttonClass: {
    type: String,
    default: '',
  },
  dropdownClass: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

let countries: ICountrySelectOption[] = Object.values(countryList.all);
for (const country of countries) {
  try {
    country.calling_code = getCountryCallingCode(country.iso2);
  } catch {}
}
countries = countries.filter((country) => country.calling_code);

const country = ref(countries.find((country) => country.iso2 === props.modelValue));
const search = ref('');

const filteredOptions = computed(() => {
  if (!search.value) {
    return countries;
  }
  const keyword = search.value.toLowerCase();
  return countries.filter((country) => country.name.toLowerCase().includes(keyword));
});

watch(
  () => props.modelValue,
  (newValue) => {
    country.value = countries.find((country) => country.iso2 === newValue);
  },
);

watch(country, (newValue) => {
  emit('update:modelValue', newValue?.iso2 || '');
});
</script>
