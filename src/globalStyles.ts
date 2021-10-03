import { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.5rem;
        font-family: var(--main-font);
        color: var(--clr-black);
    }
`;

export default GlobalStyles;
