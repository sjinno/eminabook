import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Anime API
import { useAppSelector, useAppDispatch } from '../ducks/app/hooks';
import {
    selectQueried,
    fetchQueriedAnimeAsync,
} from '../ducks/features/anime/animeSlice';

const SearchForm = () => {
    // State
    const [searchInput, setSearchInput] = useState('');
    const [limit, setLimit] = useState(5);

    const queried = useAppSelector(selectQueried);
    const dispatch = useAppDispatch();

    const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(evt.currentTarget.value);
    };

    const handleSubmittedForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // console.log(searchInput);
        dispatch(fetchQueriedAnimeAsync(searchInput));
        // console.log(queried);
        setSearchInput('');
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

            {queried.slice(0, limit).map((anime, idx) => (
                <div key={anime.mal_id}>
                    <p>
                        <b>{idx + 1}.</b>
                    </p>
                    <img src={anime.image_url} alt="" />
                    <div>
                        <p>{anime.title}</p>
                        <p>Episodes: {anime.episodes}</p>
                    </div>
                </div>
            ))}
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

export default SearchForm;
