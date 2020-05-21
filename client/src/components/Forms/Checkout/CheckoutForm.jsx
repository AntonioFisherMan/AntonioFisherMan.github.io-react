import React from 'react'
import Button3 from '../../SiteButtons/Button3/Button3'
import './Checkout.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { MaxLength, MinLength, required } from '../../../utils/Validators/validators'


const MaxLengthCreator30 = MaxLength(30)
const MinLengthCreator5 = MinLength(5)

const Checkout = (props) => {
    const SuccessMessage = () => {
        return (
            <div className="row justify-content-center " style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">{props.success.message}<br /><i class="fab fa-linux"></i></h4>
            </div>
        )
 }
 
const generateForm = () => {
        return (
            <form className="checkoutForm" onSubmit={props.handleSubmit}>
                <div className="form-row">
                    <h5 className="formHeadline">Shipping address</h5>
                </div>
                <div className="form-row" >
                    <div className="form-group col-12 col-md-6" id="m">
                        <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator30]} name="name" placeholder="Имя" />
                    </div>
                    <div className="form-group col-md-6">
                        <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator30]} name="surname" placeholder="Фамилия" />
                    </div>
                </div>
                <div className="form-group">
                    <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator30]} name="city" placeholder="Город" />
                </div>

                <div className="form-group">
                    <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator30]} name="post" placeholder="Номер новой почты" />
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
                        <Field type="text" component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator30]} className="form-control" name="code" placeholder="Post code" id="inputZip" />
                    </div>
                </div>
                <div className="form-group ">
                    <Field type="number" component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator30]} className="form-control" name="phone" placeholder="Phone" />
                </div>
                <div className="form-row">
                    <h5 className="formHeadline">Billing Address</h5>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <label><Field type="checkbox"  component={"input"} name="check" className="form-check-label checkbox" /><span className="fake"></span><span id="checkText">same as Shipping Address</span></label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 d-flex align-items-center">
                        <Button3 link="/catalog" text="Return to catalogue" />
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-end">
                        <button className="formBtn">Заказать</button>
                    </div>
                </div>

            </form>

        )
    }
    return (
        <div>
            {props.success.message != null ? SuccessMessage() : generateForm()}
        </div>

    )

}

export const ReduxCheckoutForm = reduxForm({
    form: 'checkout'
})(Checkout)

