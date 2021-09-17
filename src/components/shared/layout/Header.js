import React, { useState } from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import MainNav from './MainNav'
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

    const onClickMenuLink = () => setTimeout(() => setMenuOpen(false), 500)

    return (
        <StyledHeader>
            <Wrapper>
            <Content>
                <Logo><span>&lt;/&gt;</span></Logo>
                <MainNav
                    headerMenu
                    menuOpen={menuOpen}
                    onClickMenuLink={onClickMenuLink}/>
                <StyledMenuButton
                    onClick={() => onClickMenuButton()}
                    menuOpen={menuOpen}/>
            </Content>
        </Wrapper>
        </StyledHeader>
    )
}
