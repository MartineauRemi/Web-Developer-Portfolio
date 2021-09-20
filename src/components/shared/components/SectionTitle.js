import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 2.25rem;
    line-height: 3.125rem;
    font-weight: var(--fw-xl);
    position: relative;
    z-index: 1;
`

const Outline = styled.h1`
    -webkit-text-stroke: 1px var(--gray);
    font-size: 10rem;
    font-weight: var(--fw-xl);
    letter-spacing: 0.8px;
    color: transparent;
    position: absolute;
    top: -2rem;
    left: 0;
    margin: 0;
    z-index: -1;
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
