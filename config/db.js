const{dbConnect,Pool}=require ('pg')
const db=new Pool({
    user:"postgres",
    host:"127.0.0.1",
    password:"Divan@2001",
    database:"Sairamracks"
})
module.exports=db;