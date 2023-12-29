<template>
  <Story title="App/SidebarItem" :setup-app="setupApp">
    <Variant title="Sidebar without children">
      <div class="bg-primary w-79.5">
        <AppSidebarItem
          :collapsed="menu1collapsed"
          :menu="menu1"
          :opened-menu="openedMenu"
          @open-menu="openMenu"
        />
      </div>

      <template #controls>
        <HstCheckbox v-model="menu1collapsed" title="Collapsed" />
      </template>
    </Variant>

    <Variant title="Sidebar with submenus">
      <div class="bg-primary w-[317px]">
        <AppSidebarItem
          :collapsed="menu2Collapsed"
          :menu="menu2"
          :opened-menu="openedMenu"
          @open-menu="openMenu"
        />
      </div>

      <template #controls>
        <HstCheckbox v-model="menu2Collapsed" title="Collapsed" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { createRouter, createMemoryHistory } from 'vue-router';
import AppSidebarItem from './index.vue';
import type { IMenuItem } from './types';

const menu1collapsed = ref(false);
const menu2Collapsed = ref(false);

const openedMenu: Ref<string | undefined> = ref(undefined);

const openMenu = (menuLabel: string) => {
  if (openedMenu.value === menuLabel) {
    openedMenu.value = undefined;
  } else {
    openedMenu.value = menuLabel;
  }
};

const menu1: IMenuItem = {
  label: 'Dashboard',
  link: '/',
  icon: {
    type: 'img',
    name: '/images/icons/icon-home.svg',
  },
};

const menu2: IMenuItem = {
  label: 'Site Content',
  icon: {
    type: 'font',
    name: 'new-h24-icon-site-content',
  },
  hasSubContent: true,
  subMenus: [
    { label: 'Footer' },
    { label: 'Sliders' },
    { label: 'Ads' },
    { label: 'Testimonials' },
  ],
};

function setupApp({ app }) {
  // Router mock
  app.use(
    createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', name: 'home', component: { render: () => null } }],
    }),
  );
}
</script>
