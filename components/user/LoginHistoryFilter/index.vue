<template>
  <BasicFilterPopup :x-pos="xPos" @reset="onResetFilter" @apply="onApplyFilter">
    <BasicRadioGroup
      label="Browser"
      :options="browserOptions"
      :model-value="filter.browser"
      @update:model-value="onChangeFilter('browser', $event)"
    />

    <div class="border-t border-shade-eb my-7.5" />

    <BasicRadioGroup
      label="Platform"
      :options="platformOptions"
      :model-value="filter.platform"
      @update:model-value="onChangeFilter('platform', $event)"
    />

    <div class="border-t border-shade-eb my-7.5" />

    <h4 class="font-bold mb-2">Date</h4>
    <vue-tailwind-datepicker
      :model-value="filter.date"
      :formatter="DATEPICKERFORMATTER"
      placeholder="Select date"
      as-single
      @update:model-value="onChangeFilter('date', $event)"
    />

    <div class="border-t border-shade-eb my-7.5" />

    <h4 class="font-bold mb-2">Period of time</h4>
    <FromToDatePicker
      from-place-holder="Select date"
      to-place-holder="Select date"
      :from="filter.startDate"
      :to="filter.endDate"
      @update:from="onChangeFilter('startDate', $event)"
      @update:to="onChangeFilter('endDate', $event)"
    />

    <div class="border-t border-shade-eb my-7.5" />

    <h3 class="font-bold mb-7.5">Sort by</h3>
    <BasicRadioGroup
      :options="SORTDIROPTIONS"
      :model-value="filter.sortDir"
      @update:model-value="onChangeFilter('sortDir', $event)"
    />
  </BasicFilterPopup>
</template>

<script setup lang="ts">
import { browserOptions, DATEPICKERFORMATTER, platformOptions } from './constants';
import type { ILoginHistoryFilter } from './types';
import { SORTDIROPTIONS } from '~/resources/constants';
import type { PopupXPosition } from '~/components/basic/Popup/types';
import FromToDatePicker from '~/components/basic/FromToDatePicker/index.vue';

const props = defineProps({
  modelValue: {
    type: Object as PropType<ILoginHistoryFilter>,
    required: true,
  },
  xPos: {
    type: String as PropType<PopupXPosition>,
    default: 'left',
  },
});

const emit = defineEmits(['update:modelValue']);

const filter = ref<ILoginHistoryFilter>(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    filter.value = newValue;
  },
);

const onChangeFilter = (name: keyof ILoginHistoryFilter, value: never) => {
  filter.value[name] = value;
};

const onApplyFilter = (close: VoidFunction) => {
  emit('update:modelValue', filter.value);
  close();
};

const onResetFilter = () => {
  emit('update:modelValue', {
    ...filter.value,
    status: undefined,
    role: undefined,
    sortDir: undefined,
  });
};
</script>
