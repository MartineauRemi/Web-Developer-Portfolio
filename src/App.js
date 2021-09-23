import { lazy, Suspense } from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Hero from './components/main-page/layout/Hero'
import Header from './components/shared/layout/Header'

//lazy-loading the main sections of the website

const Footer = lazy(() => import('./components/shared/layout/Footer'))
const About = lazy(() => import('./components/main-page/layout/About'))
const Portfolio = lazy(() => import('./components/main-page/layout/Portfolio'))


//styling

const Main = styled.main`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main>
          <Header />
          <Hero />
          <Suspense fallback={<div/>}>
            <About />
          </Suspense>
          <Suspense fallback={<div/>}>
            <Portfolio />
          </Suspense>
          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
      </Main>
    </div>
  );
}

export default App;
