<template>
  <Story title="Site/TeamsMemberCard">
    <Variant title="Edit Mode">
      <SiteTeamsMemberCard
        :member="editableMember"
        @save="logEvent('save', $event)"
        @update="logEvent('update', $event)"
        @remove="logEvent('remove', $event)"
      />
    </Variant>

    <Variant title="Add New Member">
      <SiteTeamsMemberCard
        @save="logEvent('save', $event)"
        @update="logEvent('update', $event)"
        @remove="logEvent('remove', $event)"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import { TeamMemberModel } from '~/resources/models';

const editableMember = ref(
  new TeamMemberModel({
    id: 1,
    name: 'John Doe',
    title: 'Director',
    phone: '+1234567890',
    email: 'john.doe@example.com',
    avatar: '/path/to/avatar.jpg',
  }),
);
</script>
