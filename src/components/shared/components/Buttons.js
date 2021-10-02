import styled, { css } from 'styled-components'
import { MdKeyboardArrowDown as Arrow} from 'react-icons/md'

export const Button = styled.button`
    padding: 1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1rem;
    font-weight: var(--fw-lg);
    border: 1px solid var(--white);

    //Primary button design
    ${props => props.primary && css`
        color: var(--white);
        background-color: var(--blue-primary);
        border-color: var(--blue-primary);

        &:hover{
            background-color: var(--blue-secondary);
            border-color: var(--blue-secondary);
        }
    `}

    //Secondary button design
    ${props => props.secondary && css`
        color: var(--white);
        background-color: transparent;
        border-color: var(--white);

        &:hover{
            color: var(--blue-primary);
            background-color: var(--white);
        }
    `}

    ${props => props.borderless && css`
        border: none;
        background: transparent;
        color: ${props => props.color || 'var(--black)'};

        &:hover{
            color: var(--blue-primary);
        }
    `}
`


/**
 * Hamburger button design. Used to toggle the main nav menu.
 */
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

const BorderlessArrowDownBtn = styled(Button)`
    display: flex;
    flex-direction: column;
    align-items: center;
`


/**
 * 
 * @param {*} props
 * label: button text
 * without label, only an arrow
 * 
 */

export const BorderlessArrowDownButton = (props) => {
    return (
        <BorderlessArrowDownBtn {...props}>
            {props.label && (
                <span>
                    {props.label}
                </span>
            )}
            <Arrow size="2rem"/>
        </BorderlessArrowDownBtn>
    )
}

export const MenuButton = (props) => {
    return (
        <MenuBtn {...props}>
            <span></span>
            <span></span>
            <span></span>
        </MenuBtn>
    )
}

/*___BUTTON STYLED LINKS___*/

const Link = styled.a`
    color: var(--white);
    outline: none;
    text-decoration: none;
`

/**
 * @param props
 *  'href' is the only required prop, the others are for styling
 * 
 * @returns a link styled like a button
 */

export const LinkButton = (props) => {
    return (
        <Link
            {...props}
            href={props.href}>
            <Button {...props}>
                {props.children}
            </Button>
        </Link>
    )
}