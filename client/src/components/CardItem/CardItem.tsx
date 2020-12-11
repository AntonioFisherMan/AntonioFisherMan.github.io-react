import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { CardItemType } from '../../types/types'
import { MyCloseIcon } from '../../assets/icons/icons'
import { PinkText } from '../../common/Typography/PinkText';
import { Box, Grid } from '@material-ui/core';
import { Subtitle1 } from '../../common/Typography/Subtitle1';
import { InformItem } from '../InformItem/InformItem';
import { CardDiscount } from './CardDiscount';

type CardItemDispatch = {
        removeProduct: (_id: string) => void,
        addInsurance: (_id: string, isInsurance: boolean) => void,
        removeInsurance: (_id: string, isInsurance: boolean) => void,
        decreaseQuantity: (quantity: number, _id: string,) => void,
        increaseQuantity: (quantity: number, _id: string,) => void
        classes: any
}
export const CardItem: React.FC<CardItemType & CardItemDispatch> = ({ classes, _id, price, quantity, photo, size, startDate, endDate, isInsurance, removeProduct, addInsurance, removeInsurance, increaseQuantity, decreaseQuantity }) => {

        return (
                <Grid container className={classes.cardItem} key={_id}>
                        <Grid item xs={12} sm={3} >
                                <img className={classes.cardPhoto} src={photo} alt="" />
                        </Grid>
                        <Grid item xs={9} sm={9} >
                                <PinkText text="maxi DRESS" variant="overline" />
                                <Box className={classes.cardList}>
                                        <Box className={classes.closeIcon}>
                                                <MyCloseIcon onClick={() => removeProduct(_id)} />
                                        </Box>

                                        <Grid item sm={5} >
                                                <Subtitle1 text="A perfect flirty number for Balls and Black Tie." />
                                        </Grid>

                                        <Grid item sm={3} className={classes.center}>
                                                <Subtitle1 text={`€${price}`} />
                                        </Grid>
                                        <Grid item sm={3} className={classes.center}>
                                                <Box className={classes.plusBlock}>
                                                        <Subtitle1 text={quantity} />
                                                        <AddIcon onClick={() => increaseQuantity(quantity, _id)} color="primary" fontSize="small" />
                                                        <RemoveIcon onClick={() => decreaseQuantity(quantity, _id)} color="primary" fontSize="small" />
                                                </Box>

                                        </Grid>

                                </Box>
                                <InformItem size={size} startDate={startDate} endDate={endDate} />
                                <CardDiscount classes={classes} isInsurance={isInsurance} _id={_id} addInsurance={addInsurance} removeInsurance={removeInsurance} />
                        </Grid>
                </Grid>

        )
}
