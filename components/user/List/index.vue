<template>
  <div>
    <UserListItem
      v-for="user in users"
      :key="user.id"
      :user="user"
      :checked="selectedIds.includes(user.id)"
      @update:checked="onToggleSelect(user)"
    />
  </div>
</template>

<script setup lang="ts">
import { UserModel } from '~/resources/models';

const props = defineProps({
  users: {
    type: Array as PropType<UserModel[]>,
    required: true,
  },
  selectedIds: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  multiSelect: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:selectedIds']);

const onToggleSelect = (user: UserModel) => {
  const checked = !props.selectedIds?.includes(user.id);
  if (!props.multiSelect) {
    if (checked) {
      emit('update:selectedIds', [user.id]);
    } else {
      emit('update:selectedIds', []);
    }
  } else if (checked) {
    emit('update:selectedIds', [...props.selectedIds, user.id]);
  } else {
    emit('update:selectedIds', props.selectedIds?.filter((id) => id !== user.id));
  }
};
</script>
