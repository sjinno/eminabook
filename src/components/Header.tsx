import React from 'react';
import styled from 'styled-components';

import SearchBox from './SearchBox';

const Header = () => {
    return (
        <HeaderContainer>
            <Title>AniKen</Title>
            <SearchBox />
        </HeaderContainer>
    );
};

const Title = styled.div`
    font-family: var(--main-font);
    font-size: 8.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
`;

const HeaderContainer = styled.div`
    padding-bottom: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Header;
