import { Currency } from "../../../domain/currencies/currencies.mode";
import { ErrorBase } from "../../../helpers/ErrorBase";

type ErrorGetCurrenciesType = "ERROR_GET_CURRENCIES";

export class ErrorGetCurrencies extends ErrorBase<ErrorGetCurrenciesType> {}

export interface GetCurrenciesParams {
    ids: string[];
}
export interface GetCurrenciesResponse {
  currencies: Currency[];
}

export const GetCurrenciesErrorResponse = {
    UNAUTHORIZED: 'UNAUTHORIZED',
    NOT_FOUND: 'NOT_FOUND',
} as const;
