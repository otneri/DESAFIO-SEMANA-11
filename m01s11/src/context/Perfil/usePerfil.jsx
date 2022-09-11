import { useContext } from "react";
import { ContextoPerfil } from './PerfilContextProvider'

export const usePerfil = () => {
    const contexto = useContext(ContextoPerfil)
    return contexto;
    }  