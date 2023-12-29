import { v4 as uuidv4 } from 'uuid';

export class BidHistoryModel {
  id: string = uuidv4();
  bidderName: string = '';
  amount: number = 0;
  country: string = '';
  bidAt: string = '';
  byPhone?: boolean = false;

  constructor(init?: Partial<BidHistoryModel>) {
    assignInit(this, init);
  }
}
