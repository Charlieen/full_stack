import React,{Component}from 'react';
import ListItem from './ListItem';
import './List.css'

class List extends Component{

    constructor(...args){
        super(...args);

        this.state={data:[]}
    }

    // hook

   async componentDidMount(){
        let data = await (await fetch('/a.txt')).json();

        this.setState({
            data
        });
    }

    render(){
        // console.log(this.state.data);
        return (
            <ul className="my-list">
            {this.state.data.map((x,index)=><ListItem key={index} data={x}></ListItem>)}
         
            </ul>
        )
    }
}

export default List;