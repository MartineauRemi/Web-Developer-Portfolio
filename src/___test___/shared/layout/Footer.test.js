import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../../../components/shared/layout/Footer'

var component;

beforeEach(() => {
    component = render(<Footer />)
})

test('Footer renders without crashing', () => {
    var footer = component.getByTestId('footer')
    expect(footer).toBeInTheDocument()
})

test('Footer contains the logo', () => {
    var logo = component.getByTestId('logo')
    expect(logo).toBeInTheDocument()
})

test('Footer contains the main nav', () => {
    var mainNav = document.getElementById('main-nav')
    expect(mainNav).toBeInTheDocument()
})