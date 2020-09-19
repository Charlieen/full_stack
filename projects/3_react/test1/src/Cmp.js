import React,{Component}from 'react';

class Cmp extends Component{
    constructor(...args){
        super(...args);

        this.state={count:0}
    }

    addCount(){
        this.setState({count:this.state.count+1});
    }

    render(){
        return <div>
        <input type="button" value="child Add 1" onClick={this.props.add}/>
       <span>driven by parent: {this.state.count}</span> </div>
    }
}

export default Cmp;