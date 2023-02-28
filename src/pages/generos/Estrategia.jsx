import { AppBar, Container, styled, Toolbar, Typography, ImageList, ImageListItem, IconButton } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Estrategia = () => {

    const { gamesEstrategia } = useLoaderData();

    const backButton = () => {
        history.back();
    }

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="back"
                        sx={{ mr: 2 }}
                        onClick={backButton}
                    >
                        <ArrowBackIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                    <Typography variant="h5" component='div' sx={{ flexGrow: 1 }}>
                        Estrategia
                    </Typography>
                </Toolbar>
            </AppBar>
            <Offset />
            <Container>
                <ImageList gap={10} cols={3}>
                    {gamesEstrategia.map((game) => (
                        <Link to={`/games/id/${game.id}`} key={game.poster}>
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

export const loaderEstrategia = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/estrategia/`);
    const gamesEstrategia = await res.json();

    return { gamesEstrategia };
}
