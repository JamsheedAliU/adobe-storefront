import { HTMLAttributes } from 'preact/compat';
<<<<<<< HEAD
import { Container } from '@dropins/tools/types/elsie/src/lib';
=======
import { Container, SlotProps } from '@dropins/tools/types/elsie/src/lib';
>>>>>>> template/main
import { CartModel } from '../../data/models';

export interface MiniCartProps extends HTMLAttributes<HTMLDivElement> {
    routeProduct?: (item: CartModel['items'][0]) => string;
    routeCart?: () => string;
    routeCheckout?: () => string;
    routeEmptyCartCTA?: () => string;
<<<<<<< HEAD
=======
    slots?: {
        ProductList?: SlotProps;
    };
>>>>>>> template/main
}
export declare const MiniCart: Container<MiniCartProps, CartModel | null>;
//# sourceMappingURL=MiniCart.d.ts.map