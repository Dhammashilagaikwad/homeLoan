import React, { useRef } from "react";


export default function Showuser() {
    //   console.log(useRef);

    const text1 = useRef();
    const text2 = useRef();
    const text3 = useRef();
    const para = useRef();
    const tableBody = useRef();


    function myFun() {
        // console.log("test");

        var amount = text1.current.value;
        var roi = text2.current.value;
        var duration = text3.current.value;
        // console.log(amount,roi,duration);

        var message;

        if (amount == '' || roi == '' || duration == '') {
            para.current.className = 'alert alert-danger';
            message = 'all values r required';

        } else {
            if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
                para.current.className = 'alert alert-danger';
                message = 'all values must be a number';

            } else {
                if (amount <= 0 || roi <= 0 || duration <= 0) {
                    para.current.className = 'alert alert-danger';
                    message = ' all values must be  Positive number';

                }
                else {
                    let openingBalance = 0;
                    amount = +amount;
                    roi = +roi;
                    duration = +duration;

                    for (let i = 1; i <= duration; i++) {
                        // console.log(i);
                        const interest = (openingBalance + amount) * roi / 100;
                        const closingBalance = openingBalance + amount + interest;

                        const row = `
                    <tr>
                    <td>${Math.round(i)}</td>
                    <td>${Math.round(openingBalance)}</td>
                    <td>${Math.round(interest)}</td>
                    <td>${Math.round(amount)}</td>
                    <td>${Math.round(closingBalance)}</td>
                    </tr>
                    `;
                        tableBody.current.innerHTML += row;
                        openingBalance = closingBalance;
                    }

                    para.current.className = 'alert alert-success';
                    message = ' calculate sucessfull';
                }
            }
        }
        para.current.innerHTML = message;
    }



    return (
        <>
            <h1>PPF Calculator</h1>
            <hr />
            <input ref={text1} placeholder="Amount" className="form-control" /> <br />
            <input ref={text2} placeholder="roi" className="form-control" /> <br />
            <input ref={text3} placeholder="duration" className="form-control" /> <br />
            <button onClick={myFun}  className="btn btn-primary">Calculate</button>
            <p ref={para} className="bs-danger" >...</p>
<hr />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Opening Balance</th>
                        <th>Interest</th>
                        <th>Investment</th>
                        <th>Closing Balance</th>
                    </tr>
                </thead>

                <tbody ref={tableBody}></tbody>

            </table>
        </>
    )
}



