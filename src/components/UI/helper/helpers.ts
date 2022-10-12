type GetTitle = (title: string | undefined | null) => string;

const getTitle: GetTitle = (title) => {
  if (typeof title !== 'string' || !title) return 'unknown';
  const arr = title.split(' ');
  if (arr.length >= 3) {
    return arr.slice(0, 3).join(' ');
  } else if (arr.length && arr.length < 3) {
    return arr.join(' ');
  }
  return 'unknown';
};

export default getTitle;
