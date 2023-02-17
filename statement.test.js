// const BankAccount = require('./BankAccount');
// const Statement = require('./Statement');

// describe('Statement', () => {
//   describe('displayStatement', () => {
//     it('should display a table of transaction history', () => {
//       const mockBankAccount = {
//         requestHistory: [
//           { date: '10/02/2023', transaction: 'deposit', amount: 1000, balance: 1000 },
//           { date: '13/02/2023', transaction: 'withdrawal', amount: 500, balance: 500 },
//           { date: '1/02/2023', transaction: 'deposit', amount: 2000, balance: 2500 }
//         ],
//         allTransactions: jest.fn().mockReturnValue([
//           { date: '10/02/2023', transaction: 'deposit', amount: 1000, balance: 1000 },
//           { date: '13/02/2023', transaction: 'withdrawal', amount: 500, balance: 500 },
//           { date: '1/02/2023', transaction: 'deposit', amount: 2000, balance: 2500 }
//         ])
//       };

//       const allTransactionsSpy = jest.spyOn(mockBankAccount, 'allTransactions');

//       const statement = new Statement(mockBankAccount);
//       statement.displayStatement();

//       expect(allTransactionsSpy).toHaveBeenCalledTimes(1);
//       expect(console.table).toHaveBeenCalledWith([
//         { date: '10/02/2023', transaction: 'deposit', amount: 1000, balance: 1000 },
//         { date: '13/02/2023', transaction: 'withdrawal', amount: 500, balance: 500 },
//         { date: '1/02/2023', transaction: 'deposit', amount: 2000, balance: 2500 }
//       ]);
//     });
//   });
// });

// const Statement = require("./statement");
// const BankAccount = require("./bankAccount");

// describe("Statement Class", () => {
//   jest.mock('./bankAccount', () => {
//     return jest.fn().mockImplementation(() => {
//       return {
//         request: jest.fn()
//       };
//     });
//   });

//   describe("Given BankAccount", () => {
//     it('displays the bank account transactions', () => {
//       // Create a mocked instance of BankAccount
//       const bankAccount = new BankAccount();
//       bankAccount.request('10/02/2023', 'deposit', 1000);
//       bankAccount.request('10/02/2023', 'withdrawal', 500);

//       // Create a Statement instance and call displayStatement
//       const statement = new Statement(bankAccount);
//       statement.displayStatement();

//       // Assert that console.table was called with the expected data
//       expect(console.table).toHaveBeenCalledWith([
//         { date: '10/02/2023', transaction: 'deposit', amount: 1000, balance: 1000 },
//         { date: '10/02/2023', transaction: 'withdrawal', amount: 500, balance: 500 },
//       ]);
//     });
//   });
// });
