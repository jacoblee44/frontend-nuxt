<template>
  <Story title="Site/TeamsCard">
    <Variant title="Default">
      <SiteTeamsCard
        :team="team"
        @update-name="logEvent('update-name', $event)"
        @update-team="logEvent('update-team', $event)"
        @add-member="logEvent('add-member', $event)"
        @remove-member="logEvent('remove-member', $event)"
        @update-member="logEvent('update-member', $event)"
        @create-team="logEvent('create-team', $event)"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import { TeamModel } from '~/resources/models';

const teamData: Partial<TeamModel> = {
  id: 1,
  name: 'Board',
  members: [
    {
      id: 1,
      name: 'Wilken Treu',
      title: 'Managing Director',
      phone: '+49 170 98999999',
      email: 'wtreu@hannoveraner.com',
      avatar: '/images/avatar-1.png',
    },
    {
      id: 2,
      name: 'Wilken Treu',
      title: 'Managing Director',
      phone: '+49 170 98999999',
      email: 'wtreu@hannoveraner.com',
      avatar: '/images/avatar-1.png',
    },
    {
      id: 3,
      name: 'Wilken Treu',
      title: 'Managing Director',
      phone: '+49 170 98999999',
      email: 'wtreu@hannoveraner.com',
      avatar: '/images/avatar-1.png',
    },
  ],
};

const team = new TeamModel(teamData);
</script>
