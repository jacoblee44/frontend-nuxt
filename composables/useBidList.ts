import { range } from 'lodash';
import { BidModel, LotModel } from '~/resources/models';
import { BidType, LotStatus } from '~/resources/enums';

export const useBidList = () => {
  const bids = range(1, 10).map(
    (i) =>
      new BidModel({
        id: `${i}`,
        bidderName: 'johndoe',
        amount: 2500,
        type: i % 3 === 1 ? BidType.Direct : BidType.Maximum,
        maxAmount: 3000,
        createdAt: '2022-05-23T15:12:12.887Z',
        lot: new LotModel({
          id: `${i}`,
          title: "Cornet's Creation",
          type: 'Lot 2',
          image: '/images/lots/lot-1.png',
          fillyBy: 'Renate-Utopia / Sandro Hit',
          startingBid: 2500,
          status: LotStatus.BidUp,
          auctionStart: '2022-05-23T15:12:12.887Z',
          bids: 14,
          bidders: 10,
          serial: 'DE 431316909619',
        }),
      }),
  );

  return {
    bids,
  };
};
