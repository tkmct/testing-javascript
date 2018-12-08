const { sum, subtract } = require('./math')

test('summ adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtract subtracts test', () => {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})
