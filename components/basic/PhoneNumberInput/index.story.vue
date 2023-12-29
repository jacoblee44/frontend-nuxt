<template>
  <Story title="Basic/PhoneNumberInput">
    <Variant title="PhoneNumberInput">
      <BasicPhoneNumberInput
        v-model="phoneNumber"
        default-country="DE"
        @validate="onValidate"
        @change-country="logEvent('Country changed', { value: $event })"
        @update:model-value="logEvent('Value changed', { value: $event })"
      />
      <div>Phone number: {{ phoneNumber }}</div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client';

const phoneNumber = ref('');
const valid = ref(false);

const onValidate = (isValid: boolean) => {
  valid.value = isValid;
  logEvent('onValidate', { isValid });
};
</script>
