<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div>
        <BasicCheckbox
          label="All Permissions"
          class="mb-2"
          :checked="checkedAll"
          @change="toggleCheckedAll"
        />

        <RolePermissionsTreeItem
          v-for="(item, index) in permissions"
          :key="item.id"
          :is-first="index === 0"
          :is-last="index === permissions.length - 1"
          :permission="item"
          :selected-permission-ids="selectedPermissionIds"
          @select="togglePermissionSelect"
        />
      </div>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard Changes</BasicButton>
      <BasicButton type="submit">Publish Changes</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePermissionList } from '~/composables/usePermissionList';

const { permissions, extractPermissionIds } = usePermissionList();
const allPermissionIds = extractPermissionIds(permissions);

const selectedPermissionIds: Ref<number[]> = ref([]);

const checkedAll = computed(() => {
  return (
    allPermissionIds.length > 0 && allPermissionIds.length === selectedPermissionIds.value.length
  );
});

const toggleCheckedAll = () => {
  if (checkedAll.value) {
    selectedPermissionIds.value = [];
  } else {
    selectedPermissionIds.value = allPermissionIds;
  }
};

const togglePermissionSelect = (permissionIds: number[]) => {
  permissionIds.forEach((permissionId) => {
    if (selectedPermissionIds.value.includes(permissionId)) {
      selectedPermissionIds.value = selectedPermissionIds.value.filter(
        (item) => item !== permissionId,
      );
    } else {
      selectedPermissionIds.value = [...selectedPermissionIds.value, permissionId];
    }
  });
};
</script>
