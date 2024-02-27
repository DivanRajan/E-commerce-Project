const db=require("../../config/db")
const products = require("../model/products");

//  POST API (productsController)
exports.insertproducts = async (req, res) => {
    var check = await products.selectName(req.body.name);
    if (check && check.rowCount === 0) {

        var query = await products.insertproducts(req.body);
        var result = await products.selectName(req.body.name);
        console.log(query);
     res.json({ status: 'TRUE', result: result.rows });
    } else {
        return res.json({ status: 'FALSE', message: 'Category already exists' });
    }
};

//GET API ( productsController )
exports.selectAll = async(req,res)=>{
    var selectAll=await products.selectAll(req.query);

    if(selectAll.rowCount===0){
        res.json({status: "FALSE", message:"No records to print"})
    }
    else{
        res.json({status:"TRUE",result:selectAll.rows});
    }
};