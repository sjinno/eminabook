import React from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import SearchForm from './components/SearchForm';

function App() {
    return (
        <AppBody>
            <Title />
            <SearchForm />
        </AppBody>
    );
}

const AppBody = styled.div`
    padding-block: 6rem;

    @media screen and (min-width: 1024px) {
        width: 768px;
        margin: 0 auto;
    }
`;

export default App;
