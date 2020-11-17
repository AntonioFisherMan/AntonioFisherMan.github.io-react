import React, { Fragment, useState } from 'react'
import './DetailsPage.css'
import { Link } from 'react-router-dom'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Slider from '../../components/Slider/Slider'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { ModalConsumer } from '../../context/modalContext'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import { CardItemType, ProductType, ReviewType } from '../../types/types'
import { H5 } from '../../components/Typography/H5'
import { Subtitle1 } from '../../components/Typography/Subtitle1'
import Preloader from '../../components/common/Preloader'
import { Collapse, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import MyTable from '../../components/Table/Table'
import { SiteMessage } from '../../components/common/ServerMessages/SiteMessage'
import MyRating from '../../components/Rating/MyRating'
import { ReduxProductForm } from '../../redux/reduxForms/ReduxProductForm'
import { ExpandIcon } from '../../assets/icons/icons'
import { ReviewItem } from '../../components/ReviewItem/ReviewItem'
import { CarouselVertical } from '../../components/Slider/CarouselVertical'


const DetailsPage: React.FC<ProductPropsType> = (props) => {

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
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <SiteHeadline text="Sussex Copper Foil Maxi dress" />
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-lg-2">
                                                <CarouselVertical photos={item.good.photos} />
                                            </div>
                                            <div className="col-12 col-sm-4 col-lg-4 d-flex justify-content-center">
                                                <img className="detailsPhoto" src={item.good.photos.middle} alt="" />
                                            </div>
                                            <div className="col-12 col-sm-8 col-lg-4">
                                                <div className="detailsInform">
                                                    <div className="detailsInformList">
                                                        <p className="detailsListSlogan" >{item.good.style} Dress</p>
                                                        <Subtitle1 text={item.good.text} />
                                                        <ListItem className='list' disableGutters={true} button onClick={() => setExpanded(!expanded)}>
                                                            <ListItemText primary={"Table Sizes"} />
                                                            <ExpandIcon expanded={expanded} />
                                                        </ListItem>
                                                        <Collapse in={expanded}>
                                                            <MyTable closeTable={setExpanded} />
                                                        </Collapse>

                                                        <div className="detailsListStars">
                                                            <MyRating defaultValue={item.good.rating} goodsId={item.good._id} />
                                                            <p>{item.reviewQuantity} Reviews</p>
                                                        </div>

                                                        <p className="detailsItem-price-line">€{item.good.salePrice}</p>
                                                        <H5 text={`€ ${item.good.price}`} align="left" />
                                                        <hr />
                                                    </div>
                                                    <ReduxProductForm onSubmit={props.onSubmit} item={item.good} value={value} />
                                                    <div className="detailsInformList">
                                                        <p className="detailsInformListTextarea ">
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
                                </p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                    </div>
                                    <section className="styleBlock">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-sm-6">
                                                    <SiteHeadline text="Recommended For You" />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="d-flex justify-content-end">
                                                        <MyButton text="ALL CATALOG" href="/catalog" variant="outlined" color="default" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <Slider id="multiCarousel3" a="#multiCarousel3" />
                                            </div>

                                            <div className="row">
                                                <div className="col-12 btnWidth">
                                                    <MyButton text="All CATALOG" href="/catalog" variant="outlined" color="default" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>


                                    <section className="reviewBlock">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6">
                                                    <SiteHeadline text="Reviews" />
                                                </div>
                                                <div className="col-6  d-flex justify-content-end">
                                                    <MyButton onClick={() => props.setItemOfReview(item)} href={`/feedback/${item._id}`} text="WRITE A REVIEW" variant="outlined" color="secondary" />
                                                </div>
                                            </div>
                                            {!item.review.length ? <SiteMessage text="На даный момент у этого товара нет отзывов" /> : null}
                                            {item.review.map((item: ReviewType) =>
                                                <ReviewItem
                                                    _id={item._id}
                                                    photo={item.photo}
                                                    rating={item.rating}
                                                    reviewText={item.reviewText}
                                                    name={item.name} />)}
                                            <div className="row">
                                                <div className="col-12 d-flex justify-content-center">
                                                    <MyRating readOnly={true} defaultValue={item.good.rating} />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </section>

           )
                </div>)}
                        </div>
                    )
                }}
            </ModalConsumer> : <Preloader loading={props.loading} />}
        </>
    )
}


export default DetailsPage



export type ProductPropsType = {
    goodItem: Array<ProductType>,
    items: Array<CardItemType>,
    addToCart: (object: object) => void,
    setItemOfReview: (item: object) => void,
    onSubmit: (payload: any) => void,
    loading: boolean
}
