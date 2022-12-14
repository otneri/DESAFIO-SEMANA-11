import React, { useContext, useEffect, useState } from "react";
import {DarkPage} from '../themes/dark'
import {LightPage} from '../themes/light' 
import PropTypes  from "prop-types";
import { getTheme, setTheme } from "../utils/localStorage";


export const Contexto = React.createContext({
    theme: DarkPage,
});



export const TemasDarkLight = ({children}) => {
    
    const [isdark, setIsdark]= useState(true);

    useEffect(() => {
        setIsdark(getTheme())
    }, [])
    
    const handleTheme= () => {
        setIsdark((prev) => {
        setTheme(prev);

        return !prev;
    })};
    
    console.log(isdark);
    
    
    return(    
        <Contexto.Provider value= {{theme: isdark ? DarkPage: LightPage , handleTheme}}>
            {children}
        </Contexto.Provider>
    )
}

TemasDarkLight.propTypes = {
    children: PropTypes.node
}