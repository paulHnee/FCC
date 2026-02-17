# JS4 - Bank Account Management

A basic BankAccount class that tracks balance and transactions.

## Run

1. Open the browser console or a Node.js REPL.
2. Paste the contents of script.js, or run it with Node.

## API

- deposit(amount)
- withdraw(amount)
- checkBalance()
- listAllDeposits()
- listAllWithdrawals()

## Example

- const account = new BankAccount()
- account.deposit(150)
- account.withdraw(50)
- account.checkBalance()

## Notes

- Deposits must be greater than zero.
- Withdrawals must be positive and within balance.
