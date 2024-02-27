
const db=require("../../config/db")
const users=require("../model/users");

//post Api (usercontroller)
exports.insertUserInfo = async (req, res) => {
      const check = await users.selectName(req.body.phone);
      console.log("check")
  
      if (check && check.rowCount === 0) {
        const query = await users.insertUser(req.body);
        console.log(query);
        const result = await users.selectName(req.body.phone);
        res.json({ status: "TRUE", result: result.rows });
      } else {
        res.json({ status: "FALSE", message: "Record already exists" });
      }
  };


  //get Api (user controller)
  exports.selectAll = async(req,res)=>{
    var selectAll=await users.selectAll(req.query);

    if(selectAll.rowCount===0){
        res.json({status: "FALSE", message:"No records to print"})
    }
    else{
        res.json({status:"TRUE",result:selectAll.rows});
    }
};




