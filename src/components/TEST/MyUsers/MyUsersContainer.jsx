import  React from 'react'
import MyUsers from "./MyUsers";
import {connect} from "react-redux";
import {getMyUsersThunk} from '../../../redux/TestReducer'

class MyUsersContainer extends  React.Component{
    componentDidMount(){
        this.props.getMyUsersThunk();
    }
    render(){
        return(
            <MyUsers users={this.props.users}/>
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
