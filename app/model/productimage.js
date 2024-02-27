const db = require("../../config/db");
exports.selectName = async(name) => {
    return await db.query("select product_id,name,position from productimages where name='"+id+"'");
}
exports.insertproducts = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["productimages_id","name","position",,];
    let insertKeys = "";
    let insertValues = "";
    
    keys.forEach((key, i) => {
        if (ourColumn.includes(key)){
                insertValues = insertValues +"'"+request[key]+"',"
                insertKeys =insertKeys+""+key+","
        }
    });
    return await db.query("insert into productimages ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");
}

//GET API QUERY 
exports.selectAll=async()=>{
    return await db.query("select * from productimages");
}