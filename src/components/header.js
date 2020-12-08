import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { useFetch } from '../hooks/useFetch'

const Header = () => {
    const apiUrl = '/auth/login'
    const [{ isLogedOn, login, isLoading }, setStartAuth, setClearAuthData] = useContext(UserContext)
    const [, doFetch] = useFetch(apiUrl)
    const [initLogaut, setInitLogaut] = useState(false)

    useEffect(() => {
        if (initLogaut) {
            doFetch({ method: 'delete' })
            setInitLogaut(false)
            setClearAuthData(true)
        }
    }, [initLogaut, doFetch, setClearAuthData, setStartAuth])

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink
                    exact
                    className="navbar-brand"
                    to="/">
                    <i className="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
                    &nbsp;
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
                        {!isLogedOn && !isLoading && (
                            <Fragment>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/login">
                                        Sign in
                            </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/register">
                                        Sign up
                                </NavLink>
                                </li>
                            </Fragment>
                        )}

                        {isLogedOn && !isLoading && (
                            <Fragment>
                                <li className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {login}
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/profile">Account settings</Link>
                                        <div className="dropdown-divider"></div>
                                        <div
                                            className="dropdown-item"
                                            onClick={() => setInitLogaut(true)}>Log out</div>
                                    </div>
                                </li>
                            </Fragment>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header