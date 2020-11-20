import React, { useState } from 'react'
import { Box, Collapse, Container, Divider, Grid, ListItem, ListItemText, Typography, WithStyles, withStyles } from '@material-ui/core'

import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Slider from '../../components/Slider/Slider'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { ModalConsumer } from '../../context/modalContext'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import { CardItemType, ProductType, ReviewType } from '../../types/types'
import { H5 } from '../../components/Typography/H5'
import { Subtitle1 } from '../../components/Typography/Subtitle1'
import Preloader from '../../components/common/Preloader'
import MyTable from '../../components/Table/Table'
import { SiteMessage } from '../../components/common/ServerMessages/SiteMessage'
import MyRating from '../../components/Rating/MyRating'
import { ReduxProductForm } from '../../redux/reduxForms/ReduxProductForm'
import { ExpandIcon } from '../../assets/icons/icons'
import { ReviewItem } from '../../components/ReviewItem/ReviewItem'
import { CarouselVertical } from '../../components/Slider/CarouselVertical'
import { styles } from './styles'
import { PinkText } from '../../components/common/elements/PinkText'
import GreyText from '../../components/Typography/GreyText'

const DetailsPage: React.FC<ProductPropsType & WithStyles<typeof styles>> = (props) => {
    const { classes } = props
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            {!props.loading ? <ModalConsumer>
                {value => {
                    return (
                        <div>
                            {props.goodItem.map((item: any) => <div key={item._id}>
                                <HeaderBottom />


                                <section className="detailsBlock">
                                    <Container>
                                        <Grid container>
                                            <Grid item xs={12} className={classes.headline}>
                                                <SiteHeadline text="Sussex Copper Foil Maxi dress" />
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} lg={2}>
                                                <CarouselVertical photos={item.good.photos} />
                                            </Grid>
                                            <Grid item xs={12} sm={4} >

                                                <img className={classes.detailsPhoto} src={item.good.photos.large} alt="" />

                                            </Grid>
                                            <Grid item xs={12} sm={8} lg={6}>
                                                <Box >
                                                    <Box >
                                                        <PinkText text={`${item.good.style} Dress`} variant="overline" classes={classes.pinkText} />
                                                        <Subtitle1 text={item.good.text} />
                                                        {/* <ListItem className='list' disableGutters={true} button onClick={() => setExpanded(!expanded)}>
                                                            <ListItemText primary={"Table Sizes"} />
                                                            <ExpandIcon expanded={expanded} />
                                                        </ListItem>
                                                        <Collapse in={expanded}>
                                                            <MyTable closeTable={setExpanded} />
                                                        </Collapse> */}
                                                        <Box className={classes.listStars}>
                                                            <MyRating defaultValue={item.good.rating} goodsId={item.good._id} />
                                                            <GreyText text={`${item.reviewQuantity} Reviews`} propsClasses={classes.greyText} />
                                                        </Box>

                                                        <GreyText text={`€${item.good.salePrice}`} propsClasses={classes.priceLine} />
                                                        <H5 text={`€ ${item.good.price}`} align="left" classes={classes.price} />
                                                        <Divider />
                                                    </Box>
                                                    <ReduxProductForm onSubmit={props.onSubmit} item={item.good} value={value} classes={classes} />

                                                    <Typography className={classes.informListTextArea}>
                                                        Gorgeous Finders Keepers red ruffle midi dress -
                                                        is guaranteed to turn heads at any occasion.
                                                            Uber flattering fit with adjustable tie back and beautiful ruffle detail.<br /><br />
                                    Remember all our outfits are available to rent from 4 to 16 days and
                                    you don't have to worry about the cleaning - we do that for you!<br /><br />
                                    Click here to browse other Midi Dresses.<br /><br />
                                    Renting with Hirestreet is easy‚ Simply choose your outfit,
                                    select your rental period and checkout to reserve your item.
                                    Once you have received your outfit, wear & share
                                    your look as much as you like until your return date.
                                </Typography>


                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Container>


                                    <section className={classes.styleBlock}>
                                        <Container>
                                            <Grid container className={classes.styleHeadline}>
                                                <SiteHeadline text="Recommended For You" />
                                                <MyButton text="ALL CATALOG" href="/catalog" variant="outlined" color="default" />
                                            </Grid>
                                            <Grid container direction="row" justify="center">
                                                <Slider id="multiCarousel3" a="#multiCarousel3" />
                                            </Grid>
                                            <Grid container className={classes.styleBtn}>
                                                <MyButton text="All CATALOG" href="/catalog" variant="outlined" color="default" fullWidth />
                                            </Grid>
                                        </Container>
                                    </section>


                                    <section>
                                        <Container>
                                            <Grid container className={classes.styleHeadline}>
                                                <SiteHeadline text="Reviews" />
                                                <MyButton onClick={() => props.setItemOfReview(item)} href={`/feedback/${item._id}`} text="WRITE A REVIEW" variant="outlined" color="secondary" />
                                            </Grid>

                                            {item.review.map((item: ReviewType) =>
                                                <ReviewItem
                                                    classes={classes}
                                                    _id={item._id}
                                                    photo={item.photo}
                                                    rating={item.rating}
                                                    reviewText={item.reviewText}
                                                    name={item.name} />)}

                                            <Grid container justify="center" className={classes.reviewRating}>
                                                <MyRating readOnly={true} defaultValue={item.good.rating} />
                                            </Grid>
                                            {!item.review.length ? <SiteMessage text="На даный момент у этого товара нет отзывов" /> : null}
                                        </Container>
                                    </section>

                                </section>

                            )
                </div>)
                            }
                        </div>
                    )
                }}
            </ModalConsumer> : <Preloader loading={props.loading} />
            }
        </>
    )
}


export default withStyles(styles)(DetailsPage)



export type ProductPropsType = {
    goodItem: Array<ProductType>,
    items: Array<CardItemType>,
    addToCart: (object: object) => void,
    setItemOfReview: (item: object) => void,
    onSubmit: (payload: any) => void,
    loading: boolean,

}
