function ajax_0(url,type ='get',data={},success,error){
   
    const xhr = new XMLHttpRequest();
    let arr=[];

    for (let name in data){
        arr.push(`${name}=${data[name]}`);
    }

    let strData = arr.join('&');
    
    if(type.toLowerCase() === 'get'){
        xhr.open(type,`${url}?${strData}`,true);
        alert(`${url}?${strData}`);
        xhr.send();
    }else if (type.toLowerCase() === 'post'){
        xhr.open(type,url,true);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(strData);
    }

    xhr.onreadystatechange = function(){
        if (xhr.readyState ==4){
            if( xhr.status >=200 && xhr.status<300  || xhr.status == 304){
                success && success(xhr.responseText)
            }else{
               error &&  error(xhr.status)
            }
        }
    }
} 

function ajax(options){

    options = options || {};

    options.type = options.type || 'get';
    options.data = options.data || {};
    options.dataType = options.dataType || 'text';



    const xhr = new XMLHttpRequest();
    let arr=[];

    for (let name in options.data){
        arr.push(`${encodeURIComponent(name)}=${encodeURIComponent(options.data[name])}`);
    }

    let strData = arr.join('&');
    
    if(options.type.toLowerCase() === 'get'){
        xhr.open(options.type,`${options.url}?${strData}`,true);
        alert(`${options.url}?${strData}`);
        xhr.send();
    }else if (options.type.toLowerCase() === 'post'){
        xhr.open(options.type,options.url,true);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(strData);
    }

    xhr.onreadystatechange = function(){
        if (xhr.readyState ==4){
            if( xhr.status >=200 && xhr.status<300  || xhr.status == 304){
                let data = xhr.responseText;

                switch (options.dataType) {
                    case 'json':
                        if(window.JSON && JSON.parse){
                            data = JSON.parse(data);
                        }else{
                            data = eval('('+str+')');
                        }
                       
                        break;
                
                    case 'xml':
                        data = xhr.responseXML;
                        break;
                } 



                options.success && options.success(data)
            }else{
                options.error &&  options.error(xhr.status)
            }
        }
    }
}