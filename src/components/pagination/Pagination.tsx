import style from "./pagination.module.scss";
import {useState} from "react";


function Pagination({nextPage,prevPage} ) {
    const [curentPage, setCurentPage] = useState(1)
    const handlePrevPage = (curentPage: number) => {

        if(curentPage===1) return 1
        else {
            prevPage()
            return setCurentPage(curentPage-1);
        }

    }
    const handleNextPage = (curentPage: number) => {
        nextPage()
        setCurentPage(curentPage+1);
    }

    return (
        <div className={style.pagination}>
            <button onClick={() => {
                handlePrevPage(curentPage)
            }} className={style.pagination__button}>{"<"}</button>
            <div className={style.pagination__page}>{curentPage}</div>
            <button onClick={() => {
                handleNextPage(curentPage)
            }} className={style.pagination__button}>{">"}</button>
        </div>
    );
}

export default Pagination;

