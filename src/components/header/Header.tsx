import {NavLink} from "react-router-dom";
import style from "./Header.module.scss";
import logo from '../../assets/logo1.png';
function Header() {
    return (
        <div className={style.header}>
                <img className={style.header__logo} src={logo} alt="logo" />
            <nav className={style.header__nav}>
                <NavLink className={style.header__nav__link} to={'/dashboard'}>DashBoard</NavLink>
                <NavLink className={style.header__nav__link} to={'/bonds'}>Облигации</NavLink>
            </nav>
        </div>
    );
}

export default Header;