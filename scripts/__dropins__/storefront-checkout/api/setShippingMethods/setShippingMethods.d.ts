<<<<<<< HEAD
import { SetShippingMethodsOnCartInput } from '../../__generated__/types';

export type SetShippingMethodsOnCartInputs = {
    cartId: string;
    shippingMethods: SetShippingMethodsOnCartInput['shipping_methods'];
};
export declare const setShippingMethodsOnCart: ({ cartId, shippingMethods, }: SetShippingMethodsOnCartInputs) => Promise<import('../../data/models/cart').Cart | null | undefined>;
=======
export declare const setShippingMethodsOnCart: (shippingMethods: import('../../__generated__/types').InputMaybe<import('../../__generated__/types').ShippingMethodInput>[]) => Promise<import('../../data/models/cart').Cart | null | undefined>;
>>>>>>> template/main
//# sourceMappingURL=setShippingMethods.d.ts.map