const Confirmation = () => {
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
                                <li className="nav-item active"><a className="nav-link" href="/doctors">Doctors</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="section confirmation">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="confirmation-content text-center">
                                <i class="icofont-check-circled text-lg text-color-2"></i>
                                <h2 class="mt-3 mb-4">Thank you for your appointment</h2>
                                <p>We will contact you soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Confirmation