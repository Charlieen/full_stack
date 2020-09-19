 const withCss = require('@zeit/next-css')

const configs={
   //compile file output dir
   distDir:'dest',
   //是否给每个路由生成 Etag
   generateEtags: true,
   //页面内容缓存配置
   onDemandEntries:{
      //内容在内存中缓存的时长(ms)
      maxInactiveAge: 25*1000,
      //同时缓存多少页面
      pageBufferLength:2,
   },
   // 在pages 目录下那种后缀的文件会被认为是页面
   pageExtensions:['jsx','js'],
   //配置buildId
   generateBuildId: async()=>{
      if(process.env.YOUR_BUILD_ID){
         return process.env.YOUR_BUILD_ID
      }
      //  返回null 使用默认的unique id 
      return null
   },

   // 手动修改 webpack config 
   webpack(config,options){
      return config
   },
   //
   webpackDevMiddleware: config =>{
      return config
   },
// 可以在页面上通过 process.env.customKey 获取 value
   env: {
      customKey:'value',
   },

   // 下面两个要通过 ‘next/config'来读取
   // 只有在服务端渲染时才会获取的配置
   serverRuntimeConfig:{
      mySecret:'secret',
      secondSecret:process.env.SECOND_SECRET
   },
   // 在服务端渲染和客户端渲染都可获取的配置
   publicRuntimeConfig:{
      staticFolder:'/static',
   }

}


 if(typeof require !== 'undefined'){
    require.extensions['.css']= file =>{}
 }

 module.exports =withCss({
   distDir:'dest',
   env:{
      customKey:'dzgdzg'
   },
   serverRuntimeConfig:{
      mySecret:'secret',
      secondSecret:process.env.SECOND_SECRET
   },
   // 在服务端渲染和客户端渲染都可获取的配置
   publicRuntimeConfig:{
      staticFolder:'/static',
   }
 })