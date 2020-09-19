import React,{useState ,useReducer,useContext,
    useLayoutEffect,useEffect ,useRef, memo,useMemo,useCallback} from 'react'

import MyContext from '../../lib/my-context'

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
/**
 *  函数式组件，在每次被 虚拟DOM 要求刷新时，如果 函数式组件 内部的 对象 或者 函数 都会 重新生成 新的，
 *  1. 不必要的 重新生成
 *  2.  由于重新生成，导致  值变化，需要 再次  组件刷新。
 * 
 *  避免方法使用 useMemo(obj,[]) 处理 对象， useCallback(fn,[])处理函数
 */
function MyCountFunc(){
    const [count,dispatchCount]= useReducer(countReducer,0)
    const [name,setName] = useState('charlie')
 
    // 每次返回都是 同一个对象，每次 都可以修改 对象 里面的值 current 
    /**
     * 闭包陷阱：
     * 闭包 -- 每一次，函数执行的 上下文。
     * 每一次 函数 执行，会对应一个 上下文， 
     */
    const countRef = useRef()  // {current: ''}
    countRef.current = count
// 每一次 MyCountFunc 组件 刷新，该config 都会重新生成新的对象，
    const config = useMemo(()=>({
        text:`count is ${count}`,
        color:count>3? 'red':'blue',
    }),[count])

    // 每一次 MyCountFunc 组件 刷新，()=>dispatchCount({type:'add'}) 都会重新生成新的匿名函数，

    // 写法1：
    // const handleButtonClick = useCallback(()=>dispatchCount({type:'add'})
    // ,[dispatchCount])

    // 写法2：
    const handleButtonClick = useMemo(()=> ()=>dispatchCount({type:'add'})
        ,[])

    const  handleAlertButtonClick = function(){
        setTimeout(() => {
            alert(countRef.current)
        }, 2000);
    }

    return (
        <div>
            <input  value={name} onChange={(e)=>setName(e.target.value)}/>
            <Child
              config={config}
              onButtonClick={ handleButtonClick}
            />
            <button onClick={handleAlertButtonClick}>alert count</button>
        </div>
    )
}

const Child = memo( function Child({onButtonClick,config}) {
    console.log('child render')
    return (
        <button onClick={onButtonClick} style={{ color:config.color}}>
        {config.text}
        </button>
    )
})
export default MyCountFunc