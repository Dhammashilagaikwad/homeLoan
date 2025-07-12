import React,{useState,useEffect, use} from 'react'

export default function Comp4() {
    var[count,setCount]=useState(100);
    var[age,setAge] = useState(10);
    var[place,setPlace] = useState("mumbai");

    useEffect(()=>{
        console.log("use Effect Called",count)
    },[])
    function myFunc(){
        setCount(count+100);
    }
  return (
    <div>
        <h1>useEffect</h1>
        <p>{count}</p>
         <p>{age}</p>
          <p>{place}</p>
      <button onClick={myFunc}>Enter</button>
    </div>
  )
}
