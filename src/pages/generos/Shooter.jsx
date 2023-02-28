import { AppBar, Container, styled, Toolbar, Typography, ImageList, ImageListItem, IconButton } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Shooter = () => {

    const { gamesShooter } = useLoaderData();

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
                        Shooter
                    </Typography>
                </Toolbar>
            </AppBar>
            <Offset />
            <Container>
                <ImageList gap={10} cols={3}>
                    {gamesShooter.map((game) => (
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

export const loaderShooter = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/shooter/`);
    const gamesShooter = await res.json();

    return { gamesShooter };
}
