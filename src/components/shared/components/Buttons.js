import styled, { css } from 'styled-components'

export const Button = styled.button`
    padding: 1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1rem;
    font-weight: var(--fw-lg);
    border: 1px solid var(--white);

    //Primary button
    ${props => props.primary && css`
        color: var(--white);
        background-color: var(--blue-primary);
        border-color: var(--blue-primary);

        &:hover{
            background-color: var(--blue-secondary);
            border-color: var(--blue-secondary);
        }
    `}

    //Secondary button
    ${props => props.secondary && css`
        color: var(--white);
        background-color: transparent;
        border-color: var(--white);
    `}
`

const Link = styled.a`
    color: var(--white);
    outline: none;
    text-decoration: none;
`

export const LinkButton = (props) => {
    return (
        <Link href={props.href}>
            <Button {...props}>{props.children}</Button>
        </Link>
    )
}