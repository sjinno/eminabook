import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import axios from 'axios';
import { popularAnimeUri } from './animeAPI';

interface AnimeField {
    mal_id: string;
    image_url: string;
    title: string;
    episodes: number;
}

interface AnimeState {
    value: number;
    popular: AnimeField[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: AnimeState = {
    value: 0,
    popular: [],
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

export const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularAnimeAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPopularAnimeAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.popular = action.payload;
            });
    },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPopular = (state: RootState) => state.anime.popular;

export default animeSlice.reducer;
