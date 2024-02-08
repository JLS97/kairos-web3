import { useLoaderData } from "react-router-dom";
import { Currency } from "../../domain/currencies/currencies.mode";

interface LoaderData {
    currenciesInfo: Currency[];
}

const HomeScreen = () => {
    const { currenciesInfo } = useLoaderData() as LoaderData;

    return (
        <HomeScreenView 
            currenciesInfo={currenciesInfo}
        />
    )

}

export default HomeScreen;
