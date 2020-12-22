import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="col-lg-2">
            <nav className="navbar bg-light">
                <ul className="navbar-nav">
                    <Fragment>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/profile/">
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    &nbsp;
                                    Profile
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
                    </Fragment>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to={"/users?count=12&page=1"}>
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
