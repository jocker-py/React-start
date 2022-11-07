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

type GetPageNumbers = (current: number, total: number) => number[];
export const getPageNumbers: GetPageNumbers = (current: number, total: number) => {
  const arr = Array(total)
    .fill(1)
    .map((x: number, index: number) => x * (index + 1));
  if (current < 3) return arr.slice(0, 5);
  if (current > total - 3) return arr.slice(-5);
  return arr.slice(current - 3, current + 2);
};
