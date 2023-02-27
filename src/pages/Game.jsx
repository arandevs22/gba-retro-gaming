import { Button, Container, Typography } from "@mui/material"
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'
import { useLoaderData } from "react-router-dom"

export const Game = () => {

    const { game } = useLoaderData();

    return (
        <>
            <div className="uk-position-relative">
                <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-primary uk-margin-bottom" data-src={game.background} data-uk-img="loading: eager">
                </div>
                <div className="uk-position-cover uk-overlay-primary"></div>
                <div className="uk-overlay uk-position-center">
                    <img className="game-logo" src={game.logo} alt="" />
                </div>
            </div>
            <Container>
                <div className="uk-clearfix uk-margin-large-bottom">
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
                    <Button href={game.reference} variant='contained' size="large" startIcon={<VideogameAssetIcon />}>
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