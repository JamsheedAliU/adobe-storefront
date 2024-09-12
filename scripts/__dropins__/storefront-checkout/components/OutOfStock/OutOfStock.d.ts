<<<<<<< HEAD
import { FunctionComponent, JSX } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface OutOfStockProps extends Omit<HTMLAttributes<HTMLDivElement>, 'icon'> {
    icon?: FunctionComponent<JSX.SVGAttributes<SVGElement>>;
    routeCart?: () => string;
=======
import { Item as CartItem } from '../../types/cart';
import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface OutOfStockProps extends HTMLAttributes<HTMLDivElement> {
    items: CartItem[];
    onRemoveOutOfStock?: (event: Event) => void;
    routeCart?: string;
>>>>>>> template/main
}
export declare const OutOfStock: FunctionComponent<OutOfStockProps>;
//# sourceMappingURL=OutOfStock.d.ts.map