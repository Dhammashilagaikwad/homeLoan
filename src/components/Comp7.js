import React,{useState,useRef} from 'react'
import Comp8 from './Comp8';

export default function Comp7() {
var x1 = useRef();
var[record,setRecord]= useState("");

function myfunc(){
    var data=x1.current.value;
    setRecord(data);
}

  return (
    <div className='container'>
        <h1>outer</h1>
      <input type='text' ref={x1} />
      <button onClick={myfunc}>Enter</button>{record}
      <hr />
      <Comp8 p1={record} />
    </div>
  )
}
