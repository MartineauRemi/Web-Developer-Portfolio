import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const SOCIAL_MEDIAS = {
    github : 'https://github.com/MartineauRemi',
    linkedin: 'https://www.linkedin.com/in/rémi-martineau',
    twitter: 'https://twitter.com/MartineauRmi1'
}

const SocialMedia = styled.a`
    color: var(--white);
    font-size: 1.5rem;
    position: relative;
    top: 0;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        color: var(--blue-primary);
        top: -0.25rem;
    }
`

export const Github = () => {
    return (
        <SocialMedia
            href={SOCIAL_MEDIAS.github}
            target="_blank"
            rel="noreferrer">
                <FaGithub />
        </SocialMedia>
    )
}

export const Linkedin = () => {
    return (
        <SocialMedia
            href={SOCIAL_MEDIAS.linkedin}
            target="_blank"
            rel="noreferrer">
                <FaLinkedinIn />
        </SocialMedia>
    )
}

export const Twitter = () => {
    return (
        <SocialMedia
            href={SOCIAL_MEDIAS.twitter}
            target="_blank"
            rel="noreferrer">
                <FaTwitter />
        </SocialMedia>
    )
}