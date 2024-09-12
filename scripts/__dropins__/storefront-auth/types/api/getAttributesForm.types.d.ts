export interface getAttributesFormItems {
    code: string;
<<<<<<< HEAD
    default_value: null | string;
    entity_type: string;
    frontend_class: null | string;
=======
    sort_order: number;
    default_value: null | string;
    entity_type: string;
    frontend_class: null | string;
    multiline_count: number;
>>>>>>> template/main
    frontend_input: string;
    is_required: boolean;
    is_unique: boolean;
    label: string;
    options: {
        is_default: boolean;
        label: string;
        value: string;
    }[];
}
export interface getAttributesFormResponse {
    data: {
        attributesForm: {
            errors?: {
                message: string;
            }[];
            items?: getAttributesFormItems[];
        };
    };
    errors?: {
        message: string;
    }[];
}
//# sourceMappingURL=getAttributesForm.types.d.ts.map