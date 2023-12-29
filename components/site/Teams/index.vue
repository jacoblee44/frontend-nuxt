<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div v-if="loading" class="grid grid-cols-2 gap-7.5">
        <SkeletonCard v-for="i in 6" :key="i" />
      </div>

      <template v-else>
        <SiteTeamsCard
          v-for="team in teams"
          :key="team.id"
          :team="team"
          class="mb-7.5"
          @add-member="addMember(team.id, $event)"
          @remove-member="removeMember(team.id, $event)"
          @update-member="updateMember(team.id, $event)"
          @update-name="updateTeamName(team.id, $event)"
        />

        <SiteTeamsCreate @create-team="createTeam($event)" />
      </template>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard</BasicButton>
      <BasicButton type="submit">Publish</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { loading, teams, createTeam, updateTeamName, addMember, removeMember, updateMember } =
  useTeamsEdit('0');
</script>
