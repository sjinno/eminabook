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
`;

export default App;
