import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import { LinkButton } from '../../shared/components/Buttons'

const Wrapper = styled.div`
    justify-self: center;
    width: 100%;
    height: 23.25rem;
    border-radius: var(--border-radius);
    background-image: ${props => `url(${props.thumbnail})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    position: relative;
    overflow: hidden;
    transition: all .3s ease-in-out;
    top: 0;

    @media screen and (min-width: 1024px){
        &:hover{
            top: -0.25rem;
        }
    }
`

const HoverFrame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: var(--border-radius);
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &.show{
        background-color: rgba(0,0,0,0.8);      //rgba(97,99,255,.9);
    }
`

const fadeInAnim = keyframes`${fadeIn}`;

const HoverFrameContent = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    animation: .5s ${fadeInAnim};
    color: var(--white);
    padding: 1rem;

    @media screen and (min-width: 1024px){
        padding: 1.5rem;
    }

    &.show{
        display: grid;
        grid-template-rows: repeat(3, auto);
    }
`

const TitlesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255, 0.5);
`

const Title = styled.h3`
    place-self: center flex-start;
    margin-bottom: 1rem;
    text-transform: uppercase;
`

const Description = styled.p`
    place-self: center;
`

const ButtonsContainer = styled.div`
    place-self: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;

    button:first-child{
        margin-right: 1rem;
    }
`

const StyledButton = styled(LinkButton)`
    font-size: 0.825rem;
    @media screen and (min-width: 1024px){
        font-size: 1rem;
    }
`

export default function Thumbnail({data}) {
    const [show, setShow] = useState(false)

    function onMouseEnter(){
        setShow(true)
    }

    function onMouseLeave(){
        setShow(false)
    }

    return (
        <Wrapper
            className={show ? 'show' : ''}
            thumbnail={data.thumbnail}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}>
                <HoverFrame className={show ? 'show' : ''}>
                    <HoverFrameContent className={show ? 'show' : ''}>
                        <TitlesContainer>
                            <Title>{data.title}</Title>
                            <h4>{data.subtitle}</h4>
                        </TitlesContainer>

                        <Description>
                            {data.description}
                        </Description>

                        <ButtonsContainer>
                            <StyledButton
                                secondary
                                href={data.github_url}>
                                    Accéder au code
                            </StyledButton>
                            <StyledButton
                                primary
                                href={data.website_url}>
                                Visiter le site
                            </StyledButton>
                        </ButtonsContainer>
                    </HoverFrameContent>
                </HoverFrame>
        </Wrapper>
    )
}
