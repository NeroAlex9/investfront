import style from './bonds.module.scss'
import {getBonds} from "../../api/getBonds";
import {useEffect, useMemo, useState} from "react";
import Loader from "../../components/loader/Loader";
import Filters from "../../components/filters/Filters";

const Bonds = () => {
    const [bonds, setBonds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        couponQuantityPerYear: "ALL",
        riskLevel: "ALL",
        floatingCouponFlag: "ALL",

    });
    useEffect(() => {
        const getData = async ()=>{
            const data = await getBonds();
            setBonds(data);
            setLoading(false);
        }
        getData()
    }, [])

    const handleFilters = (name:string, value:string)=>{
        setFilters((prev)=>({...prev, [name]: value}))
    }


    const riskLevel = (risk: string) => {
        switch (risk) {
            case 'RISK_LEVEL_LOW':
                return 'Низкий'
                break;
            case 'RISK_LEVEL_MODERATE':
                return 'Средний'
                break;
            case 'RISK_LEVEL_HIGH':
                return 'Высокий'
                break;
            default:
                break;
        }
    }

    const filteredBonds = useMemo(() => {
        return bonds.filter(bond => {
            const couponInYear = filters.couponQuantityPerYear === "ALL" || bond.couponQuantityPerYear === Number(filters.couponQuantityPerYear)
            const riskLevel = filters.riskLevel === "ALL" || bond.riskLevel === filters.riskLevel
            const floatingCouponFlag = filters.floatingCouponFlag === "ALL"
                || (filters.floatingCouponFlag === "FLOATING" && bond.floatingCouponFlag)
                || (filters.floatingCouponFlag === "FIXED" && !bond.floatingCouponFlag)
            return couponInYear && riskLevel && floatingCouponFlag
        })
    }, [bonds, filters])

    return (
        <div>
            <Filters handleFilters={handleFilters} coupons={filteredBonds.length} />
            <div className={style.bondsList}>
                {loading ? <Loader/> : null}
                {filteredBonds.length>0 ? (filteredBonds.map((bond, index) => (
                        <a key={index} href={`https://www.tbank.ru/invest/bonds/${bond.ticker}/`} className={style.bond}>
                            <div className={style.bond__text}>Название: <p
                                className={style.bond__subtext}>{bond.name}</p></div>
                            <div className={style.bond__text}>Номинал: <p
                                className={style.bond__subtext}>{bond.nominal.units} {bond.nominal.currency}</p></div>
                            <div className={style.bond__text}>Купонов в год: <p
                                className={style.bond__subtext}>{bond.couponQuantityPerYear}</p></div>
                            <div className={style.bond__text}>Купон фиксированный: <p
                                className={style.bond__subtext}>{bond.floatingCouponFlag ? 'Плавающий' : 'Фиксированный'}</p>
                            </div>
                            <div className={style.bond__text}>Дата окончания: <p
                                className={style.bond__subtext}>{bond.maturityDate ? bond.maturityDate.slice(0, 10) : "Не указано"}</p>
                            </div>
                            <div className={style.bond__text}>Уровень риска: <p
                                className={style.bond__subtext}>{riskLevel(bond.riskLevel)}</p>
                            </div>
                        </a>
                    ))) : <div>Таких купонов нет</div>
                }
            </div>
        </div>
    );
};

export default Bonds;