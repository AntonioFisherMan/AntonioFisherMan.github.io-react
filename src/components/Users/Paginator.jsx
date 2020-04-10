import React from 'react'
import styles from './Users.module.css'
const Paginator=({totalUsersCount,pageSize,onPageChanged,currentPage})=>{
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (var i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return(
        <div className="row d-flex justify-content-center">
        {
            pages.map(i => {
                return <span key={i} >
                    <button onClick={(e) => {onPageChanged(i); }} className={currentPage === i ? styles.selectedPage : null}>{i}</button>
                </span>
            }
            )
        }
       </div>
    )
}
export default Paginator
