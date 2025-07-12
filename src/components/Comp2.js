import React, { useState } from 'react'

export default function Comp2() {
    var [data1, updateData1] = useState("");
    var [data2, updateData2] = useState("");
    var [message, setMessage] = useState("");


    function myfunct3(ev) {
        console.log(ev.target.value)
        updateData1(ev.target.value)
    }

    function myfunct4(ev) {
        console.log(ev.target.value)
        updateData2(ev.target.value)
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        // console.log(data1, data2)
        // alert("form bhar!!")

    fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => {
    // console.log(data)
 var  result = data.filter(obj => obj.username == data1 && obj.password == data2);
 console.log(result);

 setMessage((result.length ==0)?"Invalid Details" : "Valid Details ")

  }
);



//   var result = ans.filter((obj)=> {
//    return obj.username
//   })
  
//   console.log(result)
    }
    return (
        <>
            <div class="container  w-50 mt-5">
                <h1 className='text-center '>Login Form</h1>

                <form onSubmit={handleSubmit} >
                    <div class="mb-3" >
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="text" onChange={myfunct3} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <p>{data1}</p>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="text" onChange={myfunct4} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <p>{data2}</p>

                    <p>{message}</p>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>

    )
}
