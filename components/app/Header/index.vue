<template>
  <div class="bg-white pt-7 px-7.5" :class="{ 'pb-7': !$slots.tabs }">
    <div class="flex items-center justify-between" :class="{ 'mb-6.5': !!$slots.tabs }">
      <div class="flex items-center mr-auto">
        <slot />
      </div>

      <slot name="actions" />
    </div>

    <slot name="tabs" />
  </div>
</template>
<script setup lang="ts"></script>
