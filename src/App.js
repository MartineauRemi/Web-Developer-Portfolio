import styled from "styled-components"
import Hero from "./components/main-page/layout/Hero";
import GlobalStyle from "./GlobalStyle"

const AppContainer = styled.div`
  
`

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
    <AppContainer className="App">
      <GlobalStyle />
      <Main>
          <Hero />
      </Main>
    </AppContainer>
  );
}

export default App;
