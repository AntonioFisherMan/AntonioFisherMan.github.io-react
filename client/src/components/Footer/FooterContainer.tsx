import React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'
import { subscribeNewUser } from '../../redux/reducers/AuthReducer'
import { compose } from 'redux'

type Props = {
    subscribeNewUser: (email: string) => void
}

class FooterContainer extends React.Component<Props> {

    render() {
        return (
            <Footer {...this.props} subscribeNewUser={this.props.subscribeNewUser} />
        )
    }
}

export default compose(connect(null, { subscribeNewUser }))(FooterContainer)
