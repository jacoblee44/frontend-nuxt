<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-8 px-7.5">
      <div class="grid grid-cols-10 gap-15">
        <div class="col-span-3">
          <AuctionOnliveLots />
        </div>

        <div class="col-span-7">
          <AuctionOnliveDetail />
        </div>
      </div>
    </div>
    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard Changes</BasicButton>
      <BasicButton type="submit">Publish Changes</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
