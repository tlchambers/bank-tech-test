# Bank-tech-test

Learning Objective:
- Improving design and TDD skills through individual practice
- Reviewing my own code so I can practice reflecting and improving my own work

# Specification
Requirements
You should be able to interact with your code via a REPL like IRB or Node. 
(You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

|    date  | credit | debit | balance |
|----------|--------|-------|---------|
|14/01/2023|--------| 500.00| 2500.00 |
|13/01/2023|2000.00 |-------| 3000.00 |
|10/01/2023|1000.00 |-------| 1000.00 |

### Set up your project

1. Fork this repository
2. Clone your fork to your local machine
3. Install Node.js
  ```
   ; cd back-tech-tes
   ; npm install
   ; npm init -y
   ; npm add jest
   ; npm install -g jest

   # Run our tests
   ; jest
   ```

