import React from 'react'
import './Input.css'

export const Input=({input,meta,...props})=>{
    const hasError=meta.error&&meta.touched
    
    return(
        <div className="formControl">
            <input className={hasError?"error":""} {...input}{...props} />
              {hasError?<span>{meta.error}</span>:null} 
        </div>
    )
}