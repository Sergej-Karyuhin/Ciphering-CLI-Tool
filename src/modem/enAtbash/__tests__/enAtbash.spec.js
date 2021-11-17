import enAtbash from '../enAtbash.js';

test('Atbash case 1', () => {
  expect(enAtbash('abc')).toBe('zyx');
});

test('Atbash case 2', () => {
  expect(enAtbash('xyz')).toBe('cba');
});

test('Atbash case 3', () => {
  expect(enAtbash('lmn')).toBe('onm');
});
