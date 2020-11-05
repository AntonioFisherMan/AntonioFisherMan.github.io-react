import React from 'react'
import './SliderItem.css'
import MyButton from '../../SiteButton/MyButton'
import { Link } from 'react-router-dom'

const SliderItem = (props) => {
    return (
        <div className="item">
            <Link to={`/details/${props.id}`}>
                <img src={props.img} alt="good" />
            </Link>
            <h4>{props.headline}</h4>
            <p>{props.text}</p>
            <h5>{props.price} $</h5>
            <MyButton href={`/details/${props.id}`} text="Подробнее" />
        </div>
    )
}

export default SliderItem
