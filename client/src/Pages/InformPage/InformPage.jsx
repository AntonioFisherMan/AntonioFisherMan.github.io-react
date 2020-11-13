import React, { useState } from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import { Field, reduxForm } from 'redux-form'
import { MyInput } from '../../components/common/FormsControls/MyInput'
import MyButton from '../../components/SiteButton/MyButton'
import UploadFile from '../../components/common/UploadFile/UploadFile'
import { H6 } from '../../components/Typography/H6'
import { MySelect } from '../../components/common/FormsControls/MySelect'
import { MyCheckBox } from '../../components/common/FormsControls/MyCheckBox'
import InformCard from './InformCard'
import { required } from '../../utils/Validators/validators'




const InformPage = (props) => {
    const [isCard, setIsForm] = useState(props.isAddInform)
    const changeLayout = () => setIsForm(!isCard)
    const updateInform = (formData) => {
        handleInform(formData, props.updateInform, props.inform)
        changeLayout()
    }
    const setInform = (formData) => {
        handleInform(formData, props.setInform, props.inform)
        changeLayout()
    }
    return (
        <div>
            <HeaderBottom />

            <section className="checkoutBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="My information" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-12 col-md-8">
                            {
                                !isCard ? <ReduxUserInform onSubmit={props.inform ? updateInform : setInform} isAddInform={props.isAddInform} initialValues={props.inform} /> :
                                    <InformCard changeLayout={changeLayout} inform={props.inform} />
                            }
                        </div>

                    </div>
                </div>
            </section>
        </div>


    )
}


const UserInformForm = (props) => {
    return (
        <form className="checkoutForm" onSubmit={props.handleSubmit}>
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


            <UploadFile name={"userImage"} />
            <div className="returnLink">
                <MyButton href="/catalog" text="Return to catalogue" variant="text" />
            </div>
            {props.isAddInform ? <div className="ml-auto">
                <button ><MyButton text="Обновить" href="" /></button>
            </div> : <div className="ml-auto">
                    <button ><MyButton text="Сохранить" href="" /></button>
                </div>}
        </form>

    )
}

export const ReduxUserInform = reduxForm({
    form: 'userInform'
})(UserInformForm)


export const ReduxFileForm = reduxForm({
    form: 'fileForm'
})(UserInformForm)

const handleInform = (data, setInform, inform, changeLayout) => {
    let formData = new FormData()
    // if (inform.userImage !== null) {
    //     formData.append("file", data.userImage[0])
    // }
    // formData.append("file", inform.userImage)

    for (var key in data) {
        formData.append(key, data[key])
    }
    setInform(formData)

}





export default InformPage