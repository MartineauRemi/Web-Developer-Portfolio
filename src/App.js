import styled from 'styled-components'
import Hero from './components/main-page/layout/Hero'
import Header from './components/shared/layout/Header'
import Footer from './components/shared/layout/Footer'
import GlobalStyle from './GlobalStyle'

const Main = styled.main`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main>
          <Header />
          <Hero />
          <Footer />
      </Main>
    </div>
  );
}

export default App;
