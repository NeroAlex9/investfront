import style from "./filters.module.scss";

interface IFilters {
    handleFilters: (name: string, value: string) => void;
    coupons: number
}

function Filters({handleFilters, coupons} : IFilters) {
    return (
        <div className={style.filters}>
            <div className={style.filters__name}>Купонов в год:</div>
            <select className={style.filters__list}
                    onChange={(e) => handleFilters('couponQuantityPerYear', e.target.value)}>
                <option value="ALL">Все</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="12">12</option>
            </select>

            <div className={style.filters__name}>Уровень риска:</div>
            <select className={style.filters__list} onChange={(e) => handleFilters('riskLevel', e.target.value)}>
                <option value="ALL">Все</option>
                <option value="RISK_LEVEL_LOW">Низкий</option>
                <option value="RISK_LEVEL_MODERATE">Средний</option>
                <option value="RISK_LEVEL_HIGH">Высокий</option>
            </select>

            <div className={style.filters__name}>Купон:</div>
            <select className={style.filters__list}
                    onChange={(e) => handleFilters('floatingCouponFlag', e.target.value)}>
                <option value="ALL">Все</option>
                <option value="FLOATING">Плавающий</option>
                <option value="FIXED">Фиксированный</option>
            </select>
            <div className={style.filters__couponsAll}>Всего облигаций: {coupons}</div>
        </div>

    );
}

export default Filters;

