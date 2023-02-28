import { Button, AppBar, Toolbar, Typography, Container, styled, IconButton } from "@mui/material";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLoaderData } from "react-router-dom";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Game = () => {

    const { game } = useLoaderData();

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
                </Toolbar>
            </AppBar>
            <Offset />
            <div className="uk-position-relative">
                <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-primary uk-margin-bottom" data-src={game.background} data-uk-img="loading: eager">
                </div>
                <div className="uk-position-cover uk-overlay-primary"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src={game.logo} alt="" />
                </div>
            </div>
            <Container>
                <div className="uk-clearfix uk-margin-bottom">
                    <div className="uk-float-left">
                        <div>
                            <Typography variant="h5" color={'#fff'}>
                                {game.title}
                            </Typography>
                        </div>
                        <div >
                            <Typography className="year" variant="subtitle1" color={'#bb86fc'}>
                                {game.genre} · {game.year}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="uk-text-center">
                    <Button fullWidth={true} href={game.reference} variant='contained' startIcon={<VideogameAssetIcon />}>
                        Jugar Ahora
                    </Button>
                </div>
            </Container>
        </>
    )
}


export const loaderGame = async ({ params }) => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/game-boy-advance/id/${params.id}`);
    const game = await res.json();

    return { game };
}