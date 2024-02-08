import { createBrowserRouter } from "react-router-dom";
import { getCurrenciesLoader, getCurrencyLoader } from ".";

// para este caso no necesitamos un router
// pero este es un ejemplo que serviria para una implementacion mas compleja donde
// se necesiten manejar varias rutas, por ejemplo una para market, otra para wallet, etc..
// con el uso de loaders para cargar datos de manera asincrona
// y con el uso de un layout para manejar la estructura de la pagina (esto lo suelo usar para montar paneles de administracion)
const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutHome />,
        children: [
            { 
                index: true,
                path: "/", 
                element: <HomeScreen />,
                loader: getCurrenciesLoader,
            },
            { 
                path: "/currency/:id",
                element: <CurrencyScreen />,
                loader: getCurrencyLoader,
            }
        ]
    }
]);

export default router;
