import { SlotProps } from '@dropins/tools/types/elsie/src/lib';
<<<<<<< HEAD
import { inLineAlertInterface } from './notification.types';
=======
import { InLineAlertInterface } from './notification.types';
>>>>>>> template/main

type DefaultSlotContext = {
    isSuccessful: {
        userName: string;
        status: boolean;
    };
};
export interface UpdatePasswordProps {
    signInOnSuccess?: boolean;
    formSize?: 'default' | 'small';
    routeRedirectOnPasswordUpdate?: () => string;
    routeRedirectOnSignIn?: () => string;
<<<<<<< HEAD
    routeWrongUrlRedirect?: () => string;
    onErrorCallback?: (value: unknown) => void;
    onSuccessCallback?: (value: string) => void;
=======
    routeSignInPage?: () => string;
    routeWrongUrlRedirect?: () => string;
    onErrorCallback?: (value: unknown) => void;
    onSuccessCallback?: (value?: string) => void;
>>>>>>> template/main
    slots?: {
        SuccessNotification?: SlotProps<DefaultSlotContext>;
    };
}
export interface UpdatePasswordFormProps extends UpdatePasswordProps {
}
export interface UseUpdatePasswordFormProps extends Omit<UpdatePasswordFormProps, 'formSize' | 'slots'> {
    isEmailConfirmationRequired?: boolean;
    passwordConfigs?: {
        minLength: number;
        requiredCharacterClasses: number;
    } | null;
<<<<<<< HEAD
    handleSetInLineAlertProps: (value?: inLineAlertInterface) => void;
=======
    handleSetInLineAlertProps: (value?: InLineAlertInterface) => void;
>>>>>>> template/main
}
export {};
//# sourceMappingURL=updatePassword.types.d.ts.map