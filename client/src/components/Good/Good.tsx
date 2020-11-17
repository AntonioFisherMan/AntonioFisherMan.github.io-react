import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/types'
import MyButton from '../SiteButton/MyButton/MyButton'
import { H5 } from '../Typography/H5'
import { Subtitle1 } from '../Typography/Subtitle1'
import { PinkText } from '../common/elements/PinkText'


const useStyles = makeStyles({
        goodItem: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 20
        },
        img: {
                marginTop: 52,
                margin: '0 auto',
                marginBottom: 15
        },
        h5: {
                marginBottom: 15
        },
        pinkText: {
                textTransform: "uppercase",
                fontSize: 10,
                marginTop: 5,
                marginBottom: 5
        }


})


export const Good: React.FC<ProductType> = ({ good }) => {
        const classes = useStyles()
        return (
                <Box className={classes.goodItem} key={good._id}>
                        <Link to={`details/${good._id}`}><img src={good.photos.middle} alt="" className={classes.img} /></Link>
                        <Subtitle1 text={good.text} />
                        <PinkText text={`${good.style} Dress`} classes={classes.pinkText} />
                        <H5 text={`€ ${good.price}`} classes={classes.h5} />
                        <MyButton href={`details/${good._id}`} text="Подробнее" />
                </Box>
        )
}
