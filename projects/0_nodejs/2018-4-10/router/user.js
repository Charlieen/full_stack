const express = require('express');

let userRouter = express.Router();


userRouter.get('/',(req,res)=>{
    res.send('user info');
});


userRouter.get('/:id',(req,res)=>{
    res.send('the  user  info');
});


userRouter.get('/:id/comment',(req,res)=>{
    res.send('user send comments');
});

module.exports = userRouter;