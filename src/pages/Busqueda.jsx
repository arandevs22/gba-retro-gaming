import { AppBar, Box, Container, Link, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export const Busqueda = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, top: 0 }}>
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
            </Box>
            <Container>

            </Container>

        </>
    )
}