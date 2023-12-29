<template>
  <div
    class="flex-shrink-0 h-screen bg-primary flex flex-col justify-between transition-all ease-in duration-200"
    :class="{
      'w-21': collapsed,
      'w-79.5': !collapsed,
    }"
  >
    <div
      class="h-[75px] flex-shrink-0 bg-white flex items-center justify-between pl-7.5 pr-7 shadow-logo-box rounded-b-sm"
    >
      <img v-if="!collapsed" src="/images/logo.svg" class="w-[175px]" alt="" />

      <IconDoubleArrow
        class="cursor-pointer hover:opacity-80 transition-all ease-in duration-200"
        :class="{ 'rotate-180': collapsed }"
        @click="toggleCollapse"
      />
    </div>

    <div class="pt-4 pb-4 px-7.5 flex-1 h-0 overflow-auto">
      <div class="">
        <AppSidebarItem
          v-for="(item, index) in menus"
          :key="index"
          :menu="item"
          :collapsed="collapsed"
          :opened-menu="openedMenu"
          @open-menu="openMenu"
        />
      </div>
    </div>

    <div class="flex-shrink-0">
      <AppSwitchSite :collapsed="collapsed" />

      <div
        class="pt-5 pb-7.5 flex items-center justify-center"
        :class="{
          'flex-col gap-[30px]': collapsed,
          'flex-row gap-[25px]': !collapsed,
        }"
      >
        <div
          class="flex items-center border-shade-97/50"
          :class="{
            'flex-col gap-[30px] border-b pb-7.5': collapsed,
            'flex-row gap-[25px] h-6 border-r pr-6': !collapsed,
          }"
        >
          <img
            src="/images/icons/icon-profile.svg"
            alt=""
            class="cursor-pointer hover:opacity-80"
          />
          <img
            src="/images/icons/icon-notification.svg"
            class="cursor-pointer hover:opacity-80"
            alt=""
          />
        </div>

        <AppAdminLanguageSelectSmart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMenuItem } from './Item/types';

const collapsed = ref(false);
const openedMenu: Ref<string | undefined> = ref(undefined);

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};

const openMenu = (menuLabel: string) => {
  if (openedMenu.value === menuLabel) {
    openedMenu.value = undefined;
  } else {
    openedMenu.value = menuLabel;
  }
};

const menus: IMenuItem[] = [
  {
    label: 'Dashboard',
    link: '/',
    exact: true,
    icon: {
      type: 'img',
      name: '/images/icons/icon-home.svg',
    },
  },
  {
    label: 'All sites',
    hasSubContent: true,
    icon: {
      type: 'img',
      name: '/images/icons/icon-site.svg',
    },
    link: '/sites',
  },
  {
    label: 'Site Branding',
    icon: {
      type: 'font',
      name: 'new-h24-icon-branding',
    },
    link: '/site-branding',
  },
  {
    label: 'Site Content',
    icon: {
      type: 'font',
      name: 'new-h24-icon-site-content',
    },
    hasSubContent: true,
    subMenus: [
      { label: 'Footer', link: '/site-content/footer' },
      { label: 'Sliders', link: '/site-content/sliders' },
      { label: 'Ads', link: '/site-content/ads' },
      { label: 'Testimonials', link: '/site-content/testimonials' },
    ],
  },
  {
    label: 'Auctions',
    icon: {
      type: 'font',
      name: 'new-h24-icon-hammer',
    },
    link: '/auctions',
  },
  {
    label: 'Lots',
    icon: {
      type: 'font',
      name: 'new-h24-icon-dashboard',
    },
    link: '/lots',
  },
  {
    label: 'Products',
    icon: {
      type: 'font',
      name: 'new-h24-icon-product',
    },
    link: '/products',
  },
  {
    label: 'Product Settings',
    icon: {
      type: 'font',
      name: 'new-h24-icon-prod-settings',
    },
    hasSubContent: true,
    link: '/product-settings',
  },
  {
    label: 'News',
    icon: {
      type: 'font',
      name: 'new-h24-icon-news',
    },
    link: '/news',
  },
  {
    label: 'Newsletter',
    icon: {
      type: 'font',
      name: 'new-h24-icon-newsletter',
    },
    hasSubContent: true,
    subMenus: [
      {
        label: 'Send Newsletter',
        link: '/news-letters/send',
      },
      {
        label: 'Subscribers',
        link: '/news-letters/subscribers',
      },
    ],
  },
  {
    label: 'Users',
    icon: {
      type: 'img',
      name: '/images/icons/icon-team.svg',
    },
    link: '/users',
  },
  {
    label: 'User Roles & Permissions',
    icon: {
      type: 'font',
      name: 'new-h24-icon-user-roles',
    },
    link: '/roles',
  },
  {
    label: 'User Communication',
    icon: {
      type: 'img',
      name: '/images/icons/icon-communication.svg',
    },
    hasSubContent: true,
    subMenus: [
      { label: 'Send Notification to User', link: '/communications/send' },
      { label: "User's  Requests", link: '/communications/requests' },
    ],
  },
  {
    label: 'Translations',
    icon: {
      type: 'font',
      name: 'new-h24-icon-translate',
    },
    link: '/translations',
    hasSubContent: true,
    subMenus: [
      { label: 'Languages', link: '/translations/languages' },
      { label: 'String Translations', link: '/translations/strings' },
    ],
  },
];
</script>
