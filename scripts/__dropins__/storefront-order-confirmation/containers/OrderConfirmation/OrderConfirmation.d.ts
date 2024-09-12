<<<<<<< HEAD
import { Container } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';
import { CustomerAddressInput } from '../../__generated__/types';
=======
import { CustomerAddressInput } from '../../__generated__/types';
import { Order as OrderModel } from '../../data/models';
import { Container } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';
>>>>>>> template/main

export interface SignUpInputsDefaultValueSetProps {
    code: string;
    defaultValue: string;
}
export interface OrderConfirmationProps extends HTMLAttributes<HTMLDivElement> {
    orderRef?: string;
<<<<<<< HEAD
=======
    orderData?: OrderModel;
>>>>>>> template/main
    routeHome?: () => string;
    routeSupport?: () => string;
    onSignUpClick?: ({ inputsDefaultValueSet, addressesData, }: {
        inputsDefaultValueSet: SignUpInputsDefaultValueSetProps[];
        addressesData: CustomerAddressInput[];
    }) => void;
}
export declare const OrderConfirmation: Container<OrderConfirmationProps>;
//# sourceMappingURL=OrderConfirmation.d.ts.map