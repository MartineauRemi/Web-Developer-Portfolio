import styled from "styled-components";
import GlobalStyle from "./GlobalStyle"

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`

const Main = styled.main`
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
        <h1>Hello world</h1>
      </Main>
    </AppContainer>
  );
}

export default App;
