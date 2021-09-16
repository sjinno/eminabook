import { Dispatch } from 'redux';
import axios from 'axios';
import { popularAnimeUri, newAnimeUri, upcomingAnimeUri } from '../../api';

const loadAnime = () => async (dispatch: Dispatch) => {
    const popularData = await axios.get(popularAnimeUri());
    // const newAnimeData = await axios.get(newAnimeUri());
    // const upcomingData = await axios.get(upcomingAnimeUri());

    dispatch({
        type: 'FETCH_ANIME',
        payload: {
            popular: popularData.data.results,
            // newAnime: newAnimeData.data.results,
            // upcoming: upcomingData.data.results,
        },
    });
};

export { loadAnime };
