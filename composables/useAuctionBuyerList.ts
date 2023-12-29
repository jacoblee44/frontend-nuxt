import { range } from 'lodash';
import { AuctionBuyerModel, AuctionModel, LotModel } from '~/resources/models';
import { LotStatus, PaymentStatus } from '~/resources/enums';

export const useAuctionBuyerList = () => {
  const auctionBuyers = range(1, 10).map(
    (i) =>
      new AuctionBuyerModel({
        id: `${i}`,
        name: 'johndoe',
        amount: 2500,
        status: i % 2 === 1 ? PaymentStatus.Paid : PaymentStatus.Pending,
        auction: new AuctionModel({
          title: "Cornet's Creation",
        }),
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
    auctionBuyers,
  };
};
