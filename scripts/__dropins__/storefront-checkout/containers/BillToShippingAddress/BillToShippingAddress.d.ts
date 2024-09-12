<<<<<<< HEAD
import { Container } from '@dropins/tools/types/elsie/src/lib';
import { CheckboxProps } from '@dropins/tools/types/elsie/src/components';
import { ShippingAddress, BillingAddress } from '../../data/models/address';
import { AddressFormField } from '../../data/models/address-form-fields';
=======
import { BillingAddress, ShippingAddress } from '../../data/models/address';
import { AddressFormField } from '../../data/models/address-form-fields';
import { CheckboxProps } from '@dropins/tools/types/elsie/src/components';
>>>>>>> template/main

export declare function compareAddresses(addressFormFields: AddressFormField[], first: BillingAddress | undefined, second: ShippingAddress | undefined): boolean;
export interface BillToShippingAddressProps extends Omit<CheckboxProps, 'name' | 'label'> {
}
<<<<<<< HEAD
export declare const BillToShippingAddress: Container<BillToShippingAddressProps>;
=======
export declare const BillToShippingAddress: {
    ({ hideOnEmptyCart, hideOnVirtualCart, ...props }: import('../../hocs/withConditionalRendering').ConditionalProps & BillToShippingAddressProps): import("preact/compat").JSX.Element | null;
    displayName: string;
};
>>>>>>> template/main
//# sourceMappingURL=BillToShippingAddress.d.ts.map