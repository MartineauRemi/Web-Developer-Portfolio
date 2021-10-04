import styled, { css } from 'styled-components'

export const Link = styled.a`
    color: var(--white);
    outline: none;
    text-decoration: none;
`

export const LinkButton = styled(Link)`
    padding: 1rem;
    font-size: 1rem;
    font-weight: var(--fw-lg);
    border: 1px solid var(--white);
    transition: all .3s ease-in-out;
    border-radius: var(--border-radius);
    //Primary link design
    ${props => props.primary && css`
        color: var(--white);
        background-color: var(--blue-primary);
        border-color: var(--blue-primary);
        &:hover{
            background-color: var(--blue-secondary);
            border-color: var(--blue-secondary);
        }
    `}
    //Secondary secondary design
    ${props => props.secondary && css`
        color: var(--white);
        background-color: transparent;
        border-color: var(--white);
        &:hover{
            color: var(--blue-primary);
            background-color: var(--white);
        }
    `}
`