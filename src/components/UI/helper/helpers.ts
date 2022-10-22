import products from '../../../config/products';
import { ICardItemProps } from '../../../config/interfaces';

type GetTitle = (title: string | undefined | null) => string;

export const getTitle: GetTitle = (title) => {
  if (typeof title !== 'string' || !title) return 'unknown';
  const arr = title.split(' ');
  if (arr.length >= 3) {
    return arr.slice(0, 3).join(' ');
  } else if (arr.length && arr.length < 3) {
    return arr.join(' ');
  }
  return 'unknown';
};

type GetCategories = () => Array<ICardItemProps['category']>;

export const getCategories: GetCategories = () => {
  const categories = products.reduce(
    (acc: ICardItemProps['category'][], item) => acc.concat(item.category),
    []
  );
  const items = [...new Set(categories), 'other'];
  return Array.from(items);
};
