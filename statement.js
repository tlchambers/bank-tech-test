class Statement {
  constructor(bankAccount) {
    this.bankAccount = bankAccount;
  }

  displayStatement() {
    const transactionsSorted = this.bankAccount
      .allTransactions()
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

    console.table(transactionsSorted);
  }
}

module.exports = Statement;
