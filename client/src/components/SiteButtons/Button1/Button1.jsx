import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Button1.module.css'


const Button1 = (props) => {
    return (
        <Link to={props.to} className={styles.buttonBlock}>
         <button className={styles.button}>{props.text}</button> 
        </Link> 
    )
}
export default Button1


