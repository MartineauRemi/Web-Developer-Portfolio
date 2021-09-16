import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;900&display=swap');

    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-family: 'Montserrat', sans-serif;

        --white: #FFFFFF;
        --light-primary: #F8F8FB;
        --light-secondary: #F9FAFE;

        --fw-rg: 400;
        --fw-md: 500;
        --fw-lg: 700;
        --fw-xl: 900;
    }
`

export default GlobalStyle