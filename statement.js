const BankAccount = require("./bankAccount");

class Statement {
  constructor(bankAccount) {
    this.bankAccount = bankAccount;
  }

  displayStatement() {
    console.table(this.bankAccount.allTransactions());
  }
}

module.exports = Statement;

// const account = new BankAccount
// account.request('16/02/2023', "deposit", 1000)
// account.request('16/02/2023', "deposit", 2000)
// account.request('16/02/2023', "deposit", 5000)
// account.request('17/02/2023', "deposit", 4000)
// account.request('18/02/2023', "withdrawal", 4000)
// account.request('19/02/2023', "withdrawal", 4000)

// const statement = new Statement(account)
// statement.displayStatement()