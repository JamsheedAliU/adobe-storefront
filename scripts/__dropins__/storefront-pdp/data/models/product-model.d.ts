<<<<<<< HEAD
=======
/**
 * ADOBE CONFIDENTIAL
 * __________________
 * Copyright 2023 Adobe
 * All Rights Reserved.
 * __________________
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 */
>>>>>>> template/main
export interface ProductModel {
    name: string;
    sku: string;
    addToCartAllowed: boolean;
    inStock: boolean | null;
    shortDescription?: string;
    metaDescription?: string;
    metaKeyword?: string;
    metaTitle?: string;
    description?: string;
    images?: Image[];
    prices: Prices;
    attributes?: Attribute[];
    options?: Option[];
    optionUIDs?: string[];
    url?: string;
    urlKey?: string;
    externalId?: string;
    externalParentId?: string;
    variantSku?: string;
}
interface Image {
    url: string;
    label: string;
    width: number;
    height: number;
}
interface Price {
    amount?: number;
    currency?: string;
    maximumAmount?: number;
    minimumAmount?: number;
    variant?: 'default' | 'strikethrough';
}
interface Prices {
    regular: Price;
    final: Price;
    visible: boolean;
}
<<<<<<< HEAD
interface Option {
    id: string;
    type: 'text' | 'image' | 'color';
=======
export interface Option {
    id: string;
    type: 'text' | 'image' | 'color' | 'dropdown';
>>>>>>> template/main
    typename: 'ProductViewOptionValueProduct' | 'ProductViewOptionValueSwatch' | 'ProductViewOptionValueConfiguration';
    label: string;
    required: boolean;
    multiple: boolean;
    items: OptionValue[];
}
interface OptionValue {
    id: string;
    label: string;
    inStock: boolean;
    value: string;
    selected: boolean;
<<<<<<< HEAD
=======
    product?: any;
>>>>>>> template/main
}
interface Attribute {
    label: string;
    value: string;
}
export {};
//# sourceMappingURL=product-model.d.ts.map