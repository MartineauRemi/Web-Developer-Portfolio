import React from 'react'
import styled from 'styled-components'
import MainNav from './MainNav'

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
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 767px){
        text-align: center;

        .footer{
            &__logo, &__nav{
                margin-bottom: 2.5rem;
            }
        }
    }

    @media screen and (min-width: 768px){
       flex-direction: row;
       justify-content: space-between;
    }
`

const Logo = styled.div`
    color: white;
    background-color: transparent;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export default function Footer() {
    return (
        <Wrapper>
            <Content>
                <Logo className="footer__logo">&lt;/&gt;</Logo>
                <MainNav
                    className="footer__nav"
                    menuOpen={true}/>
            </Content>
        </Wrapper>
    )
}
