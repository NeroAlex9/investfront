import style from "./loader.module.scss";
import loader from '../../assets/logo.gif';
function Loader() {
    return (
        <div className={style.loader}>
            <img src={loader} className={style.loader__icon} alt="loader"/>
        </div>

    );
}

export default Loader;