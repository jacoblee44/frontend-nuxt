import { v4 as uuidv4 } from 'uuid';
import { AuctionModel, LotModel } from '~/resources/models';
import { PaymentStatus } from '~/resources/enums/payment-status.enum';

export class AuctionBuyerModel {
  id: string = uuidv4();
  name: string = '';
  amount: number = 0;
  lot: LotModel = new LotModel();
  auction: AuctionModel = new AuctionModel();
  status: PaymentStatus = PaymentStatus.Pending;

  constructor(init: Partial<AuctionBuyerModel>) {
    assignInit(this, init);
  }
}
