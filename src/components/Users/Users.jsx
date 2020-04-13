import React from 'react'
import StatusHook from './StatusHook'
import Status from './Status'
import Paginator from './Paginator'
import User from './User'

const Users = (props) => {
    return (
        <div>
           
            <div className="row">
                {
                    props.users.map(u =>
                        <User user={u} follow={props.follow} unfollow={props.unfollow} key={u.id}/>
                    )
                }
            </div>
            <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <StatusHook status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default Users