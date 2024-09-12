import { FunctionComponent, VNode } from 'preact';
import { HTMLAttributes } from 'preact/compat';

<<<<<<< HEAD
export type AsideSections = {
    cartSummary: VNode;
    orderSummary: VNode;
};
declare const Aside: FunctionComponent<{
    sections: AsideSections;
}>;
export type MainSections = {
    billingAddress: VNode;
    billToShippingAddress?: VNode;
    login: VNode;
    paymentMethods: VNode;
    placeOrder: VNode;
    shippingAddress?: VNode;
    shippingMethods?: VNode;
};
declare const Main: FunctionComponent<{
    outOfStock?: VNode;
    sections?: MainSections;
=======
export type CheckoutBlocks = {
    billingAddress: VNode;
    billToShippingAddress: VNode;
    cartSummaryList?: VNode;
    emptyCart: VNode;
    login: VNode;
    orderSummary?: VNode;
    outOfStock: VNode;
    paymentMethods: VNode;
    placeOrder: VNode;
    shippingAddress: VNode;
    shippingMethods?: VNode;
};
declare const Main: FunctionComponent<{
    blocks: CheckoutBlocks;
>>>>>>> template/main
}>;
export interface CheckoutProps extends HTMLAttributes<HTMLDivElement> {
    isLoading?: boolean;
}
interface CheckoutComponent extends FunctionComponent<CheckoutProps> {
    Main: typeof Main;
<<<<<<< HEAD
    Aside: typeof Aside;
=======
>>>>>>> template/main
}
export declare const Checkout: CheckoutComponent;
export {};
//# sourceMappingURL=Checkout.d.ts.map