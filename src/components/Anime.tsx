import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../ducks/app/hooks';
import {
    selectPopular,
    fetchPopularAnimeAsync,
} from '../ducks/features/anime/animeSlice';

const Anime = (): JSX.Element => {
    const [count, setCount] = useState(5);
    const popular = useAppSelector(selectPopular);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPopularAnimeAsync());
    }, [dispatch]);

    console.log(popular);

    const loadMoreHandler = () => {
        setCount((prev) => prev + 5);
    };

    return (
        <div>
            {popular.slice(0, count).map((anime, idx) => (
                <AnimeCard key={anime.mal_id}>
                    <p>
                        <b>{idx + 1}.</b>
                    </p>
                    <StyledImg src={anime.image_url} alt="" />
                    <AnimeBriefInfo>
                        <p>{anime.title}</p>
                        <p>Episodes: {anime.episodes}</p>
                    </AnimeBriefInfo>
                </AnimeCard>
            ))}
            {count !== 50 ? (
                <LoadButton onClick={loadMoreHandler}>Load more</LoadButton>
            ) : (
                <button onClick={() => setCount(10)}>Close</button>
            )}
        </div>
    );
};

export default Anime;

const AnimeCard = styled.div`
    padding: 1rem 0;
    display: flex;
    gap: 1.5rem;
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset; */
`;

const StyledImg = styled.img`
    width: 5.5rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
`;

const AnimeBriefInfo = styled.div`
    font-weight: 700;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`;

const LoadButton = styled.button`
    border: none;
    display: block;
    width: 22.2rem;
    margin: 0 auto;
    padding: 2rem 0;
    font-size: 2.2rem;
    font-weight: 700;
    background-color: var(--clr-black);
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-top: 2rem;
`;
