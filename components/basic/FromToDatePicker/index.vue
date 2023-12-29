<template>
  <div class="grid grid-cols-2 gap-5 relative from-to-date-picker">
    <div class="start-date-picker">
      <div class="typo-md mb-1">Start</div>
      <VueTailwindDatepicker
        v-model="fromUpdated"
        :formatter="DATEPICKERFORMATTER"
        :placeholder="fromPlaceHolder"
        as-single
      />
    </div>
    <div class="end-date-picker">
      <div class="typo-md mb-1">End</div>
      <VueTailwindDatepicker
        v-model="toUpdated"
        :formatter="DATEPICKERFORMATTER"
        :placeholder="toPlaceHolder"
        as-single
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import VueTailwindDatepicker from 'vue-tailwind-datepicker';
import { DATEPICKERFORMATTER } from '~/components/user/LoginHistoryFilter/constants';
const props: any = defineProps({
  from: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
  fromPlaceHolder: {
    type: String,
    default: 'Select date',
  },
  toPlaceHolder: {
    type: String,
    default: 'Select date',
  },
});
const emit: any = defineEmits(['update:from', 'update:to']);

const fromUpdated = computed({
  get: () => props.from,
  set: (value) => emit('update:from', value),
});

const toUpdated = computed({
  get: () => props.to,
  set: (value) => emit('update:to', value),
});
</script>

<style>
.from-to-date-picker #vtd {
  position: static;
}
.start-date-picker #vtd > div {
  width: 207%;
}

.end-date-picker #vtd > div {
  width: 207%;
}

.start-date-picker #vtd > div > div {
  left: 0;
  right: 0;
}
.end-date-picker #vtd > div > div {
  left: -53%;
  right: 52%;
}
.from-to-date-picker
  #vtd
  > div
  > div
  > div
  > div.vtd-datepicker
  > div
  > div.relative
  > div
  > div.px-0\.5
  > div
  > div.grid
  > div.relative
  > button.vtd-datepicker-date {
  height: 0.9rem;
}
</style>
