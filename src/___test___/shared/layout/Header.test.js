import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../../../components/shared/layout/Header'

var component;
beforeEach(() => {
    component = render(<Header />)
})

test('Header renders without crashing', () => {
    const header = component.getByTestId('main-header')
    expect(header).toBeInTheDocument()
})


describe('testing the menu button', () => {
    var menuButton;

    beforeEach(() => {
        menuButton = component.getByTestId('menu-toggle-button')
    })

    test('Header contains a menu button', () => {
        expect(menuButton).toBeInTheDocument()
    })
    
    test('Clicking on the menu button toggles the main nav class', () => {
        const mainNav = component.getByRole('navigation')
        expect(mainNav.classList.contains('close')).toBeTruthy()
        expect(mainNav.classList.contains('open')).toBeFalsy()
    
        fireEvent.click(menuButton)
        expect(mainNav.classList.contains('open')).toBeTruthy()
        expect(mainNav.classList.contains('close')).toBeFalsy()
    
        fireEvent.click(menuButton)
        expect(mainNav.classList.contains('close')).toBeTruthy()
        expect(mainNav.classList.contains('open')).toBeFalsy()
    })
})