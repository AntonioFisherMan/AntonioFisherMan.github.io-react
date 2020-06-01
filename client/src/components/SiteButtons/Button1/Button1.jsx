import React from 'react'
import {Link} from 'react-router-dom'
import './Button1.css'


const Button1 = (props) => {
    return (
        <Link to={props.to} className="buttonBlock1">
         <button className="button1">{props.text}</button> 
        </Link> 
    )
}
export default Button1


