import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Vortex } from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux'

import { fetchBlog } from '../Redux/BlogSlice'

const Blog = () => {

    const dispatch = useDispatch()
    const { blogData } = useSelector(state => state?.blogSlice)
    // console.log('blogData: ', blogData)

    useEffect(() => {
        dispatch(fetchBlog())
    }, [dispatch])

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
                                <li className="nav-item"><a className="nav-link" href="/"> Home </a></li>
                                <li className="nav-item"><a className="nav-link" href="/about"> About </a></li>
                                <li className="nav-item"><a className="nav-link" href="/service"> Services </a></li>
                                <li className="nav-item"><a className="nav-link" href="/department"> Department </a></li>
                                <li className="nav-item"><a className="nav-link" href="/doctors"> Doctors </a></li>
                                <li className="nav-item"><a className="nav-link" href="/appointment"> Appointment </a></li>
                                <li className="nav-item active"><a className="nav-link" href="/blog"> Blog </a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact"> Contact </a></li>
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
                                <span className="text-white"> Our blog </span>
                                <h1 className="text-capitalize mb-5 text-lg"> Blog articles </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section blog-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">

                                <div className="col-lg-12 col-md-12 mb-5">
                                    <div className="blog-item">

                                        {
                                            blogData !== null ? (
                                                <>
                                                    {
                                                        blogData?.displayBlogs?.map((blog, key) => {
                                                            const { _id, createdAt, blogName, blogQuote } = blog
                                                            return (
                                                                <>

                                                                    <div className="blog-thumb">
                                                                        <img src="./Assets/images/blog/blog-1.jpg" alt="" className="img-fluid" />
                                                                    </div>

                                                                    <div className="blog-item-content">
                                                                        <div className="blog-item-meta mb-3 mt-4">
                                                                            <span className="text-muted text-capitalize mr-3"><i className="icofont-comment mr-2"></i> 5 Comments </span>
                                                                            <span className="text-black text-capitalize mr-3" key={_id}><i className="icofont-calendar mr-1"></i> {createdAt} </span>
                                                                        </div>

                                                                        <h2 className="mt-3 mb-3"><Link to={`/blogSingle/${_id}`}> {blogName} </Link></h2>
                                                                        <p className="mb-4"> {blogQuote} </p>
                                                                        <p className="mb-4"> {_id} </p>

                                                                        <Link to={`/blogSingle/${_id}`} className="btn btn-main btn-icon btn-round-full mb-5"> Read More <i className="icofont-simple-right ml-2  "></i></Link>
                                                                    </div>

                                                                </>
                                                            )
                                                        })
                                                    }
                                                </>
                                            ) : (
                                                <>
                                                    <Vortex visible={true} height="50" width="50" ariaLabel="vortex-loading" wrapperStyle={{}} wrapperclassName="vortex-wrapper" colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']} />
                                                </>
                                            )
                                        }

                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <nav className="pagination py-2 d-inline-block">
                                        <div className="nav-links">
                                            <span aria-current="page" className="page-numbers current">1</span>
                                            <a className="page-numbers" href="#!">2</a>
                                            <a className="page-numbers" href="#!">3</a>
                                            <a className="page-numbers" href="#!"><i className="icofont-thin-double-right"></i></a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                                <div className="sidebar-widget search  mb-3 ">
                                    <h5>Search Here</h5>
                                    <form action="#" className="search-form">
                                        <input type="text" className="form-control" placeholder="search" />
                                        <i className="ti-search"></i>
                                    </form>
                                </div>


                                <div className="sidebar-widget latest-post mb-3">
                                    <h5>Popular Posts</h5>

                                    {
                                        blogData !== null ? (
                                            <>
                                                {
                                                    blogData?.displayBlogs?.map((blog, key) => {
                                                        const { _id, createdAt, blogName, blogQuote } = blog
                                                        return (
                                                            <>

                                                                <div className="py-2">
                                                                    <span className="text-sm text-muted"> {createdAt} </span>
                                                                    <h6 className="my-2"><a href="#"> {blogName} </a></h6>
                                                                </div>

                                                            </>
                                                        )
                                                    })
                                                }
                                            </>
                                        ) : (
                                            <>
                                                <Vortex visible={true} height="50" width="50" ariaLabel="vortex-loading" wrapperStyle={{}} wrapperclassName="vortex-wrapper" colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']} />
                                            </>
                                        )
                                    }

                                </div>

                                <div className="sidebar-widget category mb-3">
                                    <h5 className="mb-4">Categories</h5>

                                    <ul className="list-unstyled">
                                        <li className="align-items-center">
                                            <a href="#">Medicine</a>
                                            <span>(14)</span>
                                        </li>
                                        <li className="align-items-center">
                                            <a href="#">Equipments</a>
                                            <span>(2)</span>
                                        </li>
                                        <li className="align-items-center">
                                            <a href="#">Heart</a>
                                            <span>(10)</span>
                                        </li>
                                        <li className="align-items-center">
                                            <a href="#">Free counselling</a>
                                            <span>(5)</span>
                                        </li>
                                        <li className="align-items-center">
                                            <a href="#">Lab test</a>
                                            <span>(5)</span>
                                        </li>
                                    </ul>
                                </div>


                                <div className="sidebar-widget tags mb-3">
                                    <h5 className="mb-4">Tags</h5>

                                    <a href="#">Doctors</a>
                                    <a href="#">agency</a>
                                    <a href="#">company</a>
                                    <a href="#">medicine</a>
                                    <a href="#">surgery</a>
                                    <a href="#">Marketing</a>
                                    <a href="#">Social Media</a>
                                    <a href="#">Branding</a>
                                    <a href="#">Laboratory</a>
                                </div>


                                <div className="sidebar-widget schedule-widget mb-3">
                                    <h5 className="mb-4">Time Schedule</h5>

                                    <ul className="list-unstyled">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Monday - Friday</span>
                                            <span>9:00 - 17:00</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Saturday</span>
                                            <span>9:00 - 16:00</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </li>
                                    </ul>

                                    <div className="sidebar-contatct-info mt-4">
                                        <p className="mb-0">Need Urgent Help?</p>
                                        <h3>+23-4565-65768</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog

{/* 
<img src="./Assets/images/blog/blog-1.jpg" alt="" className="img-fluid" />
<img src="./Assets/images/blog/blog-2.jpg" alt="" className="img-fluid" />
<img src="./Assets/images/blog/blog-4.jpg" alt="" className="img-fluid" />
*/}