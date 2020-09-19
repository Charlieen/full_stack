import React from 'react';
import List from './List';
import Cmp from './Cmp';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

// import{Router,Route,Switch} from 'react-router';
import{BrowserRouter,Link,Router,Route,Switch} from 'react-router-dom';


// function App() {
//   return (
//     <div>
//       <List arr={[12,5,6,7,20]}></List>
//     </div>
//   );
// }

// class App extends React.Component{
//   constructor(...args){
//     super(...args);
//   }
//   render(){
//     return  <div>
//     <List arr={[12,5,6,7,20]}></List>
//   </div>;

//   }
// }

class App extends React.Component{
  constructor(...args){
    super(...args);
    this.state={count:0}
  }

  fnClick(){
    // console.log(this.refs);
    this.refs.cmp1.addCount();
  }
  addCount(){
    this.setState({count:this.state.count+1});
  }
  render(){
    return  <BrowserRouter>
    <div>
          <span>driven by child: {this.state.count}</span>
          <input type="button" value="Parent Add one" onClick={this.fnClick.bind(this)}/>
          <Cmp ref="cmp1" add={this.addCount.bind(this)}></Cmp>

          <Link to ="/">Comp1</Link>
          <Link to ="/b/1234">Comp2</Link>


          <Switch>
            <Route exact path="/" component={Comp1}/>
            <Route path="/b/:id" component={Comp2}/>

          </Switch>

  </div> 
    </BrowserRouter>
    ;

  }
}

export default App;
