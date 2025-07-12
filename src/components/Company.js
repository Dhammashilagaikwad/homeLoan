import React, { useState,useEffect } from 'react'

export default function Company() {
    var[count,setCount] = useState(0);
  

    function myfunc1(){
        setCount(count+1);
    }

    function myfunc2(){
        setCount(count-1);
    }

    
    function myfunc3(){
        setCount(0);
    }
    
  return (
    <div>
      <p>{count}</p>
      <button onClick={myfunc1}>+</button>
       <button onClick={myfunc2}>-</button>
        <button onClick={myfunc3}>0</button>
    </div>
  )
}
