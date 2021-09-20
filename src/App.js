import styled from 'styled-components'
import Hero from './components/main-page/layout/Hero'
import Header from './components/shared/layout/Header'
import Footer from './components/shared/layout/Footer'
import GlobalStyle from './GlobalStyle'
import Portfolio from './components/main-page/layout/Portfolio'

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
          <Portfolio />
          <Footer />
      </Main>
    </div>
  );
}

export default App;
