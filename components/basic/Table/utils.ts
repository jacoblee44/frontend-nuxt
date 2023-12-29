import type { TableCellAlign } from './types';

export const getAlignClass = (align?: TableCellAlign) => {
  switch (align) {
    case 'center':
      return 'text-center';
    case 'right':
      return 'text-right';
    default:
      return 'text-left';
  }
};
