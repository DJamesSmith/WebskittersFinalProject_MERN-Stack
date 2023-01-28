const Appointment = () => {
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

            <section className="page-title bg-1">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">Book your Seat</span>
                                <h1 className="text-capitalize mb-5 text-lg">Appointment</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="appoinment section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mt-3">
                                <div className="feature-icon mb-3">
                                    <i className="icofont-support text-lg"></i>
                                </div>
                                <span className="h3">Call for an Emergency Service!</span>
                                <h2 className="text-color mt-3">+84 789 1256 </h2>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                                <h2 className="mb-2 title-color">Book an appointment</h2>
                                <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                                <form id="#" className="appoinment-form" method="post" action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1" required>
                                                    <option>Choose Department</option>
                                                    <option>Software Design</option>
                                                    <option>Development cycle</option>
                                                    <option>Software Development</option>
                                                    <option>Maintenance</option>
                                                    <option>Process Query</option>
                                                    <option>Cost and Duration</option>
                                                    <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect2" required>
                                                    <option>Select Doctors</option>
                                                    <option>Software Design</option>
                                                    <option>Development cycle</option>
                                                    <option>Software Development</option>
                                                    <option>Maintenance</option>
                                                    <option>Process Query</option>
                                                    <option>Cost and Duration</option>
                                                    <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="time" id="time" type="text" className="form-control" placeholder="Time" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group-2 mb-4">
                                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message" required></textarea>
                                    </div>

                                    <a className="btn btn-main btn-round-full" href="/confirmation">Make Appoinment<i className="icofont-simple-right ml-2"></i></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Appointment