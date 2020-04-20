import React from 'react'
import "./SignPage.css"
import "../../common/FormsControls/Form.css"
import {Link, Redirect} from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import Button3 from '../../SiteButtons/Button3/Button3'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'


const SignPage=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }
    return(
        <>
   <HeaderBottom/>
    <section className="signBlock">
        <div className="container">
        <div className="row">
                <div className="col-12">
                    <SiteHeadline text="Sign-In"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-7">
                <ReduxLoginForm captchaUrl={props.captchaUrl} isAuth={props.isAuth}onSubmit={onSubmit}/>
                    <div className="signReturnBtn">
                           <Button3 text="Return to cart"/>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                   <ReduxRegisterForm/>
                    <div className="signReturnBtn-active">
                      <Button3 link="/card" text="Return to cart"/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        </>
     
    )
}


const MaxLengthCreator20=MaxLength(20)
const MinLengthCreator5=MinLength(5)
const LoginForm=(props)=>{
    if(props.isAuth) {
        return <Redirect to="/"/>
    }
    return(
        
        <form className="signForm" onSubmit={props.handleSubmit}> 
        <h5 className="signHeadline">log-in</h5>
        <div className="form-group">
                <Field type="email" id="inputEmail" name={"email"} className="form-control" placeholder="Email adress"
                required  component={Input} validate={[required,MinLengthCreator5,MaxLengthCreator20]}/>
        </div>
        <div>
    
                <Field type="password" id="inputPassword" name={"password"} className="form-control" placeholder="Password"
                required  component={Input} validate={[required,MinLengthCreator5,MaxLengthCreator20]}/>
        </div>
      
            <div className="custom-control custom-checkbox d-flex ">
                <label className="d-flex align-items-center"><Field name={"remember"} type="checkbox" className="checkbox" component={"input"}/> <span className="fake fakeSign" ></span><span className="checkText span">Remember Me<span>(Privacy
                    Policy)</span></span></label>
                <Link className="forgotPass" to="/changepass">forgot password</Link>
                <button>Login</button>
            </div>
            {props.captchaUrl&&
            <div>
                <img src={props.captchaUrl}/>
                <Field type="text"  className="form-control" placeholder="Captcha" name={"captcha"} id={"captcha"} component={Input}/>
                </div>}
            {props.error?<div className="form-group form-error">
                <p>{props.error}</p> 
            </div>:null}
            
    </form>
    )
}

const ReduxLoginForm=reduxForm({
    form:'login'
})(LoginForm)



const RegisterForm=()=>{
    return(
        <form className="signForm">
        <h5 className="signHeadline">Not a member? Sign Up</h5>
        <div className="form-group">
                <Field type="image" alt="" component={Input} src="images/svg/Vector (22).svg" className="form-control" placeholder="Facebook"
               autoFocus/>
        </div>
        <div>
            <Field type="image" alt="" component={Input} src="images/svg/Vector (23).svg" className="form-control" placeholder="Google"/>
        </div>
       <div className="signPopUpBlock">
        <hr/>
        <div className="signPopUp">
            <p>Or</p>
        </div>
        <hr/>
       </div>
        <div className="form-group">
            <div className="form-group">
            <Field type="email" id="registerEmail" component={Input} validate={[required,MinLengthCreator5,MaxLengthCreator20]} name={"email"} className="form-control" placeholder="Enter  email"  required />
            </div>
            <div className="form-group">
            <Field type="password" id="registerPass"  component={Input} validate={[required,MinLengthCreator5,MaxLengthCreator20]} name={"password"} className="form-control" placeholder="Enter  password"  required />
            </div>
        </div>
        <p className="signGrey">By joining I agree to receive emails from DressItBox</p>
        <button id="signBtn">Register</button>
    </form>
    )
}
const ReduxRegisterForm=reduxForm({
    form:'register'
})(RegisterForm)
export default SignPage 

 