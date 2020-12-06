import React from 'react'
import Routes from '../routes'
import Navbar from './navbar'

const Body = () => {
    return (
        <div className="container">
            <div className="row">
                <Navbar />
                <Routes />
            </div>
        </div>
    )
}

export default Body