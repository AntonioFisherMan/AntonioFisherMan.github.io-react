import React, { useState, useEffect } from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import { reduxForm } from 'redux-form'
import InformCard from './InformCard'
import CheckoutForm from '../../components/Forms/Checkout/CheckoutForm'




const InformPage = (props) => {

    useEffect(() => {
        props.getInform()
    })
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



export const ReduxUserInform = reduxForm({
    form: 'userInform'
})(CheckoutForm)


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