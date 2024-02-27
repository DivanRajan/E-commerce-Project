const db=require("../../config/db")
const categories=require("../model/categories");

//  POST API (categoriesController)
exports.insertCategory = async (req, res) => {
        var check = await categories.selectName(req.body.name);
        if (check && check.rowCount === 0) {

            var query = await categories.insertcategorys(req.body);
            var result = await categories.selectName(req.body.name);
            console.log(query);
         res.json({ status: 'TRUE', result: result.rows });
        } else {
            return res.json({ status: 'FALSE', message: 'Category already exists' });
        }
};

//GET API ( categoriesController )
exports.selectAll = async(req,res)=>{
    var result=await categories.selectcat(req.query);

    if(result && result !==0){
        res.json({status:"TRUE",result:result.rows});
    }
    else{
        console.log(result);
        res.json({status: "FALSE", message:"No records to print"})
    }
};