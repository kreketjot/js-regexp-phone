import fixPhone from '../fixPhone';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+79270000000', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])('fixing number', (broken, fixed) => expect(fixPhone(broken)).toBe(fixed));
