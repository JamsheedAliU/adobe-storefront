<<<<<<< HEAD
import { Money } from './money';
=======
import { Price } from './price';
>>>>>>> template/main

type Code = string;
type Title = string;
type Carrier = {
    code: Code;
    title: Title;
};
export type ShippingMethod = {
<<<<<<< HEAD
    amount: Money;
=======
    amount: Price;
>>>>>>> template/main
    carrier: Carrier;
    code: Code;
    title: Title;
    value: string;
<<<<<<< HEAD
=======
    amountExclTax?: Price;
    amountInclTax?: Price;
>>>>>>> template/main
};
export {};
//# sourceMappingURL=shipping-method.d.ts.map