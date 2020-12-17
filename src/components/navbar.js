import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const Navbar = () => {
    const [{ isLogedOn, isLoading, id }] = useContext(UserContext)

    return (
        <nav className="col-lg-2">
            <nav className="navbar bg-light">
                <ul className="navbar-nav">
                    {isLogedOn && !isLoading && (
                        <Fragment>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to={`/profile/${id}`}>
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
                        </Fragment>
                    )}
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
