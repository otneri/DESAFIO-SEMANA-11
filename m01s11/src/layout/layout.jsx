import { ThemeProvider } from "styled-components"
import { useTema } from "../context"
import PropTypes  from "prop-types";
import { Navbar } from "../components/Navbar";


export const Layout = ({children}) => {
    const theme = useTema();


    return <ThemeProvider theme={theme}>
        <Navbar/>
    </ThemeProvider>
}; 

Layout.propTypes = {
    children: PropTypes.node
};