import { VNode } from 'preact';
import { HTMLAttributes } from 'preact/compat';

<<<<<<< HEAD
export interface inLineAlertInterface {
=======
export type AdditionalActionsAlertProps = Array<{
    label: string;
    onClick: (event: Event) => void;
}>;
export interface InLineAlertInterface {
>>>>>>> template/main
    type?: 'success' | 'warning' | 'error';
    text?: string;
    icon?: VNode<HTMLAttributes<SVGSVGElement>> | undefined;
}
export type statusTypes = '' | 'success' | 'error' | 'pending';
export interface ValidateLengthConfigProps {
    status?: statusTypes;
    icon?: statusTypes;
    message?: string;
}
//# sourceMappingURL=notification.types.d.ts.map