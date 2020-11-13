import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { figureOutDate } from '../../utils/helperFunctions/figureOutDate'
import { CardItemType } from '../../types/types'
import { MyAddIcon, MyCloseIcon } from '../../assets/icons/icons'
import { PinkText } from '../common/elements/PinkText';

type CardItemDispatch = {
        removeProduct: (_id: string) => void,
        addInsurance: (_id: string, isInsurance: boolean) => void,
        removeInsurance: (_id: string, isInsurance: boolean) => void,
        changeQuantity: (_id: string, quantity: number) => void,
}
export const CardItem: React.FC<CardItemType & CardItemDispatch> = ({ _id, price, quantity, photo, size, startDate, endDate, isInsurance, removeProduct, addInsurance, removeInsurance, changeQuantity }) => {

        const increaseQuantity = (quantity: number) => {
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
                <div className="row cardItem" key={_id}>
                        <div className="col-12 col-sm-3">
                                <img className="cardPhoto" src={photo} alt="" />
                        </div>
                        <div className="col-9">
                                <p className="cardSlogan" style={{ fontSize: '10px !important' }}>maxi DRESS</p>
                                <div className="cardList">
                                        <p>A perfect flirty number for Balls and Black Tie.</p>
                                        <div className="col-3 d-flex justify-content-end">
                                                <p className="cardPrice">€{price}</p>
                                        </div>
                                        <div className="col-3 d-flex justify-content-center">
                                                <p className="cardPrice">{quantity}</p>

                                                <AddIcon onClick={() => increaseQuantity(quantity)} color="primary" fontSize="small" />
                                                <RemoveIcon onClick={() => decreaseQuantity(quantity)} color="primary" fontSize="small" />

                                        </div>
                                        <MyCloseIcon onClick={() => removeProduct(_id)} />
                                </div>
                                <div className="cardSize d-flex">
                                        <p>Size:{size}</p>
                                        <img src="images/svg/Vector (11).svg" alt="" />
                                </div>
                                <p className="cardText">Rental period<span className="starSmall">*</span> {figureOutDate(startDate, endDate)} days</p>
                                <p>Dates: {startDate}-{endDate} </p>
                                <div className="cardDiscount">
                                        {!isInsurance ? <><div>
                                                <MyAddIcon onClick={() => addInsurance(_id, isInsurance = true)} />
                                        </div>
                                                <div>
                                                        <p><PinkText text="Add" /> insurance for this item for €5</p>
                                                        <p className="cardTextGrey">This will cover accidental damage (example: zip break) but not unrepairable damage</p>
                                                </div></> : <><div>
                                                        <MyCloseIcon onClick={() => { removeInsurance(_id, isInsurance = false) }} />
                                                </div>
                                                        <div>
                                                                <p>This product has insurance <span>€5</span></p>
                                                                <p className="cardTextGrey">This will cover accidental damage (example: zip break) but not unrepairable damage</p>
                                                        </div></>}
                                </div>

                        </div>
                </div>
        )
}
