<template>
  <div
    class="pt-5 pb-2 border-t border-shade-eb cursor-pointer hover:bg-shade-fa"
    @click="onSelectRole"
  >
    <div class="flex items-start justify-between mb-2">
      <span class="font-bold max-w-60">{{ auction.title }}</span>
      <BasicCheckbox :checked="checked" @change="changeSelection" />
    </div>

    <div class="flex items-center justify-between mb-2">
      <span>{{ formatDateTime(auction.startAt) }} / {{ formatDateTime(auction.endAt) }}</span>

      <span class="font-bold typo-h5">{{ bidLabel }}</span>
    </div>

    <div class="flex items-center justify-between">
      <BasicBlockquote>{{ auction.lots }} lots</BasicBlockquote>
      <BasicBadge :label="auction.status" :status="auctionStattus" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuctionModel } from '~/resources/models';
import { AuctionsTab } from '~/pages/auctions/[[id]]/types';
import { AuctionStatus } from '~/resources/enums';
import { BadgeStatus } from '~/components/basic/Badge/types';

const { formatDateTime } = useDateUtils();
const route = useRoute();

const props = defineProps({
  auction: {
    type: Object as PropType<AuctionModel>,
    required: true,
  },
  selectedAuctions: {
    type: Array as PropType<AuctionModel[]>,
    default: () => [],
  },
});

const emit = defineEmits(['toggleSelect']);

const checked = computed(() => {
  return props.selectedAuctions?.some((item) => item.id === props.auction.id);
});

const bidLabel = computed(() => {
  if (props.auction.bids) return `${props.auction.bids}s bid up`;
  return 'No bid up';
});

const auctionStattus = computed(() => {
  if (props.auction.status === AuctionStatus.Running) return BadgeStatus.Success;
  return BadgeStatus.Danger;
});

const changeSelection = () => {
  emit('toggleSelect');
};

const onSelectRole = () => {
  navigateTo({
    path: `/auctions/${props.auction.id}`,
    query: {
      tab: route.query.tab ?? AuctionsTab.General,
    },
  });
};
</script>
