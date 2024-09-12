<<<<<<< HEAD
import { GuestOrderByTokenQuery, GuestOrderQuery } from '../__generated__/types';
=======
import { Order as OrderModel } from '../data/models';
>>>>>>> template/main

export declare enum Actions {
    ADD_ORDER_REFERENCE = "ADD_ORDER_REFERENCE",
    LOADING = "LOADING",
    SET_DETAILS = "SET_DETAILS",
    ALERT = "ALERT",
<<<<<<< HEAD
    DISMISS_ALERT = "DISMISS_ALERT"
}
export type OrderDetails = GuestOrderQuery['guestOrder'] | GuestOrderByTokenQuery['guestOrderByToken'];
=======
    DISMISS_ALERT = "DISMISS_ALERT",
    DATA_FETCHED = "DATA_FETCHED",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
>>>>>>> template/main
interface LoadingAction {
    type: Actions.LOADING;
}
interface SetDetailsAction {
    type: Actions.SET_DETAILS;
<<<<<<< HEAD
    details: OrderDetails | null;
=======
    details: OrderModel | null;
>>>>>>> template/main
    alert?: Alert;
    fromSearchForm?: boolean;
}
export declare enum AlertType {
    ERROR = "error",
    WARNING = "warning",
    SUCCESS = "success"
}
export declare enum AlertCode {
    INVALID_ORDER = "invalid_order",
    INVALID_SEARCH = "invalid_search",
    UNKNOWN = "unknown_error"
}
export type Alert = {
    type: AlertType;
    code: AlertCode;
    message: string;
};
interface AlertAction {
    type: Actions.ALERT;
    alert: Alert;
}
interface DismissAlertAction {
    type: Actions.DISMISS_ALERT;
}
<<<<<<< HEAD
export interface State {
    isLoading: boolean;
    details: OrderDetails | null;
=======
interface DataFetchedAction {
    type: Actions.DATA_FETCHED;
}
interface UnknownError {
    type: Actions.UNKNOWN_ERROR;
}
export interface State {
    isLoading: boolean;
    details: OrderModel | null;
    orderData?: OrderModel;
>>>>>>> template/main
    orderRef?: string;
    alert?: Alert;
    isOrderFromSearchForm: boolean;
}
<<<<<<< HEAD
type Action = LoadingAction | SetDetailsAction | AlertAction | DismissAlertAction;
=======
type Action = LoadingAction | SetDetailsAction | AlertAction | DismissAlertAction | DataFetchedAction | UnknownError;
>>>>>>> template/main
export declare function orderConfirmationReducer(state: State, action: Action): State;
export {};
//# sourceMappingURL=orderConfirmation.d.ts.map