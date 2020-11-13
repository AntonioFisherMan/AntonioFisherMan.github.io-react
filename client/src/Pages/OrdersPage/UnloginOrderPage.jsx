import React from 'react'
import { connect } from 'react-redux'
import { mongoObjectId } from '../../utils/helperFunctions/objectId'
import MyButton from '../../components/SiteButton/MyButton'
import Preloader from '../../components/common/Preloader'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../hoc/LoaingData'

const Order = (props) => {
    debugger
    return (
        <div>
            {props.order ? <div>
                <div className="row" >
                    <div className="container d-flex justify-content-center align-items-center ">
                        <div style={{ padding: "10px 10px", height: '500px', color: 'white', background: 'pink' }} className="col-12 d-flex justify-content-center align-items-center flex-column">
                            <div><h1>Заказ: {mongoObjectId()}</h1><p style={{ color: 'black' }}>статус: processing</p></div>
                            <h2>покупатель: {props.order.name}</h2>
                            <h3>Адрес: {props.order.city}</h3>
                            <h4>Телефон:{props.order.phone}</h4>
                            <p style={{ color: "#D2691E", fontSize: '16px', marginTop: '20px' }}>В ближайшее время с Вами свяжется наш менеджер</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" style={{ marginTop: '20px' }}>
                    <MyButton text="to catalog" href="/catalog" variant="outlined" />
                </div>
            </div> : <Preloader loading={props.loading} />}
        </div>




    )
}

let mapDispatchToProps = (state) => {
    return {
        order: state.orders.unloginOrder
    }
}

export default compose(
    LoadingDataHOC,
    connect(mapDispatchToProps, {})
)(Order)