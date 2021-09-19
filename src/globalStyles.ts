import { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --clr-yellow: #ffbe0b;
        --clr-orange: #fb5607;
        --clr-pink: #ff006e;
        --clr-purple: #8338ec;
        --clr-blue: #3a86ff;
        --clr-black: #202020;

        --main-font: 'Manrope', 'Helvetica', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.3rem;
    }
`;

export default GlobalStyles;
