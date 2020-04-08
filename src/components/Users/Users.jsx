import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/user.png'
import { Link } from 'react-router-dom'
import Status from './Status'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (var i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className="row d-flex justify-content-center">
                {
                    pages.map(i => {
                        return <span key={i} >
                            <button onClick={(e) => {props.onPageChanged(i); }} className={props.currentPage === i ? styles.selectedPage : null}>{i}</button>
                        </span>
                    }
                    )
                }
            </div>
            <div className="row">
                {
                    props.users.map(u =>
                        <div className="col-3 d-flex flex-column align-items-center" key={u.id}>
                            <h1>{u.name}</h1>
                            <Link to={'/catalog/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" /></Link>
                            <div>
                                {u.followed ? <button type="button" className="btn btn-primary" onClick={() => { props.unfollow(u.id) }}>Folloswed</button> : <button type="button" className="btn btn-success" onClick={() => { props.follow(u.id) }}>UnFollowed</button>}
                            </div>
                        </div>
                    )}
            </div>
            <Status status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default Users