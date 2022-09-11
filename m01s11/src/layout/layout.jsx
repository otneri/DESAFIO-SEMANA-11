import { ThemeProvider } from "styled-components"
import { useTema } from "../context"
import PropTypes  from "prop-types";


export const Layout = ({children}) => {
    const theme = useTema();


    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}; 

Layout.propTypes = {
    children: PropTypes.node
};