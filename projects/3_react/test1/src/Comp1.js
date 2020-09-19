import React,{Component}from 'react';
import store from './store';

class Comp1 extends Component{
    constructor(...args){
        super(...args);

       this.state={
           user_count:store.getState().user.count,
           company_count:store.getState().company.count,

        }

       store.subscribe(()=>{
        
        this.setState({
            user_count:store.getState().user.count,
            company_count:store.getState().company.count,
        })
    });
   
    }


   

 

    render(){
        return <div>
        Component one
        <br/>
        个人用户：{this.state.user_count}
        <br/>
        公司用户：{this.state.company_count}
        </div>
    }
}

export default Comp1;