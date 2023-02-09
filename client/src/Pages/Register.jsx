const Register = () => {
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
                                <li className="nav-item"><a className="nav-link" href="/appointment">Appointment</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <hr />

            <h1 className='text-uppercase text-center mt-5 letter-spacing'> Register User </h1>

            <div className="container mt-5">
                <form class="row g-3">
                    <div class="col-12 mb-3">
                        <label for="inputEmail4" class="form-label"> Name </label>
                        <input type="text" class="form-control" placeholder="Enter Full Name" aria-label="Name" required />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="inputEmail4" class="form-label"> Email </label>
                        <input type="email" class="form-control" id="inputEmail4" required />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="inputPassword4" class="form-label"> Password </label>
                        <input type="password" class="form-control" id="inputPassword4" required />
                    </div>
                    {/* <div class="col-12 mb-3">
                        <label for="inputAddress" class="form-label"> Address </label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="inputCity" class="form-label"> City </label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="inputState" class="form-label"> State </label>
                        <select id="inputState" class="form-select form-control">
                            <option selected>Choose...</option>
                            <option> Albania </option>
                            <option> Dooars </option>
                            <option> Rajasthan </option>
                            <option> Kolkata </option>
                            <option> J&K </option>
                        </select>
                    </div>
                    <div class="col-md-2 mb-3">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12 mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div> */}
                    <div class="col-md-6 mb-3">
                        <label for="inputCity" class="form-label"> Mobile </label>
                        <input type="number" class="form-control" id="inputCity" required />
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="formFile" class="form-label"> Profile Picture </label>
                        <input class="form-control" type="file" id="formFile" required />
                    </div>
                    <div class="col-12 mb-5">
                        <button type="submit" class="btn btn-success mt-5"> Sign Up </button>
                    </div>
                </form>
                <h4 className='text-center mt-3' style={{ marginBottom: '5em' }}> Already have an account? <button type="submit" className="btn btn-primary ml-2"> Login </button> </h4>
                {/* onClick={register} */}
            </div>

        </div>
    )
}

export default Register