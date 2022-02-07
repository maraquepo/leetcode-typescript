const { uniquePaths } = require("./uniquePaths")

describe.only('Unique Paths', () => {
  it("Should return 6 for a 3 x 3 matrix", () => {
    expect(uniquePaths(3,3)).toBe(6)
  })

  it("Should return value 1 if n is 1", () => {
    expect(uniquePaths(5, 1)).toBe(1)
  })

  it("Should return value 1 if m is 1", () => {
    expect(uniquePaths(1, 5)).toBe(1)
  })

  it("Should return value 2 for a 2 x 2 matrix", () => {
    expect(uniquePaths(2, 2)).toBe(2)
  })
})
