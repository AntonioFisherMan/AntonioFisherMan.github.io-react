import  React from 'react'
import MyUsers from "./MyUsers";
import {connect} from "react-redux";
import {getMyUsersThunk} from '../../../redux/TestReducer'
import MyErrorBoundary from '../../../errors/MyErrorBoundary';

class MyUsersContainer extends  React.Component{
    componentDidMount(){
        this.props.getMyUsersThunk();
    }
    render(){
        return(
    <MyErrorBoundary>
 <MyUsers users={this.props.users}/>
    </MyErrorBoundary>
        )
    }
}


let mapStateToProps=(state)=>{
    debugger
    return {
        users:state.test.myUsers
    }
}

export default  connect(mapStateToProps,{getMyUsersThunk})(MyUsersContainer)
