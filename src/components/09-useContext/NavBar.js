import React from "react";
import { Link, NavLink } from "react-router-dom";


export const NavBar = () => {
    return(

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <NavLink to="/" className="navbar-brand">useContext</NavLink>
  
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link">HomeScreen</Link>
                    <Link to="/about" className="nav-item nav-link">AboutScreen</Link>
                    <Link to="/login" className="nav-item nav-link">LoginScreen</Link>
                </div>
            </div>
</nav>

    )
}