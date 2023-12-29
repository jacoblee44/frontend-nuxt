<template>
  <div>
    <div class="flex items-center w-full gap-5 mb-8">
      <div class="flex-grow h-[1px] bg-shade-93"></div>

      <BasicEditBox
        v-if="isEditMode"
        v-model="teamName"
        @save="onUpdateTeamName"
        @cancel="stopEdit"
      />
      <div v-else class="edit-team" @click="startEdit">
        <span class="font-bold">{{ teamName }}</span>
      </div>

      <div class="flex-grow h-[1px] bg-shade-93"></div>
    </div>

    <div class="grid grid-cols-2 gap-7.5">
      <SiteTeamsMemberCard
        v-for="member in team.members"
        :key="member.id"
        :member="member"
        @remove="() => $emit('remove-member', member)"
        @update="onUpdateMember"
      />

      <SiteTeamsMemberCard @save="onAddMember" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamModel, TeamMemberModel } from '~/resources/models';

const props = defineProps({
  team: {
    type: Object as PropType<TeamModel>,
    required: true,
  },
});

const emit = defineEmits(['update-name', 'add-member', 'remove-member', 'update-member']);
const isEditMode = ref(false);
const teamName = computed(() => props.team.name);

const startEdit = () => {
  isEditMode.value = true;
};

const stopEdit = () => {
  isEditMode.value = false;
};

const onUpdateTeamName = (event: string) => {
  emit('update-name', event);
  stopEdit();
};

const onUpdateMember = (event: TeamMemberModel) => {
  emit('update-member', event);
};

const onAddMember = (event: TeamMemberModel) => {
  emit('add-member', event);
};
</script>
