import React from 'react'
import { H5 } from '../../../components/Typography/H5'
import { Subtitle1 } from '../../../components/Typography/Subtitle1'
import styles from './Item.module.css'

const Item = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.img} alt="" />
            <H5 text={props.headline} />
            <Subtitle1 text={props.text} />
        </div>
    )
}

export default Item
