import getTitle from '../components/UI/helper/helpers';

describe('test function getTitle', () => {
  test('1 word', () => {
    const result = getTitle('Bags');
    expect(result).toBe('Bags');
  });

  test('2 words', () => {
    const result = getTitle('Women Bags');
    expect(result).toBe('Women Bags');
  });

  test('more than 3 words', () => {
    const result = getTitle('Mens Casual Premium Fit');
    expect(result).toBe('Mens Casual Premium');
  });

  test('empty string', () => {
    const result = getTitle('');
    expect(result).toBe('unknown');
  });

  test('test null', () => {
    const result = getTitle(null);
    expect(result).toBe('unknown');
  });
  test('test undefined', () => {
    const result = getTitle(undefined);
    expect(result).toBe('unknown');
  });
});
