import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="col-md-2">
            <nav className="navbar bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                            &nbsp;
                            My profile
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/messages">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                            &nbsp;
                            Messages
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/users">
                            <i className="fa fa-address-card" aria-hidden="true"></i>
                            &nbsp;
                            Users
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </nav>
    )
}

export default Navbar
