import React from 'react'
import {NavLink} from 'react-router-dom' 


const Navbar = () => {
    return(
        <div>
            <NavLink to='/alcohols' style={{paddingRight: '10px'}}>Alcohols  </NavLink>
            <NavLink to='/alcohols/new' style={{paddingRight: '10px'}}> Add Alcohol</NavLink>
        </div>
    )

}

export default Navbar