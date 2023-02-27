import { AppBar, Container, styled, Toolbar, Typography, Grid, Box, ImageList, ImageListItem } from "@mui/material"
import { shooterData } from "../../data/games";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Shooter = () => {

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h5" component='div' sx={{ flexGrow: 1 }}>
                        Shooter
                    </Typography>
                </Toolbar>
            </AppBar>
            <Offset />
            <Container>
                <ImageList cols={2}>
                    {shooterData.map((game) => (
                        <ImageListItem key={game.poster}>
                            <img src={game.poster} alt={game.title} className='cover' loading='lazy' />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}

