import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');

    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-family: 'Montserrat', sans-serif;

        //layout
        --max-width: 1110px;
        --h-padding: 1.5rem;
        --section-gap: 4.5rem;

        @media screen and (min-width: 768px){
            --h-padding: 2.5rem;
            --section-gap: 7.5rem;
        }

        @media screen and (min-width: 1440px){
            --h-padding: 0;
            --section-gap: 10rem;
        }

        //colors 
        --white: #FFFFFF;
        --light-primary: #F8F8FB;

        --blue-primary: rgba(97,99,255,1);
        --blue-secondary: rgba(97,99,255,0.6);
        --blue-ternary: rgba(97,99,255,0.3);

        --gradient-blue-white: linear-gradient(135deg, white,rgba(97,99,255,0.3));


        //font-weight
        --fw-rg: 400;
        --fw-md: 500;
        --fw-lg: 700;
        --fw-xl: 900;
    }

    h1{
        font-size: 2.5rem;
        line-height: 3.5rem;
        letter-spacing: .8px;
        font-weight: var(--fw-lg);
    }

    h2{
        font-size: 2.25rem;
        line-height: 3.125rem;
        font-weight: var(---fw-xl);
    }

    p{
        font-size: 0.9375rem;
        line-height: 1.5rem;
        font-weight: var(--fw-rg);
    }
`

export default GlobalStyle