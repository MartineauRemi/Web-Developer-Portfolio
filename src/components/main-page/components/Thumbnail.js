import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import { LinkButton } from '../../shared/components/Links'

const Wrapper = styled.div`
    justify-self: center;
    width: 100%;
    height: 21.25rem;
    border-radius: var(--border-radius);
    background-image: ${props => props.thumbnail ? `url(${props.thumbnail})` : 'none'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    position: relative;
    overflow: hidden;
    transition: all .3s ease-in-out;
    top: 0;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
`

const HoverFrame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &.show{
        background-color: rgba(0,0,0,0.8);
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
    border-bottom: 1px solid rgba(255,255,255, 0.5);
`

const Title = styled.h3`
    place-self: flex-start center;
    margin-bottom: .5rem;
`

const Description = styled.p`
    place-self: center flex-start;
`

const ButtonsContainer = styled.div`
    place-self: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;

    a:first-child{
        margin-right: 1rem;
    }
`

const StyledButton = styled(LinkButton)`
    font-size: 0.75rem;
    @media screen and (min-width: 1024px){
        font-size: 1rem;
    }
`

export default function Thumbnail({data}) {
    const [show, setShow] = useState(false)
    const URL_REGEX = "(www|http:|https:)+[^\s]+[\w]"

    function onMouseEnter(){
        setShow(true)
    }

    function onMouseLeave(){
        setShow(false)
    }

    function validate(data){
        return (
            data
            && data.title
            && data.github_url
            && data.website_url
        )
    }

    return (
        validate(data)
        ? (<Wrapper
            className={`thumbnail ${show ? 'show' : ''}`}
            thumbnail={data.thumbnail}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}>
                <HoverFrame className={`hoverframe ${show ? 'show' : ''}`}>
                    <HoverFrameContent className={`hoverframe-content ${show ? 'show' : ''}`}>
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
                                href={data.github_url}
                                target='_blank'
                                rel='noreferrer'>
                                    Accéder au code
                            </StyledButton>
                            <StyledButton
                                primary
                                href={data.website_url}
                                target='_blank'
                                rel='noreferrer'>
                                Visiter le site
                            </StyledButton>
                        </ButtonsContainer>
                    </HoverFrameContent>
                </HoverFrame>
        </Wrapper>)
        : null
    )
}
