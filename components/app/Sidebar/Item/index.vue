<template>
  <div
    class="border-b"
    :class="{
      'border-shade-eb': menu.hasSubContent,
      'border-shade-5b': !menu.hasSubContent,
    }"
  >
    <NuxtLink
      class="px-3 flex items-center cursor-pointer pt-4 hover:bg-white/10"
      :class="{
        'px-3 justify-between ': !collapsed,
        'justify-center': collapsed,
        'pb-4': showSubMenu,
        'pb-3': !showSubMenu,
      }"
      :to="menu.link"
      :active-class="activeClass"
      @click="onClickMenu"
    >
      <div class="flex items-center gap-[15px] flex-shrink-0">
        <span
          v-if="menu.icon?.type === 'font'"
          class="text-white w-4 h-4 flex-shrink-0 flex items-center justify-center"
        >
          <i class="w-4 h-4" :class="menu.icon?.name"></i>
        </span>
        <img v-else :src="menu.icon?.name" alt="" class="w-4 h-4 flex-shrink-0" />

        <span v-if="!collapsed" class="text-white text-sm font-semibold capitalize">{{
          menu.label
        }}</span>
      </div>

      <IconArrow
        v-if="menu.subMenus && !collapsed"
        class="transition-all ease-in duration-200 w-3 text-white"
        :class="{ 'rotate-180': showSubMenu }"
      />
    </NuxtLink>

    <div v-if="menu.subMenus && showSubMenu && !collapsed">
      <NuxtLink
        v-for="(item, index) in menu.subMenus"
        :key="index"
        :to="item.link"
        class="flex text-white text-sm font-semibold pl-12 pt-[15px] pb-3 border-t border-shade-5b cursor-pointer hover:bg-white/10"
        :class="{ 'pb-0': index === menu.subMenus.length - 1 }"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMenuItem } from './types';

const props = defineProps({
  menu: {
    type: Object as PropType<IMenuItem>,
    required: true,
  },
  openedMenu: {
    type: String,
    default: null,
  },
  collapsed: {
    type: Boolean,
  },
});

const emit = defineEmits(['openMenu']);

const activeClass = computed(() => {
  if (!props.collapsed) return 'bg-white/10 border-r-sm border-shade-eb';
  return 'bg-white/10';
});

const showSubMenu = computed(() => {
  return props.openedMenu === props.menu?.label;
});

const onClickMenu = () => {
  if (!props.collapsed && props.menu.subMenus) {
    emit('openMenu', props.menu?.label);
  }
};
</script>
