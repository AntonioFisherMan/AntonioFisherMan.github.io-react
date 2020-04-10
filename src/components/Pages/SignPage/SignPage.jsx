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
        props.login(formData.email,formData.password)
    }
    return(
        <div>
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
                <ReduxLoginForm isAuth={props.isAuth}onSubmit={onSubmit}/>
                    <div className="signBlock__return-btn">
                        <div className="d-flex form__returnText">
                            <i className="carousel-control-prev-icon fas fa-chevron-left"  aria-hidden="true"></i>
                            <Link to="/card">Return to cart</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 col-md-5">
                    <form className="sign__form ">
                        <h5 className="sign__formHeadline">Not a member? Sign Up</h5>
                        <div className="form-group">
                           
                                <input type="image" alt="" src="images/svg/Vector (22).svg" className="form-control " value="adas"placeholder="Facebook"
                               autoFocus/>
                           
                            
                        </div>
                        <div>
                            <input type="image" alt="" src="images/svg/Vector (23).svg" className="form-control " value="adsa"placeholder="Google"/>
                        </div>
                       <div className="sign__formPopUpBlock">
                        <hr/>
                        <div className="sign__formPopUp">
                            <p>Or</p>
                        </div>
                        <hr/>
                       </div>
                        
                        <div className="form-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email"
                                required autoFocus/>
                        </div>
                        <p className="sign__formGrey">By joining I agree to receive emails from DressItBox</p>
                        <input type="submit"  id="sign__formBtn" value="register"/>
                    </form>
                    <div className="signBlock__return-btn-active">
                      <Button3 link="/card" text="Return to cart"/>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
        </div>
     
    )
}


const MaxLengthCreator20=MaxLength(20)
const MinLengthCreator5=MinLength(5)
const LoginForm=(props)=>{
    if(props.isAuth) {
        return <Redirect to="/"/>
    }
    return(
        
        <form className="sign__form" onSubmit={props.handleSubmit}> 
        <h5 className="sign__formHeadline">log-in</h5>
        <div className="form-group">
                <Field type="email" id="inputEmail" name={"email"} className="form-control" placeholder="Email adress"
                required  component={Input} validate={[required,MinLengthCreator5,MaxLengthCreator20]}/>
        </div>
        <div>
    
                <Field type="password" id="inputPassword" name={"password"} className="form-control" placeholder="Password"
                required  component={Input} validate={[required,MinLengthCreator5,MaxLengthCreator20]}/>
        </div>
      
            <div className="custom-control custom-checkbox d-flex ">
                <label className="d-flex align-items-center"><Field name={"remember"} type="checkbox" className="checkbox" component={"input"}/> <span className="fake fake__sign" ></span><span className="check__text span">Remember Me<span>(Privacy
                    Policy)</span></span></label>
                <Link className="forgot__pass" to="/changepass">forgot password</Link>
                <button >Login</button>
            </div>
            {props.error?<div className="form-group form-error">
                <p>{props.error}</p>
            </div>:null}
            
    </form>
    )
}

const ReduxLoginForm=reduxForm({
    form:'login'
})(LoginForm)

export default SignPage 

