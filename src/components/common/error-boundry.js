import React from 'react'
import '../styles/user-cart.css'
import errorIndicator from '../../images/error-indicator.png'
import errorBackground from '../../images/error-background.png'


export const ErrorBoundry = () => {

    return (
        <div className="container">
            <div className="row userMain justify-content-center">
                <div className="col-md-3 col-sm-4">
                    <div className="userBlock">
                        <div className="backgrounImg">
                            <img src={errorBackground} alt="" />
                        </div>
                        <div className="userImg">
                            <div >
                                <img src={errorIndicator} alt="" />
                            </div>
                        </div>
                        <div className="userDescription">
                            <div >
                                <h5>Error!</h5>
                            </div>
                            <div className="followrs">
                               {/* <span>Something went wrong ...</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}