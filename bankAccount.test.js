const BankAccount = require("./bankAccount");

describe("Given BankAccount", () => {
	it("balance starts at 0 when a BankAccount is initialised", () => {
		const account = new BankAccount();
		expect(account.currentBalance()).toEqual(0);
	});

	it('stores the credit request the client make of 1000.00 on "10/01/2023"', () => {
		const account = new BankAccount();
		account.request("credit", 1000.0, "10/01/2023");
		expect(account.allTransactions()).toEqual([
			{ transactionType: "credit", amount: 1000, date: "10/01/2023" },
		]);
	});

	it("store multiple requests the client make", () => {
		const account = new BankAccount();
		account.request("credit", 1000.0, "10/01/2023");
		account.request("credit", 2000.0, "13/01/2023");
		expect(account.allTransactions()).toEqual([
			{ transactionType: "credit", amount: 1000, date: "10/01/2023" },
			{ transactionType: "credit", amount: 2000, date: "13/01/2023" },
		]);
	});

	it("returns balance of 1000 when client makes a request of credit 1000.00", () => {
		const account = new BankAccount();
		account.request("credit", 1000.0, "10/01/2023");
		expect(account.currentBalance()).toEqual(1000.0);
	});

	it("updates the current balance when client makes multiple credit requests", () => {
		const account = new BankAccount();
		account.request("credit", 1000.0, "10/01/2023");
		account.request("credit", 2000.0, "13/01/2023");
		expect(account.currentBalance()).toEqual(3000.0);
	});

	it("updates the current balance when client makes multiple credit and debit requests", () => {
		const account = new BankAccount();
		account.request("credit", 1000.0, "10/01/2023");
		account.request("credit", 2000.0, "13/01/2023");
		account.request("debit", 500.0, "14/01/2023");
		expect(account.currentBalance()).toEqual(2500.0);
	});

	it("Should throw test error in request method when the sum is inputed as a string", () => {
		const account = new BankAccount();
		expect(() => account.request("credit", "1000", "10/01/2023")).toThrow(
			"The amount you enter must be a number"
		);
	});

  it('should throw error when client makes a debit request that is greater than their balance', () => {
    const account = new BankAccount();
    account.request("credit", 1000.0, "10/01/2023");
   
    expect(() =>  account.request("debit", 1500.0, "14/01/2023")).toThrow(
			"Withdrawl sum exceeds balance"
		);
  })
});
