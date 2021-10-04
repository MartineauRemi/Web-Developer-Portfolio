import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Thumbnail from '../../../components/main-page/components/Thumbnail'
import bgImg from '../../../assets/main-page/portfolio/audiophile-preview.jpg'

afterEach(() => {
    cleanup()
})

describe('Testing Thumbnail component', () => {
    test('Thumbnail without the data prop renders null', () => {
        render(<Thumbnail />)
        var thumbnail = document.querySelector('.thumbnail')
        expect(thumbnail).not.toBeInTheDocument()
    })

    test('Thumbnail with an empty data prop renders null', () => {
        render(<Thumbnail data={{}} />)
        var thumbnail = document.querySelector('.thumbnail')
        expect(thumbnail).not.toBeInTheDocument()
    })    

    test('Thumbnail displays an overlay when the mouse is on hover, and the overlay disapears when the mouse leaves the Thumbnail', () => {
        render(<Thumbnail
                data={{title: 'title',
                        github_url: 'https://test.com',
                        website_url: 'https://test2.com'}}
                />)

        var hoverframe = document.querySelector('.hoverframe')
        var hoverframeContent = document.querySelector('.hoverframe-content')

        expect(hoverframe).toBeInTheDocument()
        expect(hoverframe.classList).not.toContain('show')

        expect(hoverframeContent.classList).not.toContain('show')
        expect(hoverframeContent).not.toBeVisible()

        //mouse entering the thumbnail
        fireEvent.mouseEnter(hoverframe)
        expect(hoverframe.classList).toContain('show')
        expect(hoverframeContent.classList).toContain('show')
        expect(hoverframeContent).toBeVisible()

        //mouse leaving the thumbnail
        fireEvent.mouseLeave(hoverframe)
        expect(hoverframe.classList).not.toContain('show')
        expect(hoverframeContent.classList).not.toContain('show')
        expect(hoverframeContent).not.toBeVisible()
    })

    describe('Testing Thumbnail\'s data display', () => {
        test('Thumbnail with only data.title, data.github_url and data.website_url props given renders properly', () => {
            const data = {
                title: 'test',
                github_url: 'test',
                website_url: 'test'
            }

            render(<Thumbnail data={data}/>)
            var thumbnail = document.querySelector('.thumbnail')
            expect(thumbnail).toBeInTheDocument()
        })
        test('Thumbnail without title renders null', () => {
            const data = {
                title: null,
                github_url: 'test',
                website_url: 'test',
            }

            render(<Thumbnail data={data}/>)
            var thumbnail = document.querySelector('.thumbnail')
            expect(thumbnail).toBeNull()

        })

        test('Thumbnail without github_url renders null', () => {
            const data = {
                title: 'test',
                github_url: null,
                website_url: 'test',
            }

            render(<Thumbnail data={data}/>)
            var thumbnail = document.querySelector('.thumbnail')
            expect(thumbnail).toBeNull()
        })

        test('Thumbnail without website_url renders null', () => {
            const data = {
                title: 'test',
                github_url: null,
                website_url: 'test',
            }

            render(<Thumbnail data={data}/>)
            var thumbnail = document.querySelector('.thumbnail')
            expect(thumbnail).toBeNull()
        })

        test('renders without crashing when data.thumbnail set to null', () => {
            const data = {
                title: 'title',
                github_url: 'test',
                website_url: 'test',
                thumbnail: null
            }
            render(<Thumbnail data={data} />)
            const thumbnail = document.querySelector('.thumbnail')
            expect(thumbnail).toBeInTheDocument()
        })

        describe('Testing if Thumbnail displays the correct data', () => {

            //full valid data prop
            var data = {
                title: 'my-title',
                subtitle: "my-subtitle",
                description: "my-description",
                stack: ['React', 'styled-components'],
                github_url: "https://test.com",
                website_url: "https://test2.com",
                thumbnail: bgImg
            }
            
            var component;
            beforeEach(() => {
                component = render(<Thumbnail data={data} />)
            })

            test('displays the corresponding title', () => {
                const title = component.getByRole('heading', {hidden: true, level: 3})
                expect(title.textContent).toBe('my-title')
            })

            test('displays the corresponding subtitle', () => {
                const subtitle = component.getByRole('heading', {hidden: true, level: 4})
                expect(subtitle.textContent).toBe('my-subtitle')
            })

            test('Displays the corresponding description', () => {
                const description = component.getByText('my-description')
                expect(description).toBeInTheDocument()
            })

            describe('Testing the Thumbnail\'s links', () => {
                test('Displays the corresponding github repo link', () => {
                    const githubLink = component.getByText('Accéder au code', {hidden: true})
                    expect(githubLink).toBeInTheDocument()
                    expect(githubLink).toBeEnabled()
                    expect(githubLink).toHaveAttribute('href', 'https://test.com')
                })
    
                test('Displays the corresponding website link', () => {
                    const websiteLink = component.getByText('Visiter le site', {hidden: true})
                    expect(websiteLink).toBeInTheDocument()
                    expect(websiteLink).toBeEnabled()
                    expect(websiteLink).toHaveAttribute('href', 'https://test2.com')
                })

                test('website link and github link open in a new tab', () => {
                    const githubLink = component.getByText('Accéder au code', {hidden: true})
                    const websiteLink = component.getByText('Visiter le site', {hidden: true})
                    expect(githubLink).toHaveAttribute('target', '_blank')
                    expect(websiteLink).toHaveAttribute('target', '_blank')
                })
            })
        })
    })
})