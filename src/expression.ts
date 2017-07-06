import { Money } from "./money";

export abstract class Expression {
  abstract reduce(): Money;
}