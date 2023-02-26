import { AppBar, Box, Container, createTheme, Link, styled, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export const Busqueda = () => {
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
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellendus ipsa sint pariatur nihil at asperiores iste ullam officia, quis qui assumenda exercitationem sit architecto error blanditiis omnis dolores quia.</h1>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellendus ipsa sint pariatur nihil at asperiores iste ullam officia, quis qui assumenda exercitationem sit architecto error blanditiis omnis dolores quia.</h1>
        </>
    )
}