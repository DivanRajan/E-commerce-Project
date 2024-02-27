const db = require("../../config/db")
const productimages = require("../model/productimage")

//  POST API (productimagesController)
exports.insertproductimage = async (req, res) => {
    var check = await productimages.selectName(req.body.name);
    if (check && check.rowCount === 0) {

        var query = await productimages.insertproductimages(req.body);
        var result = await productimages.selectName(req.body.name);
        console.log(query);
     res.json({ status: 'TRUE', result: result.rows });
    } else {
        return res.json({ status: 'FALSE', message: 'Productimage already exists' });
    }
};


//  GET API (productimagesController)
exports.selectAll = async(req,res)=>{
    var selectAll=await productimages.selectAll(req.query);

    if(selectAll.rowCount===0){
        res.json({status: "FALSE", message:"No records to print"})
    }
    else{
        res.json({status:"TRUE",result:selectAll.rows});
    }
};

