import React, { useRef } from "react";


export default function Register() {
    //   console.log(useRef);

    const text1 = useRef();
    const text2 = useRef();
    const text3 = useRef();
    const para = useRef();


    function myFun() {
        // console.log("test");

        var amount = text1.current.value;
        var roi = text2.current.value;
        var duration = text3.current.value;
        // console.log(amount,roi,duration);

        var message;
        if (amount == '' || roi == '' || duration == '') {
            message = 'all values r required';
             para.current.className = 'alert alert-danger';
        } else {
            if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
                message = 'all values must be a number';
                 para.current.className = 'alert alert-danger';
            } else {
                if (amount <= 0 || roi <= 0 || duration <= 0) {
                    message = ' all values must be  Positive number';
                     para.current.className = 'alert alert-danger';
                }
                else {
                    amount = +amount;
                    roi = +roi;
                    duration = +duration;

                    const SimpleInterest = amount * roi * duration / 100;
                    console.log(SimpleInterest);
                    message = `
        Total Interest : ${SimpleInterest} 
         <br/>
        Amoubt Invested: ${amount} <br />
        Final Value : ${SimpleInterest + amount}
        
        `;
 para.current.className = 'alert alert-sucess';
                }
            }
        }

        para.current.innerHTML = message;
       
    }



    return (
        <>
            <h1>Simple Interest Calculator</h1>
            <hr />
            <input ref={text1} placeholder="Amount" className="form-control" /> <br />
            <input ref={text2} placeholder="roi" className="form-control" /> <br />
            <input ref={text3} placeholder="duration" className="form-control" /> <br />
            <button onClick={myFun}  className="btn btn-primary">Calculate</button>
            <p ref={para} className="bs-danger" >...</p>
        </>
    )
}



