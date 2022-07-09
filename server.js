//import modules
//require() is the predefined function in nodejs, used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();
//where "app" is the rest object
//where "app" object used to create rest services
//Ex.  GET,POST,PUT,DELETE


//MIME Type
app.use(express.json());


//enable cors policy
app.use(cors());


//create client object
const sathyaTech = mongodb.MongoClient;
//where "sathyaTech" is the client object


//create the post request
app.post("/login",(req,res)=>{
    sathyaTech.connect(`mongodb+srv://admin:admin@ibatch.vwakppb.mongodb.net/?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) {
            console.log("Error....",err);
        }
        else{
            const db = connection.db("state_management");
            db.collection("login_details").find({"uname":req.body.uname,"upwd":req.body.upwd}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        res.send({"login":"success"});
                    }else{
                        res.send({"login":"fail"});
                    }
                }
            })
        }
    });
    
});

//assign the port number
app.listen(8080,()=>{
    console.log("server listeng the port no.8080");
});















