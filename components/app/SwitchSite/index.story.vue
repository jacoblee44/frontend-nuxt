<template>
  <Story title="App/SwitchSite" :layout="{ type: 'grid', width: 500 }">
    <Variant title="AppSwitchSite">
      <div class="bg-primary">
        <AppSwitchSite />
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import AppSwitchSite from './index.vue';
</script>
