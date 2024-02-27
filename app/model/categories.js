const db = require("../../config/db");
  //POST API QUERY
  exports.selectName = async(name) => {
    return await db.query("select id,name,photo,description from categories where name='"+name+"'");
}
exports.insertcategorys = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["name","description","photo"];
    let insertKeys = "";
    let insertValues = "";
    
    keys.forEach((key, i) => {
        if (ourColumn.includes(key)){
                insertValues = insertValues +"'"+request[key]+"',"
                insertKeys =insertKeys+""+key+","
        }
    });
    return await db.query("insert into categories ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");
}

/*_________________________________________________________________________________________________________________*/

exports.selectcat=async(name)=>{
    return await db.query("select * from categories");
}
