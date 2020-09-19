import React from 'react';
import store from './store/index';
import Comp1 from './Comp1';

//redux
// state must only one 




class App extends React.Component{
  constructor(...args){
    super(...args);
    // this.state={count:0}
  }

  fn(){
    store.dispatch({type:'addUser'});
  }

  fnCompany(){
    store.dispatch({type:'addCompany'});
  }

  render(){
    return (
      <div>
      <input type="button" value="User An Niu" onClick={this.fn.bind(this)}/>
      <input type="button" value="Company An Niu" onClick={this.fnCompany.bind(this)}/>

        <Comp1/>
    </div> 
    );
   

  }
}

export default App;
