import { Result } from "../../../helpers/Result";
import { ApiService } from "../../../services/ApiService";
import { ResponseCore } from "../../responses";
import { ErrorGetCurrencies, GetCurrenciesErrorResponse, GetCurrenciesParams, GetCurrenciesResponse } from "./requestTypes";

export const getCurrencies = async (
    params: GetCurrenciesParams
): Promise<Result<GetCurrenciesResponse, ErrorGetCurrencies>> => {
    try {
        const { _client: Api} = new ApiService();

        const requestUrl = `/currency?${params.ids.map((id) => `id=${id}`).join("&")}`;

        const { data: currenciesData } = await Api.get<
            ResponseCore<GetCurrenciesResponse>
        >(requestUrl);

        return Result.ok(currenciesData.payload);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const errorPayload: keyof typeof GetCurrenciesErrorResponse =
        error?.response?.data?.payload;
        return Result.fail(
            new ErrorGetCurrencies({
            type: "ERROR_GET_CURRENCIES",
            message: errorPayload
                ? GetCurrenciesErrorResponse[errorPayload]
                : "Error al obtener la cuenta",
            })
        );
    }
}