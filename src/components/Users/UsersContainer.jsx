import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import * as axios from 'axios'
import { FollowActionCreator, UnFollowActionCreator, SetUsersActionCreator, SetPageActionCreator, SetTotalCountActionCreator, SetFetchActionCreator } from '../../redux/UsersReducer'
import Preloader from '../common/Preloader'
import {usersAPI} from '../../api/api'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFeching(true);
        this.id = this.props.match.params.id;
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            debugger;
            this.props.setIsFeching(false);
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount);

        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setIsFeching(true);
        this.props.setPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFeching(false);
                this.props.setUsers(data.items)
            })
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

            />

        </>
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (user_id) => {
            dispatch(FollowActionCreator(user_id))
        },
        unfollow: (user_id) => {
            dispatch(UnFollowActionCreator(user_id))
        },
        setUsers: (users) => {
            dispatch(SetUsersActionCreator(users))
        },
        setPage: (page_id) => {
            dispatch(SetPageActionCreator(page_id))
        },
        setTotalCount: (totalCount) => {
            dispatch(SetTotalCountActionCreator(totalCount))
        },
        setIsFeching: (isFetching) => {
            dispatch(SetFetchActionCreator(isFetching))
        }
    }
}
let usersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default usersContainer