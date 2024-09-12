<<<<<<< HEAD
import { inLineAlertInterface } from '../../types';
=======
import { InLineAlertInterface } from '../../types';
>>>>>>> template/main

interface getCustomerTokenProps {
    email: string;
    password: string;
<<<<<<< HEAD
    handleSetInLineAlertProps: (value?: inLineAlertInterface) => void;
=======
    handleSetInLineAlertProps: (value?: InLineAlertInterface) => void;
>>>>>>> template/main
    translations: Record<string, string>;
    onErrorCallback?: (value?: unknown) => void;
}
export declare const getCustomerToken: ({ email, password, translations, onErrorCallback, handleSetInLineAlertProps, }: getCustomerTokenProps) => Promise<{
    errorMessage: string;
    userName: string;
}>;
export {};
//# sourceMappingURL=getCustomerToken.d.ts.map