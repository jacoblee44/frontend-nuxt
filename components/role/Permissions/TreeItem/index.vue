<template>
  <div
    class="relative"
    :class="{
      'py-1.5': !isFirst,
      'py-1': isFirst,
    }"
  >
    <div class="flex items-center">
      <div
        class="w-[15px] h-[15px] border-2 border-primary flex items-center justify-center rounded-sm mr-4 flex-shrink-0 cursor-pointer hover:opacity-80"
        @click="toggleOpen"
      >
        <IconPlus v-if="!isOpen" />
        <IconMinus v-else />
      </div>

      <div class="flex items-center gap-2.5">
        <div class="h-[1px] w-2 bg-shade-93" />
        <BasicCheckbox
          :label="permission.name"
          :checked="isSelected"
          @change="selectParentPermission"
        />
      </div>
    </div>

    <div
      class="absolute w-[1px] bg-shade-93 top-0 left-[31px]"
      :class="{ 'h-full': !isLast, 'h-1/2 top': isLast }"
    />

    <div v-if="isOpen && permission.items && permission.items.length > 0" class="pl-12.5 pt-2.5">
      <RolePermissionsTreeItem
        v-for="(item, index) in permission.items"
        :key="item.id"
        :is-first="index === 0"
        :is-last="index === permission.items.length - 1"
        :permission="item"
        :selected-permission-ids="selectedPermissionIds"
        @select="selectChildPermission"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPermission } from '~/resources/interfaces';

const props = defineProps({
  permission: {
    type: Object as PropType<IPermission>,
    required: true,
  },
  isFirst: {
    type: Boolean,
    default: false,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
  selectedPermissionIds: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
});

const emit = defineEmits(['select']);

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const isSelected = computed(() => {
  if (props.permission?.items) {
    return props.permission.items.every((item) => props.selectedPermissionIds.includes(item.id));
  }

  return props.selectedPermissionIds.includes(props.permission?.id);
});

const selectParentPermission = () => {
  if (props.permission?.items) {
    const permissionIds = props.permission.items.map((item) => item.id);
    emit('select', permissionIds);
  } else {
    emit('select', [props.permission?.id]);
  }
};

const selectChildPermission = (permissionIds: number[]) => {
  emit('select', permissionIds);
};
</script>
