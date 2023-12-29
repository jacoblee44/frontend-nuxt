<template>
  <div class="flex">
    <AppSubSidebar title="User Roles">
      <template #actions>
        <BasicIconButton class="!w-10 !h-7.5" @click="navigateToCreateRole">
          <i class="new-h24-icon-add text-white text-[14px] w-3.5 h-3.5"></i>
        </BasicIconButton>
      </template>

      <template #subTitle>
        <AppTableToolbar :checked-all="checkedAll" @check-all="toggleCheckedAll" />
      </template>

      <div>
        <RoleSidebarItem
          v-for="item in roles"
          :key="item.id"
          :role="item"
          :selected-roles="selectedRoles"
          @toggle-select="toggleSelectRole(item)"
        />
      </div>
    </AppSubSidebar>

    <div class="flex-1 flex flex-col h-screen">
      <AppHeader class="flex-shrink-0">
        <BasicEditBox v-model="roleName" input-class="text-2xl" placeholder="User Role" />

        <template #tabs>
          <BasicTabs :active-tab="activeTab" :tabs="tabs" @change-tab="changeTab" />
        </template>
      </AppHeader>

      <RolePermissions v-if="activeTab === ROLE_TAB.PERMISSIONS" />
      <RoleUsers v-if="activeTab === ROLE_TAB.USERS" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROLE_TAB } from './types';
import { RoleModel } from '~/resources/models';
import type { ITabItem } from '~/components/basic/Tabs/types';

const route = useRoute();

const { roles } = useRoleList();

const roleName = ref('');
const selectedRoles: Ref<RoleModel[]> = ref([]);

const selectedRole = computed(() => {
  return roles.find((item) => item.id === route.params.id);
});

const tabs: ITabItem[] = [
  { label: 'Permissions', value: ROLE_TAB.PERMISSIONS },
  { label: 'Users', value: ROLE_TAB.USERS },
];

const activeTab = computed({
  get: () => {
    if (route.query?.tab === ROLE_TAB.USERS) {
      return route.query?.tab;
    }
    return ROLE_TAB.PERMISSIONS;
  },
  set: (value) => {
    navigateTo({
      path: selectedRole.value ? `/roles/${selectedRole.value.id}` : '/roles',
      query: {
        tab: value,
      },
      replace: true,
    });
  },
});

const checkedAll = computed(() => {
  return roles.length !== 0 && selectedRoles.value.length === roles.length;
});

const toggleCheckedAll = () => {
  if (checkedAll.value) {
    selectedRoles.value = [];
  } else {
    selectedRoles.value = roles;
  }
};
const changeTab = (value: ROLE_TAB) => {
  activeTab.value = value;
};

const toggleSelectRole = (role: RoleModel) => {
  if (selectedRoles.value.some((item) => item.id === role.id)) {
    selectedRoles.value = selectedRoles.value.filter((item) => item.id !== role.id);
  } else {
    selectedRoles.value = [...selectedRoles.value, role];
  }
};

const navigateToCreateRole = () => {
  navigateTo('/roles');
};

watch(selectedRole, () => {
  roleName.value = selectedRole.value?.name ?? '';
});
</script>
