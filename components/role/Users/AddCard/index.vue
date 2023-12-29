<template>
  <div
    v-click-outside="stopAdding"
    class="flex items-center justify-center"
    :class="{
      'border border-shade-93 rounded-sm px-5': isAdding,
    }"
  >
    <div
      v-if="!isAdding"
      class="w-15 h-15 flex items-center justify-center rounded-full border-sm border-shade-97 cursor-pointer hover:opacity-80"
      @click="toggleMode"
    >
      <i class="new-h24-icon-add text-[24px] w-6 h-6 text-shade-97"></i>
    </div>

    <BasicSearch v-else class="w-full" placeholder="Search for user" />
  </div>
</template>

<script setup lang="ts">
const isAdding = ref(false);

const toggleMode = (e: Event) => {
  e.stopPropagation();
  isAdding.value = !isAdding.value;
};

const stopAdding = () => {
  if (isAdding.value) isAdding.value = false;
};
</script>
