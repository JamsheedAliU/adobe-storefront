<<<<<<< HEAD
import { OrderDetails } from '../../../reducers/orderConfirmation';

export declare function orderDetailsFixture(details?: Partial<OrderDetails>): OrderDetails;
export declare function orderDigitalDetailsFixture(details?: Partial<OrderDetails>): OrderDetails;
export declare function orderFreeShippingFixture(details?: Partial<OrderDetails>): OrderDetails;
=======
import { Order as OrderModel } from '../../../data/models';
import { GuestOrderDataFragment } from '../../../__generated__/types';

export declare function orderDetailsFixture(details?: Partial<OrderModel>): GuestOrderDataFragment;
export declare function orderDigitalDetailsFixture(details?: Partial<OrderModel>): GuestOrderDataFragment;
export declare function orderFreeShippingFixture(details?: Partial<OrderModel>): GuestOrderDataFragment;
>>>>>>> template/main
//# sourceMappingURL=orderDetails.d.ts.map