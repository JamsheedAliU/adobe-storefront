import { SlotProps } from '@dropins/tools/types/elsie/src/lib';

export interface SuccessNotificationProps {
    slots?: {
        SuccessNotificationActions?: SlotProps;
    };
    formSize?: 'default' | 'small';
    className?: string;
<<<<<<< HEAD
    headingText?: string;
    messageText?: string;
=======
    labels?: {
        headingText: string;
        messageText: string;
    };
>>>>>>> template/main
}
export interface SuccessNotificationFormProps extends SuccessNotificationProps {
}
//# sourceMappingURL=successNotification.types.d.ts.map