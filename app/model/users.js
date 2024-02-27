
const db = require("../../config/db");

exports.selectName = async(phone) => {
    return await db.query("select * from users where phone='"+phone+"'");
}
exports.insertUser = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["name","role","phone","auth_id"];
    let insertKeys = "";
    let insertValues = "";
    
    keys.forEach((key, i) => {
        if (ourColumn.includes(key)){
                insertValues = insertValues +"'"+request[key]+"',"
                insertKeys =insertKeys+""+key+","
        }
    });
    return await db.query("insert into users ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");
}


 //PUT API QUERY
 exports.updateUser=async(req)=>{
    let keys = Object.keys(request);
    let ourColumn = ["name","role","phone","auth_id"];
    let updateKeys = "";
    let updateValues = "";
    
    keys.forEach((key, i) => {
        if (ourColumn.includes(key)){
                updateValues = updateValues +"'"+req[key]+"',"
                updateKeys = updateKeys+""+key+","
        }
    });
    return await db.query("update users("+updateKeys.substring(0, updateKeys.length -1)+") values ("+updateValues.substring(0, updateValues.length -1)+")");
}
//GET API QUERY 
exports.selectAll=async()=>{
    return await db.query("select * from users");
}

//PUT API QUERY
exports.updateUser= async(req,res) =>{
    let keys=Object.keys(req);
    let ourcolums=["name","role","phone","auth_id"];
    let updateKeyValues="";
  
    keys.forEach((key,i)=>{
        if(ourcolums.includes(key)){
            if (updateKeyValues.length !== 0){
                updateKeyValues=updateKeyValues+` ${key} ='${req[key]}'`;
            }
            else 
                updateKeyValues=updateKeyValues+` ${key}='${req[key]}'`;
  
        }
    });
  }