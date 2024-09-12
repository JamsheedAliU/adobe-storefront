import { HTMLAttributes } from 'preact/compat';
<<<<<<< HEAD
import { Container } from '@dropins/tools/types/elsie/src/lib';
=======
>>>>>>> template/main

export interface PlaceOrderProps extends HTMLAttributes<HTMLDivElement> {
    onClick: () => void;
    handleServerError: (error: any) => void;
}
<<<<<<< HEAD
export declare const PlaceOrder: Container<PlaceOrderProps>;
=======
export declare const PlaceOrder: {
    ({ hideOnEmptyCart, hideOnVirtualCart, ...props }: import('../../hocs/withConditionalRendering').ConditionalProps & PlaceOrderProps): import("preact/compat").JSX.Element | null;
    displayName: string;
};
>>>>>>> template/main
//# sourceMappingURL=PlaceOrder.d.ts.map