import { FunctionComponent, VNode } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface CartProps extends HTMLAttributes<HTMLDivElement> {
<<<<<<< HEAD
    emptyCart: VNode;
    heading?: VNode;
    products?: VNode;
    priceSummary?: VNode<HTMLAttributes<HTMLElement>>;
=======
    empty?: boolean;
    products?: VNode;
    orderSummary?: VNode<HTMLAttributes<HTMLElement>>;
>>>>>>> template/main
}
export declare const Cart: FunctionComponent<CartProps>;
//# sourceMappingURL=Cart.d.ts.map