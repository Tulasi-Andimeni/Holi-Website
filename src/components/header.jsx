import style from './compo.module.css';
const Header = () => {
    return (
        <> 
           <header className={style.header}>
                <div className={style.logo}></div>
                <nav className={style.menu}>
                    <ul>
                        <li>Home</li>
                        <li>Colors</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;