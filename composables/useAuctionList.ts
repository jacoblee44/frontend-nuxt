import { AuctionModel } from '~/resources/models';
import { AuctionStatus } from '~/resources/enums';

const data = [
  {
    id: '1',
    title: '29th Westphalian Online Auction - Foals',
    lots: 46,
    bids: 360,
    status: AuctionStatus.Running,
    startAt: '2022-05-22T15:12:12.887Z',
    endAt: '2022-05-23T15:12:12.887Z',
  },
  {
    id: '2',
    title: '29th Westphalian Online Auction - Foals 2',
    lots: 46,
    bids: 0,
    status: AuctionStatus.Running,
    startAt: '2022-05-22T15:12:12.887Z',
    endAt: '2022-05-23T15:12:12.887Z',
  },
  {
    id: '3',
    title: '29th Westphalian Online Auction - Foals 3',
    lots: 46,
    bids: 90,
    status: AuctionStatus.Ended,
    startAt: '2022-05-22T15:12:12.887Z',
    endAt: '2022-05-23T15:12:12.887Z',
  },
  {
    id: '4',
    title: '29th Westphalian Online Auction - Foals 4',
    lots: 46,
    bids: 90,
    status: AuctionStatus.Ended,
    startAt: '2022-05-22T15:12:12.887Z',
    endAt: '2022-05-23T15:12:12.887Z',
  },
  {
    id: '5',
    title: '29th Westphalian Online Auction - Foals 5',
    lots: 46,
    bids: 90,
    status: AuctionStatus.Ended,
    startAt: '2022-05-22T15:12:12.887Z',
    endAt: '2022-05-23T15:12:12.887Z',
  },
];

export const useAuctionList = () => {
  const auctions = data.map((item) => new AuctionModel(item));

  return {
    auctions,
  };
};
