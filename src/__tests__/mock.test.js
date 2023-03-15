// Document
//https://github.com/jest-community/awesome-jest
// -----------------------------------------------------------------------------
// Import
// -----------------------------------------------------------------------------
import {sum, now} from 'src/basic/basic';

describe("■ Mock", () => {
  // Mock関数について

  test("Mock Prop", () => {
    const m_sum = jest.fn(sum);
    m_sum(1, 2);
    m_sum(3, 4);
    expect(m_sum.mock.calls[0][0]).toBe(1)
    expect(m_sum.mock.calls[1][0]).toBe(3);
    expect(m_sum.mock.results[0].value).toBe(3);
  });

  // 実践的な使い方
  test("Mock", () => {
    Date.now = jest.fn(() => 1677628800000); 
    expect(now()).toBe("2023/03/01");
  });
});

describe("■ SpyOn", () => {
  test("SpyOn", () => {
    const spy = jest.spyOn(Date, "now").mockImplementation(() => 1677628800000)
    expect(now()).toBe("2023/03/01");

    // 初期化
    spy.mockReset();
    spy.mockRestore();
  });
});
