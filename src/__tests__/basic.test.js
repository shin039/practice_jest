// Document
//https://github.com/jest-community/awesome-jest
// -----------------------------------------------------------------------------
// Import
// -----------------------------------------------------------------------------
import {sum} from 'src/basic/basic';

// -----------------------------------------------------------------------------
// Basic Test Case
// -----------------------------------------------------------------------------
describe("■ テストケース", () => {
  test        ('add 1 + 2 to equal 3'    , () => expect(sum(1, 2))    .toBe(3) )
  it          ('it is alias of test'     , () => expect(sum(1, 2))    .toBe(3) )
  test        ('add 1 + 2 to not equal 4', () => expect(sum(1, 2)).not.toBe(4) )
  test.failing('add 1 + 2 to not equal 5', () => expect(sum(1, 2))    .toBe(5) )

  test('resolve toBe'   , () => expect(Promise.resolve('resolved')           ).resolves.toBe   ('resolved') )
  test('reject  toThrow', () => expect(Promise.reject(new Error('rejected')) ).rejects .toThrow('rejected') )
});

// -----------------------------------------------------------------------------
// Parametalized Test
// -----------------------------------------------------------------------------
describe("■ パラメタライズド テスト", () => {
  test.each([ [1, 2, 3]      , [2, 3, 5]       ])("配列形式: %p + %p = %p", (f, s, e  ) => expect(sum(f, s)).toBe(e) );
  test.each([ {f:3, s:2, e:5}, {f:1, s:1, e:2} ])("配列形式: $f + $s = $e", ({f, s, e}) => expect(sum(f, s)).toBe(e) );

  test.each`
    f    | s    | e
    ${1} | ${2} | ${3}
    ${4} | ${3} | ${7}
  `("テンプレート形式: $f + $s = $e", ({f, s, e}) => expect(sum(f, s)).toBe(e) );
});

// -----------------------------------------------------------------------------
// Another function
// -----------------------------------------------------------------------------
describe     ("■ TODO"                 , () =>  test.todo("TODO を実装できる。")     );
describe.skip("■ テストをスキップ pt.1", () =>  test.todo("テストをスキップできる")  );
xdescribe    ("■ テストをスキップ pt.2", () =>  test.todo("テストをスキップできる!") );

// -----------------------------------------------------------------------------
// 事前・事後処理
// -----------------------------------------------------------------------------
// このファイルの全テストに対して有効な事前、事後処理
beforeAll (() => {})
afterAll  (() => {})
beforeEach(() => {})
afterEach (() => {})

describe("■事前・事後処理", () => {
  beforeAll (() => {})
  afterAll  (() => {})
  beforeEach(() => {})
  afterEach (() => {})
  test("事前・事後処理", () => undefined);
})

