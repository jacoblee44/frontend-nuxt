<template>
  <Story title="App/Header">
    <Variant title="Dashboard Header">
      <Header>
        <h1 class="font-bold text-dark text-2xl opacity-50">Dashboard</h1>
      </Header>
    </Variant>

    <Variant title="Products Header">
      <Header>
        <BasicEditBox v-model="productName" input-class="text-2xl" />
      </Header>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import Header from './index.vue';

const productName = ref('Painting');
</script>
