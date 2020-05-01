import React from 'react'
import {connect} from 'react-redux'
import InformPage from './InformPage';
import {getInform} from '../../../redux/InformReducer'


class InformPageContainer extends React.Component{
  componentDidMount(){
      debugger
      this.props.getInform(this.props.userId);
  }
  
  render(){
      return(
        <>
        <InformPage {...this.props}
        />
        </>
      )
  }
}

let mapDispatchToProps=(state)=>{
    return{
        inform:state.inform.inform,
        userId:state.auth.userId
    }
}
export default connect(mapDispatchToProps,{getInform})(InformPageContainer)


