import { v4 as uuidv4 } from 'uuid';
import { NoticeStatus } from '~/resources/enums';

export class NoticeModel {
  id: string = uuidv4();
  title: string = '';
  detail: string = '';
  type: string = '';
  status: NoticeStatus = NoticeStatus.Alert;
  active: boolean = true;

  constructor(init?: Partial<NoticeModel>) {
    assignInit(this, init);
  }
}
