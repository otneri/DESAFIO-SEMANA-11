import { useTema } from '../../context'
import {TrocaTemaBotao} from '../trocaTema/trocaTema'
import {Conteiner, Title} from './Navbar.styled'

export const Navbar = () => {
    const {handleTheme} = useTema();

    return (
        <Conteiner>
            <h1>LOGO</h1>
            <Title>NOME DA APLICAÇÂO</Title>
            <TrocaTemaBotao onClick={handleTheme} />
        
        </Conteiner>
        
    )
}