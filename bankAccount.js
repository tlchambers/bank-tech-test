class BankAccount {
	constructor() {
		this.balance = 0;
		this.requestHistory = [];
	}

	request(type, sum, date) {
		return this.requestHistory.push({
			transactionType: `${type}`,
			amount: sum,
			date: `${date}`,
		});
	}

	allTransactions() {
		return this.requestHistory;
	}

	currentBalance() {
		this.requestHistory.forEach((transaction) => {
			console.log("-----1----", transaction);
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
// account.request("credit", 1000.0, "10/01/2023");
// account.request("debit", 500.0, "10/01/2023");
// console.log(account.currentBalance());
