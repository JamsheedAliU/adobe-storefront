<<<<<<< HEAD
import { FetchQueryError } from '@adobe/fetch-graphql';
=======
import { FetchQueryError } from '../fetch-graphql';
>>>>>>> template/main

type ErrorPath = (string | number)[];
export type ErrorWithPath = FetchQueryError[number] & {
    path?: ErrorPath;
};
/**
 * Filters out errors with known paths from a list of errors generated by a GraphQL query.
 *
 * Known issue: The query does not differentiate between physical and virtual gift cards, leading
 * to errors for physical ones as they don't have 'sender_email' and 'recipient_email' properties.
 *
 * @param {ErrorWithPath[]} errors - Array of errors to be filtered.
 * @return {ErrorWithPath[]} Uncontrolled (unexpected) errors not matching predefined paths.
 */
export declare function filterControlledErrors(errors: ErrorWithPath[]): ErrorWithPath[];
export {};
//# sourceMappingURL=filterControlledErrors.d.ts.map