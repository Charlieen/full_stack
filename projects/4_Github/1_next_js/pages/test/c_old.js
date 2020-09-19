import React,{useState ,useReducer,useContext,useLayoutEffect,useEffect ,useRef} from 'react'

import MyContext from '../../lib/my-context'

class MyCount extends React.Component{
    constructor(...args){
        super(...args)
        this.ref = React.createRef()
        this.state={count:0 }
    }
    componentDidMount(){
        let spanInstance = this.refs.abc
        let spanInstance2 = this.ref.current
       this.interval = setInterval(() => {
            this.setState({count: this.state.count +1})
        }, 1000); 
    }

    componentWillUnmount(){
        if(this.interval){
            clearInterval(this.interval)
        }
    }
    handleButtonClick(){
        const count= this.state.count
        setTimeout(() => {
        
            
            alert(count) // 2s后执行时，count 是 2s 前那个值。

        //  alert(this.state.count)  // 当前最新值
        }, 2000);   
    }
    render(){
        return <div>
        <span ref="abc">{this.state.count}</span>
        <span ref={this.ref}>about ref</span>

        
        </div>
    }
}

function countReducer(state,action){
    switch (action.type) {
        case 'add':
            return state+1
            
        case 'minus':
            return state-1
    
        default:
            return state;
    }
}

function MyCountFunc(){
  //  const [count,setCount] = useState(0) // [a,b]

    const [count,dispatchCount] = useReducer(countReducer,0)
    const [name,setName] = useState('charlie')
    const context = useContext(MyContext)

    const inputRef= useRef()


    // setCount(1)  // 不基于最新的count 值
    // setCount(c=>c+1)   基于最新的count 值 ，能进行累加
    // 

    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //      //  setCount( c => c+1)
    //      dispatchCount({type:'minus'})
    //     }, 1000);
    //     return ()=> clearInterval(interval)
    // }, [])

     // 会在任何一个属性更新后，检查虚拟dom树，。。。。 在更新html 之后，执行 
    useEffect(()=>{
      
        console.log(inputRef)
        return ()=> console.log('effect deteched')
      

    },[count])

    // 会在任何一个属性更新后，检查虚拟dom树，。。。。 在更新html 之前，执行 
    useLayoutEffect(()=>{
        console.log('layout effect invoked')
        return ()=> console.log('layout effect deteched')

    },[count])

    return (
        <div>
            <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>dispatchCount({type:'add'})}>{count}</button>
            <p>{context}</p>
        </div>
    )
}
export default MyCountFunc