//const  express = require('express');

const koa = require('koa');
const staticCache = require('koa-static-cache');
const pathLib=  require('path');

let server = new koa();
server.listen(8080);

server.use(staticCache(pathLib.resolve('www')));


