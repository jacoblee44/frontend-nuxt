<template>
  <div>
    <div class="flex items-center w-full gap-5 mb-8">
      <div class="flex-grow h-[1px] bg-shade-93"></div>

      <div
        v-if="!isEditMode"
        class="flex items-center gap-2.5 flex-shrink-0 border-b border-shade-70 border-dashed pb-0.5 cursor-pointer hover:opacity-80"
        @click="startEdit"
      >
        <i class="new-h24-icon-add text-[14px] w-3.5 h-3.5"></i>
        <span class="font-bold">{{ $t('sites.team.add_team_division') }}</span>
      </div>

      <BasicEditBox
        v-else
        v-model="teamName"
        :default-editable="true"
        :placeholder="$t('sites.team.add_team_division')"
        @save="onCreateTeam"
        @cancel="stopEdit"
      />

      <div class="flex-grow h-[1px] bg-shade-93"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['create-team']);
const isEditMode = ref(false);
const teamName = ref('');

const startEdit = () => {
  isEditMode.value = true;
};

const stopEdit = () => {
  isEditMode.value = false;
};

const onCreateTeam = (event: string) => {
  emit('create-team', event);
  stopEdit();
};
</script>
