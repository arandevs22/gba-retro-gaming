import { Container } from "@mui/material";
import { Link } from "react-router-dom";



export const Recomendados = () => {

    return (
        <>
            <Container className="uk-margin-bottom">
                <div data-uk-slider>
                    <ul className="uk-slider-items uk-child-width-1-3 uk-grid-small slide-cover" data-uk-grid>
                        <li>
                            <Link to={'/games/id/1'}>
                                <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/f98c214ef8193827e331f500d9809c47.png" alt="metal-slug-advance" />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/games/id/2'}>
                                <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/635132798c93dd6003e732836dcea913.jpg" alt="dragon-ball-advanced-adventure" />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/games/id/103'}>
                                <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/e49a21261556f079096c489a631a8cbd.jpg" alt="sonic-advance-2" />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/games/id/72'}>
                                <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/cfd6c82a2b509c9fde692e0bb068f0c3.jpg" alt="mario-kart-super-circuit" />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/games/id/108'}>
                                <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/e2d9f3fdfe355db5d8c82554c4b2c76e.jpg" alt="street-fighter-alpha-3" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    )
}
