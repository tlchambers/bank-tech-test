class BankAccount {
  constructor() {
    this.balance = 0;
    this.requestHistory = [];
  }

  request(type, amount, date) {
    if (typeof amount != "number") {
      throw new Error("The amount you enter must be a number");
    }

    this.requestHistory.push({
      transactionType: `${type}`,
      amount: amount,
      date: `${date}`,
    });

    if (type === "deposit") {
      this.balance = this.balance + amount;
    } else if (type === "withdrawal") {
      if (amount > this.balance) {
        throw new Error("Withdrawl sum exceeds balance")
      } 
      this.balance = this.balance - amount;
    }
  }

  allTransactions() {
    return this.requestHistory;
  }

  currentBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;

// const account = new BankAccount();
// console.log(account.request("deposit", 1000, "10/01/2023"));
// console.log(account.request("deposit", 1000, "15/01/2023"));
// console.log(account.request("deposit", 1000, "15/01/2023"));
// console.log(account.allTransactions());
// console.log(account.currentBalance());
