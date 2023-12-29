<template>
  <Story title="Basic/EditBox">
    <Variant title="BasicEditBox with control">
      <div class="flex items-center">
        <BasicEditBox
          v-model="productName"
          @save="logEvent('save', { event: $event })"
          @cancel="logEvent('cancel', {})"
        />
      </div>
    </Variant>

    <Variant title="BasicEditBox with custom input class">
      <div class="flex items-center">
        <BasicEditBox
          placeholder="Enter attribute name"
          input-class="font-bold text-base text-2xl opacity-100"
          @save="logEvent('save', { event: $event })"
          @cancel="logEvent('cancel', {})"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';
import BasicEditBox from './index.vue';

const productName = ref('Painting');
</script>
