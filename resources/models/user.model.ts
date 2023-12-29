import { v4 as uuidv4 } from 'uuid';
import { assignInit } from '~/utils/assign-init';

export class UserModel {
  id: string = uuidv4();
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  avatar?: string;
  role: string = '';
  site: string = '';
  countryCode: string = '';
  countryName: string = '';
  active: boolean = false;
  lastLogin?: string;
  createdAt: string = '';

  constructor(init?: Partial<UserModel>) {
    assignInit(this, init);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
