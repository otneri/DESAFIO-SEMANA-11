import { TemasDarkLight } from "./context/Context"
import { GlobalStyle } from "./themes/globalStyles"


function App() {
  

  return (
    <>
      
      <GlobalStyle/>
      <TemasDarkLight>
        <h1>Olá</h1>
      </TemasDarkLight>
    </>

  
  )

}

export default App
