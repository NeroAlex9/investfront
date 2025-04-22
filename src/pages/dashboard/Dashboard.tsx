import style from './dashboard.module.scss'

const Dashboard = () => {
    return (
        <div className={style.dashboard}>
            <p className={style.dashboard__text}>Сайт сделан для удобного отслеживания и фильтрации облигаций, полученых через T‑API — программный интерфейс для работы с сервисами T‑Банка.</p>
            <p className={style.dashboard__subText}>Сервис позволяет фильтровать доступные облигации, просматривать основную информацию и переходить на страницу облигации на сайте Т-Инвестиции.</p>
        </div>
    );
};

export default Dashboard;