<template>
  <div class="flex border border-input-border rounded-sm">
    <BasicCountrySelect
      v-model="country"
      class="w-28"
      button-class="!bg-shade-eb !border-0 !rounded-r-0"
      dropdown-class="!w-60"
    >
      <template #button="{ value, placeholder }">
        <span v-if="!value" class="text-sm truncate">{{ placeholder }}</span>
        <div v-if="value" class="flex items-center gap-2 text-sm">
          <span :class="'shrink-0 fi fi-' + value.iso2.toLowerCase()" />
          <span class="flex-1 truncate">+{{ value.calling_code }}</span>
        </div>
      </template>
      <template #option="{ option, active, selected }">
        <div
          class="flex items-center gap-3 hover:bg-shade-fa text-sm px-3 py-1.5 cursor-pointer"
          :class="{ 'bg-shade-fa': active || selected }"
        >
          <span :class="'shrink-0 fi fi-' + option.iso2.toLowerCase()" />
          <span class="flex-1">{{ option.name }} (+{{ option.calling_code }})</span>
        </div>
      </template>
    </BasicCountrySelect>

    <BasicInput
      v-model="nationalNumber"
      class="grow"
      input-box-class="!border-0 !rounded-l-0"
      :placeholder="exampleNumber"
      :disabled="!country"
      @update:model-value="onNationalNumberInput"
    />
  </div>
</template>

<script setup lang="ts">
import { PhoneNumberUtil } from 'google-libphonenumber';
import {
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import type { CountryCode } from 'libphonenumber-js/types';
const phoneUtil = PhoneNumberUtil.getInstance();

const props = defineProps({
  defaultCountry: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['changeCountry', 'update:modelValue', 'validate']);

const country = ref(props.defaultCountry);
const nationalNumber = ref('');

const dialCode = computed(() => {
  if (!country.value) {
    return '';
  }
  return getCountryCallingCode(country.value as CountryCode);
});

const exampleNumber = computed(() => {
  if (!country.value) {
    return '';
  }
  const number = phoneUtil.getExampleNumber(country.value);
  return String(number.getNationalNumber());
});

const isValid = computed(() => {
  if (!dialCode.value || !nationalNumber.value) {
    return false;
  }

  return isValidPhoneNumber(`+${dialCode.value}${nationalNumber.value}`);
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (!newValue) {
      country.value = '';
      nationalNumber.value = '';
    } else {
      const value = newValue.replace(/\D/g, '');
      const number = parsePhoneNumberFromString(`+${value}`);
      if (number) {
        if (number.country) {
          country.value = number.country;
        }
        nationalNumber.value = number.nationalNumber;
      }
    }
  },
);

watch(isValid, (isValid) => {
  emit('validate', isValid);
});

watch(country, (newValue) => {
  nationalNumber.value = '';
  emit('changeCountry', newValue);
});

const onNationalNumberInput = (value: string) => {
  value = value.replace(/\D/g, '');
  nationalNumber.value = value;
  if (country.value) {
    const phoneNumber = dialCode.value + value;
    emit('update:modelValue', phoneNumber);
  }
};
</script>
