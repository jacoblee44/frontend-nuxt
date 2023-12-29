<template>
  <div class="py-5 flex items-start border-t border-shade-eb">
    <div
      class="w-22 h-22 shrink-0 bg-cover bg-center mr-3"
      :style="{ backgroundImage: `url(${avatar})` }"
    />

    <div class="grow">
      <div class="flex items-center">
        <span class="typo-h4 font-bold">{{ user.fullName }}</span>
        <div class="flex items-center ml-5 gap-1">
          <span :class="`fi fi-${user.countryCode} rounded-sm`" />
          <span class="typo-sm font-bold">{{ user.countryName }}</span>
        </div>
        <BasicCheckbox class="ml-auto" :checked="checked" @change="checked = $event" />
      </div>
      <div class="mt-6.5 flex items-center justify-between">
        <span class="typo-h5 font-bold">{{ user.role }}</span>
        <span class="typo-h5">{{ user.site }}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="typo-h5">{{ user.email }}</span>
        <BasicBadge v-if="user.active" label="Active" status="success" />
        <BasicBadge v-if="!user.active" label="Inactive" status="danger" />
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
  checked: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:checked']);

const avatar = computed(() => props.user?.avatar || '/images/avatars/placeholder.png');

const checked = computed({
  get: () => props.checked,
  set: (val) => {
    emit('update:checked', val);
  },
});
</script>
