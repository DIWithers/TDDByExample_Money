import { Expression } from "./expression";
export class Money implements Expression {
  reduce(): Money {
    return undefined;
  }

  protected amount: number;
  protected currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  equals(money: Money): boolean {
    return this.amount === money.amount && this.currency === money.currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  times(number: number): Money {
    return new Money(this.amount * number, this.currency);
  };

  plus(addend: Money) {
    return new Money(this.amount + addend.amount, this.currency);
  }

  getCurrency() {
    return this.currency;
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}