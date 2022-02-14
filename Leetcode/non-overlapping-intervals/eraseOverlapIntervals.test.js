const { eraseOverlapIntervals } = require("./eraseOverlapIntervals")

describe.only('Erase Overlap Intervals', () => {
  it("Should return 2 for the given array of intervals", () => {
    expect(eraseOverlapIntervals([[1,3], [2,5], [4,5], [6,7], [6,8], [7,8]])).toBe(2)
  })
})