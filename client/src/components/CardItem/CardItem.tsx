import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { figureOutDate } from '../../utils/helperFunctions/figureOutDate'
import { CardItemType } from '../../types/types'
import { MyAddIcon, MyCloseIcon } from '../../assets/icons/icons'
import { PinkText } from '../../common/Typography/PinkText';

import { Box, Grid, Typography } from '@material-ui/core';
import { Subtitle1 } from '../../common/Typography/Subtitle1';
import { H5 } from '../../common/Typography/H5';
import GreyText from '../../common/Typography/GreyText';
import { InformCard } from '../InformCard/InformCard';

type CardItemDispatch = {
        removeProduct: (_id: string) => void,
        addInsurance: (_id: string, isInsurance: boolean) => void,
        removeInsurance: (_id: string, isInsurance: boolean) => void,
        changeQuantity: (_id: string, quantity: number) => void,
        classes: any
}
export const CardItem: React.FC<CardItemType & CardItemDispatch> = ({ classes, _id, price, quantity, photo, size, startDate, endDate, isInsurance, removeProduct, addInsurance, removeInsurance, changeQuantity }) => {

        const increaseQuantity = (quantity: number) => {
                debugger
                quantity = quantity + 1;
                changeQuantity(_id, quantity)
        }
        const decreaseQuantity = (quantity: number) => {
                if (quantity > 1) {
                        quantity = quantity - 1;
                        changeQuantity(_id, quantity)
                }
        }
        return (
                <Grid container className={classes.cardItem} key={_id}>
                        <Grid item xs={12} sm={3}>
                                <img className={classes.cardPhoto} src={photo} alt="" />
                        </Grid>
                        <Grid item xs={9}>
                                <PinkText text="maxi DRESS" variant="overline" />
                                <Box className={classes.cardList}>
                                        <Box className={classes.closeIcon}>
                                                <MyCloseIcon onClick={() => removeProduct(_id)} />
                                        </Box>

                                        <Grid item xs={5}>
                                                <Subtitle1 text="A perfect flirty number for Balls and Black Tie." />
                                        </Grid>

                                        <Grid item xs={3} className={classes.center}>
                                                <Subtitle1 text={`€${price}`} />
                                        </Grid>
                                        <Grid item xs={3} className={classes.center}>
                                                <Box className={classes.plusBlock}>
                                                        <Subtitle1 text={quantity} />
                                                        <AddIcon onClick={() => increaseQuantity(quantity)} color="primary" fontSize="small" />
                                                        <RemoveIcon onClick={() => decreaseQuantity(quantity)} color="primary" fontSize="small" />
                                                </Box>

                                        </Grid>

                                </Box>
                                <InformCard size={size} startDate={startDate} endDate={endDate} />

                                <Box className={classes.cardDiscount}>
                                        {!isInsurance ? <>
                                                <Box className={classes.cardDiscountText}>
                                                        <MyAddIcon onClick={() => addInsurance(_id, isInsurance = true)} />
                                                </Box>
                                                <Box >
                                                        <Typography><PinkText text="Add" /> insurance for this item for €5</Typography>
                                                        <GreyText text="This will cover accidental damage (example: zip break) but not unrepairable damage" />
                                                </Box>


                                        </> : <>
                                                        <Box className={classes.cardDiscountText} >
                                                                <MyCloseIcon onClick={() => { removeInsurance(_id, isInsurance = false) }} />
                                                        </Box>
                                                        <Box>
                                                                <Typography>This product has insurance <PinkText text="€5" /></Typography>
                                                                <GreyText text="This will cover accidental damage (example: zip break) but not unrepairable damage" />
                                                        </Box></>}
                                </Box>
                        </Grid>
                </Grid>

        )
}
