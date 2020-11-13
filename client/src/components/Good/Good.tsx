import React from 'react'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/types'
import MyButton from '../SiteButton/MyButton'
import { H5 } from '../Typography/H5'
import { Subtitle1 } from '../Typography/Subtitle1'





export const Good: React.FC<ProductType> = ({ good }) => {
        return (
                <Box className="goodsItem" key={good._id}>
                        <Link to={`details/${good._id}`}><img src={good.photos.middle} alt="" /></Link>
                        <Subtitle1 text={good.text} />
                        <p>{good.style} Dress</p>
                        <H5 text={`€ ${good.price}`} />
                        <MyButton href={`details/${good._id}`} text="Подробнее" />
                </Box>
        )
}
