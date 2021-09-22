import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 2.25rem;
    line-height: 3.125rem;
    font-weight: var(--fw-xl);
    position: relative;
    z-index: 1;
`

const Outline = styled.h3`
    -webkit-text-stroke: 1px var(--gray);
    font-weight: var(--fw-xl);
    letter-spacing: 0.8px;
    color: transparent;
    position: absolute;
    left: 0;
    top: -2rem;
    margin: 0;
    z-index: -1;
    
    @media screen and (max-width: 550px){
        display: none;
    }

    @media screen and (min-width: 550px){
        font-size: 4.5rem;
    }


    @media screen and (min-width:768px){
        font-size: 5.75rem;
    }

    @media screen and (min-width: 1250px){
        font-size: 10rem;
    }
`

export default function SectionTitle({title, outline}) {
    return (
        <Title className="section-title">
            {title}
            <Outline>
                {outline}
            </Outline>
        </Title>
    )
}
