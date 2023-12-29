<template>
  <BasicFilterPopup :x-pos="xPos" @reset="onResetFilter" @apply="onApplyFilter">
    <BasicRadioGroup
      label="Status"
      :options="USER_STATUS_OPTIONS"
      :model-value="filter.active"
      @update:model-value="onChangeFilter('active', $event)"
    />

    <div class="border-t border-shade-eb my-7.5" />

    <BasicSelect
      label="Role"
      :options="USER_ROLE_OPTIONS"
      placeholder="Select role"
      :model-value="filter.role"
      @update:model-value="onChangeFilter('role', $event)"
    />

    <div class="border-t border-shade-eb my-7.5" />

    <h3 class="font-bold mb-7.5">Period of time</h3>
    <FromToDatePicker
      class="max-h-80"
      :datepicker-formatter="DATEPICKERFORMATTER"
      :from="from"
      :to="to"
      @update:from="(e) => (from = e)"
      @update:to="(e) => (to = e)"
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
import { USER_ROLE_OPTIONS, USER_STATUS_OPTIONS } from './constants';
import type { IUserFilter } from './types';
import { SORTDIROPTIONS } from '~/resources/constants';
import type { PopupXPosition } from '~/components/basic/Popup/types';
import { DATEPICKERFORMATTER } from '~/components/user/LoginHistoryFilter/constants';
import FromToDatePicker from '~/components/basic/FromToDatePicker/index.vue';
const from = ref('');
const to = ref('');
const props = defineProps({
  modelValue: {
    type: Object as PropType<IUserFilter>,
    required: true,
  },
  xPos: {
    type: String as PropType<PopupXPosition>,
    default: 'left',
  },
});

const emit = defineEmits(['update:modelValue']);

const filter = ref<IUserFilter>(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    filter.value = newValue;
  },
);

const onChangeFilter = (name: keyof IUserFilter, value: never) => {
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
