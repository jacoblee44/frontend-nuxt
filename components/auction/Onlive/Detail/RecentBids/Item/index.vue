<template>
  <div class="flex items-center justify-between py-2 pl-3 relative">
    <div
      class="absolute w-[1px] left-[2.25px] bg-dark"
      :class="{
        'bottom-0 h-1/2': isFirst && !isLast,
        'top-0 h-1/2': isLast && !isFirst,
        'h-0': isFirst && isLast,
        'top-0 h-full': !isLast && !isFirst,
      }"
    ></div>
    <div
      class="absolute w-1.5 h-1.5 left-0 flex-shrink-0 rounded-full border border-dark"
      :class="{ 'bg-dark': isFirst, 'bg-white': !isFirst }"
    ></div>

    <div class="flex items-center">
      <span class="font-bold mr-4">{{ formatNumber(bidHistory.amount) }}</span>
      <div class="flex items-center pl-4 border-l border-shade-97/50">
        <span class="mr-4">{{ formatDateInfo(bidHistory.bidAt) }}</span>
        <span class="mr-2">by {{ bidHistory.bidderName }}</span>
        <span class="fi fi-de rounded-sm" />
      </div>
    </div>

    <i v-if="bidHistory.byPhone" class="new-h24-icon-phone text-[15px]" />
  </div>
</template>

<script setup lang="ts">
import { BidHistoryModel } from '~/resources/models';

defineProps({
  bidHistory: {
    type: Object as PropType<BidHistoryModel>,
    required: true,
  },
  isFirst: {
    type: Boolean,
    default: false,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
});

const { formatNumber } = useNumberUtils();
const { formatDateInfo } = useDateUtils();
</script>
