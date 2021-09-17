import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPopular, fetchPopularAnimeAsync } from './animeSlice';

export function Anime() {
    const [count, setCount] = useState(10);
    const popular = useAppSelector(selectPopular);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPopularAnimeAsync());
    }, [dispatch]);

    const loadMoreHandler = () => {
        setCount((prev) => prev + 10);
    };

    console.log(count);

    return (
        <div>
            {popular.slice(0, count).map((anime) => (
                <div key={anime.mal_id}>
                    <img src={anime.image_url} alt="" />
                    <h3>{anime.title}</h3>
                </div>
            ))}
            {count !== 50 ? (
                <button onClick={loadMoreHandler}>Load more</button>
            ) : (
                ''
            )}
        </div>
    );
}
