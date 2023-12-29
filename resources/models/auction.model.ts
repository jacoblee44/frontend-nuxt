import { v4 as uuidv4 } from 'uuid';
import { AuctionStatus } from '~/resources/enums';

export class AuctionModel {
  id: string = uuidv4();
  title: string = '';
  lots: number = 0;
  bids: number = 0;
  status: AuctionStatus = AuctionStatus.Running;
  startAt: string = '';
  endAt: string = '';

  constructor(init?: Partial<AuctionModel>) {
    assignInit(this, init);
  }
}
