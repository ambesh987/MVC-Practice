const mongoose= require('mongoose');
const parents= new mongoose.Schema({
    'empId':{type:String, required:true},
    'firstName':{type:String, required:true},
    'lastName':{type:String, required:true},
    'age':{type:Number, required:true},
    'PhoneNo':{type:Number, required:true}
})
module.exports= mongoose.model('parents',parents);