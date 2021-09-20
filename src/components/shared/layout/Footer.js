import React from 'react'
import styled from 'styled-components'
import MainNav from './MainNav'
import SocialMedias from './SocialMedias'
import EmailAddress from '../components/EmailAddress'

const Wrapper = styled.section`
    width: 100%;
    padding: 2rem var(--h-padding);
    background-color: var(--dark-secondary);
    display: grid;
`

const Content = styled.div`
    place-self: center;
    width: 100%;
    max-width: var(--layout-max-width);
    display: grid;
    row-gap: 2.5rem;

    .footer{
        &__logo, &__email, &__nav, &__social-medias{
            place-self: center;
        }
    }

    @media screen and (max-width: 767px){
        text-align: center;
    }

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(2, auto);
        grid-template-rows: auto 1px auto;
        grid-template-areas: 'logo menu' 'line line' 'email socials';

       .footer{
           &__logo, &__nav, &__social-medias, &__email{
               align-self: center;
           }
       }

       .footer__logo{
            grid-area: logo;
            justify-self: flex-start;
       }

       .footer__nav{
           grid-area: menu;
           justify-self: flex-end;
       }

       .footer__social-medias{
           grid-area: socials;
           justify-self: flex-end;
       }

       .footer__email{
           grid-area: email;
           justify-self: flex-start
       }
    }
`

const Logo = styled.div`
    color: white;
    background-color: transparent;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
` 

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--white);
    opacity: .1;
    margin-bottom: 2rem;

    @media screen and (max-width: 767px){
        display: none;
    }

    @media screen and (min-width: 768px){
        grid-area: line;
    }
`


export default function Footer() {
    return (
        <Wrapper>
            <Content>
                <Logo className="footer__logo">&lt;/&gt;</Logo>
                <SocialMedias className="footer__social-medias"/>
                <EmailAddress
                    className="footer__email"/>
                <MainNav
                    className="footer__nav"
                    menuOpen={true} />
                <Line />
            </Content>
        </Wrapper>
    )
}
