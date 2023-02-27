import { AppBar, Box, Container, createTheme, Link, styled, Toolbar, Typography, Paper, Grid, ThemeProvider } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    textAlign: 'center',
    height: 60,
    lineHeight: '60px',
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })

export const Busqueda = () => {

    const navigate = useNavigate();

    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                        Buscar
                    </Typography>
                    <Link href="http://action_search" color='inherit'>
                        <SearchIcon sx={{ fontSize: 30 }} />
                    </Link>
                </Toolbar>
            </AppBar>
            <Offset />
            <Grid container spacing={2}>
                <ThemeProvider theme={darkTheme}>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/shooter')} elevation={3}>Shooter</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/plataforma')} elevation={3}>Plataforma</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/peleas')} elevation={3}>Peleas</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/rpg')} elevation={3}>RPG</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/carreras')} elevation={3}>Carreras</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/deportes')} elevation={3}>Deportes</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/cartas')} elevation={3}>Cartas</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/estrategia')} elevation={3}>Estrategia</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item onClick={() => navigate('/games/beat-em-up')} elevation={3}>Beat Em Up</Item>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </>
    )
}