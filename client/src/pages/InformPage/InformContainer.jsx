import React from 'react'
import { connect } from 'react-redux'
import InformPage from './InformPage';
import { getInform, updateInform, uploadUserImage, setInform, informActions } from '../../redux/reducers/InformReducer'
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { LoadingDataHOC } from '../../hoc/LoadingData'
import Preloader from '../../common/Preloader';

class InformPageContainer extends React.Component {

  changeLayout = (inCard) => {
    this.props.changeInformLayout(inCard)
  }
  componentDidMount() {
    this.props.getInform(this.props.userId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevProps.inform) !== JSON.stringify(this.props.inform)) {
      this.props.getInform(this.props.userId);
    }
  }
  handleInform = (data, setInform) => {
    setInform(data)
    this.changeLayout(true)
  }
  handleUpdateInform = (data) => {
    this.handleInform(data, this.props.updateInform)
  }
  handleSetInform = (data) => {
    this.handleInform(data, this.props.setInform)
  }
  onSaveFiles = (files) => {
    let data = new FormData()
    data.append('file', files[0])
    this.props.uploadUserImage(data)
    this.changeLayout(true)
  }
  render() {
    return (
      <>
        {this.props.isGetInform ?
          <InformPage {...this.props} inCard={this.props.isAddInform} updateInform={this.handleUpdateInform} changeLayout={this.changeLayout} setInform={this.handleSetInform} loading={this.props.loading}
            onSaveFiles={this.onSaveFiles}
          /> : <Preloader loading={this.props.loading} />}
      </>
    )
  }
}

let mapDispatchToProps = (state) => {
  return {
    inform: state.inform.inform,
    userId: state.auth.user.id,
    isAddInform: state.inform.isAddInform,
    isGetInform: state.inform.isGetInform
  }
}


export default compose(
  WithAuthRedirect,
  LoadingDataHOC,

  connect(mapDispatchToProps, { getInform, updateInform, setInform, uploadUserImage, ...informActions })
)(InformPageContainer)

