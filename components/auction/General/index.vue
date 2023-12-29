<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div class="flex items-end gap-2.5 mb-2">
        <span class="font-bold">Slug</span>
        <IconQuestionCircle class="w-3 h-3 mb-0.5" />
      </div>

      <BasicEditBox v-model="slug" input-class="max-w-full font-normal" :has-border="false" />

      <div class="mt-7 pt-7.5 border-t border-shade-93/50 flex gap-15">
        <div class="grow">
          <BasicSelect
            v-model="organization"
            label="Select Organization"
            class="mb-7.5"
            :options="organizationOptions"
          />

          <div class="bg-white rounded-sm shadow-organization-logo">
            <div class="bg-red-a1 rounded-t-sm p-5 flex items-center gap-5">
              <img src="/images/organizations/org_logo.png" class="h-7 w-auto" alt="" />
              <BasicIconButton variant="secondary" class="!w-6 !h-6">
                <i class="new-h24-icon-edit text-[14px] w-3.5 h-3.5"></i>
              </BasicIconButton>
            </div>

            <div class="py-6 px-5">
              <BasicImageDropzone
                v-model="auctionImage"
                class="w-full h-102"
                clearable
                :placeholder-icon-size="126"
              />
            </div>
          </div>
        </div>

        <div class="w-112.5">
          <h2 class="font-bold mb-4">Trailer</h2>
          <div
            class="flex items-center justify-center border border-shade-97/25 w-full h-62 rounded-sm bg-white mb-8"
          >
            <p class="typo-h5">Paste YouTube link here</p>
          </div>

          <div class="flex items-center justify-between mb-5">
            <span>Visible On Parent Site</span>
            <BasicSwitch v-model="visibleParentSite" />
          </div>

          <div class="flex items-center justify-between mb-7.5">
            <span>Visible On Child Site</span>
            <BasicSwitch v-model="visibleChildSite" />
          </div>

          <div class="pt-7.5 border-t border-shade-93/50">
            <div class="flex items-center justify-between mb-5">
              <span>Is Pre Bid Auction</span>
              <BasicSwitch v-model="isPreBid" />
            </div>

            <div class="flex items-center justify-between mb-5">
              <span>Has two parts</span>
              <BasicSwitch v-model="hasTwoParts" />
            </div>

            <div class="flex items-center justify-between mb-5">
              <span>Display "hosted by" label</span>
              <BasicSwitch v-model="showHostedLabel" />
            </div>

            <div class="flex items-center justify-between mb-5">
              <span>Show logo on child site</span>
              <BasicSwitch v-model="showLogoOnChild" />
            </div>

            <div class="flex items-center justify-between mb-5">
              <span>Show hammer price</span>
              <BasicSwitch v-model="showHammerPrice" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard Changes</BasicButton>
      <BasicButton type="submit">Publish Changes</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISelectOption } from '~/components/basic/Select/types';
import BasicIconButton from '~/components/basic/IconButton/index.vue';

const slug = ref('https://horse24.com/westfalisches-pferdestammbuch/29th-westphalian-foals');
const organization: Ref<string | null> = ref(null);
const auctionImage = ref('');

const visibleParentSite = ref(true);
const visibleChildSite = ref(true);
const isPreBid = ref(true);
const hasTwoParts = ref(true);
const showHostedLabel = ref(true);
const showLogoOnChild = ref(true);
const showHammerPrice = ref(true);

const organizationOptions: ISelectOption[] = [
  { label: 'Westfälisches Pferdestammbuch e.V.', value: '1' },
  { label: 'Westfälisches Pferdestammbuch e.V. 1', value: '2' },
  { label: 'Westfälisches Pferdestammbuch e.V. 2', value: '3' },
];
</script>
