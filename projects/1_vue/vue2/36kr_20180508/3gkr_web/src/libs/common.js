export default {
    mktime(t){
    
        let now = Date.now();
        let diff = Math.floor((now-t)/1000);

        if(diff<60){
          return "现在";
        }else if (diff<60*60){
          return Math.floor(diff/60)+"分钟前";
        }else if(diff< 60*60*24){
          return Math.floor(diff/3600)+"小时前";
        }else if(diff< 60*60*24*30){
          return Math.floor(diff/60*60*24)+"天前";
        }else{
          let oDate= new Date(t);
          return `${oDate.getFullYear()}-${oDate.getMonth()+1}-${oDate.getDay()}`;
        }
        
      }
}