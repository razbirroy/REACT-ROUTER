import React from 'react'
import { NavLink} from 'react-router-dom'

const style = {
    color: 'black',
    fontWeight: 'bold'
}
const Nav = () => {
   
    return (
       <nav>
            <NavLink activeStyle={style} exact to="/"> Home </NavLink>
            <NavLink activeStyle={style} to="/contact"> Contact </NavLink>
            <NavLink activeStyle={style} to="/About"> About </NavLink>
           
      </nav>
    )
}

export default Nav