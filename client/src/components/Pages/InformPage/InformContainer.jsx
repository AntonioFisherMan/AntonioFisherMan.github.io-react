import React from 'react'
import { connect } from 'react-redux'
import InformPage from './InformPage';
import { getInform, updateInform, setInform } from '../../../redux/reducers/InformReducer'
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { ServerMessageData } from '../../../hoc/ServerMessageData'

class InformPageContainer extends React.Component {
  componentDidMount() {
    debugger
    this.props.getInform(this.props.userId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.inform !== this.props.inform) {
      this.props.getInform(this.props.userId);
    }
  }
  render() {
    return (
      <>
        <InformPage {...this.props} isAddInform={this.props.isAddInform} updateInform={this.props.updateInform} setInform={this.props.setInform} success={this.props.success} errors={this.props.errors}
        />
      </>
    )
  }
}

let mapDispatchToProps = (state) => {
  debugger
  return {
    inform: state.inform.inform,
    userId: state.auth.user.id,
    isAddInform: state.inform.isAddInform
  }
}


export default compose(
  WithAuthRedirect,
  ServerMessageData,
  connect(mapDispatchToProps, { getInform, updateInform, setInform })
)(InformPageContainer)

