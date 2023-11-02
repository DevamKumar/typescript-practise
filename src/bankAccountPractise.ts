class BankAccount {
  private _balance: number = 0;

  public get balance() {
    return this._balance;
  }

  public set balance(newBalance: number) {
    if (newBalance < 0) {
      throw new Error(`Invalid Entry`);
    }
    this._balance = newBalance;
  }
}

const account1 = new BankAccount();
account1.balance = 10;
console.log(account1.balance);