import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';
<<<<<<< HEAD
import { OrderDetails } from '../../reducers/orderConfirmation';

export interface DetailsProps extends HTMLAttributes<HTMLDivElement> {
    isLoading: boolean;
    orderDetails: OrderDetails | null;
=======
import { Order as OrderModel } from '../../data/models';

export interface DetailsProps extends HTMLAttributes<HTMLDivElement> {
    isLoading: boolean;
    orderDetails: OrderModel | null;
>>>>>>> template/main
}
export declare const Details: FunctionComponent<DetailsProps>;
//# sourceMappingURL=Details.d.ts.map