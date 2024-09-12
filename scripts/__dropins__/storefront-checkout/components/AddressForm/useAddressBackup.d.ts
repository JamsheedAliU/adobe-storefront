import { AddressFormType, AddressFormValues } from '../../data/models/address-form-fields';

export declare function useAddressBackup(addressType: AddressFormType): {
    addressBackup: AddressFormValues | null;
<<<<<<< HEAD
    backup: (address: AddressFormValues) => NodeJS.Timeout;
    removeBackup: () => void;
=======
    backupAddress: (address: AddressFormValues) => NodeJS.Timeout;
    removeAddressBackup: () => void;
>>>>>>> template/main
};
//# sourceMappingURL=useAddressBackup.d.ts.map