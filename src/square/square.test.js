const square = require('./square');

describe('square', () => {
   test('Корректное значение', () => {
      expect(square(2)).toEqual(4);
   });
   test('Больше корректного', () => {
      expect(square(2)).toBeLessThan(5);
   });
   test('Меньше корректного', () => {
      expect(square(2)).toBeGreaterThan(3);
   });
   test('Не undefined', () => {
      expect(square(2)).not.toBeUndefined();
   });
});

describe('square mock', () => {
   test('Корректное значение', () => {
      const spyMathPow = jest.spyOn(Math, 'pow');
      square(2);
      expect(spyMathPow).toBeCalledTimes(1);
   })
   test('Корректное значение', () => {
      const spyMathPow = jest.spyOn(Math, 'pow');
      square(1);
      expect(spyMathPow).toBeCalledTimes(0);
   })
})
