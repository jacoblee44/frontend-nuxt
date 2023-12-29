<template>
  <div
    class="pt-5 pb-4.5 border-t border-shade-eb cursor-pointer hover:bg-shade-fa"
    @click="onSelectRole"
  >
    <div class="flex items-center justify-between">
      <span class="font-bold">{{ role.name }}</span>
      <BasicCheckbox :checked="checked" @change="changeSelection" />
    </div>

    <p class="text-sm">{{ role.assignedCount }} users assigned</p>
  </div>
</template>

<script setup lang="ts">
import { RoleModel } from '~/resources/models';
import { ROLE_TAB } from '~/components/role/types';

const route = useRoute();

const props = defineProps({
  role: {
    type: Object as PropType<RoleModel>,
    required: true,
  },
  selectedRoles: {
    type: Array as PropType<RoleModel[]>,
    default: () => [],
  },
});

const emit = defineEmits(['toggleSelect']);

const checked = computed(() => {
  return props.selectedRoles?.some((item) => item.id === props.role.id);
});

const changeSelection = () => {
  emit('toggleSelect');
};

const onSelectRole = () => {
  navigateTo({
    path: `/roles/${props.role.id}`,
    query: {
      tab: route.query.tab ?? ROLE_TAB.PERMISSIONS,
    },
  });
};
</script>
