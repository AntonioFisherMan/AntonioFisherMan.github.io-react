import React from 'react'
import { NavLink } from 'react-router-dom'
import { colors } from '../../common/all/colors'
import './NavElements.css'

export const NavAccount = ({ isAuth, user, logout }) => {
        return (
                <div className="navBlock">
                        { isAuth && user
                                ? <NavLink className="d-flex flex-column align-items-center" activeStyle={{ color: "#E77E83" }} to="/orders">{user.name}<p onClick={logout} >Logout</p></NavLink>
                                : <NavLink activeStyle={{ color: colors.PINK }} to="/sign"><img src="/images/svg/Vector (6).svg" className="ml-auto" alt="Account" /></NavLink>}
                </div>

        )
}
export const NavCart = ({ totalSizeCard }) => {
        return (
                <div className="navBlock">
                        <img src="/images/svg/Vector (4).svg" alt="Cart" />
                        <NavLink activeStyle={{ color: colors.PINK }} className="textColor" to="/card">{totalSizeCard === 0 ? <p >Cart</p> : <div ><i style={{ fontSize: '14px' }} className="fas fa-cart-arrow-down "></i>-{totalSizeCard}</div>}</NavLink>
                </div>

        )
}
export const NavLogo = () => <img src="/images/svg/logo.svg" alt="Logo" />
export const NavSearch = () => {
        return (
                <div className="navBlock">
                        <img src="/images/svg/Vector (5).svg" alt="" />
                        <input placeholder="Search" style={{ border: 'none', width: '60px' }} />
                </div>


        )
}
