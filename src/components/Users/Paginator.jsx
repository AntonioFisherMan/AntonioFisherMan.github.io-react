import React from 'react'
import styles from './Users.module.css'
import {useState} from 'react'
const Paginator=({totalItemsCount,pageSize,onPageChanged,currentPage,portionSize=5})=>{
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (var i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount=Math.ceil(pagesCount/portionSize)
    let [portionNumber,setPortionNumber]=useState(1)
    let leftPortion=(portionNumber-1)*portionSize+1;
    let rightPortion=portionNumber*portionSize;
    return(
        <div className="row d-flex justify-content-center">
       
      {portionNumber>1&&<button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>}
            {pages.filter(i=>i>=leftPortion&&i<=rightPortion).map(i => {
                return <span key={i} >
                    <button onClick={(e) => {onPageChanged(i); }} className={currentPage === i ? styles.selectedPage : null}>{i}</button>
                </span>
            }
        
            )}
            {portionCount>portionNumber&&<button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>} 
        
        
       </div>
    )
}
export default Paginator
