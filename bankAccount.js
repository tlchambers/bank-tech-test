class BankAccount {
  constructor() {
    this.balance = 0;
    this.requestHistory = [];
  }

  request(date, type, amount) {
    if (typeof amount != "number") {
      throw new Error("The amount you enter must be a number");
    }

    if (type === "deposit") {
      this.balance += amount;
    } else if (type === "withdrawal") {
      if (amount > this.balance) {
        throw new Error("Withdrawl sum exceeds balance");
      }
      this.balance -= amount;
    }

    this.requestHistory.push({
      date: `${date}`,
      transaction: `${type}`,
      amount: amount,
      balance: this.balance,
    });
  }

  allTransactions() {
    return this.requestHistory.reverse();
  }

  currentBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
