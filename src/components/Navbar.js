import React from 'react'
import {Link} from 'react-router-dom' 


const Navbar = () => {
    return(
        <div>
            <Link to='/cocktails' style={{paddingRight: '10px'}}> Cocktails</Link>
            <Link to='/alcohols' style={{paddingRight: '10px'}}>Alcohols  </Link>
            <Link to='/alcohols/new' style={{paddingRight: '10px'}}> Add Alcohol</Link>
        </div>
    )

}

export default Navbar