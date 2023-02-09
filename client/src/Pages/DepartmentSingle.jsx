const DepartmentSingle = () => {
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
                                <li className="nav-item active"><a className="nav-link" href="/department">Department</a></li>
                                <li className="nav-item"><a className="nav-link" href="/doctors">Doctors</a></li>
                                <li className="nav-item"><a className="nav-link" href="/appointment">Appointment</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="page-title bg-1">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block text-center">
                                <span class="text-white">Department Details</span>
                                <h1 class="text-capitalize mb-5 text-lg">Single Department</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section department-single">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="department-img">
                                <img src="./Assets/images/service/bg-1.jpg" alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-8">
                            <div class="department-content mt-5">
                                <h3 class="text-md">Medecine and Health</h3>
                                <div class="divider my-4"></div>
                                <p class="lead">Age forming covered you entered the examine. Blessing scarcely confined her
                                    contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem
                                    laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam
                                    distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum
                                    repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas.
                                    Tempore.</p>


                                <h3 class="mt-5 mb-4">Services features</h3>
                                <div class="divider my-4"></div>
                                <ul class="list-unstyled department-service">
                                    <li><i class="icofont-check mr-2"></i>International Drug Database</li>
                                    <li><i class="icofont-check mr-2"></i>Stretchers and Stretcher Accessories</li>
                                    <li><i class="icofont-check mr-2"></i>Cushions and Mattresses</li>
                                    <li><i class="icofont-check mr-2"></i>Cholesterol and lipid tests</li>
                                    <li><i class="icofont-check mr-2"></i>Critical Care Medicine Specialists</li>
                                    <li><i class="icofont-check mr-2"></i>Emergency Assistance</li>
                                </ul>

                                <a href="/appointment" class="btn btn-main-2 btn-round-full">Make an Appoinment<i class="icofont-simple-right ml-2  "></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="sidebar-widget schedule-widget mt-5">
                                <h5 class="mb-4">Time Schedule</h5>

                                <ul class="list-unstyled">
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Monday - Friday</span>
                                        <span>9:00 - 17:00</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Saturday</span>
                                        <span>9:00 - 16:00</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>

                                <div class="sidebar-contatct-info mt-4">
                                    <p class="mb-0">Need Urgent Help?</p>
                                    <h3>+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DepartmentSingle