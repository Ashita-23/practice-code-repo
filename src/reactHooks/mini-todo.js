import React , { useState } from "react";

const MiniTodo = () => {
  const allArr = [
    { id: "1", name: "shayam", age: 23 },
    { id: "2", name: "rama", age: 24 },
    { id: "3", name: "hari", age: 27 },
    { id: "4", name: "keshaw", age: 29 },
  ];

  const [arr, setarrData] = useState(allArr);

  const ClearList = (eventnum) => {
        const newList = arr.filter((val)=>{
          return val.id !== eventnum 
        })
         
        setarrData(newList)
   }
 

  const ClearListAll = () => {
    setarrData([]);
  };

  return ( <>
      <div className="todo-div">
        <div className="todo-inner-div">
          {arr.map((val) => {
            return (
              <>
                <div className="todo-0box" key={val.id}>
                  <h1 className="todo-boxs">
                    name : {val.name} / age : {val.age}
                  </h1>
                  <button className="clear_btn" onClick={()=>ClearList(val.id)}>
                    clear
                  </button>
                </div>
              </>
            );
          })}
          <button className="clear_btn" onClick={ClearListAll}>
            CLEAR ALL
          </button>
        </div>
      </div>
    </>
  );
};


export default MiniTodo;
