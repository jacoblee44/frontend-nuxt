import { range } from 'lodash';
import { NoticeModel } from '~/resources/models';
import { NoticeStatus } from '~/resources/enums';

export const useNoticeList = () => {
  const notices = range(1, 10).map(
    (i) =>
      new NoticeModel({
        id: `${i}`,
        title: 'This is a notification title',
        status:
          i % 3 === 1
            ? NoticeStatus.Alert
            : i % 3 === 2
              ? NoticeStatus.Information
              : NoticeStatus.Warning,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        active: i % 3 !== 2,
      }),
  );

  return {
    notices,
  };
};
