const express= require('express');
const app= express();
const bodyParser= require('body-parser');
app.use(bodyParser.json([]));
const userController=require('../Controllers/users');

app.post('/user',userController.getUser)
module.exports=app;