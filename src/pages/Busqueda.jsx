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
                        <Item onClick={() => navigate('/shooter')} elevation={3}>Shooter</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Peleas</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Rpg</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Carreras</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Estrategia</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Arcade</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Aventura</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Cartas</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Deportes</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item elevation={3}>Puzzle</Item>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </>
    )
}