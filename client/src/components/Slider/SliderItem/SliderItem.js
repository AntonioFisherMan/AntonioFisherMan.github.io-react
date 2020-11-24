import React from 'react'
import './SliderItem.css'
import MyButton from '../../SiteButton/MyButton/MyButton'
import { Link } from 'react-router-dom'
import { H5 } from '../../../common/Typography/H5'
import { Subtitle1 } from '../../../common/Typography/Subtitle1'

const SliderItem = (props) => {
    return (
        <div className="item">
            <Link to={`/catalog/${props.id}`}>
                <img src={props.img} alt="good" />
            </Link>
            <Subtitle1 text={props.headline} />
            <p>{props.text}</p>
            <H5 text={`€ ${props.price}`} />
            <MyButton href={`/details/${props.id}`} text="Подробнее" />
        </div>
    )
}

export default SliderItem
