import React, { useContext, useEffect, useState } from 'react'
import '../components/styles/log-form.css'
import { UserContext } from '../context/userContext'
import { useFetch } from '../hooks/useFetch'

const SignForm = () => {
    const apiUrl = '/auth/login'
    const [{ resultCode, isLoading }, doFetch] = useFetch(apiUrl)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [authData, setInitAuth] = useContext(UserContext)
    console.log(authData)
    useEffect(() => {
        if (resultCode === 0) {
            setInitAuth(true)
            console.log('init')
        }

    }, [setInitAuth, resultCode])

    const onSubmit = (e) => {
        e.preventDefault()
        doFetch({
            method: 'post',
            data: {
                email,
                password,
                rememberMe
            }
        })
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form
                                className="form-signin"
                                onSubmit={onSubmit} >
                                <div className="form-label-group">
                                    <input
                                        type="email"
                                        id="inputEmail"
                                        className="form-control"
                                        placeholder="Email address"
                                        required autoFocus
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input
                                        type="password"
                                        id="inputPassword"
                                        className="form-control"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                        onChange={() => setRememberMe(value => !value)} />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                </div>
                                <button
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    type="submit"
                                    disabled={isLoading}>
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignForm