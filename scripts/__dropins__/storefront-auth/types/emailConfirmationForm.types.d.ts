<<<<<<< HEAD
import { inLineAlertInterface } from './notification.types';
=======
import { InLineAlertInterface } from './notification.types';
>>>>>>> template/main

export interface EmailConfirmationFormProps {
    userEmail: string;
    formSize: 'default' | 'small';
<<<<<<< HEAD
    inLineAlertProps: inLineAlertInterface;
    hideCloseBtnOnEmailConfirmation?: boolean;
    handleSetInLineAlertProps: (value: inLineAlertInterface) => void;
    onPrimaryButtonClick: () => void;
}
export interface useEmailConfirmationFormProps extends Omit<EmailConfirmationFormProps, 'formSize' | 'inLineAlertProps' | 'onPrimaryButtonClick'> {
    handleSetInLineAlertProps: (value: inLineAlertInterface) => void;
=======
    inLineAlertProps: InLineAlertInterface;
    hideCloseBtnOnEmailConfirmation?: boolean;
    handleSetInLineAlertProps: (value: InLineAlertInterface) => void;
    onPrimaryButtonClick: () => void;
}
export interface useEmailConfirmationFormProps extends Omit<EmailConfirmationFormProps, 'formSize' | 'inLineAlertProps' | 'onPrimaryButtonClick'> {
    handleSetInLineAlertProps: (value: InLineAlertInterface) => void;
>>>>>>> template/main
}
//# sourceMappingURL=emailConfirmationForm.types.d.ts.map