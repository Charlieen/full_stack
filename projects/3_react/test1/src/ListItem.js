import React,{Component}from 'react';

class ListItem extends Component{
    render(){
        return <li>
        {this.props.data}
        </li>
    }
}

export default ListItem;