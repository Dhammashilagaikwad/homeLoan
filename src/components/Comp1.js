import React, { useState } from 'react'

export default function Comp1(props) {
    var[name, updateName] =useState(" dhamm");
    var[age,updateAge] = useState(30);
    var[brand,updateBrand] = useState(['nike','puma']);
    var [info,updateInfo] = useState({role:'admin',place:'mumbai'});
    var [status, updateStatus] = useState(false);

    function myfunc(){
        props.age=30;
    }

    console.log(status)
  function myfunc1(){
    updateName("kirti")
    updateAge(age+10)
    updateBrand(['adidas','reebok'])
    updateInfo({role:'client',place:'thane'})
    updateStatus(true)
  }

  return (
    <div>
      <h1> props vs state</h1>
      {/* <p>{props.age}</p> */}
      <h4>state variable</h4>
      <p>{name}</p>
      <p>{age}</p>
      
      <ul>
        <li>
            {brand[0]}
        </li>
        <li>
            {brand[1]}
        </li>
      </ul>

 <ul>
        <li>
            {info.role}
        </li>
        <li>
            {info.place}
        </li>
      </ul>
     
      <button onClick={myfunc}>enter</button>
      <button onClick={myfunc1}>click me</button>
    </div>
  )
}
