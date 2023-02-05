import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { handleLogoutName, loginUser, reset_redirectTo } from '../Redux/AuthSlice'

const Login = () => {

    const navigate = useNavigate()
    const { redirectToLogin, isLoggedInName } = useSelector(state => state.user)

    const initialValue = {
        email: "",
        password: ""
    }

    const register = () => {
        dispatch(handleLogoutName())
        navigate("/register")
    }

    useEffect(() => {
        dispatch(reset_redirectTo(null))
    }, [redirectToLogin])

    const { redirectTo } = useSelector((state) => state.user)
    const [user, setUser] = useState(initialValue)
    const [error, setError] = useState({})
    const dispatch = useDispatch()

    const validation = () => {
        let error = {}
        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }
        return error
    }

    const RedirectUser = () => {
        let token = localStorage.getItem("token")
        let isInLoginPage = window.location.pathname.toLowerCase() === "/login"

        if (token !== null && token !== undefined && token !== "") {
            // window.location.pathname = getPathname
            isInLoginPage && navigate("/")
        }
    }

    useEffect(() => {
        RedirectUser()
    }, [redirectTo])

    let name, value
    const postUserData = e => {
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }

        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "Password is Required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }
    }

    const SubmitInfo = async e => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())

        let data = {
            "email": user.email,
            "password": user.password
        }
        dispatch(loginUser(data))
        navigate('/blog')
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navigation" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="./Assets/images/logo.png" alt="" className="img-fluid" />
                        </a>

                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
                            aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icofont-navigation-menu"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarmain">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="/service">Services</a></li>
                                <li className="nav-item"><a className="nav-link" href="/department">Department</a></li>
                                <li className="nav-item"><a className="nav-link" href="/doctors">Doctors</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <hr />

            <h1 className='text-uppercase text-center mt-5 letter-spacing'> Login </h1>

            <div className="container mt-5" style={{ height: '500px' }}>
                <form class="row g-3">
                    <div class="col-md-6 mb-3">
                        <label for="inputEmail4" class="form-label"> Email </label>
                        <input type="email" class="form-control" id="inputEmail4" name="email" value={user.email} onChange={e => postUserData(e)} />
                        <span style={{ color: "red" }}> {error.email} </span>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="inputPassword4" class="form-label"> Password </label>
                        <input type="password" class="form-control" id="inputPassword4" name="password" value={user.password} onChange={e => postUserData(e)} />
                        <span style={{ color: "red" }}> {error.password} </span>
                    </div>
                    <div class="col-12 mb-5">
                        <button type="submit" class="btn btn-primary mt-5 mb-5" onClick={SubmitInfo}> Sign In </button>
                    </div>
                </form>
                <h4 className='text-center mt-5'> Don't have an account? <button type="submit" onClick={register} className="btn btn-success ml-2"> Register </button> </h4>
            </div>

        </div>
    )
}

export default Login