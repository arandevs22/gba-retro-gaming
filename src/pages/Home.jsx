import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import { Recomendados } from "../components/Recomendados";
import { TopTen } from "../components/TopTen";


export const Home = () => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                        Inicio
                    </Typography>
                </Toolbar>
            </AppBar>
            <Recomendados />
            <TopTen />
        </>
    )
}