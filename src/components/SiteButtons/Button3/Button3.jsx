import React from 'react'
import styles from './Button3.module.css'
import {Link} from 'react-router-dom'
const Button3 = (props) => {
    return (
        <div className={styles.button}>
            <i className="carousel-control-prev-icon fas fa-chevron-left" aria-hidden="true"></i>
            <Link to={props.link}>{props.text}</Link>
        </div>
    )
}
export default Button3