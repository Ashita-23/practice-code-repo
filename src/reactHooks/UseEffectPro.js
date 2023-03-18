import React, { useEffect, useState } from "react";

const SeeEffects = () => {
 
    const [count , setNewCount] = useState(0) ;

    useEffect(()=>{

        if( count >= 1 ){
            document.title = `Chats ${count}`
        }else{
            document.title = `Chats`
        }
    },[count]);

return(<>
    <div className="todo-div">
        <div className="todo-inner-div">
        <h1>{count}</h1>
        <button className="clear_btn" onClick={()=>setNewCount(count+1)}>Click</button></div>
    </div>
</>)
}
export default SeeEffects