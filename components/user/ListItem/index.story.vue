<template>
  <Story title="User/ListItem">
    <Variant title="UserListItem">
      <UserListItem
        v-model:checked="checked"
        :user="user"
        @update:checked="logEvent('Checked', { checked: $event })"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import { UserModel } from '~/resources/models';

const user = new UserModel({
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  site: 'Hof Thelker',
  avatar: '/images/avatars/placeholder.png',
  role: 'Super Admin',
  countryCode: 'us',
  countryName: 'USA',
  active: true,
});

const checked = ref(false);
</script>
