const db = require("../../config/db");
  //POST API QUERY
  exports.selectName = async(name) => {
    return await db.query("select id,category_id,name,description,minimum_price,maximum_price from products where name='"+name+"'");
}
exports.insertproducts = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["name","description","minimum_price","maximum_price,category_id"];
    let insertKeys = "";
    let insertValues = "";
    
    keys.forEach((key, i) => {
        if (ourColumn.includes(key)){
                insertValues = insertValues +"'"+request[key]+"',"
                insertKeys =insertKeys+""+key+","
        }
    });
    return await db.query("insert into products ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");
}

exports.selectAll=async()=>{
    return await db.query("select * from products");
}

//  return await db.query("update users set "+updateKeyValues+" where phone ='"+req.phone+"'");
