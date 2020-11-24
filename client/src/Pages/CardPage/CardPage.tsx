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
import { Box, Container, Grid, Typography, withStyles } from '@material-ui/core'
import { Subtitle1 } from '../../common/Typography/Subtitle1'
import GreyText from '../../common/Typography/GreyText'


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
                </Container>

                <section className={classes.cardBlock}>
                    <Container>
                        {props.items.map((item: CardItemType) => <CardItem
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
                            changeQuantity={props.changeQuantity}
                            isInsurance={item.isInsurance}

                        />)}
                        <Box className={classes.cardExtraText}>
                            <Grid container>
                                <Grid item xs={10}>
                                    <Box className="d-flex"><PinkText text="*" />  <Subtitle1 text="Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit
                                and keep all 3 outfits for 21 days!
                                Wear all outfits for as many times as you want."/></Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.cardInform}>
                            <Grid container className={classes.cardInformList}>
                                <Grid item xs={12} md={3}>
                                    <MyButton href="/catalog" text="Rent more" variant="text" color="primary" />
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


                    {/* <div className="row cardActive" >
                            <div className="col-3 cardLinkActive">
                                <p >Item</p>
                                <p >Price</p>
                                <p>Price</p>
                            </div>
                            <div className="col-9  d-flex flex-column" style={{ marginTop: '20px' }}>

                                <div className="d-flex cardActiveInform">
                                    <div>
                                        <img className="cardPhotoActive" src="images/Mask-3.png" alt="" />
                                    </div>
                                    <div className="cardText">

                                        <MyCloseIcon />
                                        <p className="cardSlogan">maxi DRESS</p>
                                        <p>A perfect flirty number for Balls and Black Tie.</p>
                                        <div className="cardSize d-flex">
                                            <p>Size: XS{props.items.size}</p>
                                            <img src="images/svg/Vector (11).svg" alt="" />
                                        </div>
                                        <p className="cardText" >Rental period<PinkText text="*" /> : 7 days</p>
                                        <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                    </div>

                                </div>
                                <p className="cardPrice d-flex justify-content-center" >€61.17</p>
                                <p className="cardPrice ">€61.17</p>
                                <div className="cardDiscount">
                                    <div>

                                        <img src="images/svg/Vector (15).svg" alt="" />
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <p><PinkText text="Add" /> insurance for this item for €5</p>
                                        <p className="cardTextGrey" >This will cover accidental damage (example: zip break) but not unrepairable damage</p>
                                    </div>

                                </div>

                            </div>

                        </div> */}


                </section></> : <div><SiteMessage text="Your card is empty" /></div>}

        </>
    )
}


export default withStyles(styles)(CardPage)