"use strict";
class BankAccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error(`Invalid Entry`);
        }
        this._balance = newBalance;
    }
}
const account1 = new BankAccount();
account1.balance = 10;
console.log(account1.balance);
//# sourceMappingURL=bankAccountPractise.js.map