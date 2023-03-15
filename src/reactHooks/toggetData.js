import React, { useState }  from "react";

const ToggetData = () =>{
    // const BgColors = {
    //     backgroundColor:"white"
    // }

    const [Data , SetNewData] = useState("Hello! ")
    // const [BgColor , setNewBgColor] = useState(BgColors)
    
    
    const AddData = () =>{
        
  let val = Data ;
        if(val === "Hello! "){
            SetNewData("Thank You!")
            // setNewBgColor("blue")
        }else{
            SetNewData("Hello!")    
        }
    }
return(
    <>
        <div className="Toggel-outer" >
            <div className="Toggel-inner">
                <h1 className="Toggel-box">{Data}</h1>
                <button className="Toggel-btn hoverEffect" onClick={AddData}>Click it</button>
            </div>
        </div>
    </>
)
}

export default ToggetData