import React from 'react'
import styled from 'styled-components'
import first from '../../../assets/main-page/web-development.svg'
import second from '../../../assets/main-page/multiscreen.svg'
import third from '../../../assets/main-page/sketch.svg'
import SectionTitle from '../../shared/components/SectionTitle'

const Wrapper = styled.section`
    width: 100%;
    display: grid;
    row-gap: var(--v-padding);
    padding: var(--v-padding) var(--h-padding);
`

const Content = styled.div`
    place-self: center;
    width: 100%;
    max-width: var(--layout-max-width);
    display: grid;
    row-gap: var(--v-padding);
`

const CardsContainer = styled.ul`
    display: grid;
    width: 100%;
    row-gap: 2rem;
    justify-self: center;

    @media screen and (min-width: 768px) and (max-width: 1024px){
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
        grid-template-areas: 'first second' 'third third';
        column-gap: 4rem;
        row-gap: 4.5rem;
    }


    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(3, auto);
    }
`

const Card = styled.li`
    list-style-type: none;
    width: 15.625rem;
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: 1rem;
    text-align: center;
    place-self: center;

    @media screen and (min-width: 768px) and (max-width: 1024px){
        &:last-child{
            place-self: center;
            grid-area: third;
        }
    }
`

const ImgContainer = styled.div`
    place-self: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #6163ff;
    display: grid;

    img{
        place-self: center;
    }
`

export default function About() {
    return (
        <Wrapper>
            <Content>
            <SectionTitle
                title="À PROPOS"
                outline="ABOUT" />

            <CardsContainer>
                <Card>
                    <ImgContainer>
                        <img src={first} width="32px" height="32px" alt=""/>
                    </ImgContainer>
                    <p>
                        Passionné par le Front-End, je développe des applications web et mobile dynamiques et esthétiques.
                        </p>
                </Card>

                <Card>
                    <ImgContainer>
                        <img src={second} width="32px" height="32px" alt=""/>
                    </ImgContainer>
                    <p>
                        Passionné par le Front-End, je développe des applications web et mobile dynamiques et esthétiques.
                    </p>
                </Card>

                <Card>
                    <ImgContainer>
                        <img src={third} width="32px" height="32px" alt=""/>
                    </ImgContainer>
                    <p>
                        Passionné par le Front-End, je développe des applications web et mobile dynamiques et esthétiques.
                        </p>
                </Card>
            </CardsContainer>
            </Content>
        </Wrapper>
    )
}
