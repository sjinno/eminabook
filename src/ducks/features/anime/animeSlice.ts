import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import axios from 'axios';
import { popularAnimeUri, queriedAnimeUri } from './animeAPI';

interface AnimeField {
    mal_id: string;
    image_url: string;
    title: string;
    episodes: number;
}

interface AnimeState {
    value: number;
    popular: AnimeField[];
    queried: AnimeField[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: AnimeState = {
    value: 0,
    popular: [],
    queried: [],
    status: 'idle',
};

export const fetchPopularAnimeAsync = createAsyncThunk(
    'anime/fetchPopularAnime',
    async () => {
        // console.log(popularAnimeUri());
        const response = await axios.get(popularAnimeUri());
        // The value we return becomes the `fulfilled` action payload
        return response.data.results;
    },
);

export const fetchQueriedAnimeAsync = createAsyncThunk(
    'anime/fetchQueriedAnime',
    async (anime: string) => {
        // console.log(queriedAnimeUri(anime));
        const response = await axios.get(queriedAnimeUri(anime));
        // console.log(response.data.results);
        return response.data.results;
    },
);

export const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        // fetchQueriedAnime: (state, action) => {
        //     state.queried = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularAnimeAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPopularAnimeAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.popular = action.payload;
            })
            .addCase(fetchQueriedAnimeAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchQueriedAnimeAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.queried = action.payload;
            });
    },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPopular = (state: RootState) => state.anime.popular;
export const selectQueried = (state: RootState) => state.anime.queried;

export default animeSlice.reducer;
export type { AnimeField };
