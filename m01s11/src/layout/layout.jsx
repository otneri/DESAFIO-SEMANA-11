import { ThemeProvider } from "styled-components"
import { useTema } from "../context"
import PropTypes  from "prop-types";
import { Navbar } from "../components/Navbar";
import { PerfilProvider } from "../context/Perfil/PerfilContextProvider";
import { GlobalStyle } from "../themes/globalStyles";
import { Profiles } from "../Pages/Profiles";


export const Layout = ({children}) => {
    const theme = useTema();


    return (

    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Navbar/>
        <PerfilProvider>
            <Profiles/>
        </PerfilProvider>
    </ThemeProvider>

    )
    
}; 

Layout.propTypes = {
    children: PropTypes.node
};