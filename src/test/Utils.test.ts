import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("stringUtils tests", () => {
    // making every test independent from one another
    let sut: StringUtils;
    beforeEach(() => {
      sut = new StringUtils();
    });
    // afterEach(() => {
    //   //clearing mocks
    //   console.log("Teardown");
    // });

    it("should teturn correct upper case", () => {
      const actual = sut.toUpperCase("abc");
      expect(actual).toBe("ABC");
    });

    it("should throw error if no argument in given", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }
      expect(expectError).toThrow();
      expect(expectError).toThrow("Invalid argument!");
    });

    it("should throw error if no argument in given - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrow("Invalid argument!");
    });

    // it.todo("test long string");

    it("should throw error if no argument in given - Try catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInfo should throw error for invalid argument!");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument!");
        done();
      }
    });
  });

  it("should return uppercase", () => {
    //arrange
    const sut = toUpperCase;
    const expected = "ABC";

    //act
    const actual = toUpperCase("abc");

    // assert
    expect(actual).toBe(expected);
  });
});

describe("getStringInfo for arg My-String should", () => {
  test("return right length", () => {
    const actual = getStringInfo("My-string");
    expect(actual.characters).toHaveLength(9);
  });

  test("return right lower case", () => {
    const actual = getStringInfo("My-string");
    expect(actual.lowerCase).toBe("my-string");
  });

  test("return right upper case", () => {
    const actual = getStringInfo("My-string");
    expect(actual.upperCase).toBe("MY-STRING");
  });

  test("return right characters", () => {
    const actual = getStringInfo("My-string");
    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "s",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
  });

  test("return defined extra info", () => {
    const actual = getStringInfo("My-string");
    expect(actual.extraInfo).toBeDefined();
  });

  test("return defined extra info", () => {
    const actual = getStringInfo("My-string");
    expect(actual.extraInfo).toEqual({});
  });
});

describe("ToUpperCase examples (Parametrized tests)", () => {
  it.each([
    { input: "abc", expected: "ABC" },
    { input: "My-string", expected: "MY-STRING" },
    { input: "def", expected: "DEF" },
  ])("$input toUpperCase should be $expected", ({ input, expected }) => {
    const actual = toUpperCase(input);
    expect(actual).toBe(expected);
  });
});
//   it.only("should return info for valid string", () => {
//     const actual = getStringInfo("My-string");

//     expect(actual.lowerCase).toBe("my-string");
//     expect(actual.extraInfo).toEqual({});

//     expect(actual.characters.length).toBe(9);
//     expect(actual).toHaveLength(9);

//     expect(actual.characters).toEqual([
//       "M",
//       "y",
//       "-",
//       "s",
//       "t",
//       "r",
//       "i",
//       "n",
//       "g",
//     ]);
//     expect(actual.characters).toContain<string>("M");

//     // to check if characters are contain in different order
//     expect(actual.characters).toEqual(
//       expect.arrayContaining(["t", "r", "i", "n", "g", "M", "y", "-", "s"])
//     );

//     expect(actual.extraInfo).not.toBe(undefined);
//     expect(actual.extraInfo).not.toBeUndefined();
//     expect(actual.extraInfo).toBeDefined();
//     // when not sure about structure of undefined or defined objects
//     expect(actual.extraInfo).toBeTruthy();
//   });
// });
