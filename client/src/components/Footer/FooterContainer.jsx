import React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'
import { subscribeNewUser } from '../../redux/reducers/AuthReducer'
import { compose } from 'redux'
import { SuccessErrorsData } from '../../hoc/SuccessErrorsData'



export default compose(
    SuccessErrorsData,
    connect(null, { subscribeNewUser })
)(Footer)
