import React from 'react'
import './ChangePass.css'

import { changeUserPass } from '../../../redux/reducers/AuthReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ChangePassPage from './ChangePassForm'
import { LoadingDataHOC } from '../../../hoc/LoaingData'
import { reset } from 'redux-form';
class ChangePass extends React.Component {
    onSubmit = (formData) => {
        this.props.changeUserPass(formData.oldPass, formData.newPass, formData.verifyPass)

    }
    render() {
        return (
            <ChangePassPage onSubmit={this.onSubmit} />
        )
    }
}





export default compose(
    LoadingDataHOC,
    connect(null, { changeUserPass, reset })
)(ChangePass)
