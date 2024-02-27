const db=require("../../config/db")
const quotations = require("../model/quotations");

//post Api (quotationController)
exports.insertquote = async (req, res) => {
  var check = await quotations.selectName(req.body.name);
  if (check && check.rowCount === 0) {

      var query = await quotations.insertquotes(req.body);
      var result = await quotations.selectName(req.body.name);
      console.log(query);
   res.json({ status: 'TRUE', result: result.rows });
  } else {
      return res.json({ status: 'FALSE', message: 'quotations already exists' });
  }
};

//  GET API (quotationController)
exports.selectAll = async(req,res)=>{
  var selectAll=await quotations.selectAll(req.query);

  if(selectAll.rowCount===0){
      res.json({status: "FALSE", message:"No records to print"})
  }
  else{
      res.json({status:"TRUE",result:selectAll.rows});
  }
};