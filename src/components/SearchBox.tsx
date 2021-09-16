import { useState } from 'react';

const SearchBox = () => {
    const [searchInput, setSearchInput] = useState('');

    const searchInputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(evt.currentTarget.value);
    };

    const fetchAnimeHandler = () => {
        // alert(`Hello, ${searchInput}!`);
    };

    return (
        <div>
            <input
                value={searchInput}
                onChange={searchInputHandler}
                type="text"
            />
            <input onClick={fetchAnimeHandler} type="button" value="Search" />
        </div>
    );
};

export default SearchBox;
