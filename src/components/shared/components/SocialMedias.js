import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const socialMedias = {
    github : {
        username: '',
        url: ''
    },
    linkedin: {
        username: '',
        url: ''
    },
    twitter: {
        username: '',
        url: ''
    }
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
            href={socialMedias.github.url}
            target="_blank"
            rel="noreferrer">
                <FaGithub />
        </SocialMedia>
    )
}

export const Linkedin = () => {
    return (
        <SocialMedia
            href={socialMedias.linkedin.url}
            target="_blank"
            rel="noreferrer">
                <FaLinkedinIn />
        </SocialMedia>
    )
}

export const Twitter = () => {
    return (
        <SocialMedia
            href={socialMedias.twitter.url}
            target="_blank"
            rel="noreferrer">
                <FaTwitter />
        </SocialMedia>
    )
}