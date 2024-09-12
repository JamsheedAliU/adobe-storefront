import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';
<<<<<<< HEAD
import { transformItems } from '../../data/transforms/transform-order-items';

export interface CartSummaryItemProps extends HTMLAttributes<HTMLDivElement> {
    item: ReturnType<typeof transformItems>;
=======
import { OrderItem as OrderItemModel } from '../../data/models/order';

export interface CartSummaryItemProps extends HTMLAttributes<HTMLDivElement> {
    item: OrderItemModel;
>>>>>>> template/main
    taxIncluded?: boolean;
}
export declare const CartSummaryItem: FunctionComponent<CartSummaryItemProps>;
//# sourceMappingURL=CartSummaryItem.d.ts.map