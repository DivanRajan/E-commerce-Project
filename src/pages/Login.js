// import React from "react";
// import { Link } from "react-router-dom";
// import { Footer, Navbar } from "../components";
// import BGimage from '../Images/loginblur1.jpg';

// const Login = () => {
//   var loginBGImage = {
//     width: "100%",
//     height: "400px",
//     backgroundImage: `url(${BGimage})`,
  
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3" style={loginBGImage}>

//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div class="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div class="my-3">
//                 <label for="display-4">Phone number</label>
//                 <input
//                   type="phonenumber"
//                   class="form-control"
//                   id="floatingInput"
//                   placeholder="eg:123"
//                 />
//               </div>
//               <div class="my-3">
//                 <label for="floatingPassword display-4">OTP</label>
//                 <input
//                   type="OTP"
//                   class="form-control"
//                   id="floatingPassword"
//                   placeholder="OTP"
//                 />
//               </div>
//               <div className="my-3">
//                  <Link to="/register" className="text-decoration-underline text-info">Register</Link>
//               </div>
//               <div className="text-center">
//                 <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         </div>
      
//       <Footer />
//     </>
//   );
// };

// export default Login;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Footer, Navbar } from "../components";
// import BGimage from '../Images/loginblur1.jpg';

// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");

//   useEffect(() => {
//     // Add any side effects you want to run on component mount here
//     // For example, you might want to fetch some data or perform some setup
//     // This function will be called when the component mounts
//     // You can leave this empty if you don't have any initial side effects
//   }, []);

//   var loginBGImage = {
//     width: "100%",
//     height: "400px",
//     backgroundImage: `url(${BGimage})`,
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here using phoneNumber and otp state values
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3" style={loginBGImage}>
//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form onSubmit={handleSubmit}>
//               <div className="my-3">
//                 <label htmlFor="display-4">Phone number</label>
//                 <input
//                   type="phonenumber"
//                   className="form-control"
//                   id="floatingInput"
//                   placeholder="eg:123"
//                   value={phoneNumber}
//                   onChange={handlePhoneNumberChange}
//                 />
//               </div>
//               <div className="my-3">
//                 <label htmlFor="floatingPassword display-4">OTP</label>
//                 <input
//                   type="OTP"
//                   className="form-control"
//                   id="floatingPassword"
//                   placeholder="OTP"
//                   value={otp}
//                   onChange={handleOtpChange}
//                 />
//               </div>
//               <div className="my-3">
//                 <Link to="/register" className="text-decoration-underline text-info">
//                   Register
//                 </Link>
//               </div>
//               <div className="text-center">
//                 <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Login;
//-----------------------------------------------------------------------------

import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext.js";
import BGimage from '../Images/loginblur1.jpg';
import { Route, Routes } from "react-router";
const Login = () => {
  
  var loginBGImage = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${BGimage})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  
  };
    const [error, setError] = useState("");
    const [number, setNumber] = useState("+91");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTPForm, setShowOTPForm] = useState(false);
    const [result, setResult] = useState("");
    const { setUpRecaptha } = useUserAuth();
    const navigate = useNavigate();
  
    const getOtp = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
  
      if (number.trim().length !== 13)
        return setError("Please enter a valid phone number!");
  
      try {
        const response = await setUpRecaptha(number);
        setResult(response);
        setShowOTPForm(true);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    const verifyOtp = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
  
      if (otp.length !== 6 || otp === null) return;
  
      try {
        await result.confirm(otp);
        navigate("/home");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    const boxStyle = {
      width: "300px",
      height: "300px",
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "20px",
    };
    
  
    return (
      <>
      <div style={loginBGImage}>
      <div className="box" style={{ ...boxStyle, position: "absolute", top: "40%", left: "50%", transform: "translate(-40%, -30%)" }}>
        <h1 className="text-center mb-3" style={{ fontFamily: 'Times New Roman' }}>Login</h1>

          {error && <Alert variant="danger">{error}</Alert>}
  
          <Form onSubmit={getOtp} style={{ display: !showOTPForm ? "block" : "none" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <PhoneInput
                defaultCountry="IN" value={number} onChange={setNumber} placeholder="Enter Phone Number" aria-label="Enter Phone Number" />
              <div id="recaptcha-container"></div>
            </Form.Group>
  
            <div className="d-flex justify-content-end mb-3">
              <Link to="/">
                <Button variant="secondary">Cancel</Button>
              </Link>
              &nbsp;
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send OTP'}
              </Button>
            </div>
          </Form>
  
          <Form onSubmit={verifyOtp} style={{ display: showOTPForm ? "block" : "none" }}>
            <Form.Group className="mb-3" controlId="formBasicOtp">
              <Form.Control
                type="otp"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                aria-label="Enter OTP"
              />
            </Form.Group>
  
            <div className="d-flex justify-content-end mb-3">
              <Link to="/home">
                <Button variant="secondary">Cancel</Button>
              </Link>
              &nbsp;
              <Link to='/home'>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify'}
              </Button>
              </Link>
            </div>
          </Form>
        </div>
   {/* <Routes>
    <UnauthenticatedRoute>
      {path="/login"}
      {component={}}
    </UnauthenticatedRoute>
    <AuthenticatedRoute>

    </AuthenticatedRoute>
   </Routes> */}
        </div>
      </>
    );
  };
  
export default Login;