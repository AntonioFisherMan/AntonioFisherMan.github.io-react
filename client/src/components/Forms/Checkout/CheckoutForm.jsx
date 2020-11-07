import React from 'react'
import MyButton from '../../SiteButton/MyButton'
import './Checkout.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { MaxLength, MinLength, required } from '../../../utils/Validators/validators'
import { H6 } from '../../Typography/H6'


const MaxLengthCreator50 = MaxLength(50)
const MinLengthCreator5 = MinLength(5)

const Checkout = (props) => {

    return (
        <form className="checkoutForm" style={{ margin: '0px', marginTop: '50px', marginBottom: '50px' }} onSubmit={props.handleSubmit}>
            <div className="form-row">
                <H6 text="Shipping address" />
            </div>
            <div className="form-row" >
                <div className="form-group col-12 col-md-6" id="m">
                    <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="name" placeholder="Имя" />
                </div>
                <div className="form-group col-md-6">
                    <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="surname" placeholder="Фамилия" />
                </div>
            </div>
            <div className="form-group">
                <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="city" placeholder="Город" />
            </div>

            <div className="form-group">
                <Field type="text" component={Input} className="form-control" validate={[required]} name="post" placeholder="Номер новой почты" />
            </div>
            <div className="form-row" >
                <div className="form-group col-md-6">
                    <select className="form-control">
                        <option defaultValue>Country</option>
                        <option>Ukraine</option>
                        <option>Russia</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <Field type="text" component={Input} validate={[required]} className="form-control" name="code" placeholder="Post code" id="inputZip" />
                </div>
            </div>
            <div className="form-group ">
                <Field type="number" component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator50]} className="form-control" name="phone" placeholder="Phone" />
            </div>
            <div className="form-row">
                <H6 text="Billing Address" />
            </div>
            <div className="form-group">
                <div className="form-check">
                    <label><Field type="checkbox" component={"input"} name="check" className="form-check-label checkbox" /><span className="fake"></span><span id="checkText">same as Shipping Address</span></label>
                </div>
            </div>
            <div className="form-row">
                <div className="col-12 d-flex align-items-center">
                    <MyButton href="/catalog" text="Return to catalogue" variant="text" />
                </div>
                <div className="col-12 d-flex align-items-center justify-content-end">
                    <button><MyButton text="Заказать" href="" /></button>
                </div>
            </div>

        </form>

    )
}

export const ReduxCheckoutForm = reduxForm({
    form: 'checkout'
})(Checkout)

