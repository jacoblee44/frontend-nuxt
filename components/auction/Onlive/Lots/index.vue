<template>
  <div class="max-h-full overflow-y-auto">
    <h3 class="font-bold mb-6">Lots</h3>
    <div>
      <div v-for="lot in lots" :key="lot.id" class="py-5 border-t border-shade-eb">
        <AuctionBidBoardLotsCard :lot="lot" show-active selectable />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { lots } = useLotList();
</script>
