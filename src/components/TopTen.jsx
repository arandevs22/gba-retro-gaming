import { Container, styled, Toolbar, Typography, ImageList, ImageListItem, } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const TopTen = () => {

    const { topTen } = useLoaderData();

    return (
        <>
            <Container>
                <Typography variant="h5" color={'#fff'}>
                    Top 10
                </Typography>
                <ImageList gap={20} cols={2} className='uk-margin-right'>
                    {topTen.map((game) => (
                        <Link to={`/games/id/${game.id}`} key={game.poster}>
                            <ImageListItem>
                                <img className="uk-margin-small-bottom" src={game.poster} alt={game.title} loading='lazy' />
                                <Typography variant="body2" color={'gray'}>
                                    {game.title}
                                </Typography>
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}

export const loaderTopTen = async () => {
    const res = await fetch(`https://apiretrogame-production.up.railway.app/api/games/top10`);
    const topTen = await res.json();

    return { topTen };
}
