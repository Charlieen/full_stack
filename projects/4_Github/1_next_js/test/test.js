const Redis = require('ioredis');

const redis = new Redis({
    port:6371,
    password:123456
})

// console.log(redis);

async function getKeys(){
    await redis.set('cc',1234)
    await redis.setex('dzg',20,'charlie ding')
    const keys =  await redis.keys('*');
    console.log(keys);
    return keys;
}
 
getKeys();


