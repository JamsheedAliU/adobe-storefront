import { HTMLAttributes } from 'preact/compat';
<<<<<<< HEAD
import { FunctionComponent } from 'preact';
=======
>>>>>>> template/main

export interface LoginFormProps extends HTMLAttributes<HTMLDivElement> {
    email?: string;
    onSignInClick?: (email: string | null) => void;
    onSignOutClick?: () => void;
}
<<<<<<< HEAD
export declare const LoginForm: FunctionComponent<LoginFormProps>;
=======
export declare const LoginForm: {
    ({ hideOnEmptyCart, hideOnVirtualCart, ...props }: import('../../hocs/withConditionalRendering').ConditionalProps & LoginFormProps): import("preact/compat").JSX.Element | null;
    displayName: string;
};
>>>>>>> template/main
//# sourceMappingURL=LoginForm.d.ts.map