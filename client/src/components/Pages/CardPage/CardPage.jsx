import React, { useState } from 'react'
import './CardPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Button3 from '../../SiteButtons/Button3/Button3'
import Button1 from '../../SiteButtons/Button1/Button1'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import { useEffect } from 'react'



const CardPage = (props) => {
    debugger
    const removeItem = (id) => {
        props.removeProduct(id)
    }  
    const addInsurance=(item)=>{
        let insurance=5;
       props.addInsurance(item._id,insurance)
    }
    const increaseQuantity=(item)=>{
        item.quantity=item.quantity+1;
       props.changeQuantity(item._id,item.quantity)
      }
      const decreaseQuantity=(item)=>{
        item.quantity=item.quantity-1;
        props.changeQuantity(item._id,item.quantity)
    }
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
           {props.items.length?<><section className="cardLink">
                <div className="container ">

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
                            <div className="controls">
           
          </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cardBlock">
                <div className="container">
               
           { props.items.map(item=> <div className="row cardItem" key={item._id}>
                        <div className="col-12 col-sm-3">
                            <img className="cardPhoto" src={item.photo} alt="" />
                        </div>
                        <div className="col-9">
                            <p className="cardSlogan" style={{ fontSize: '10px !important' }}>maxi DRESS</p>
                            <div className="cardList">
                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                <div className="col-3 d-flex justify-content-end">
                                    <p className="cardPrice">€{item.price}</p>
                                </div>
                                <div className="col-3 d-flex justify-content-center">
                                    <p className="cardPrice">{item.quantity}</p>
                                    <button className="increase" onClick={()=>increaseQuantity(item)}>+</button>
                                    <button className="decrease" onClick={()=>decreaseQuantity(item)}>-</button>
                                </div>

                                <img onClick={() => {removeItem(item._id)}} src="images/svg/Vector (14).svg" alt="" />
                            </div>
                            <div className="cardSize d-flex">
    <p>Size:{item.size}</p>
                                <img src="images/svg/Vector (11).svg" alt="" />
                            </div>
                            <p className="cardText">Rental period<span className="starSmall">*</span>{item.endDate-item.startDate} : 7 days</p>
                            <p>Dates: {item.startDate}-{item.endDate} </p>
                            <div className="cardDiscount">
                                <div>
                                    <img src="images/svg/Vector (15).svg" alt="" onClick={()=>addInsurance(item)}/>
                                </div>
                                <div>
                                    <p><span>Add </span>insurance for this item for €5</p>
                                    <p className="cardTextGrey">This will cover accidental damage (example: zip break) but not unrepairable damage</p>
                                </div>

                            </div>

                        </div>
                    </div>)}


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
                                    <img className="ml-auto" src="images/svg/Vector (14).svg" alt="" />
                                    <p className="cardSlogan">maxi DRESS</p>
                                    <p>A perfect flirty number for Balls and Black Tie.</p>
                                    <div className="cardSize d-flex">
    <p>Size: XS{props.items.size}</p>
                                        <img src="images/svg/Vector (11).svg" alt="" />
                                    </div>
                                    <p className="cardText" >Rental period<span className="starSmall">*</span> : 7 days</p>
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
                                    <p><span>Add </span>insurance for this item for €5</p>
                                    <p className="cardTextGrey" >This will cover accidental damage (example: zip break) but not unrepairable damage</p>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="cardExtraText">
                        <div className="row">
                            <div className="col-10">
                                <p><span className="starSmall">*</span> Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit
                                and keep all 3 outfits for 21 days!
                                Wear all outfits for as many times as you want.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardInform">
                        <div className="row cardInformList">
                            <div className="col-12 col-md-3">
                                <Button3 link="/catalog" text="Rent more" />
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="cardInformListText d-flex">
                                    <h5>Subtotal: €{props.totalPrice}</h5>
                                    <Button1 text="order" to="buy" />
                                    <p>By proceeding you are agreeing to our <span>Terms & Conditions</span></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>:<div className="row justify-content-center "style={{color:'#E77E83'}}><h4 className=" d-flex flex-column align-items-center">Ваша Корзина пуста<br/><i class="fab fa-linux"></i></h4></div>}
            
        </div>
    )
}


export default CardPage