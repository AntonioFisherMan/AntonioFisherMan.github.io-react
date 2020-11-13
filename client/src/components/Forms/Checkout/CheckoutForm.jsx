import React from 'react'
import MyButton from '../../SiteButton/MyButton'
import './Checkout.css'
import { Field } from 'redux-form'
import { MyInput } from '../../common/FormsControls/MyInput'
import { required } from '../../../utils/Validators/validators'
import { H6 } from '../../Typography/H6'
import { MyCheckBox } from '../../common/FormsControls/MyCheckBox'
import { MySelect } from '../../common/FormsControls/MySelect'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../../hoc/LoaingData'


const CheckoutForm = (props) => {
    debugger
    return (
        <>
            <form className="checkoutForm" style={{ margin: '0px', marginTop: '50px', marginBottom: '50px' }} onSubmit={props.handleSubmit}>
                <H6 text="Shipping address" />
                <Field type="text" label="First name" validate={[required]} component={MyInput} name="name" placeholder="Имя" />
                <Field type="text" label="Last name" validate={[required]} component={MyInput} name="surname" placeholder="Фамилия" />
                <Field type="text" label="City" validate={[required]} component={MyInput} name="city" placeholder="Город" />
                <Field type="text" validate={[required]} component={MyInput} label="Номер новой почты" name="post" placeholder="Номер новой почты" />
                <Field validate={[required]} component={MySelect} name="country" >
                    <option defaultValue>Country</option>
                    <option>Ukraine</option>
                    <option>Russia</option>
                </Field>
                <Field type="text" validate={[required]} component={MyInput} name="code" label="Post code" placeholder="Post code" id="inputZip" />
                <Field type="number" validate={[required]} component={MyInput} label="Phone" name="phone" placeholder="Phone" />
                <H6 text="Billing Address" />
                <label><Field type="checkbox" component={MyCheckBox} name="check" /><span>same as Shipping Address</span></label>
                <div className="returnLink">
                    <MyButton href="/catalog" text="Return to catalogue" variant="text" />
                </div>
                {props.isAddInform ? <div className="ml-auto">
                    <button ><MyButton text="Обновить" href="" loading={props.loading} /></button>
                </div> : <div className="ml-auto">
                        <button ><MyButton text={props.btn} href="" loading={props.loading} /></button>
                    </div>}
            </form>
        </>

    )
}



export default compose(LoadingDataHOC)(CheckoutForm)


