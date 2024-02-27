const express = require('express');
const router = express.Router();
module.exports = app =>{
    const userController = require("../controller/usersController");
    const categoriesController = require ("../controller/categoriesController")
    const productsController = require ("../controller/productsController")
    const productimagesController = require("../controller/productimagesController")
    const quotationController = require("../controller/quotationController")

//user
    app.post("/users/postuser",userController.insertUserInfo);
    app.get("/users/getuser",userController.selectAll);
    //app.put("users/putUser",userController.updateUser);
 
//category
    app.post("/categories/postcategory",categoriesController.insertCategory)
    app.get("/categories/getcategory",categoriesController.selectAll)
    //app.put("/categories/putcategory",categoriesController.updateCategory)
//product
    app.post("/products/postproduct",productsController.insertproducts)
    app.get("/products/getuser",productsController.selectAll)
    //app.put("/products/putproducts",productsController.updateproduct)

//product images
    app.post("/productimages/postproductimages",productimagesController.insertproductimage)
    app.get("/productimages/getproductimages",productimagesController.insertproductimage)
    // app.put("/productimages/putproductimages",productimagesController.updateproductimages)

//quotation
     app.post("/quotations/postquotations",quotationController.insertquote)
    app.get("/quotations/getquotation",quotationController.selectAll)
    // app.put("/quotations/putquotation",quotationController.updatequotation)
};