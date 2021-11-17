import converter from '../converter.js';

test('It should convert with a positive offset', () => {
  expect(converter(1)('abc')).toBe('bcd');
});

test('It should convert with a negative offset', () => {
  expect(converter(-1)('abc')).toBe('zab');
});

test('It should only convert the Latin alphabet', () => {
  expect(converter(2)('abc123абв')).toBe('cde123абв');
});
