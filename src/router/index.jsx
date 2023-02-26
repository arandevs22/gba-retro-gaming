import { createBrowserRouter } from "react-router-dom";
import LayOutPublic from "../layout/LayOutPublic";
import { Busqueda } from "../pages/Busqueda";
import { Home } from "../pages/Home";
import { Favoritos } from "../pages/Favoritos";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOutPublic />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/busqueda',
                element: <Busqueda />
            },
            {
                path: '/Favoritos',
                element: <Favoritos />
            }
        ]
    },
])