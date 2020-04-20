import React from 'react'
import Paginator from './Paginator'
import User from './User'

const Users = (props) => {
    return (
        <div>
           
            <div className="row">
                {
                    props.users.map(user =>
                        <User user={user} follow={props.follow} unfollow={props.unfollow} key={user.id} />
                    )
                }
            </div>
            <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        </div>
    )
}

export default Users