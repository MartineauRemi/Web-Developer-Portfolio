import React from 'react'
import styled from 'styled-components'
import { Github, Linkedin, Twitter } from '../components/SocialMedias'

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1.5rem);
    column-gap: 1.5rem;
`

const Item = styled.li`
    list-style-type: none;
`

export default function SocialMedias(props) {
    return (
        <List {...props}>
            <Item>
                <Github />
            </Item>
            <Item>
                <Linkedin />
            </Item>
            <Item>
                <Twitter />
            </Item>
        </List>
    )
}
