import React,{useState,useEffect} from 'react'

export default function Comp5() {
    var[count,setCount]=useState(100);
    var[age,setAge]= useState(10);
    var[place,setPlace]=useState("mumbai");

    useEffect(()=>{
        console.log("useeffect called", count,age,place)
    },[count,age])

    function myFunc1(){
        setCount(count+100);
    }

    function myFunc2(){
        setAge(age+10);
    }

    function myFunc3(){
        setPlace("pune");
    }
  return (
    <div>
      <p>{count}</p>
       <p>{age}</p>
        <p>{place}</p>
      <button onClick={myFunc1}>count</button>
      <button onClick={myFunc2}>age</button>
      <button onClick={myFunc3}>place</button>
    </div>
  )
}
