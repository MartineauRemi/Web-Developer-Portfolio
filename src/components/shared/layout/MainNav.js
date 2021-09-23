import React from 'react'
import styled, { css } from 'styled-components'


/**
 * This component is used in the header and the footer.
 * Pass the prop 'headerMenu' to ensure the show/hide behavior of the header menu.
 * Otherwise, make sure to pass the prop 'menuOpen={true}' to get the menu displayed.
 */

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 767px){
        transition: all .3s ease-in-out;

        ${props => props.headerMenu && css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 3;
            background-color: var(--dark-secondary);
            
            &.close{
                left: -100vw;
            }
        `}
    }
`

const List = styled.ul`
    display: grid;
    row-gap: ${props => props.headerMenu ? '5rem' : '2rem'};
    font-size: ${props => props.headerMenu ? '1.25rem' : '1rem'};

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
        letter-spacing: 1px;
        line-height: 1.5rem;
        font-weight: var(--fw-reg);

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

export default function MainNav(props) {
    function onClickItem(){
        props.headerMenu && props.onClickMenuLink()
    }
    return (
        <Nav
            {...props}
            className={`${props.className} ${props.menuOpen? "open" : "close"}`}>
            <List headerMenu = {props.headerMenu}>
                <Item
                    onClick={() => onClickItem()}>
                    <a
                        href="#about">
                        À PROPOS
                    </a>
                </Item>
                <Item
                    onClick={() => onClickItem()}>
                    <a
                        href="#portfolio">
                        PORTFOLIO
                    </a>
                </Item>
                <Item
                    onClick={() => onClickItem()}>
                    <a
                        href="#contact">
                        CONTACT
                    </a>
                </Item>
            </List>
        </Nav>
    )
}
