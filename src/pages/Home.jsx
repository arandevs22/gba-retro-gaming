import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import { TopTen } from "../components/TopTen";


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Home = () => {
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                        Inicio
                    </Typography>
                </Toolbar>
            </AppBar>
            <Offset />
            <TopTen />
        </>
    )
}