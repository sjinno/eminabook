import { useState } from 'react';
import styled from 'styled-components';

// Anime API
import { useAppSelector, useAppDispatch } from '../ducks/app/hooks';
import {
    selectQueried,
    fetchQueriedAnimeAsync,
} from '../ducks/features/anime/animeSlice';

// Components
import Anime from './Anime';

const SearchForm = () => {
    // State
    const [searchInput, setSearchInput] = useState('');
    const [limit, setLimit] = useState(6);

    const queried = useAppSelector(selectQueried);
    const dispatch = useAppDispatch();

    const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(evt.currentTarget.value);
    };

    const handleSubmittedForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(fetchQueriedAnimeAsync(searchInput));
        setSearchInput('');
    };

    const handleLoadMore = () => {
        setLimit((prev) => prev + 6);
    };

    return (
        <div>
            <form onSubmit={handleSubmittedForm}>
                <StyledInput
                    type="text"
                    placeholder="search anime"
                    value={searchInput}
                    onChange={handleSearchInput}
                />
                <StyledButton type="submit" value="boom" />
            </form>

            <AnimeWrapper>
                {queried.slice(0, limit).map((anime, idx) => (
                    <Anime key={anime.mal_id} {...anime} />
                ))}
                <button onClick={handleLoadMore}>load more</button>
                <button onClick={() => setLimit(6)}>close</button>
            </AnimeWrapper>
        </div>
    );
};

const StyledInput = styled.input`
    font-family: var(--main-font);
`;

const StyledButton = styled.input`
    border: none;
    background-color: var(--clr-blue);
    color: white;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
`;

const AnimeWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;
`;

export default SearchForm;
