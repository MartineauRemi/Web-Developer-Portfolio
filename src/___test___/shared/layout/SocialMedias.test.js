import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SocialMedias from '../../../components/shared/layout/SocialMedias'
import { myInfos } from '../../../data/my-infos'

var component;

beforeEach(() => {
    component = render(<SocialMedias />)    
})

describe('Testing SocialMedias', () => {
    test('SocialMedias renders without crashing', () => {
        var list = component.getByRole('list')
        expect(list).toBeInTheDocument()
    })

    test('SocialMedias has 3 items', () => {
        var socialMediaItems = component.getAllByRole('listitem')
        expect(socialMediaItems).toHaveLength(3)
    })

    test('SocialMedias contains an enabled Linkedin link', () => {
        var linkedinLink = document.querySelector('.linkedin-link')
        expect(linkedinLink).toBeInTheDocument()
        expect(linkedinLink).toHaveAttribute('href', myInfos.socialMedias.linkedin)
        expect(linkedinLink).toBeEnabled()
    })

    test('SocialMedias contains an enabled Github link', () => {
        var githubLink = document.querySelector('.github-link')
        expect(githubLink).toBeInTheDocument()
        expect(githubLink).toHaveAttribute('href', myInfos.socialMedias.github)
        expect(githubLink).toBeEnabled()
    })

    test('SocialMedias contains an enabled Twitter link', () => {
        var twitterLink = document.querySelector('.twitter-link')
        expect(twitterLink).toBeInTheDocument()
        expect(twitterLink).toHaveAttribute('href', myInfos.socialMedias.twitter)
        expect(twitterLink).toBeEnabled()
    })
})