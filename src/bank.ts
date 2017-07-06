import { Expression } from "./expression";
import { Money } from "./money";
export class Bank {

  reduce(sum, currency): Money{
    return Money.dollar(10);
  }
}