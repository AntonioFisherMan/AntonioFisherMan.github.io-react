import React from 'react'
import { connect } from 'react-redux'
import InformPage from './InformPage';
import { getInform, updateInform, setInform } from '../../redux/reducers/InformReducer'
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { ServerMessageData } from '../../hoc/ServerMessageData'
import { LoadingDataHOC } from '../../hoc/LoaingData'
import Preloader from '../../components/common/Preloader';
import CircularProgress from '@material-ui/core/CircularProgress';
class InformPageContainer extends React.Component {

  componentDidMount() {
    this.props.getInform(this.props.userId);
  }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.inform) !== JSON.stringify(this.props.inform)) {
      this.props.getInform(this.props.userId);
    }
  }

  render() {

    return (
      <>
        {this.props.loading ? <Preloader loading={this.props.loading} /> :
          <InformPage {...this.props} isAddInform={this.props.isAddInform} updateInform={this.props.updateInform} setInform={this.props.setInform}
          />}
      </>
    )
  }
}

let mapDispatchToProps = (state) => {
  return {
    inform: state.inform.inform,
    userId: state.auth.user.id,
    isAddInform: state.inform.isAddInform,
  }
}


export default compose(
  WithAuthRedirect,
  LoadingDataHOC,
  ServerMessageData,
  connect(mapDispatchToProps, { getInform, updateInform, setInform })
)(InformPageContainer)

