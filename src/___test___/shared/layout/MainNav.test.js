import React from 'react'
import MainNav from '../../../components/shared/layout/MainNav'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


var component;
var headerElt;

beforeEach(() => {
    component = render(<MainNav />)
    headerElt = component.getByRole('navigation')
})

test('MainNav renders without crashing', () => {
    expect(headerElt).toBeInTheDocument()
})

test("MainNav contains 3 links", () => {
    const navLinks = (component.getAllByRole('link'))
    expect(navLinks).toHaveLength(3)
})

test("MainNav contains links called 'À PROPOS', 'PORTFOLIO' and 'CONTACT'", () => {
    const aboutLink = component.getByText('À PROPOS')
    const portfolioLink = component.getByText('PORTFOLIO')
    const contactLink = component.getByText('CONTACT')

    expect(aboutLink).toBeInTheDocument()
    expect(portfolioLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
})

test("the links are wired to the right sections of the page", () => {
    const aboutLink = component.getByText('À PROPOS')
    const portfolioLink = component.getByText('PORTFOLIO')
    const contactLink = component.getByText('CONTACT')

    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(portfolioLink).toHaveAttribute('href', '#portfolio')
    expect(contactLink).toHaveAttribute('href', '#contact')
})