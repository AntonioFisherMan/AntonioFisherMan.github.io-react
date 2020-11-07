import React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'
import { subscribeNewUser } from '../../redux/reducers/AuthReducer'
import { compose } from 'redux'
import { ServerMessageData } from '../../hoc/ServerMessageData'



export default compose(
    ServerMessageData,
    connect(null, { subscribeNewUser })
)(Footer)
