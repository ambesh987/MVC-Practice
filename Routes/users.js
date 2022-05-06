const express= require('express');
const app= express();
const bodyParser= require('body-parser');
app.use(bodyParser.json([]));
const userController=require('../Controllers/users');

app.post('/user',userController.createUser);
app.get('/user',userController.getAllUser);
app.get('/user/:userid',userController.getUserById);
app.put('/user/:userid',userController.updateUser);
app.delete('/user/:userid',userController.deleteUser);
module.exports=app;