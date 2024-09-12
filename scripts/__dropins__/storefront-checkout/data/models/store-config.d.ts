<<<<<<< HEAD
export declare enum PriceDisplay {
    ExcludingTax = 1,
    IncludingTax = 2,
    IncludingAndExcludingTax = 3
}
export declare enum TotalDisplay {
    Rows = 0,
    Quantity = 1
=======
export declare enum TaxDisplay {
    EXCLUDING_TAX = "EXCLUDING_TAX",
    INCLUDING_EXCLUDING_TAX = "INCLUDING_AND_EXCLUDING_TAX",
    INCLUDING_TAX = "INCLUDING_TAX"
>>>>>>> template/main
}
export interface StoreConfig {
    defaultCountry: string;
    countriesWithRequiredRegion: string[];
    displayStateIfOptional: boolean;
    countriesWithOptionalZipCode: string[];
    isGuestCheckoutEnabled: boolean;
    isOnePageCheckoutEnabled: boolean;
<<<<<<< HEAD
    taxCartDisplay: {
        shoppingCartDisplayPrice: PriceDisplay;
        shoppingCartDisplayShipping: PriceDisplay;
        shoppingCartDisplaySubtotal: PriceDisplay;
        shoppingCartDisplayGiftWrapping: PriceDisplay;
        shoppingCartDisplayGrandTotal: boolean;
        shoppingCartDisplayFullSummary: boolean;
        shoppingCartDisplayZeroTax: boolean;
    };
    cartSummaryMaxItems: number;
    cartSummaryTotalDisplay: TotalDisplay;
=======
    shoppingCartDisplaySetting: {
        shipping: TaxDisplay;
    };
>>>>>>> template/main
}
//# sourceMappingURL=store-config.d.ts.map