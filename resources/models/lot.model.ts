import { v4 as uuidv4 } from 'uuid';
import { LotStatus } from '~/resources/enums';

export class LotModel {
  id: string = uuidv4();
  title: string = '';
  type: string = '';
  image: string = '';
  fillyBy: string = '';
  startingBid: number = 0;
  auctionStart: string = '';
  status: LotStatus = LotStatus.BidUp;
  serial: string = '';
  bids: number = 0;
  bidders: number = 0;
  active: boolean = true;

  constructor(init?: Partial<LotModel>) {
    assignInit(this, init);
  }
}
