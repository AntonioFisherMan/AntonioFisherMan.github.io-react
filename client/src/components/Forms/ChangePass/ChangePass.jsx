import React from 'react'
import { changeUserPass } from '../../../redux/reducers/AuthReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../../hoc/LoadingData'
import { reset } from 'redux-form';
import { ReduxChangePassword } from '../../../redux/reduxForms/ReduxChangePass'


class ChangePass extends React.Component {
    onSubmit = (formData) => {
        this.props.changeUserPass(formData.oldPass, formData.newPass, formData.verifyPass)

    }
    render() {
        return (
            <ReduxChangePassword onSubmit={this.onSubmit} />
        )
    }
}





export default compose(LoadingDataHOC, connect(null, { changeUserPass, reset }))(ChangePass)
