import {
    combineReducers,
    configureStore,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import animeReducer from '../features/anime/animeSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    anime: animeReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
