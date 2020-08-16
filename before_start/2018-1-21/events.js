const Event = require('events').EventEmitter;

let ev = new Event();

ev.on('msg',function(a,b,c){
    console.log('receive msg event:',a,b,c);

})

ev.emit('msg',12,5,88)