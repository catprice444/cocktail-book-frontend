import React from 'react'
import {NavLink} from 'react-router-dom' 


const Navbar = () => {
    return(
        <div>
            <NavLink to='/cocktails' style={{paddingRight: '10px'}}> Cocktails</NavLink>
            <NavLink to='/alcohols' style={{paddingRight: '10px'}}>Alcohols  </NavLink>
            <NavLink to='/alcohols/new' style={{paddingRight: '10px'}}> Add Alcohol</NavLink>
            <NavLink to='/' style={{paddingRight: '10px'}}> Home </NavLink>
        </div>
    )

}

export default Navbar