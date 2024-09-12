import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';

declare const supportedTypes: string[];
type OptionValue = {
    id: string;
    label: string;
    inStock: boolean;
    value: string;
    selected?: boolean;
};
export type Option = {
    id: string;
    type: (typeof supportedTypes)[number];
    label: string;
    required?: boolean;
    multiple?: boolean;
    items: OptionValue[];
};
type Selection = {
    [id: string]: {
        label: string;
        value: string;
    };
};
export interface SwatchesProps extends HTMLAttributes<HTMLDivElement> {
<<<<<<< HEAD
    options: Array<{
        id: string;
        type: (typeof supportedTypes)[number];
        label: string;
        required?: boolean;
        multiple?: boolean;
        items: OptionValue[];
    }>;
=======
    options: Array<Option>;
>>>>>>> template/main
    hideSelectedValue?: boolean;
    defaultOptions?: string[];
    selectionsToUpdate?: Option[];
    onValues?: (uids: Selection, current: string) => void;
    onErrors?: (errors: {
        [id: string]: string;
    }) => void;
<<<<<<< HEAD
=======
    selectedUIDs?: string[];
>>>>>>> template/main
}
export declare const Swatches: FunctionComponent<SwatchesProps>;
export {};
//# sourceMappingURL=Swatches.d.ts.map