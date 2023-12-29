import { range } from 'lodash';
import { LotModel } from '~/resources/models';
import { LotStatus } from '~/resources/enums';

export const useLotList = () => {
  const lots = range(1, 10).map(
    (i) =>
      new LotModel({
        id: `${i}`,
        title: "Cornet's Creation",
        type: 'Lot 2',
        image: '/images/lots/lot-1.png',
        fillyBy: 'Renate-Utopia / Sandro Hit',
        startingBid: 2500,
        status: i % 3 === 1 ? LotStatus.BidUp : i % 3 === 2 ? LotStatus.Withdraw : LotStatus.PreBid,
        serial: 'DE 431316909619',
        bids: 14,
        bidders: 10,
        auctionStart: '2022-05-23T15:12:12.887Z',
        active: i % 3 !== 2,
      }),
  );

  return {
    lots,
  };
};
