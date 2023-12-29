<template>
  <Story title="Basic/Checkbox">
    <Variant title="Checkbox with label">
      <BasicCheckbox label="Check" :checked="checked1" @change="handleChangeCheck('checkbox1')" />
    </Variant>

    <Variant title="Checkbox without label">
      <BasicCheckbox :checked="checked2" @change="handleChangeCheck('checkbox2')" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const checked1 = ref(false);
const checked2 = ref(false);

const handleChangeCheck = (field: string) => {
  logEvent('Change', `Checkbox is changed.`);
  if (field === 'checkbox1') {
    checked1.value = !checked1.value;
  }

  if (field === 'checkbox2') {
    checked2.value = !checked2.value;
  }
};
</script>
