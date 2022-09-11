import { Navbar } from "./components/Navbar"
import { TemasDarkLight } from "./context/Context"
import { Layout } from "./layout"



function App() {
  

  return (
    <>
      
  
      <TemasDarkLight>
        <Layout >
          <h1>Olá</h1>
        </Layout>
      </TemasDarkLight>
    </>

  
  )

}

export default App
