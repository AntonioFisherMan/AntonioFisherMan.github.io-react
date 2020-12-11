import React from 'react'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
        return {
                loading: state.app.loading
        }
}

export const LoadingDataHOC = Component => {
        class LoadingData extends React.PureComponent {
                render() {
                        return <Component {...this.props} />
                }
        }
        return connect(mapStateToProps)(LoadingData)
}







