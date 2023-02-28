import { createBrowserRouter } from "react-router-dom";
import LayOutPublic from "../layout/LayOutPublic";
import { Busqueda } from "../pages/Busqueda";
import { Home } from "../pages/Home";
import { Favoritos } from "../pages/Favoritos";
import { loaderShooter, Shooter } from "../pages/generos/Shooter";
import { Game, loaderGame } from "../pages/Game";
import { loaderPlataforma, Plataforma } from "../pages/generos/Plataforma";
import { loaderPeleas, Peleas } from "../pages/generos/Peleas";
import { loaderRpg, Rpg } from "../pages/generos/Rpg";
import { Carreras, loaderCarreras } from "../pages/generos/Carreras";
import { Deportes, loaderDeportes } from "../pages/generos/Deportes";
import { Cartas, loaderCartas } from "../pages/generos/Cartas";
import { Estrategia, loaderEstrategia } from "../pages/generos/Estrategia";
import { BeatEmUp, loaderBeatEmUp } from "../pages/generos/BeatEmup";
import { loaderTopTen } from "../components/TopTen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOutPublic />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: loaderTopTen
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
                path: '/games/rpg',
                element: <Rpg />,
                loader: loaderRpg
            },
            {
                path: '/games/carreras',
                element: <Carreras />,
                loader: loaderCarreras
            },
            {
                path: '/games/deportes',
                element: <Deportes />,
                loader: loaderDeportes
            },
            {
                path: '/games/cartas',
                element: <Cartas />,
                loader: loaderCartas
            },
            {
                path: '/games/estrategia',
                element: <Estrategia />,
                loader: loaderEstrategia
            },
            {
                path: '/games/beat-em-up',
                element: <BeatEmUp />,
                loader: loaderBeatEmUp
            },
            {
                path: '/games/id/:id',
                element: <Game />,
                loader: loaderGame
            }
        ]
    },
])