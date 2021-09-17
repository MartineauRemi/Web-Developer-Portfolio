import styled, { css } from 'styled-components'

export const Button = styled.button`
    padding: 1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1rem;
    font-weight: var(--fw-lg);
    border: 1px solid var(--white);

    ${props => props.primary && css`                    //Primary button
        color: var(--white);
        background-color: var(--blue-primary);
        border-color: var(--blue-primary);

        &:hover{
            background-color: var(--blue-secondary);
            border-color: var(--blue-secondary);
        }
    `}

    ${props => props.secondary && css`                  //Secondary button
        color: var(--white);
        background-color: transparent;
        border-color: var(--white);
    `}
`

const MenuBtn = styled(Button)`
    background-color: transparent;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    border: none;

    span{
        width: 100%;
        height: 3px;
        background-color: var(--white);
        position: absolute;
        right: 0;
        transition: all 0.3s ease-in;

        &:first-child{
            top: ${props => props.menuOpen ? '1rem' : '1.25rem'};
            left: ${props => props.menuOpen ? '0' : 'unset'};
            width: ${props => props.menuOpen ? '100%': '80%'};
            transform: ${props => props.menuOpen ? 'rotate(-45deg)' : 'none'}
        }

        &:nth-child(2){
            top: 0.75rem;
            width: ${props => props.menuOpen ? '0' : '60%'};
            transition: all 0.1s ease-in;
        }

        &:last-child{
            top: ${props => props.menuOpen ? '1rem' : '0.25rem'};
            left: ${props => props.menuOpen ? '0' : 'unset'};
            transform: ${props => props.menuOpen ? 'rotate(45deg)' : 'none'};
        }
    }
`

export const MenuButton = (props) => {
    return (
        <MenuBtn {...props}>
            <span></span>
            <span></span>
            <span></span>
        </MenuBtn>
    )
}

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