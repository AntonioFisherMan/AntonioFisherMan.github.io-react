import React from 'react'
import { connect } from 'react-redux'
import { mongoObjectId } from '../../utils/helperFunctions/objectId'
import Button3 from '../SiteButtons/Button3/Button3'
const Order = (props) => {
    debugger
    return (
        <div className="row ">
            <div className="container">
                <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                    <div><h1>Заказ номер {mongoObjectId()}</h1><p>статус: processing</p></div>
                    <h2>покупатель: {props.order.formData.name}</h2>
                    <h3>Адрес: {props.order.formData.city}</h3>
                    <h4>Телефон:{props.order.formData.phone}</h4>
                </div>
                <div>
                    <Button3 text="to catalog" to="/catalog"/>
                </div>
            </div>
        </div>

    )
}

let mapDispatchToProps = (state) => {
    return {
        order: state.orders.unloginOrder
    }
}
export default connect(mapDispatchToProps, {})(Order)