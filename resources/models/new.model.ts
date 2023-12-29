import { v4 as uuidv4 } from 'uuid';
import { NewsStatus } from '~/resources/enums';

export class NewsModel {
  id: string = uuidv4();
  title: string = '';
  date: string = '';
  type: string = '';
  status: NewsStatus = NewsStatus.Draft;
  active: boolean = true;

  constructor(init?: Partial<NewsModel>) {
    assignInit(this, init);
  }
}
