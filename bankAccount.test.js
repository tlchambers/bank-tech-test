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
  
  it('updates the current balance 1000 when client makes a request of credit 1000.00', () => {
    const account = new BankAccount();
    account.request("credit", 1000.00, "10/01/2023")
    expect(account.currentBalance()).toEqual(1000.00);
  })

	it('stores another credit request the client make of 2000.00 on "13/01/2023"', () => {
		const account = new BankAccount();
		account.request("credit", 1000.0, "10/01/2023");
		account.request("credit", 2000.0, "13/01/2023");
		expect(account.allTransactions()).toEqual([
			{ transactionType: "credit", amount: 1000, date: "10/01/2023" },
			{ transactionType: "credit", amount: 2000, date: "13/01/2023" },
		]);
	});

});
