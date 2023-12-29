<template>
  <div class="rounded-sm border border-shade-eb p-5 flex gap-5">
    <BasicSkeleton class="w-15 h-15 rounded-full flex-shrink-0" />

    <div class="flex-grow flex flex-col gap-2">
      <BasicSkeleton class="h-2.5 w-4/5 rounded-3 mb-2" />

      <BasicSkeleton
        v-for="i in 4"
        :key="i"
        class="h-2.5 rounded-3"
        :class="{
          'w-3/5': i % 2 === 1,
          'w-full': i % 2 === 0,
        }"
      />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
