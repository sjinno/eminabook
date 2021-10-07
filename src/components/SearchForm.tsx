import { useState } from 'react';
import styled from 'styled-components';

// Anime API
import { useAppSelector, useAppDispatch } from '../ducks/app/hooks';
import {
    selectQueried,
    fetchQueriedAnimeAsync,
} from '../ducks/features/anime/animeSlice';

// Components
import AnimeResults from './AnimeResults';

const SearchForm = () => {
    // States
    const [searchInput, setSearchInput] = useState('');

    // Redux
    const queried = useAppSelector(selectQueried);
    const dispatch = useAppDispatch();

    // Handlers
    const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(evt.currentTarget.value);
    };

    const handleSubmittedForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (searchInput) dispatch(fetchQueriedAnimeAsync(searchInput));
        setSearchInput('');
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

            {queried.length ? <AnimeResults queried={queried} /> : ''}
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

export default SearchForm;
