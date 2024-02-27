

import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import landingpageimage1 from "../Images/registerpageimage.jpg";

const Register = () => {
    return (
        <>
            <div
                className="card-img img-fluid position-relative"
                style={{
                    backgroundImage: `url(${landingpageimage1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '900px',
                }}
            >
                <Navbar />
                    
                <div className="container my-3 py-3 position-absolute top-50 start-50 translate-middle">
                <h1 className="text-left text-black col-12" style={{fontFamily: 'Times New Roman, Times, serif', fontSize: '40px'}}>SAI RAM RACKS</h1>
                <h1 className="text-center text-black" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Register</h1>
                    <hr className="text-white" />
                    <div className="row my-4 h-100">
                        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                            <form>
                                <div className="form my-3">
                                    <label htmlFor="Name" className="text-black">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Name"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="form my-3">
                                    <label htmlFor="Email" className="text-black">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="Email"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div className="form my-3">
                                    <label htmlFor="Password" className="text-black">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="Password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="my-3">
                                    <p className="text-black">Already have an account? <Link to="/" className="text-decoration-underline text-info">Login</Link> </p>
                                </div>
                                <div className="text-center">
                                    <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;


