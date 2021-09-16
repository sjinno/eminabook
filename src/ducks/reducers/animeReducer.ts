import { AnyAction } from 'redux';

interface State {
    popular: any;
    newAnime: any;
    upcoming: any;
    searched: any;
}

interface AnimeState {
    anime: State;
}

const initialState: State = {
    popular: [],
    newAnime: [],
    upcoming: [],
    searched: [],
};

const animeReducer = (
    state: State = initialState,
    action: AnyAction,
): State => {
    switch (action.type) {
        case 'FETCH_ANIME':
            return {
                ...state,
                popular: action.payload.popular,
                newAnime: action.payload.newAnime,
                upcoming: action.payload.upcoming,
            };
        default:
            return { ...state };
    }
};

export default animeReducer;
export type { State, AnimeState };
