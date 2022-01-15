import { multiple } from '../main';

describe('multiple function', () => {
  it('should return number', () => {
    expect(typeof multiple(2, 8)).toStrictEqual('number');
  });

  it('should correctly result', () => {
    expect(multiple(2, 8)).toStrictEqual(16);
  });

  it('should', () => {
    expect(multiple(2, 8)).not.toStrictEqual(8);
  });
});
