<template>
  <div class="flex">
    <AppSubSidebar title="Site Settings">
      <template #actions>
        <BasicIconButton class="!w-10 !h-7.5">
          <i class="new-h24-icon-add text-white text-[14px] w-3.5 h-3.5"></i>
        </BasicIconButton>
      </template>

      <template #subTitle>
        <AppTableToolbar :checked-all="checkedAll" @check-all="toggleCheckedAll" />
      </template>

      <div>
        <SiteSettingItem
          v-for="item in settingList"
          :key="item.id"
          :item="item"
          :selected-settings="selectedSettings"
          @toggle-select="toggleSelectSetting(item)"
        />
      </div>
    </AppSubSidebar>

    <div class="flex-1 flex flex-col h-screen">
      <AppHeader class="flex-shrink-0">
        <BasicEditBox v-model="pageName" input-class="text-2xl" />

        <template #actions>
          <AppHeaderLanguageSelect />
          <div class="bg-white flex items-center gap-5 pl-5 border-l border-shade-eb ml-5">
            <BasicButton variant="outline">Site Branding</BasicButton>
            <BasicButton variant="outline">Site Content</BasicButton>

            <span class="cursor-pointer hover:opacity-80">
              <i class="new-h24-icon-more-options text-[14px] w-3.5 h-3.5"></i>
            </span>
          </div>
        </template>

        <template #tabs>
          <BasicTabs :active-tab="activeTab" :tabs="siteTabs" @change-tab="changeTab" />
        </template>
      </AppHeader>

      <SiteGeneral v-if="activeTab === SITE_TAB.GENERAL" />
      <SiteTeams v-if="activeTab === SITE_TAB.TEAM" />
      <SiteContactDetails v-if="activeTab === SITE_TAB.CONTACT_DETAILS" />
      <SiteSeo v-if="activeTab === SITE_TAB.SEO" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { SITE_TAB } from './types';
import type { ISiteSettingItem } from '~/components/site/SettingItem/types';
import type { ITabItem } from '~/components/basic/Tabs/types';

const route = useRoute();

const pageName = ref('Title');
const selectedSettings: Ref<ISiteSettingItem[]> = ref([]);

const activeTab = computed({
  get: () => {
    if (
      route.query?.tab === SITE_TAB.TEAM ||
      route.query?.tab === SITE_TAB.CONTACT_DETAILS ||
      route.query?.tab === SITE_TAB.SERVICES ||
      route.query?.tab === SITE_TAB.BREEDERS ||
      route.query?.tab === SITE_TAB.SEO
    ) {
      return route.query?.tab;
    }
    return SITE_TAB.GENERAL;
  },
  set: (value) => {
    navigateTo({
      path: '/sites',
      query: {
        tab: value,
      },
      replace: true,
    });
  },
});

const siteTabs: ITabItem[] = [
  { label: 'General', value: SITE_TAB.GENERAL },
  { label: 'Team', value: SITE_TAB.TEAM },
  { label: 'Contact Details', value: SITE_TAB.CONTACT_DETAILS },
  { label: 'Services', value: SITE_TAB.SERVICES },
  { label: 'Breeders', value: SITE_TAB.BREEDERS },
  { label: 'SEO', value: SITE_TAB.SEO },
];

const settingList: ISiteSettingItem[] = [];
for (let i = 1; i <= 10; i++) {
  settingList.push({
    id: `${i}`,
    label: 'Hannoveraner verband',
    description: 'Test site description',
    status: 'active',
  });
}

const checkedAll = computed(() => {
  return selectedSettings.value.length === settingList.length;
});

const toggleCheckedAll = () => {
  if (checkedAll.value) {
    selectedSettings.value = [];
  } else {
    selectedSettings.value = settingList;
  }
};

const changeTab = (value: SITE_TAB) => {
  activeTab.value = value;
};

const toggleSelectSetting = (setting: ISiteSettingItem) => {
  if (selectedSettings.value.some((item) => item.id === setting.id)) {
    selectedSettings.value = selectedSettings.value.filter((item) => item.id !== setting.id);
  } else {
    selectedSettings.value = [...selectedSettings.value, setting];
  }
};
</script>
