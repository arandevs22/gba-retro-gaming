import { AppBar, Container, styled, Toolbar, Typography, Grid, Box, ImageList, ImageListItem } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Shooter = () => {

    const { gamesShooter } = useLoaderData();

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
                <ImageList gap={20} cols={3}>
                    {gamesShooter.map((game) => (
                        <Link to={game.reference} key={game.poster}>
                            <ImageListItem>
                                <img src={game.poster} alt={game.title} className='cover' loading='lazy' />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}

export const loaderShooter = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/shooter/`);
    const gamesShooter = await res.json();

    return { gamesShooter };
}
