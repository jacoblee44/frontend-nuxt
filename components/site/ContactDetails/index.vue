<template>
  <div class="flex flex-col h-full">
    <div class="h-0 flex-grow overflow-auto py-7 px-7.5">
      <div class="w-full h-102.5 mb-7.5 relative">
        <LMap
          ref="map"
          :zoom="zoom"
          :center="[47.21322, -1.559482]"
          :options="{ attributionControl: false, zoomControl: false }"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          />

          <LMarker :lat-lng="{ lat: 47.21322, lng: -1.559482 }">
            <LTooltip>{{ address }}</LTooltip>
          </LMarker>
        </LMap>

        <div
          class="absolute top-5 left-5 z-[400] bg-white rounded-sm border border-shade-97/25 py-2.5 pl-5 pr-4"
        >
          <BasicEditBox v-model="address" :has-border="false" input-class="font-normal" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-7.5">
        <BasicEditBox v-model="phone" :has-border="false" input-class="font-normal" />

        <BasicEditBox v-model="email" :has-border="false" input-class="font-normal" />
      </div>
    </div>

    <div class="bg-white flex items-center h-17.5 px-7.5 gap-5 flex-shrink-0">
      <BasicButton variant="outline">Discard</BasicButton>
      <BasicButton>Publish</BasicButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const zoom = ref(20);
const phone = ref('+49 170 98999999');
const email = ref('online-auction@hannoveraner.com');
const address = ref('Lindhooper Straße 92 27283 Verden/Aller');
</script>
