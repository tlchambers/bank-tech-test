class BankAccount {
	constructor() {
		this.balance = 0;
		this.requestHistory = [];
	}

	request(type, amount, date) {
		if (typeof amount != "number") {
			throw new Error("The amount you enter must be a number");
		} 

		return this.requestHistory.push({
			transactionType: `${type}`,
			amount: amount,
			date: `${date}`,
		});
	}

	allTransactions() {
		return this.requestHistory;
	}

	currentBalance() {
		this.requestHistory.forEach((transaction) => {
			if (transaction.transactionType === "credit") {
				this.balance = this.balance + transaction.amount;
			} else if (transaction.transactionType === "debit") {
				this.balance = this.balance - transaction.amount;
			}
		});
		return this.balance;
	}
}

module.exports = BankAccount;

// const account = new BankAccount();
// console.log(account.request("credit", "1000", "10/01/2023"));
// console.log(account.currentBalance());
