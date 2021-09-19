import React from 'react';
import styled from 'styled-components';

// Components / Pages
import Header from './components/Header';
import AnimeList from './components/AnimeList';

function App() {
    return (
        <AppBody>
            <Header />
            <AnimeList />
        </AppBody>
    );
}

const AppBody = styled.div`
    font-family: var(--main-font);
    color: var(--clr-black);
    padding: 1rem;
`;

export default App;
