const express= require('express');

let aaaRouter = express.Router();

// aaaRouter.get('/a',(req,res)=>{
//     res.send('aaa/a founction was called')
// });

aaaRouter.get('/a',require('./aaa/a'));


aaaRouter.get('/b',(req,res)=>{
    res.send('aaa/b founction was called')
});

aaaRouter.get('/c',(req,res)=>{
    res.send('aaa/c founction was called')
});


module.exports= aaaRouter;
