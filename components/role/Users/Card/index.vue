<template>
  <div class="bg-white rounded-0.5 p-5 flex items-start">
    <div
      class="w-21.5 h-21.5 shrink-0 bg-cover bg-center mr-2.5"
      :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
    />

    <div class="grow">
      <div class="flex items-center justify-between mb-6.5">
        <div class="flex items-center gap-5">
          <span class="typo-h4 font-bold">{{ user.fullName }}</span>

          <div class="flex items-center gap-1">
            <span class="fi fi-us rounded-sm" />
            <span class="typo-sm font-bold">{{ user.countryName }}</span>
          </div>
        </div>

        <IconTrash class="w-4 h-4 cursor-pointer text-accent hover:opacity-80" />
      </div>

      <div class="flex items-center justify-between">
        <span class="typo-h5 font-bold">{{ user.role }}</span>
        <span class="typo-h5">{{ user.title }}</span>
      </div>

      <div class="flex items-center justify-between">
        <span class="typo-h5">{{ user.email }}</span>
        <BasicBadge :label="statusLabel" :status="userStatus" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserModel } from '~/resources/models';

const props = defineProps({
  user: {
    type: Object as PropType<UserModel>,
    required: true,
  },
});

const userStatus = computed(() => {
  if (props.user?.active) {
    return 'success';
  }

  return 'danger';
});

const statusLabel = computed(() => {
  if (props.user?.active) {
    return 'Active';
  }

  return 'Inactive';
});
</script>
