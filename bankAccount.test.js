const BankAccount = require("./bankAccount");

describe("Given BankAccount", () => {
  it("balance starts at 0 when a BankAccount is initialised", () => {
    const account = new BankAccount();
    expect(account.currentBalance()).toEqual(0);
  });

  it('stores the deposit request the client make of 1000 on "10/01/2023"', () => {
    const account = new BankAccount();
    account.request("10/01/2023", "deposit", 1000);
    expect(account.allTransactions()).toEqual([
      {
        date: "10/01/2023",
        transaction: "deposit",
        amount: 1000,
        balance: 1000,
      },
    ]);
  });

  it("store multiple requests the client make", () => {
    const account = new BankAccount();
    account.request("10/01/2023", "deposit", 1000);
    account.request("13/01/2023", "withdrawal", 500);
    expect(account.allTransactions()).toEqual([
      {
        date: "13/01/2023",
        transaction: "withdrawal",
        amount: 500,
        balance: 500
      },
      {
        date: "10/01/2023",
        transaction: "deposit",
        amount: 1000,
        balance: 1000
      },
    ]);
  });

  it("updates the balance when client makes a deposit of 1000.00", () => {
    const account = new BankAccount();
    account.request("10/01/2023", "deposit", 1000);
    expect(account.currentBalance()).toEqual(1000);
  });

  it("updates the balance when client makes multiple deposit requests", () => {
    const account = new BankAccount();
    account.request("10/01/2023", "deposit", 1000);
    account.request("13/01/2023", "deposit", 2000);
    expect(account.currentBalance()).toEqual(3000);
  });

  it("updates the balance when client makes multiple deposit and debit requests", () => {
    const account = new BankAccount();
    account.request("10/01/2023", "deposit", 1000);
    account.request("13/01/2023", "deposit", 2000);
    account.request("14/01/2023", "withdrawal", 500);
    expect(account.currentBalance()).toEqual(2500.0);
  });

  it("stores the requests from latest to oldest request", () => {
    const account = new BankAccount();
    account.request("10/01/2023", "deposit", 1000);
    account.request("13/01/2023", "deposit", 2000);
    account.request("14/01/2023", "withdrawal", 500);
    expect(account.allTransactions()).toEqual([
      {
        date: "14/01/2023",
        transaction: "withdrawal",
        amount: 500,
        balance: 2500,
      },
      {
        date: "13/01/2023",
        transaction: "deposit",
        amount: 2000,
        balance: 3000
      },
      {
        date: "10/01/2023",
        transaction: "deposit",
        amount: 1000,
        balance: 1000,
      },
    ]);
  });

  it("Should throw test error in request method when the sum is inputed as a string", () => {
    const account = new BankAccount();
    expect(() => account.request("deposit", "1000", "10/01/2023")).toThrow(
      "The amount you enter must be a number"
    );
  });

  it("should throw error when client makes a withdrawal request that is greater than their balance", () => {
    const account = new BankAccount();
    account.request("10/01/2023", "deposit", 1000);

    expect(() => account.request("14/01/2023", "withdrawal", 1500)).toThrow(
      "Withdrawl sum exceeds balance"
    );
  });
});
