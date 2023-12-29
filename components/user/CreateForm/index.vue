<template>
  <div>
    <div class="flex items-end gap-7.5 pb-7.5">
      <div class="grid grid-cols-2 gap-x-5 flex-grow">
        <BasicInput class="mt-7" placeholder="Email *" />
        <BasicSelect
          v-model="role"
          :options="roleOptions"
          label="Role *"
          placeholder="Select role"
        />
      </div>

      <BasicSwitchButton v-model="mode" class="mb-1" :options="modeOptions" />
    </div>

    <div v-if="mode === 'create'">
      <div class="flex items-start gap-15 border-y border-shade-93 py-7.5">
        <div class="flex-shrink-0">
          <p class="font-bold mb-2">Select Photo</p>
          <BasicImageDropzone
            v-model="avatar"
            class="w-25 h-25"
            clearable
            :placeholder-icon-size="60"
          />
        </div>

        <div class="flex items-end gap-7.5 flex-grow">
          <BasicSelect
            v-model="accountType"
            :options="accountTypeOptions"
            class="flex-grow"
            label="Account Type"
            placeholder="Select account type"
          />

          <BasicSwitchButton v-model="accountStatus" class="mb-1" :options="accountStatusOptions" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-15 mt-7.5">
        <div>
          <h3 class="font-bold mb-5">User Information</h3>
          <div class="grid grid-cols-6 items-end gap-x-7.5 gap-y-5">
            <BasicSelect
              v-model="title"
              :options="titleOptions"
              class="col-span-6"
              label="Title"
              placeholder="Select title"
            />

            <BasicInput class="col-span-3" placeholder="First Name *" />
            <BasicInput class="col-span-3" placeholder="Last Name *" />

            <BasicSelect
              v-model="year"
              :options="yearOptions"
              class="col-span-2"
              label="Birthday"
              placeholder="Year"
            />
            <BasicSelect
              v-model="month"
              :options="monthOptions"
              class="col-span-2"
              placeholder="Month"
            />
            <BasicSelect
              v-model="day"
              :options="dayOptions"
              class="col-span-2"
              placeholder="Date"
            />

            <BasicPhoneNumberInput v-model="phoneNumber" class="col-span-6" default-country="DE" />
          </div>
        </div>

        <div>
          <h3 class="font-bold mb-12">Address</h3>
          <div class="grid grid-cols-2 items-end gap-x-7.5 gap-y-5">
            <BasicInput class="col-span-2" placeholder="Address line 1" />
            <BasicInput class="col-span-2" placeholder="Address line 2" />
            <BasicInput placeholder="Zip Code" />
            <BasicInput placeholder="City" />

            <BasicCountrySelect
              v-model="country"
              class="col-span-2"
              label="Country"
              placeholder="Select country"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISwitchButtonOption } from '~/components/basic/SwitchButton/types';
import type { ISelectOption } from '~/components/basic/Select/types';

const role = ref('');
const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
];

const mode = ref('create');
const modeOptions: ISwitchButtonOption[] = [
  { label: 'Create', value: 'create' },
  { label: 'Invite', value: 'invite' },
];

const accountType = ref('');
const accountTypeOptions = [
  { label: 'Account 1', value: 'Account 1' },
  { label: 'Account 2', value: 'Account 2' },
];

const accountStatus = ref('active');
const accountStatusOptions: ISwitchButtonOption[] = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
];

const title = ref('');
const titleOptions: ISelectOption[] = [
  { label: 'Title 1', value: 'title 1' },
  { label: 'Title 2', value: 'title 2' },
];

const year = ref('');
const yearOptions: ISelectOption[] = [
  { label: '2023', value: '2023' },
  { label: '2022', value: '2022' },
  { label: '2021', value: '2021' },
];

const month = ref('');
const monthOptions: ISelectOption[] = [];
for (let i = 1; i <= 12; i++) {
  monthOptions.push({
    label: `${i}`.padStart(2, '0'),
    value: `${i}`.padStart(2, '0'),
  });
}

const day = ref('');
const dayOptions: ISelectOption[] = [];
for (let i = 1; i <= 31; i++) {
  dayOptions.push({
    label: `${i}`.padStart(2, '0'),
    value: `${i}`.padStart(2, '0'),
  });
}

const avatar = ref('');
const country = ref('');
const phoneNumber = ref('');
</script>
