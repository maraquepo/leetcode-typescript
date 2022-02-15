const { exist } = require("./wordSearch")

describe.only('Word Search', () => {
  it("Should return true", () => {
    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE")).toBe(true)
  })
  it("Should return false", () => {
    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEA")).toBe(false)
  })
})