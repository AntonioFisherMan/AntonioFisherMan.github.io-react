import React  from 'react'


import NavBar from './NavBar/NavBar'

const Nav=(props)=>{
    return(
        <div>
      <div className="container">
        <div className="row">
            <NavBar props={props} logout={props.logoutThunk}/>
        </div>
    </div>
{props.children}
    </div>
    )
}
export default Nav