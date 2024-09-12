<<<<<<< HEAD
import { Container } from '@dropins/tools/types/elsie/src/lib';
import { HTMLAttributes } from 'preact/compat';
import { PreselectedAddressFields } from '..';

export interface ShippingFormProps extends HTMLAttributes<HTMLDivElement> {
    preselectedFields?: PreselectedAddressFields;
}
export declare const ShippingForm: Container<ShippingFormProps>;
=======
import { PreselectedAddressFields } from '..';
import { HTMLAttributes } from 'preact/compat';

export interface ShippingFormProps extends HTMLAttributes<HTMLDivElement> {
    onCheckoutDataUpdate?: () => Promise<void>;
    preselectedFields?: PreselectedAddressFields;
}
export declare const ShippingForm: {
    ({ hideOnEmptyCart, hideOnVirtualCart, ...props }: import('../../hocs/withConditionalRendering').ConditionalProps & ShippingFormProps): import("preact/compat").JSX.Element | null;
    displayName: string;
};
>>>>>>> template/main
//# sourceMappingURL=ShippingForm.d.ts.map