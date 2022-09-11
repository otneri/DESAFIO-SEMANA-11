import { Navbar } from "./components/Navbar"
import { TemasDarkLight } from "./context/Context"
import { Layout } from "./layout"

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
