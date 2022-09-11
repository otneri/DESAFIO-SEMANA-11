import { TemasDarkLight } from "./context/Context"
import { Layout } from "./layout"
import { DarkPage } from "./themes/dark"
import { GlobalStyle } from "./themes/globalStyles"


function App() {
  

  return (
    <>
      
      <GlobalStyle/>
      <TemasDarkLight>
        <Layout >
          <h1>Olá</h1>
        </Layout>
      </TemasDarkLight>
    </>

  
  )

}

export default App
