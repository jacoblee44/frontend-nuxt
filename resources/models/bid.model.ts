import { v4 as uuidv4 } from 'uuid';
import { LotModel } from '~/resources/models';
import { BidType } from '~/resources/enums';

export class BidModel {
  id: string = uuidv4();
  bidderName: string = '';
  amount: number = 0;
  createdAt: string = '';
  type: BidType = BidType.Direct;
  lot: LotModel = new LotModel();
  maxAmount?: number;

  constructor(init: Partial<BidModel>) {
    assignInit(this, init);
  }
}
