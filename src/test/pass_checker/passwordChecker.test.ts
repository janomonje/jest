import { PasswordChecker } from "../../app/pass_checker/passwordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Should do nothing for the moment", () => {
    sut.checkPassword();
  });
});
