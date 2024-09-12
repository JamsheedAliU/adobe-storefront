import { FetchQueryError } from '@adobe/fetch-graphql';

<<<<<<< HEAD
=======
export declare class InvalidArgument extends Error {
    constructor(message: string);
}
>>>>>>> template/main
export declare class FetchError extends Error {
    constructor(reasons: FetchQueryError);
}
export declare class MissingArgument extends Error {
    constructor(argument: string);
}
export declare class OrderNotFound extends Error {
    constructor();
}
<<<<<<< HEAD
=======
export declare class MissingEmail extends InvalidArgument {
    constructor();
}
>>>>>>> template/main
//# sourceMappingURL=errors.d.ts.map