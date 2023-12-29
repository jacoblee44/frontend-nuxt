import { v4 as uuidv4 } from 'uuid';

export class RoleModel {
  id: string = uuidv4();
  name: string = '';
  assignedCount: number = 0;

  constructor(init?: Partial<RoleModel>) {
    assignInit(this, init);
  }
}
