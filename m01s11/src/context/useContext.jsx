import { useContext } from "react";
import { Contexto } from './Context'

export const useTema = () => {
    const contexto = useContext(Contexto)
    return contexto;
    }  