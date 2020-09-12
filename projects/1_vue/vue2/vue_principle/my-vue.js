(function(){

Proxy.prototype = Proxy.prototype || Object.prototype;

class MyVue extends Proxy{
    constructor(options){
        let data = options.data||{};

        let _this;
        let _container={} ;

        super(data,{
            get(target,key){        
                console.log(target,key);            
                if(key in target){
                    return target[key];
                }
                else {
                    throw new Error(`
                    vue.js:440 [Vue warn]: Property or method "${key}" is not defined on the instance but referenced during render.
                     Make sure to declare reactive data properties in the data option.    `);
                }
                
            },
            set(target,key,val){
            
                target[key]=val;
                _container.render(_this);
            },
            // has(){
 
            // },
            // deleteProperty(){
  
            // }
            
        });
        _this= this;

        //el
        _container.$el = document.querySelector(options.el);

        _container.$old_el =_container.$el.cloneNode(true);


        //data
        _container.$data = data;

        //methods

        _container.$methods= options.methods||{};

        //render
        _container.render = render.bind(_container);

        // execute first render
        _container.render(_this);
        // _container.render.call(_container);

    }
}

   function _eval_exp(s,$data){

        s=  s.replace(/\w+/g, (s)=>{
            return '$data.'+s;
            });

    return eval(s);
   }

   function  render(_this) {
    
        this.$el.parentNode.replaceChild(this.$old_el, this.$el);
        this.$el = this.$old_el;
        this.$old_el = this.$old_el.cloneNode(true);

    // {{ }}
 

       this.$el.innerHTML =  this.$el.innerHTML.replace(/\{\{[^\}]+\}\}/g, str => {
                let s= str.substring(2,str.length-2);

                return   _eval_exp(s,this.$data);             
            }); 

    // :title="xxx"
            let aEle=Array.from(this.$el.getElementsByTagName('*'));
            
            aEle.push(this.$el);

            aEle.forEach(el=>{
              
                Array.from(el.attributes).forEach(attr=>{

                    // :xxx="xxx"
                   if(attr.name.startsWith(':')){

                        let name = attr.name.substring(1);
                        let value = _eval_exp(attr.nodeValue,this.$data);

                        el.removeAttribute(attr.name);
                        el.setAttribute(name,value);

                   }else if (attr.name.startsWith('@')){
                    let name = attr.name.substring(1);
                    let fn = this.$methods[attr.nodeValue];

                    if(!fn){
                        throw new Error(`no ${attr.nodeValue} method`)
                    }else{
                        el.addEventListener(name,fn.bind(_this),false);
                    }    
                  } else if (attr.name == 'v-for'){

                  }else if(attr.name=='v-if'){
                      
                  }

                })

            });
 
        }

    


 
 


window.MyVue= MyVue; 
})()
