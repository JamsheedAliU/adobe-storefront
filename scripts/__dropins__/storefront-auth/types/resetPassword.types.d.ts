import { activeComponentType } from './authCombine.types';
<<<<<<< HEAD
import { inLineAlertInterface } from './notification.types';
=======
import { InLineAlertInterface } from './notification.types';
>>>>>>> template/main

export interface ResetPasswordProps {
    formSize?: 'default' | 'small';
    routeSignIn?: () => string;
    onErrorCallback?: (value?: unknown) => void;
}
export interface ResetPasswordFormProps extends ResetPasswordProps {
    setActiveComponent?: (componentName: activeComponentType) => void;
}
export interface UseResetPasswordFormProps extends Omit<ResetPasswordFormProps, 'formSize'> {
<<<<<<< HEAD
    handleSetInLineAlertProps?: (value?: inLineAlertInterface) => void;
=======
    handleSetInLineAlertProps?: (value?: InLineAlertInterface) => void;
>>>>>>> template/main
}
//# sourceMappingURL=resetPassword.types.d.ts.map