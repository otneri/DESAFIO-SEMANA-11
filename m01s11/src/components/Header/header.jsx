import styled from 'styled-components';
import style from './header.module.css'

const Cabeçalho = styled.header`
     background-color: black;
    color: white;
`


export const Header = (theme) => {
    const tema = (theme);

    return(
    <>
    <Cabeçalho>
        <h1 className={style.titulo}>Meu site</h1>
        <ul className={style.menu}>
            <li>menu1</li>
            <li>menu2 </li>
            <li>menu3</li>
        </ul>
    </Cabeçalho>
    </>
    )
}