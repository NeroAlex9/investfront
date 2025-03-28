import style from "./pagination.module.scss";
import {useState} from "react";
import {data} from "react-router-dom";

function Pagination({data,nextPage,prevPage} ) {
    console.log(data);
    const [curentPage, setCurentPage] = useState(1)
    const handlePrevPage = (curentPage: number) => {
        prevPage()
        if(curentPage===1) return 1

        return setCurentPage(curentPage-1);
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

