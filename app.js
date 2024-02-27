const express = require('express');
const app = express();
const port = 6000;
let cors = require('cors');
app.use(cors());
const db=require('../back_end/config/db.js')

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
db.connect();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, options');
    next();
  });
//get user
  app.get('/getusers', (req,res) => {
  db.query("SELECT * FROM users", (err, result) => {
      if (!err) {
        console.log(result.rows, "rows............");
        res.send(result.rows);
      } else console.log(err.message);
    });
   db.end;
  })
//post user

app.post('/postuser',(req,res)=>{
  const userData = req.body;//is an object
  console.log(userData,"userData")
  if(userData){
   let insertUserQuery =`INSERT INTO users (phone,role,name) VALUES ('${userData.phone}','${userData.role}','${userData.name}')`;//..add Corresponding colunm and values from userData Object.
   db.query(insertUserQuery,(err,result)=>{
        if(!err){
          console.log("inserted.....",result)
        }else console.log(err.message)
   });
   db.end;
  }
});
  require("./app/routes/routes.js")(app);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});