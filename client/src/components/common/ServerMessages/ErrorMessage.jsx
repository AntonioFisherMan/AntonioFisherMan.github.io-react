import React from 'react'
import { Alert } from 'reactstrap'

const ErrorMessage=(props)=>{
    debugger
    return(
        <div style={{ width: '400px' }}>
       {props.message?<Alert color="danger">{props.message}</Alert> : null} 
       </div>
    )
}
export default ErrorMessage