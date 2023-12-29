<template>
  <Story title="App/TableToolbar">
    <Variant title="Normal State">
      <AppTableToolbar :checked-all="checkedAll" @checked-all="toggleCheckedAll" />
    </Variant>

    <Variant title="Expanded">
      <AppTableToolbar expanded />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import AppTableToolbar from './index.vue';

const checkedAll = ref(false);

const toggleCheckedAll = () => {
  checkedAll.value = !checkedAll.value;
};
</script>
