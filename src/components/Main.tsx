import { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadAnime } from '../ducks/actions/animeAction';
import { State, AnimeState } from '../ducks/reducers/animeReducer';

// Components
import SearchBox from './SearchBox';
import Anime from './Anime';

const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAnime());
    }, [dispatch]);

    const { popular, newAnime, upcoming, searched } = useSelector(
        (state: AnimeState): State => state.anime,
    );

    console.log(popular);

    return (
        <div>
            <Title />
            <SearchBox />
            {popular.length ? <Anime /> : ''}
        </div>
    );
};

const Title = () => {
    return <h1 className="title">AniKen</h1>;
};

export default Main;
