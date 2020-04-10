import React from 'react'
import {Link} from 'react-router-dom'
import userPhoto from '../../assets/user.png'
const User = ({user,follow,unfollow}) => {
    return (
        <div className="col-3 d-flex flex-column align-items-center">
            <h1>{user.name}</h1>
            <Link to={'/catalog/' + user.id}><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" /></Link>
            <div>
                {user.followed ? <button type="button" className="btn btn-primary" onClick={() => {unfollow(user.id) }}>Followed</button> : <button type="button" className="btn btn-success" onClick={() => {follow(user.id) }}>UnFollowed</button>}
            </div>
        </div>
        )
}
export default User