import React, { useState } from "react";
import PropTypes from 'prop-types'
import {Perfis} from '../../services/perfis'


export const ContextoPerfil = React.createContext({});



export const PerfilProvider = ({children}) => {
    
    const service = Perfis;
    const [perfil, setPerfil]= useState(service);

    const handleFollow =(id) => {
        const perfilUpdate = perfil.map((p) => 
            p.id === id ? {...p, seguindo: !p.seguindo}:p,
        )
        setPerfil(perfilUpdate);
    }
    
    
    return(    
        <ContextoPerfil.Provider value= {(perfil, handleFollow)}>
            {children}
        </ContextoPerfil.Provider>
    )
}

PerfilProvider.propTypes = {
    children: PropTypes.node
}