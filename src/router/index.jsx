import { createBrowserRouter } from "react-router-dom";
import LayOutPublic from "../layout/LayOutPublic";
import { Busqueda } from "../pages/Busqueda";
import { Home } from "../pages/Home";
import { Favoritos } from "../pages/Favoritos";
import { loaderShooter, Shooter } from "../pages/generos/Shooter";
import { Game } from "../pages/Game";
import { loaderPlataforma, Plataforma } from "../pages/generos/Plataforma";
import { loaderPeleas, Peleas } from "../pages/generos/Peleas";

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
            },
            {
                path: '/games/shooter',
                element: <Shooter />,
                loader: loaderShooter
            },
            {
                path: '/games/plataforma',
                element: <Plataforma />,
                loader: loaderPlataforma
            },
            {
                path: '/games/peleas',
                element: <Peleas />,
                loader: loaderPeleas
            },
            {
                path: '/games/id/:id',
                element: <Game />
            }
        ]
    },
])