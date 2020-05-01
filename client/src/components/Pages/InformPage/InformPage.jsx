import React from 'react'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import  {Field,reduxForm} from 'redux-form'
import {Input} from '../../common/FormsControls/Input'
import Button3 from '../../SiteButtons/Button3/Button3'



const InformPage=(props)=>{
    debugger
 
    return(
       
        <div>
          {props.inform?<div>
       <HeaderBottom/>
        <section className="checkoutBlock">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <SiteHeadline text="My information"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Sidebar/>  
                    </div>
                 <div className="col-1"></div>
             
                    <div className="col-12 col-md-8">
                        <ReduxCheckoutForm  initialValues={props.inform.inform.name}/>
                    </div>
                </div>
            </div>
        </section>
        </div>:null}
        </div>
    )
}

const CheckoutForm=(props)=>{
return(
    <form className="checkoutForm" >
            <div className="form-row">
                <h5 className="formHeadline">Shipping address</h5>
            </div>
            <div className="form-row" >
                <div className="form-group col-12 col-md-6" id="m">
                    <Field type="text" component={Input} className="form-control" name="name"placeholder="Имя" />
                </div>
                <div className="form-group col-md-6">
                    <Field type="text"component={Input} className="form-control" name="surname"placeholder="Фамилия" />
                </div>
            </div>
            <div className="form-group">
                <Field type="text" component={Input}className="form-control" name="city"placeholder="Город" />
            </div>
         
            <div className="form-group">
                <Field type="text" component={Input} className="form-control" name="post" placeholder="Номер новой почты" />
            </div>
            <div className="form-row" >
                <div className="form-group col-md-6">
                    <select className="form-control">
                        <option selected>Country</option>
                        <option>Ukraine</option>
                        <option>Russia</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <Field type="text" component={Input} className="form-control" name="code"placeholder="Post code" id="inputZip" />
                </div>
            </div>
            <div className="form-group ">
                <Field type="number"component={Input} className="form-control" name="phone"placeholder="Phone" />
            </div>
            <div className="form-row">
                <h5 className="formHeadline">Billing Address</h5>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <label><Field type="checkbox" component={"input"} name="check"className="form-check-label checkbox" /><span className="fake"></span><span id="checkText">same as Shipping Address</span></label>
                </div>
            </div>
            <div className="form-row">
                <div className="col-12 d-flex align-items-center">
                    <Button3 link="/catalog" text="Return to catalogue" />
                </div>
                <div className="col-12 d-flex align-items-center justify-content-end">
                    <button className="formBtn">Обновить</button>
                </div>
            </div>

        </form>
)
}

export const ReduxCheckoutForm = reduxForm({
    form: 'checkout'
})(CheckoutForm)


export default InformPage