const BankAccount = require("./bankAccount");

describe("Given BankAccount", () => {
  it("balance starts at 0 when a BankAccount is initialised", () => {
    const account = new BankAccount();
    expect(account.currentBalance()).toEqual(0);
  });

  it('stores the deposit request the client make of 1000.00 on "10/01/2023"', () => {
    const account = new BankAccount();
    account.request("deposit", 1000.0, "10/01/2023");
    expect(account.allTransactions()).toEqual([
      { transactionType: "deposit", amount: 1000, date: "10/01/2023" },
    ]);
  });

  it("store multiple requests the client make", () => {
    const account = new BankAccount();
    account.request("deposit", 1000, "10/01/2023");
    account.request("withdrawal", 500, "13/01/2023");
    expect(account.allTransactions()).toEqual([
      { transactionType: "deposit", amount: 1000, date: "10/01/2023" },
      { transactionType: "withdrawal", amount: 500, date: "13/01/2023" },
    ]);
  });

  it("updates the balance when client makes a deposit of 1000.00", () => {
    const account = new BankAccount();
    account.request("deposit", 1000.0, "10/01/2023");
    expect(account.currentBalance()).toEqual(1000.0);
  });

  it("updates the balance when client makes multiple deposit requests", () => {
    const account = new BankAccount();
    account.request("deposit", 1, "10/01/2023");
    account.request("deposit", 2, "13/01/2023");
    expect(account.currentBalance()).toEqual(3);
  });

  it("updates the balance when client makes multiple deposit and debit requests", () => {
    const account = new BankAccount();
    account.request("deposit", 1000.0, "10/01/2023");
    account.request("deposit", 2000.0, "13/01/2023");
    account.request("withdrawal", 500.0, "14/01/2023");
    expect(account.currentBalance()).toEqual(2500.0);
  });

  it("Should throw test error in request method when the sum is inputed as a string", () => {
    const account = new BankAccount();
    expect(() => account.request("deposit", "1000", "10/01/2023")).toThrow(
      "The amount you enter must be a number"
    );
  });

  it("should throw error when client makes a withdrawal request that is greater than the value of their balance", () => {
    const account = new BankAccount();
    account.request("deposit", 1000.0, "10/01/2023");

    expect(() => account.request("withdrawal", 1500.0, "14/01/2023")).toThrow(
      "Withdrawl sum exceeds balance"
    );
  });
});
