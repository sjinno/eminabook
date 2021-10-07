import { FC, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { AnimeField } from '../ducks/features/anime/animeSlice';
import Anime from './Anime';

interface Props {
    queried: AnimeField[];
}

const AnimeResults: FC<Props> = ({ queried }) => {
    // States
    const [limit, setLimit] = useState(6);

    // Handlers
    const handleLoadMore = () => {
        setLimit((prev) => prev + 6);
    };

    return (
        <div>
            <AnimeWrapper>
                {queried.slice(0, limit).map((anime, idx) => (
                    <Anime key={anime.mal_id} {...anime} />
                ))}
            </AnimeWrapper>
            <ButtonWrapper>
                <button onClick={handleLoadMore}>load more</button>
                <button onClick={() => setLimit(6)}>close</button>
            </ButtonWrapper>
        </div>
    );
};

const AnimeWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 15rem);
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    padding-block: 2rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & button {
        width: 12.3rem;
        padding-block: 0.5rem;
        border: none;
        background: linear-gradient(to right, #313131, var(--clr-black));
        color: white;
        font-weight: 600;
    }
`;

export default AnimeResults;
