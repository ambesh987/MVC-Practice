const mongoose =require('mongoose');

class Mongo{
    constructor(){
        this.createMongoConnection();
    }
    createMongoConnection(){
        mongoose.connect(`mongodb+srv://ambeshpm:Ambeshpm%402304@cluster0.qtsug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        mongoose.connection.once('open',()=>{
            console.log('connected to the database');
        })
        mongoose.connection.on('error',()=>{
            console.log("couldn't connect to the database");
        })
    }
}
module.exports =Mongo;