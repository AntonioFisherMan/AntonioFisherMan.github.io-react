import React from 'react'
import './ChangePass.css'
import Button1 from '../../SiteButtons/Button1/Button1'
const ChangePass = () => {
    return (
        <form className="changePassForm">
            <h5 className="changePassHeadline">Change Password</h5>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Your old password"
                    required autofocus />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Your new password"
                    required />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Repeat new password"
                    required />
            </div>
            <div className="changePassFormBtn">
                <Button1 text="Save" />
            </div>
        </form>
    )
}

export default ChangePass