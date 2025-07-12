import React, {useState,useEffect}from 'react'

export default function Comp3() {
    var [count,setCount]=useState(100);

     useEffect(()=>{
        console.log("use Effect Called", count);
    })
    function myFunc(){
        setCount(count+100);
    }

   
  return (
    <div>
        <h1>useEffect</h1>
        <p>{count}</p>
      <button onClick={myFunc}>Enter</button>
    </div>
  )
}
