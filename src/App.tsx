import { GlobalStyle } from "./GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";

const Navigation = () => {
  return <RouterProvider router={Routes}/>
}

const App = () => {

  return (
    <> 
      <GlobalStyle />
      <Navigation />
    </>
  )
}

export default App
