const http= require('http');
const app = require('./Routes/users');
const ConnectToDB=require("./DBConnection/MongoDB");
const PORT=9008;

http.createServer(app).listen(PORT,()=>{
    new ConnectToDB();
    console.log(`server is running on port no ${PORT}`);


})
