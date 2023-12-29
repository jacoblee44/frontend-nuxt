import { v4 as uuidv4 } from 'uuid';
import { UserModel } from '~/resources/models/user.model';
import { assignInit } from '~/utils/assign-init';

export class LoginHistoryModel {
  id: string = uuidv4();
  user: UserModel = new UserModel();
  ipAddress: string = '';
  browser: string = '';
  platform: string = '';
  devices: string = '';
  loginAt: string = '';

  constructor(init?: Partial<LoginHistoryModel>) {
    assignInit(this, init);
  }
}
