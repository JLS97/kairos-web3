import { createBrowserRouter } from "react-router-dom";
import { getCurrenciesLoader } from "./Loaders";
import { LayoutKairos } from "../components/Layouts";

// para este caso no necesitamos un router
// pero este es un ejemplo que serviria para una implementacion mas compleja donde
// se necesiten manejar varias rutas, por ejemplo una para market, otra para wallet, etc..
// con el uso de loaders para cargar datos de manera asincrona
// y con el uso de un layout para manejar la estructura de la pagina (esto lo suelo usar para montar paneles de administracion)
const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutKairos />,
        children: [
            { 
                index: true,
                path: "/", 
                element: <HomeScreen />,
                loader: getCurrenciesLoader,
            },
        ]
    }
]);

export default router;
