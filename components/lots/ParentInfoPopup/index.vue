<template>
  <BasicPopup class="w-86 p-5" x-pos="center" y-pos="above" :arrow="arrow" anchor-pos="center">
    <template #button="slotData">
      <slot v-if="$slots.button" name="button" v-bind="slotData" />
      <i class="new-h24-icon-edit text-accent right-2.5 top-2 absolute hover:op80" />
    </template>

    <template #default="{ close }">
      <div>
        <slot name="header" :title="title" :close="close">
          <div class="flex items-center justify-between pb-4 mb-4">
            <h3 class="font-bold">{{ title }}</h3>
            <i class="new-h24-icon-close text-sm cursor-pointer" @click="close()" />
          </div>
        </slot>
        <div class="flex flex-col">
          <BasicInput v-model="primes" placeholder="Horse Primes" class="mb-5" />
          <BasicInput v-model="name" placeholder="Name" class="mb-5" />
          <BasicInput v-model="lifeId" placeholder="Life ID" class="mb-5" />
          <div class="mb-5">
            <span class="mb-1.5">Breed</span>
            <BasicSelect v-model="breed" placeholder="Choose option" :options="BREED_OPTIONS" />
          </div>
          <div>
            <span class="mb-1.5">Color</span>
            <BasicSelect v-model="color" placeholder="Choose option" :options="BREED_OPTIONS" />
          </div>
        </div>

        <slot name="actions" :apply="onApply" :close="close">
          <div class="flex justify-center mt-7">
            <IconCheckOutline
              class="h-6 w-8 text-accent cursor-pointer hover:opacity-70"
              @click="close()"
            />
          </div>
        </slot>
      </div>
    </template>
  </BasicPopup>
</template>

<script setup lang="ts">
import type { PopupAnchorPosition } from '~/components/basic/Popup/types';
import { BREED_OPTIONS } from '~/components/lots/ParentInfoPopup/constants';

defineProps({
  title: {
    type: String,
    default: 'Parents Information',
  },
  arrow: {
    type: Boolean,
    default: true,
  },
  anchorPos: {
    type: String as PropType<PopupAnchorPosition>,
    default: 'center',
  },
});

const emit = defineEmits(['apply']);

const onApply = (close: VoidFunction) => {
  emit('apply', close);
};

const name = ref('');
const breed = ref('');
const color = ref('');
const lifeId = ref('');
const primes = ref('');
</script>
