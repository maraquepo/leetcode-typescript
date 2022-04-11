const { isValid } = require("./validParenthesis")

describe.only('Valid Parenthesis', () => {
  it('Should return true for a valid string', () => {
    expect(isValid('()[]{}')).toBe(true)
  })
  it('Should return true for a valid string', () => {
    expect(isValid('{()}')).toBe(true)
  })
  it('Should return false for a invalid string', () => {
    expect(isValid('({[(])})')).toBe(false)
  })
})