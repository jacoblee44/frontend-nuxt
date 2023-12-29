<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-7.5">
        <AuctionLotsCard v-for="lot in lots" :key="lot.id" :lot="lot" />
      </div>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard Changes</BasicButton>
      <BasicButton type="submit">Publish Changes</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { lots } = useLotList();
</script>
