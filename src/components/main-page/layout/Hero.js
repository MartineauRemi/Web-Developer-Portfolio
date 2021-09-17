import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '../../shared/components/Buttons'
import blob from '../../../assets/main-page/blob.svg'
import bgBlob from '../../../assets/main-page/bg-blob.svg'
import hero from '../../../assets/main-page/hero.svg'


const HeroSection = styled.section`
    height: 100vh;
    width: 100%;
    padding: 0 var(--h-padding);
    display: grid;
    background-color: var(--dark-primary);
    color: var(--white);
    text-align: center;

    h2{
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 1150px){
        text-align: left;
    }
`

const Content = styled.div`
    place-self: center;
    max-width: var(--layout-max-width);
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media screen and (min-width: 1150px){
        flex-direction: row;
        justify-content: space-between;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    button:last-child{
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 425px){
        flex-direction: row;
        justify-content: center;

        button:first-child{
            margin-right: 1rem;
        }

        button:last-child{
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1150px){
        justify-content: flex-start;
    }
`

const ImgContainer = styled.div`
    background: url(${blob});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    overflow: hidden;
`

const Img = styled.img`
    width: 280px;
    height: 280px;

    @media screen and (min-width: 768px){
        width: 350px;
        height: 350px;
    }
    @media screen and (min-width: 1150px){
        width: 500px;
        height: 500px;
    }
`

export default function Hero() {
    return (
        <HeroSection id="hero">
            <Content>
                <div>
                    <h1>RÉMI MARTINEAU</h1>
                    <h2>Web Developer</h2>
                    <ButtonsContainer>
                        <LinkButton
                            href="#contact"
                            secondary>
                                Contact
                        </LinkButton>
                        <LinkButton
                            href="#portfolio"
                            primary>
                                Portfolio
                        </LinkButton>
                    </ButtonsContainer>
                </div>
                <ImgContainer>
                    <Img className="hero" src={hero} alt="" />
                 </ImgContainer>
            </Content>
        </HeroSection>
    )
}
