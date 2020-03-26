import './NavBar.css';
import React  from 'react'
import {Link} from 'react-router-dom'
import NavLogo from '../NavLogo/NavLogo'
const NavBar=(props) =>{
    return(
        <nav className="navbar navbar-expand-lg ">
            <NavLogo/>
                <button className=" col-3 col-sm-1 navbar-toggler" id="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="navbar-toggler-icon fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav col-lg-6">
                        <li className="">
                            <Link to="/">Rent Outfits<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="">
                            <Link to="/catalog">Our Products</Link>
                        </li>
                        <li className="">
                            <Link to="/details">Details</Link>
                        </li>
                        <li className="">
                            <Link to="#Benefits">Benefits</Link>
                        </li>
                    </ul>

                </div>

                <div className="nav__cart col-2 col-sm-2 col-lg-1">
                    <img src="images/svg/Vector (4).svg" alt="Cart"/>
                    <Link to="/card">Cart</Link>
                </div>
                <div className="nav__search col-2 col-sm-2 col-lg-1">
                    <img src="images/svg/Vector (5).svg" alt="Search"/>
                    <p>Search</p>
                </div>
                <div className=" nav__account col-2 col-sm-2 col-lg-1 d-flex align-items flex-column">
                    <Link to="/sign"><img src="images/svg/Vector (6).svg" className="ml-auto" alt="Account"/></Link>
                </div>

            </nav>
    )

}
export default NavBar