<template>
  <div class="flex gap-7.5 max-w-full overflow-x-auto">
    <div
      class="w-25 bg-dark rounded-sm flex items-center justify-center flex-col flex-shrink-0 cursor-pointer"
    >
      <p class="text-xs font-bold text-white text-center max-w-14">Show for all lots</p>
    </div>

    <AuctionBidBoardLotsCard v-for="lot in lots" :key="lot.id" :lot="lot" />
  </div>
</template>

<script setup lang="ts">
const { lots } = useLotList();
</script>
