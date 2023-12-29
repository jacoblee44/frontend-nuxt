<template>
  <Story title="Basic/FromToDatePicker">
    <Variant title="FromToDatePicker">
      <div class="flex justify-center p-10">
        <FromToDatePicker
          class="max-h-80"
          :datepicker-formatter="DATEPICKERFORMATTER"
          :from="from"
          :to="to"
          @update:from="(e) => (from = e)"
          @update:to="(e) => (to = e)"
        />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import FromToDatePicker from './index.vue';
import { DATEPICKERFORMATTER } from '~/components/user/LoginHistoryFilter/constants';
const from = ref('');
const to = ref('');
</script>
