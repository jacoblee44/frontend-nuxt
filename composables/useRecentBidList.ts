import { range } from 'lodash';
import { BidHistoryModel } from '~/resources/models/bid-history.model';

export const useRecentBidList = () => {
  const bidHistories = range(1, 10).map(
    (i) =>
      new BidHistoryModel({
        id: `${i}`,
        bidderName: 'Bidder 157',
        amount: 2100,
        byPhone: i % 4 === 2,
        country: 'DE',
        bidAt: '2022-05-23T15:12:12.887Z',
      }),
  );

  return {
    bidHistories,
  };
};
