import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import { CardItemType } from '../../types/types'
import { PinkText } from '../../common/Typography/PinkText'
import { H5 } from '../../common/Typography/H5'
import { MyCloseIcon } from '../../assets/icons/icons'
import { SiteMessage } from '../../common/Messages/SiteMessage'
import { CardItem } from '../../components/CardItem/CardItem'
import { styles } from './styles'
import { Box, Container, Grid, Hidden, Typography, withStyles } from '@material-ui/core'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import GreyText from '../../common/Typography/GreyText'
import { InformCard } from '../../components/InformCard/InformCard'
import { CardDiscount } from '../../components/CardItem/CardDiscount'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const CardPage = (props: any) => {
    const { classes } = props

    return (
        <>
            <HeaderBottom />
            <Container>
                <Grid container >
                    <SiteHeadline text="Your bag" />
                </Grid>
            </Container>

            {props.items.length ? <>
                <Container>
                    <Hidden xsDown>
                        <section className={classes.cardLink}>
                            <Grid container>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={4}>
                                    <Subtitle1 text="Item" />
                                </Grid>
                                <Grid item xs={2} className={classes.center} >
                                    <Subtitle1 text="Price" />
                                </Grid>
                                <Grid item xs={3} className={classes.center} >
                                    <Subtitle1 text="Quantity" />
                                </Grid>
                            </Grid>
                        </section>
                    </Hidden>

                </Container>

                <section className={classes.cardBlock}>

                    <Container>
                        {props.items.map((item: CardItemType) => <Hidden xsDown><CardItem
                            classes={classes}
                            _id={item._id}
                            price={item.price}
                            quantity={item.quantity}
                            photo={item.photo}
                            size={item.size}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            removeProduct={props.removeProduct}
                            addInsurance={props.addInsurance}
                            removeInsurance={props.removeInsurance}
                            isInsurance={item.isInsurance}
                            increaseQuantity={props.increaseQuantity}
                            decreaseQuantity={props.decreaseQuantity}

                        /></Hidden>)}

                        <Box className={classes.cardExtraText}>
                            <Grid container>
                                <Grid item xs={10}>
                                    <Box className={classes.tip}><PinkText text="*" />  <Subtitle1 text="Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit
                                and keep all 3 outfits for 21 days!
                                Wear all outfits for as many times as you want."/></Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.cardInform}>
                            <Grid container className={classes.cardInformList}>
                                <Grid item xs={12} md={3} className={classes.linkBlock}>
                                    <MyButton href="/catalog" text="Rent more" variant="text" color="primary" propsClasses={classes.link} />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <H5 text={`Subtotal: € ${props.totalPrice}`} propsClasses={classes.totalPrice} />
                                    <Box className={classes.cardInformListText}>
                                        <MyButton text="order" href="/buy" />
                                        <Box className={classes.totalText}> <GreyText text="By proceeding you are agreeing to our " /><PinkText text=" Terms & Conditions" /></Box>
                                    </Box>

                                </Grid>

                            </Grid>
                        </Box>
                    </Container>


                    {/************************  Small Screeen ****************/}
                    <Hidden smUp>
                        {props.items.map((item: CardItemType) => <Grid container direction="row" className={classes.cardActiveItem}>

                            <Grid item className={classes.cardLinkActive} xs={3}>
                                <Subtitle1 text="Item" propsClasses={classes.p1} />
                                <Subtitle1 text="Price" propsClasses={classes.p2} />
                                <Subtitle1 text="Quantity" propsClasses={classes.p3} />
                            </Grid>

                            <Grid item className={classes.cardActive} xs={9}>
                                <Box>
                                    <Box className={classes.cardActiveInform}>
                                        <img className={classes.cardPhotoActive} src={item.photo} alt="" />
                                        <Box>
                                            <Box className={classes.closeIcon}>
                                                <MyCloseIcon onClick={() => props.removeProduct(item._id)} classes={classes.closeIcon} />
                                            </Box>
                                            <InformCard size={item.size} startDate={item.startDate} endDate={item.endDate} style={item.style} text={item.text} />
                                        </Box>
                                    </Box>

                                    <Subtitle1 propsClasses={classes.p2} text={`€${item.price}`} />
                                    <Box className={classes.center}>
                                        <Subtitle1 propsClasses={classes.p3} text={item.quantity} />
                                        <AddIcon onClick={() => props.increaseQuantity(item.quantity, item._id)} color="primary" fontSize="small" />
                                        <RemoveIcon onClick={() => props.decreaseQuantity(item.quantity, item._id)} color="primary" fontSize="small" />
                                    </Box>
                                    <CardDiscount classes={classes} isInsurance={item.isInsurance} _id={item._id} addInsurance={props.addInsurance} removeInsurance={props.removeInsurance} />
                                </Box>
                            </Grid>


                        </Grid>)}
                    </Hidden>



                </section></> : <div><SiteMessage text="Your card is empty" /></div>}

        </>
    )
}


export default withStyles(styles)(CardPage)