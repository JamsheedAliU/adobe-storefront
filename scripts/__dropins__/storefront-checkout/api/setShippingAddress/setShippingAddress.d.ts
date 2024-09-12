export declare const STANDARD_ATTRIBUTES: string[];
export interface AddressInput {
    city: string;
    company?: string;
    country_code: string;
    custom_attributes?: {
        attribute_code: string;
        value?: string;
        selected_options?: {
            uid: string;
            value: string;
        }[];
    }[];
    firstname: string;
    lastname: string;
    postcode?: string;
    region?: string;
    region_id?: number;
    save_in_address_book?: boolean;
    street: string[];
    telephone?: string;
    vat_id?: string;
}
export interface setShippingAddressParams {
<<<<<<< HEAD
    cartId: string;
=======
>>>>>>> template/main
    address: AddressInput;
    signal?: AbortSignal;
}
export declare const prepareAddress: (formFields: Record<string, any>) => AddressInput;
<<<<<<< HEAD
export declare const setShippingAddress: ({ signal, cartId, address, }: setShippingAddressParams) => Promise<import('../../data/models').Cart | null | undefined>;
=======
export declare const setShippingAddress: ({ signal, address, }: setShippingAddressParams) => Promise<import('../../data/models').Cart | null | undefined>;
>>>>>>> template/main
//# sourceMappingURL=setShippingAddress.d.ts.map