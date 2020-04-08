import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { setPage, getUsersThunkCreator, follow, unfollow, getStatusThunkCreator, updateStatus } from '../../redux/UsersReducer'
import Preloader from '../common/Preloader'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'
import { getPageSize,getStatus, getTotalUsersCount, getCurrentPage, getIsFetching, getAuth,getUsers} from '../../redux/UsersSelectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        this.props.getStatusThunkCreator(this.props.auth.id)
    }
    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }
    render() {

        return <>
            <div className="row justify-content-center">
                {this.props.isFetching ? <Preloader /> : null}
            </div>
            <div>
                {this.id}
            </div>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                auth={this.props.auth}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />

        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.users.users,
//         pageSize: state.users.pageSize,
//         totalUsersCount: state.users.totalUsersCount,
//         currentPage: state.users.currentPage,
//         isFetching: state.users.isFetching,
//         auth:state.auth,
//         status:state.users.status
//     }
// }
let mapStateToProps = (state) => {
    debugger
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        auth: getAuth(state),
        status: getStatus(state)
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        setPage, follow, unfollow, getStatusThunkCreator, updateStatus,
        getUsersThunkCreator
    })
)(UsersContainer)

