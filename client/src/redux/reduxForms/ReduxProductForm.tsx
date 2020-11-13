import React, { useState } from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { PinkText } from "../../components/common/elements/PinkText"
import { MySelect } from "../../components/common/FormsControls/MySelect"
import MyButton from "../../components/SiteButton/MyButton"
import { H6 } from "../../components/Typography/H6"
import { Subtitle1 } from "../../components/Typography/Subtitle1"
import { ProductPropsType } from "../../Pages/DetailsPage/DetailsPage"
import { required } from "../../utils/Validators/validators"
import { MyInput } from '../../components/common/FormsControls/MyInput'

type ProductValuesType = {
        item: { sizes: Array<string> },
        value: { openModal: (args: {}, string: string) => { ModalProduct: { product: object, size: string, modalOpen: boolean } } }
}


const ProductForm: React.FC<InjectedFormProps<ProductPropsType, ProductValuesType> & ProductValuesType> = (props) => {
        let [size, setSize] = useState('')
        debugger
        return (
                <form onSubmit={props.handleSubmit}>
                        <div className="detailsInformList">
                                <H6 text="Step 1." />
                                <div className="d-flex align-items-center">
                                        <Field validate={[required]} component={MySelect} onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => setSize(e.target.value)} name="size" className="detailsBtn">
                                                {props.item.sizes ? props.item.sizes.map((size: string) =>

                                                        <option key={size}>
                                                                {size}
                                                        </option>) : <option> Размеров нет</option>}
                                        </Field>

                                        <div className="d-flex detailsSize">
                                                <img src="/images/svg/Vector (11).svg" alt="" />
                                                <p >size guide</p>
                                        </div>
                                </div>
                                <p className="detailsInformListRental">Rental Period <PinkText text="*" /></p>
                                <div className="detailsInformListRentalBlock">
                                        <img src="/images/svg/Vector (12).svg" alt="" />
                                        <p>7 day rental</p>
                                </div>
                        </div>
                        <div className="detailsInformList">
                                <H6 text="Step 2." />
                                <div className="detailsInformListDate">

                                        <div>
                                                <Subtitle1 text="Delivery Date" />
                                                <Field validate={[required]} type="date" component={MyInput} name="startDate" className="form-control" />
                                        </div>
                                        <div>
                                                <Subtitle1 text="Delivery Date" />
                                                <Field validate={[required]} type="date" component={MyInput} name="endDate" className="form-control" />
                                        </div>
                                </div>
                                {props.submitSucceeded ? props.value.openModal(props.item, size) : null}

                                <p className="detailsInformListDateTextarea"><PinkText text="*" />Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit
                                    and keep all 3 outfits for 21 days!
                                    Wear all outfits for as many times as you want.</p>
                                <button ><MyButton text=" Add to cart" href="" /></button>


                        </div>
                </form>
        )
}


export const ReduxProductForm = reduxForm<ProductPropsType, ProductValuesType>({ form: 'product' })(ProductForm)
