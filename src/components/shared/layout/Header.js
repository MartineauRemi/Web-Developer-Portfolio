import React, { useState } from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { MenuButton } from '../components/Buttons'

const StyledHeader = styled(Headroom)`
    width: 100%;  
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;

    .headroom{
        width: 100%;
        display: grid;
        background: var(--dark-primary);
    }
`

const Wrapper = styled.header`
    place-self: center;
    max-width: var(--layout-max-width);
    width: 100%;
    padding: 2rem var(--h-padding);
`


const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Logo = styled.div`
    color: white;
    background-color: transparent;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Nav = styled.nav`
    @media screen and (max-width: 767px){
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 3;
        transition: all .3s ease-in-out;
        background-color: var(--dark-secondary);
        display: flex;
        justify-content: center;
        align-items: center;

        &.close{
            left: -100%;
        }
    }
`

const List = styled.ul`
    display: grid;
    row-gap: 5rem;

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(3, auto);
        column-gap: 2.5rem;
    }
`

const Item = styled.li`
    list-style-type: none;

    a{
        color: white;
        text-decoration: none;
        font-size: 1.25rem;
        letter-spacing: 1.2px;
        font-weight: var(--fw-lg);

        &:hover{
            color: var(--blue-primary);
        }
    }

    @media screen and (min-width: 768px){
        a{
            font-size: 1rem;
        }
    }
`

const StyledMenuButton = styled(MenuButton)`
    z-index: 4;
    @media screen and (min-width: 768px){
        display: none;
    }
`


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    function onClickMenuButton(){
        setMenuOpen(!menuOpen)
    }

    function onClickMenuLink(){
        setTimeout(() => setMenuOpen(false), 500)
    }

    return (
        <StyledHeader>
            <Wrapper>
            <Content>
                <Logo><span>&lt;/&gt;</span></Logo>
                <Nav
                    className={menuOpen? "open" : "close"}>
                    <List>
                        <Item onClick={() => onClickMenuLink()}>
                            <a href="#about">
                                À PROPOS
                            </a>
                        </Item>
                        <Item onClick={() => onClickMenuLink()}>
                            <a href="#portfolio">
                                PORTFOLIO
                            </a>
                        </Item>
                        <Item onClick={() => onClickMenuLink()}>
                            <a href="#contact">
                                CONTACT
                            </a>
                        </Item>
                    </List>
                </Nav>
                <StyledMenuButton
                    onClick={() => onClickMenuButton()}
                    menuOpen={menuOpen}/>
            </Content>
        </Wrapper>
        </StyledHeader>
    )
}
