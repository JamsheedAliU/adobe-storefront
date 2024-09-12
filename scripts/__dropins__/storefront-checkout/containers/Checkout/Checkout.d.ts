<<<<<<< HEAD
import { PaymentMethodSlotContext } from '../PaymentMethods';
import { SlotProps } from '@dropins/tools/types/elsie/src/lib';
=======
import { UpdateProductsFromCart } from '../OutOfStock';
import { PaymentMethodSlotContext } from '../PaymentMethods';
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';
>>>>>>> template/main
import { HTMLAttributes } from 'preact/compat';

export type PreselectedAddressFields = {
    countryCode?: string;
    region?: string;
    postCode?: string;
};
export type PreselectedShippingMethod = {
    carrierCode: string;
    methodCode: string;
};
export type PreselectedCartData = {
    address?: PreselectedAddressFields;
    shippingMethod?: PreselectedShippingMethod;
};
export interface CheckoutProps extends HTMLAttributes<HTMLDivElement> {
    routeHome?: () => string;
    routeCart?: () => string;
<<<<<<< HEAD
    slots?: {
        BillingForm?: SlotProps;
        BillToShipping?: SlotProps;
        CartSummary?: SlotProps;
        Login?: SlotProps;
        OrderSummary?: SlotProps;
        PaymentMethods?: SlotProps<PaymentMethodSlotContext>;
        PlaceOrder?: SlotProps;
        ShippingForm?: SlotProps;
=======
    onCheckoutDataUpdate?: () => Promise<void>;
    onCartProductsUpdate?: (items: UpdateProductsFromCart) => void;
    slots?: {
        CartSummaryList?: SlotProps;
        OrderSummary?: SlotProps;
        PaymentMethods?: SlotProps<PaymentMethodSlotContext>;
>>>>>>> template/main
        ShippingMethods?: SlotProps;
    };
    preselectedCartData?: PreselectedCartData;
    onSignInClick?: () => void;
    onSignOutClick?: () => void;
}
<<<<<<< HEAD
export declare const Checkout: (props: CheckoutProps) => import("preact/compat").JSX.Element | null;
=======
export declare const Checkout: Container<CheckoutProps>;
>>>>>>> template/main
//# sourceMappingURL=Checkout.d.ts.map