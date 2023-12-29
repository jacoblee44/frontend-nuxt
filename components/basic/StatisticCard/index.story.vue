<template>
  <Story title="Basic/StatisticCard">
    <Variant title="BasicStatisticCard">
      <BasicStatisticCard label="Total bids" value="750" class="mb-4" />
    </Variant>

    <Variant title="BasicStatisticCard with slot">
      <BasicStatisticCard class="flex-1" label="Last Bid From" value="DEU">
        <div class="pt-4.5 pb-3 px-5 flex items-center justify-center gap-2">
          <span class="fi fi-de rounded-sm w-13 h-9" />
          <p class="font-bold text-center text-[60px] leading-[85px]">DEU</p>
        </div>
      </BasicStatisticCard>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BasicStatisticCard from './index.vue';
</script>
