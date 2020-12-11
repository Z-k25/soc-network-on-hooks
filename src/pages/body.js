import React from 'react'
import Routes from '../routes'
import Navbar from '../components/navbar'

const Body = () => {
    return (
        <div className="container">
            <div className="row my-2">
                <Navbar />
                <Routes />
            </div>
        </div>
    )
}

export default Body