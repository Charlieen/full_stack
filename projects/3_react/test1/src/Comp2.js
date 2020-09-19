import React,{Component}from 'react';

class Comp2 extends Component{
    constructor(...args){
        super(...args);

       
    }
    componentDidMount(){
        
        console.log(this.props.match.params.id);
    }

 

    render(){
        return <div>
        Component 2
        </div>
    }
}

export default Comp2;