const Success = {
    SUCCESS: 'SUCCESS',
} as const;

const BadRequest = {
    BAD_REQUEST: 'BAD_REQUEST',
} as const;

const RouteNotFound = {
    ROUTE_NOT_FOUND: 'ROUTE_NOT_FOUND',
} as const;

const NotImplemented = {
    NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
} as const;

const InternalServerError = {
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
} as const;
  
export const CoreResponses = {
    RouteNotFound,
    BadRequest,
    Success,
    NotImplemented,
    InternalServerError,
} as const;

export interface ResponseCore<T> {
    status: keyof typeof CoreResponses;
    payload: T;
}
  