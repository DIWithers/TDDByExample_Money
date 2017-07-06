import { Money } from "../src/money";
import { Bank } from "../src/bank";
import { Expression } from "../src/expression";

describe("Money Test", ()=> {
    it("should test multiplication", ()=> {
        let five: Money = Money.dollar(5);
        expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
        expect(five.times(3)).toEqual(Money.dollar(15));
    });
    it("should test equality", () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
      expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
      expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
      expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();

      expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
    });
    it("should test franc multiplication", ()=> {
      let five: Money = Money.franc(5);
      expect(five.times(2)).toEqual(Money.franc(10));
      expect(five.times(3)).toEqual(Money.franc(15));
    });
    it("should test currency", () => {
      expect(Money.dollar(1).getCurrency()).toEqual("USD");
      expect(Money.franc(1).getCurrency()).toEqual("CHF");
    });
    it("should test simple addition", () => {
      let five: Money = Money.dollar(5);
      let sum: Money = five.plus(Money.dollar(5));
      let bank: Bank = new Bank();
      let reduced: Money = bank.reduce(sum, "USD");
      expect(reduced).toEqual(Money.dollar(10));
    });
});