import React from 'react'
import './CardPage.css'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import { CardItemType } from '../../types/types'
import { PinkText } from '../../components/common/elements/PinkText'
import { H5 } from '../../components/Typography/H5'
import { MyCloseIcon } from '../../assets/icons/icons'
import { SiteMessage } from '../../components/common/ServerMessages/SiteMessage'
import { CardItem } from '../../components/CardItem/CardItem'

const CardPage = (props: any) => {


    return (
        <div>
            <HeaderBottom />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SiteHeadline text="Your bag" />
                    </div>
                </div>
            </div>
            {props.items.length ? <>
                <div className="container">
                    <section className="cardLink">
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-4 d-flex align-items">
                                <p>Item</p>
                            </div>
                            <div className="col-2 d-flex align-items">
                                <p className="ml-auto">Price</p>
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <p>Quantity</p>
                            </div>
                        </div>

                    </section>
                </div>

                <section className="cardBlock">
                    <div className="container">
                        {props.items.map((item: CardItemType) => <CardItem
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
                        <div className="row cardActive" >
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

                        </div>
                        <div className="cardExtraText">
                            <div className="row">
                                <div className="col-10">
                                    <p><PinkText text="*" />Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit
                                and keep all 3 outfits for 21 days!
                                Wear all outfits for as many times as you want.</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardInform">
                            <div className="row cardInformList">
                                <div className="col-12 col-md-3">
                                    <MyButton href="/catalog" text="Rent more" variant="text" />
                                </div>
                                <div className="col-12 col-md-9">
                                    <div className="cardInformListText d-flex">
                                        <H5 text={`Subtotal: € ${props.totalPrice}`} />
                                        <MyButton text="order" href="/buy" />
                                        <p>By proceeding you are agreeing to our <PinkText text="Terms & Conditions" /></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></> : <div><SiteMessage text="Your card is empty" /></div>}

        </div>
    )
}


export default CardPage