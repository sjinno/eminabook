import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchForm = () => {
    // State
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(evt.currentTarget.value);
    };

    useEffect(() => {
        console.log(searchInput);
    }, [searchInput]);

    return (
        <div>
            <form>
                <StyledInput
                    type="text"
                    placeholder="search anime"
                    value={searchInput}
                    onChange={handleSearchInput}
                />
                <StyledButton type="submit" value="boom" />
            </form>
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
