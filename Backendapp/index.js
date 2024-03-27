import express  from "express";
import mongoose, { modelNames } from "mongoose";
import bodyParser from "body-parser";

import cors from "cors";




//establishing a connection to mongodb database i.e. MernCrudAppDb 
mongoose.connect("mongodb://localhost:27017/MernCrudAppDb")

//creating a structure of a document which will store in the UserDetail collection

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const userModel=mongoose.model("userdetail",userSchema);

//-------------------


const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());


app.listen(5000,function(){
    console.log("server application is running og 5000 port");
})


// app.get("/",function(req,res){
//     console.log("you touched the server application");
//     res.json({res:"Success"});
// })


//get all users api
app.get("/getAllUsers",function(req,res){

    userModel.find({}).then(function(data) {
    console.log(data);
    res.json(data);      
    }).catch(function (err) {
        console.log(err);
    res.json({error:"error while fetching data"})
    });

})
//get specif user's document
app.get("/getUser/:id",function(req,res){

    let id=req.params.id;

    console.log(id);
    userModel.findById({_id:id}).then(function(data) {
        console.log(data);
        res.json(data);      
        }).catch(function (err) {
            console.log(err);
        res.json({error:"error while fetching data"})
        });

})

//Insert user detials api


app.post("/createUser",function(req,res){


    console.log("post api is called");
    console.log(req.body);
    console.log(req.body.name+" "+ req.body.email+" "+req.body.age);

    try{

        //to store document in UserDetail collection
        const myData=new userModel({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age
        });
        myData.save();
        res.send("user inserted succefully");

    }catch(err)
    {
        console.log(err);
        res.send(err);
    }
      

});


app.put("/updateUser/:id",function(req,res){
    console.log("inside update api");
    const id=req.params.id;
    console.log(id);
    userModel.findByIdAndUpdate({_id:id},
        {   name:req.body.name,
            email:req.body.email,
            age:req.body.age
        }
        ).then(function(data) {
            console.log(data);
            res.json(data);      
            }).catch(function (err) {
                console.log(err);
            res.json({error:"error while fetching data"})
            });


});


//to delete user of specific id

app.delete("/deleteUser/:id",function(req,res){

    console.log("inside delete api");

    let id=req.params.id;

    userModel.findByIdAndDelete({_id:id})
    .then(function(result) {
        console.log(result);
        res.json(data);      
        }).catch(function (err) {
            console.log(err);
        res.json({error:"error while deleting data"})
        });

})