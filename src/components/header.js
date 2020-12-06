import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <NavLink
                        className="navbar-brand"
                        to="/">
                        <i className="fa fa-handshake-o fa-2x" aria-hidden="true"></i> &nbsp;
                        <span>soc-neT</span>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/login">
                                    Sign in
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/register">Sign up
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    username
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Account settings</a>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" href="#">Log out</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
        </header>
    )
}

export default Header