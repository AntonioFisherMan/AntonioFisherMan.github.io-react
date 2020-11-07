import React from 'react'
import './SliderItem.css'
import MyButton from '../../SiteButton/MyButton'
import { Link } from 'react-router-dom'
import { H5 } from '../../Typography/H5'
import { Subtitle1 } from '../../Typography/Subtitle1'

const SliderItem = (props) => {
    return (
        <div className="item">
            <Link to={`/details/${props.id}`}>
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
