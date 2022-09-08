import style from '../components/header.module.css'
export const Header = () => {
    <>
    <h1 className={style.titulo}>Meu site</h1>
    <ul className={style.menu}>
        <li>menu1</li>
        <li>menu2 </li>
        <li>menu3</li>
    </ul>
    </>
}