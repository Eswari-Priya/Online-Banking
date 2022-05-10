const express = require("express");
// const routes = require('./routes');
const path = require('path');
const fileUpload = require('express-fileupload'); 
const app = express();

const bodyParser = require("body-parser");
var con  = require('./connect');
const cors = require("cors");
const { json } = require("express");
app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload());


app.post("/contactUs",(req,res)=>{
    
    var sql = `INSERT into contactus(FirstName,LastName,Emailid,MobileNumber,Message) values ("${req.body.FirstName}","${req.body.LastName}", "${req.body.Emailid}","${req.body.MobileNumber}","${req.body.message}")`
    con.query(sql,(err,data)=>{
        if(err){
            res.status(500).json({
                error:"Unable to take the input details. Please try again!"
            })
            
        }
        console.log("Added a row in contactus",data);
        res.send(data) 
    })
})

app.post("/complaints",(req,res)=>{
    
    var sql = `INSERT into complaints(FirstName,LastName,Emailid,MobileNumber,complaint) values ("${req.body.FirstName}","${req.body.LastName}", "${req.body.Emailid}","${req.body.MobileNumber}","${req.body.message}")`
    console.log("Adding complaint")
    con.query(sql,(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).json({
                error:"Unable to take the input details. Please try again!"
            })
        }
        con.query("select last_insert_id() lastind from complaints",(err,data2)=>{
            console.log("Added a row in complaints with id ",data2[0].lastind)
            res.send(data2)
        })
        
        
    })
})

app.post("/accountCreation",(req,res)=>{
    // console.log(req.body);
    var sql=`INSERT into registration(FirstName,Lastname,DateOfBirth,age,Father,MotherName,Gender,MaritalStatus,MobileNumber,Occupation,Email,TypeofAccount,MinimumBalance,AadharNumber,PANNumber,PermanentAddress,ResidentialAddress,Picture,Aadhar_img,PAN_Card,E_Signature) values ("${req.body.FirstName}","${req.body.LastName}", "${req.body.Dob}","${req.body.Age}","${req.body.Gaurdian}","${req.body.Mother}","${req.body.Gender}","${req.body.Maritalstatus}","${req.body.MobileNumber}","${req.body.Occupation}","${req.body.Emailid}","${req.body.TypeOfAccount}","${req.body.MinimumBalance}","${req.body.AadharNumber}","${req.body.PANNumber}","${req.body.PermanentAddress}","${req.body.ResidentialAddress}","${req.body.Picture}","${req.body.Aadhar_img}","${req.body.PAN_Card}","${req.body.E_Signature}")`;
    // console.log(sql);
    
    var cifnumber;
    con.query(sql,(err,data)=>{
        var acctnumber;
        if(err){
            // console.log(err.sqlMessage)
            res.status(500).json({
                error:err.sqlMessage
            })
        }
        else{
            // console.log(data);
        }
        // console.log("Added row to registration table")
        con.query("select last_insert_id() lastind from registration",(err,data2)=>{
            
            acctnumber = data2[0].lastind;
            console.log(acctnumber);
            con.query(`Insert into cif(AcctNum) values("${acctnumber}")`,(err,data3)=>{
                if(err){
                    console.log(err);
                }
                // console.log(data3);
                con.query("select last_insert_id() lastind from cif",(err,data4)=>{
                    // console.log(data3);
                    cifnumber = data4[0].lastind;
                    // res.data = {accountnumber:acctnumber,Cifnumber:cifnumber}
                    res.send([acctnumber,cifnumber])
                })
            })
            
        })
        
        
    })
})

app.post("/newuser",(req,res)=>{
    var sql = `select count(*) from registration where AccountNumber=${req.body.Acc_no} and MobileNumber=${req.body.Mobile} and Email=${req.body.Emailid}`;
    con.query(sql,(err,data)=>{
        if(err){
            res.send(err);
        }
        var sql
        var sql = `insert into newuser()`
        res.send(data);
    })
})

app.listen(3001,function(){
    console.log("Starting server at 3001");
})