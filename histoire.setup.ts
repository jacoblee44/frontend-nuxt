import { defineSetupVue3 } from '@histoire/plugin-vue';
import './assets/css/main.scss';
import { clickOutsideBeforeMountHook, clickOutsideUnmountedHook } from '~/plugins/click-outside';

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.provide('test', 'hello');
  app.directive('click-outside', {
    beforeMount: clickOutsideBeforeMountHook,
    unmounted: clickOutsideUnmountedHook,
  });
});
