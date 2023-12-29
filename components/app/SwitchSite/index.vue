<template>
  <div>
    <div
      class="border-t border-shade-5b pt-5 pl-7.5 pr-8.5 pb-2.5 flex items-center justify-between cursor-pointer"
      :class="{
        'hover:opacity-80': collapsed,
        'hover:bg-white/10': !collapsed,
      }"
      @click="toggleOpen"
    >
      <div class="flex items-center gap-5">
        <IconGlobe class="w-5 h-5 flex-shrink-0 text-white" />
        <span v-if="!collapsed" class="text-sm font-bold text-white"> Switch sites </span>
      </div>

      <IconArrow
        v-if="!collapsed"
        class="transition-all ease-in duration-200 w-3 text-white"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>

    <div
      v-if="!collapsed && isOpen"
      class="flex items-center justify-between px-7.5 pt-2.5 pb-2 bg-white/10 cursor-pointer hover:opacity-80"
    >
      <span class="text-white font-bold text-base">Hannoveraner</span>

      <span class="text-white">
        <i class="new-h24-icon-settings text-[20px] w-5 h-5"></i>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  collapsed: {
    type: Boolean,
  },
});

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>
