import React from 'react'
import './DetailsPage.css'
import { Link } from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Slider from '../../Slider/Slider'
import MyButton from '../../SiteButton/MyButton'
import { ModalConsumer } from '../../../context/modalContext'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import { reduxForm, Field } from 'redux-form'
import { Select } from '../../common/FormsControls/Select'
import { Input } from '../../common/FormsControls/Input'
import { required } from '../../../utils/Validators/validators'
import userPhoto from '../../../assets/user.png'
import { useState } from 'react'
import { GoodType } from '../../../types/types'


const DetailsPage = (props: any) => {

    const onSubmit = (payload: any) => {
        const { size, startDate, endDate } = payload
        const cardItems = props.items
        const { price, photos, _id, style } = props.goodItem[0]
        const photo = photos.middle
        var data = { photo, price, _id, style }
        var inCard = false
        if (cardItems.length > 0) {
            for (var i = 0; i < cardItems.length; i++) {
                if (cardItems[i]._id.includes(_id)) {
                    cardItems[i].quantity++
                    inCard = true
                    break
                }
            }
            if (inCard == false) {
                props.cardActions.addToCart(Object.assign({ size, startDate, endDate, quantity: 1 }, data))
            }
        } else {
            props.cardActions.addToCart(Object.assign({ size, startDate, endDate, quantity: 1 }, data))
        }
    }

    return (
        <ModalConsumer>
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
                                            <div id="multiCarousel_3" className="carousel slide w-100" data-ride="carousel">
                                                <div className="carousel-inner-2 w-100" role="listbox">
                                                    <div className="carousel-item active">
                                                        <img className="carousel__img" src="/images/photo4.png" alt="" />
                                                    </div>
                                                    {item.good.photos.small.map((photo: any) =>
                                                        <div key={photo._id} className="carousel-item">
                                                            <img className="carousel__img" src={photo} alt="" />
                                                        </div>)}
                                                </div>
                                                <Link id="arrow-prev1" to="#" href="#multiCarousel_3" role="button" data-slide="prev">
                                                    <div className="arrow-1">
                                                        <i className="big fas fa-chevron-up" aria-hidden="true"></i>
                                                        <i className="smallLeft fas fa-chevron-left" aria-hidden="true"></i>
                                                        <span className="sr-only">Предыдущий</span>
                                                    </div>
                                                </Link>

                                                <Link id="arrow-next1" to="#" href="#multiCarousel_3" role="button"
                                                    data-slide="next">
                                                    <div className="arrow-1">
                                                        <i className="big fas fa-chevron-down" aria-hidden="true"></i>
                                                        <i className="smallRight fas fa-chevron-right" aria-hidden="true"></i>
                                                        <span className="sr-only">Cледующий</span>
                                                    </div>
                                                </Link>
                                            </div>

                                        </div>
                                        <div className="col-12 col-sm-4 col-lg-4 d-flex justify-content-center">
                                            <img className="detailsPhoto" src={item.good.photos.middle} alt="" />
                                        </div>
                                        <div className="col-12 col-sm-8 col-lg-4">
                                            <div className="detailsInform">
                                                <div className="detailsInformList">
                                                    <p className="detailsListSlogan" >{item.good.style} Dress</p>
                                                    <p className="detailsListText">{item.good.text}</p>
                                                    <div className="detailsListStars">
                                                        <div className="stars" >
                                                            <i className="far fa-star ">
                                                                <i className="fas fa-star " ></i>
                                                            </i>
                                                            <i className="far fa-star ">
                                                                <i className="fas fa-star "></i>
                                                            </i>
                                                            <i className="far fa-star ">
                                                                <i className="fas fa-star "></i>
                                                            </i>
                                                            <i className="far fa-star ">
                                                                <i className="fas fa-star "></i>
                                                            </i>
                                                            <i className="far fa-star ">
                                                                <i className="fas fa-star "></i>
                                                            </i>
                                                        </div>
                                                        <p>{item.review ? item.reviewQuantity : null} Reviews</p>
                                                    </div>

                                                    <p className="detailsItem-price-line">€{item.good.salePrice}</p>
                                                    <p className="detailsItem-price">€{item.good.price}</p>
                                                    <hr />
                                                </div>



                                                {/* <ReduxProductForm onSubmit={onSubmit} item={item} value={value} /> */}


                                                <div className="detailsInformList">
                                                    <p className="detailsInformListTextarea ">
                                                        Gorgeous Finders Keepers red ruffle midi dress - is guaranteed to turn heads at any occasion. Uber flattering fit with adjustable tie back and beautiful ruffle detail.<br /><br />

                                    Remember all our outfits are available to rent from 4 to 16 days and you don't have to worry about the cleaning - we do that for you!<br /><br />

                                    Click here to browse other Midi Dresses.<br /><br />

                                    Renting with Hirestreet is easy‚ Simply choose your outfit, select your rental period and checkout to reserve your item. Once you have received your outfit, wear & share your look as much as you like until your return date.
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
                                                <button onClick={() => props.reviewsActions.setItemOfReview(item)}>  <MyButton href={`/feedback/${item._id}`} text="WRITE A REVIEW" variant="outlined" color="secondary" /></button>

                                            </div>
                                        </div>
                                        {!item.review.length ? <div className="row justify-content-center " style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">На данный момент в этого товара нет отзывов<br /><i className="fab fa-linux"></i></h4></div> : null}
                                        {item.review.map((item: any) => <div key={item._id} className="reviewItem">
                                            <div className="row">
                                                <div className="col-12 col-sm-12  col-lg-3 ">
                                                    <div className="reviewInform ">
                                                        <div className="reviewImg">
                                                            <img src={item.photo !== "undefined" ? `http://localhost:5000/${item.photo}` : userPhoto} alt="" />
                                                        </div>
                                                        <div className="reviewText">
                                                            <h5>{item.name}</h5>
                                                            <p>{item.rating}</p>
                                                            <div className="stars">
                                                                <i className="far fa-star ">
                                                                    <i className="fas fa-star "></i>
                                                                </i>
                                                                <i className="far fa-star ">
                                                                    <i className="fas fa-star "></i>
                                                                </i>
                                                                <i className="far fa-star ">
                                                                    <i className="fas fa-star "></i>
                                                                </i>
                                                                <i className="far fa-star ">
                                                                    <i className="fas fa-star "></i>
                                                                </i>
                                                                <i className="far fa-star ">
                                                                    <i className="fas fa-star "></i>
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-lg-9">
                                                    <div className="reviewCard">
                                                        <ul className="reviewList">
                                                            <li>Your height (in feet)?  5.7</li>
                                                            <li>About the fit True to size</li>
                                                            <li>About your curves  Curvey</li>
                                                        </ul>
                                                        <p><span>{item.reviewText}</span></p>
                                                    </div>
                                                </div>

                                            </div>
                                            <hr />
                                        </div>)}
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="stars" id="stars">
                                                    <i className="far fa-star ">
                                                        <i className="fas fa-star "></i>
                                                    </i>
                                                    <i className="far fa-star ">
                                                        <i className="fas fa-star "></i>
                                                    </i>
                                                    <i className="far fa-star ">
                                                        <i className="fas fa-star "></i>
                                                    </i>
                                                    <i className="far fa-star ">
                                                        <i className="fas fa-star "></i>
                                                    </i>
                                                    <i className="far fa-star ">
                                                        <i className="fas fa-star "></i>
                                                    </i>
                                                </div>
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
        </ModalConsumer>
    )
}

const ProductForm = (props: any) => {
    let [size, setSize] = useState<string>('')

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="detailsInformList">
                <h6>Step 1.</h6>
                <div className="d-flex align-items-center">
                    <Field validate={[required]} component={Select} onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => setSize(e.target.value)} name="size" className="detailsBtn">

                        {props.item.sizes ? props.item.sizes.map((size: any) => <option key={size}>
                            {size}
                        </option>) : <option> Размеров нет</option>}
                    </Field>

                    <div className="d-flex detailsSize">
                        <img src="/images/svg/Vector (11).svg" alt="" />
                        <p >size guide</p>
                    </div>
                </div>
                <p className="detailsInformListRental">Rental Period *</p>
                <div className="detailsInformListRentalBlock">
                    <img src="/images/svg/Vector (12).svg" alt="" />
                    <p>7 day rental</p>
                </div>
            </div>
            <div className="detailsInformList">
                <h6>Step 2.</h6>
                <div className="detailsInformListDate">

                    <div>
                        <p>Delivery Date</p>
                        <Field validate={[required]} type="date" component={Input} name="startDate" className="form-control" />
                    </div>
                    <div>
                        <p>Delivery Date</p>
                        <Field validate={[required]} type="date" component={Input} name="endDate" className="form-control" />
                    </div>
                </div>
                {props.submitSucceeded ? props.value.openModal(props.item, size) : null}

                <p className="detailsInformListDateTextarea"><span style={{ paddingRight: '3px' }} className="starSmall">*</span> Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit
                                and keep all 3 outfits for 21 days!
                                Wear all outfits for as many times as you want.</p>
                <button className="buttonBlock1"> Add to cart</button>

            </div>
        </form>
    )
}


const ReduxProductForm = reduxForm({ form: 'product' })(ProductForm)


export default DetailsPage