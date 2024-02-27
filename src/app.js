// import react from 'react';
// import { Route, BrowserRouter ,Routes} from 'react-router-dom';
// import PrivateRoute from '../src/routes/privateRoute.js';
// import Home from '../src/pages/Home.js';
// import Login from '../src/pages/Login.js';
// import { Product, Products, AboutPage, ContactPage, Cart, Register, Checkout, PageNotFound } from "./pages";

// const App = () =>{
//     const isAuthenticated = true;
//     return(
// <BrowserRouter>
//     {/* <Routes> */}
//         <Route exact path="/home" Component={Home}/>
//         <PrivateRoute 
//         path="/home"
//         component={Home}
//         isAuthenticated={isAuthenticated}
//         />
//         <Route exact path='/login' Component={Login}/>
//         <Route path="/product" element={<Products />} />
//         <Route path="/product/:id" element={<Product />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/cart" element={<Cart />} />
//         {/* <Route path="/home" element={<Home />} /> */}
//         <Route path="/" element={<Register />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="*" element={<PageNotFound />} />
//         <Route path="/product/*" element={<PageNotFound />} />
//     {/* </Routes> */}
// </BrowserRouter>
//     )
// };

// export default App;


import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PrivateRoute from '../src/routes/privateRoute.js';
import Home from '../src/pages/Home.js';
import Login from '../src/pages/Login.js';
import { Product, Products, AboutPage, ContactPage, Cart, Register, Checkout, PageNotFound } from "./pages";

const App = () => {
    const isAuthenticated = true;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <PrivateRoute
                    path="/home"
                    component={Home}
                    isAuthenticated={isAuthenticated}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/product/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
