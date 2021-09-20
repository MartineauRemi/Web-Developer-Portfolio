import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    cursor: pointer;
`

const Content = styled.div`
    position: relative;
    overflow: hidden;
`

const Text = styled.p`
    color: var(--white);
    font-weight: 700;
    font-size: 1.125rem;
`

const HoverContainer = styled.p`
    position: absolute;
    top: 0;
    left: -100%;
    background: rgba(97,99,255, 1);
    color: white;
    border-radius: 0.25rem;
    height: 1.5rem;
    width: 100%;
    text-align: center;
    transition: left .1s ease-in-out;

    &.hover{
        left: 0;
    }
`

const HoverText = styled.p`
    text-overflow: clip;
    height: 1rem;
`

export default function EmailAddress(props) {
    const [hover,setHover] = useState(false)
    return (
        <Wrapper {...props}>
            <Content onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Text>remi.martineau.dev@gmail.com</Text>
                <HoverContainer className={hover ? 'hover' : ''}>
                    <HoverText>Cliquez pour copier</HoverText>
                </HoverContainer>
            </Content>
        </Wrapper>
    )
}
