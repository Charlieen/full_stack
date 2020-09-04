const express = require('express');

let articleRouter = express.Router();


articleRouter.get('/',(req,res)=>{
    res.send('article shouye');
});

articleRouter.get('/:id',(req,res)=>{
    res.send('article content')
});

articleRouter.get('/:id/comment',(req,res)=>{
    res.send('article Comment')
});

articleRouter.get('/:id/edit',(req,res)=>{
    res.send('article edit')
});


articleRouter.use('/aaa',require('./aaa'));


module.exports= articleRouter;
