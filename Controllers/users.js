const userModel=require('../Models/users');

async function getAllUser(req,res,next){
    try{
        // let response=await userModel.find({}).populate('employeeId',{firstName:1});
        // res.json(response);
        res.render('home',{name: "Ambesh"});
    }
    catch(error){
        res.status(500).json(error);
    }
};

async function createUser(req,res,next){
    try{
        console.log("req.body",req.body);
        let userDetail=req.body;
        let response =await userModel.insertMany({userDetail});
        res.json(respone);
    }catch(error){
        res.json(error);
    }
};

async function getUserById(req,res,next){
    let userId= req.params.userId;
    let response= await userModel.find({_id:userId});
    res.json(response);
};

async function deleteUser(req,res,next){
    let user=req.params.userId;
    let response=await userModel.deleteOne({_id:userId});
    res.json(response);async 
};


async function updateUser(req,res,next){
    let userId=req.params.userId;
    let body=req.body;
    console.log(body,userId);
    let respone =await userModel.updateOne({_id:userId},{$set:body});
    res.json(response);
};


module.exports={getAllUser, createUser, getUserById, deleteUser, updateUser};