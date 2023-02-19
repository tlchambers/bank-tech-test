const { afterEach } = require("jest-circus");
const BankAccount = require("./BankAccount");
const Statement = require("./Statement");

describe("Statement", () => {
  describe("displayStatement", () => {
    let consoleTableSpy;
    beforeEach(() => {
      consoleTableSpy = jest.spyOn(console, "table");
    });

    afterEach(() => {
      consoleTableSpy.mockReset();
    });

    it.only("should display a table of transaction history", () => {
      const account = new BankAccount();
      account.request("2023/01/10", "deposit", 1000);
      account.request("2023/01/13", "deposit", 2000);
      account.request("2023/01/14", "withdrawal", 1000);

      const st = new Statement(account);
      st.displayStatement();
      expect(consoleTableSpy).toHaveBeenCalledTimes(1);
      expect(consoleTableSpy).toHaveBeenCalledWith([
        {
          amount: 1000,
          balance: 2000,
          date: "2023/01/14",
          transaction: "withdrawal",
        },
        {
          amount: 2000,
          balance: 3000,
          date: "2023/01/13",
          transaction: "deposit",
        },
        {
          amount: 1000,
          balance: 1000,
          date: "2023/01/10",
          transaction: "deposit",
        },
      ]);
    });
  });
});
