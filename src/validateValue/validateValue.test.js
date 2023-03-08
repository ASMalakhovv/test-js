const validateValue = require('./validateValue');

describe('validateValue', () => {
   test('Корректное значение', () => {
      expect(validateValue(50)).toBeTruthy();
   });
   test('Меньше корректного', () => {
      expect(validateValue(-50)).toBeFalsy();
   });
   test('Больше корректного', () => {
      expect(validateValue(500)).toBeFalsy();
   });
   test('Пограничное значение снизу', () => {
      expect(validateValue(0)).toBeTruthy();
   });
   test('Пограничное значение сверху', () => {
      expect(validateValue(100)).toBeTruthy();
   });
});