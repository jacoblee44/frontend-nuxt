<template>
  <div class="rounded-sm bg-shade-eb py-3.5 px-5 mt-7.5">
    <div class="pb-3.5 border-b border-shade-97/50">
      <p class="font-bold">Parentage</p>
    </div>
    <div class="grid grid-cols-4 gap-7.5 my-5">
      <template v-for="(item, index) in parentageOptions" :key="index">
        <LotsParentageItem :item="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IParentageItem } from '~/components/lots/Parentage/types';

const parentageOptions: IParentageItem[] = [
  {
    name: 'Dynamic Dream',
    description: 'Dark bay Westphalian riding horse',
    rowIndex: 0,
    rowSpan: 4,
    items: [
      {
        name: 'Dream Boy',
        rowIndex: 0,
        rowSpan: 2,
        items: [
          {
            name: 'Sir Donnerhall I',
            rowIndex: 0,
            rowSpan: 1,
            items: [{ name: 'Sandro Hit', rowIndex: 0, rowSpan: 1 }],
          },
          {
            name: 'Annabell',
            rowIndex: 1,
            rowSpan: 1,
            items: [{ name: 'Sandro Hit', rowIndex: 1, rowSpan: 1 }],
          },
        ],
      },
      {
        name: 'Safira',
        rowIndex: 2,
        rowSpan: 2,
        items: [
          {
            name: 'Sir Donnerhall I',
            rowIndex: 2,
            rowSpan: 1,
            items: [{ name: 'Sandro Hit', rowIndex: 2, rowSpan: 1 }],
          },
          {
            name: 'Annabell',
            rowIndex: 3,
            rowSpan: 1,
            items: [{ name: 'Sandro Hit', rowIndex: 3, rowSpan: 1 }],
          },
        ],
      },
    ],
  },
  {
    name: 'Dynamic Dream',
    description: 'Dark bay Westphalian riding horse',
    rowIndex: 4,
    rowSpan: 4,
    items: [
      {
        name: 'Dream Boy',
        rowIndex: 4,
        rowSpan: 2,
        items: [
          {
            name: 'Sir Donnerhall I',
            rowIndex: 4,
            rowSpan: 1,
            items: [{ name: 'Sandro Hit', rowIndex: 4, rowSpan: 1 }],
          },
          {
            name: 'Annabell',
            rowIndex: 5,
            rowSpan: 1,
            items: [{ name: 'Sandro Hit', rowIndex: 5, rowSpan: 1 }],
          },
        ],
      },
      {
        name: 'Safira',
        rowIndex: 6,
        rowSpan: 2,
        items: [
          {
            name: 'Sir Donnerhall I',
            rowIndex: 6,
            rowSpan: 1,
            items: [{ name: 'Sandro Hit', rowIndex: 6, rowSpan: 1 }],
          },
          {
            name: 'Annabell',
            rowIndex: 7,
            rowSpan: 1,
            items: [{ name: 'Sandro Hit', rowIndex: 7, rowSpan: 1 }],
          },
        ],
      },
    ],
  },
];
</script>
