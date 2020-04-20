import React from 'react'
import Profile from './Profile'
import { getAuth } from '../../redux/UsersSelectors'
import { savePhoto, saveProfile, getProfileThunk,getStatusThunkCreator,updateStatus} from '../../redux/ProfileReducer'

import { connect } from 'react-redux'
import Preloader from '../common/Preloader'

class ProfileContainer extends React.Component {
 
  refreshProfile() {
    let userId = this.props.match.params.id;
    if (!userId) {
      userId = this.props.auth.id
    }
    this.props.getProfileThunk(userId);
    this.props.getStatusThunkCreator(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    debugger
    if (this.props.match.params.id != prevProps.match.params.id) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <>
      {!this.props.profile?<Preloader/>:
      <Profile
        profile={this.props.profile}
        saveProfile={this.props.saveProfile}
        isOwner={!this.props.match.params.id}
        savePhoto={this.props.savePhoto}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        globalError={this.props.globalError}
      />
    }
      </>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    auth: getAuth(state),
    status:state.profile.status,
    globalError:state.profile.globalError,
    
  }
}


export default  connect(mapStateToProps,{ savePhoto, saveProfile, getProfileThunk,getStatusThunkCreator,updateStatus })(ProfileContainer);