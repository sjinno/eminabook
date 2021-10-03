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
        if (searchInput) dispatch(fetchQueriedAnimeAsync(searchInput));
        setSearchInput('');
    };

    const handleLoadMore = () => {
        setLimit((prev) => prev + 6);
    };

    return (
        <div>
            <StyledForm onSubmit={handleSubmittedForm}>
                <StyledInput
                    type="text"
                    placeholder="search anime"
                    value={searchInput}
                    onChange={handleSearchInput}
                />
                <StyledButton type="submit" value="boom" />
            </StyledForm>

            <AnimeWrapper>
                {queried.slice(0, limit).map((anime, idx) => (
                    <Anime key={anime.mal_id} {...anime} />
                ))}
            </AnimeWrapper>
            <button onClick={handleLoadMore}>load more</button>
            <button onClick={() => setLimit(6)}>close</button>
        </div>
    );
};

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    padding-block: 2rem;
`;

const StyledInput = styled.input`
    font-family: var(--main-font);
    padding-inline: 1rem;
`;

const StyledButton = styled.input`
    border: none;
    background-color: var(--clr-blue);
    color: white;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
`;

const AnimeWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 15rem);
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    padding-block: 2rem;
`;

export default SearchForm;
