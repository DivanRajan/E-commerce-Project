const db = require("../../config/db");

//POST API
exports.selectName = async(id) => {
    return await db.query("select user_id,product_id,interested from quotations where name='"+id+"'");
}
exports.insertquotes = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["user_id","product_id","interested"];
    let insertKeys = "";
    let insertValues = "";
    
    keys.forEach((key, i) => {
        if (ourColumn.includes(key)){
                insertValues = insertValues +"'"+request[key]+"',"
                insertKeys =insertKeys+""+key+","
        }
    });
    return await db.query("insert into quotations ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");
}

//GET API
exports.selectAll=async()=>{
    return await db.query("select * from quotations");
}