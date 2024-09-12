<<<<<<< HEAD
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';
=======
import { SlotProps } from '@dropins/tools/types/elsie/src/lib';
>>>>>>> template/main
import { HTMLAttributes } from 'preact/compat';

export interface PaymentMethodSlotContext {
    addPaymentMethodHandler: (code: string, handler: {
        render: SlotProps<PaymentMethodContentSlotContext>;
    }) => void;
    replaceHTML: (domElement: HTMLElement) => void;
}
export interface PaymentMethodContentSlotContext {
    cartId: string;
    onPlaceOrder: (fn: () => Promise<void>) => void;
    handleServerError: (error: any) => void;
    replaceHTML: (domElement: HTMLElement) => void;
}
export interface PaymentMethodsProps extends HTMLAttributes<HTMLDivElement> {
    paymentMethodsSlot?: SlotProps<PaymentMethodSlotContext>;
<<<<<<< HEAD
    onPlaceOrder: (fn: () => Promise<void>) => void;
    handleServerError: (error: any) => void;
    isShippingInfoRequired?: boolean;
}
export declare const PaymentMethods: Container<PaymentMethodsProps>;
=======
    onPlaceOrder: (fn?: () => Promise<void>) => void;
    handleServerError: (error: any) => void;
}
export declare const PaymentMethods: {
    ({ hideOnEmptyCart, hideOnVirtualCart, ...props }: import('../../hocs/withConditionalRendering').ConditionalProps & PaymentMethodsProps): import("preact/compat").JSX.Element | null;
    displayName: string;
};
>>>>>>> template/main
//# sourceMappingURL=PaymentMethods.d.ts.map