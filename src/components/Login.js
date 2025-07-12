import React, { useRef } from "react";
import { useNavigate } from "react-router";

function Login() {

    const temperature = useRef();
    const fahrenheit = useRef();

    const navigate = useNavigate();

    function myFunc() {
        navigate('/register-page');
    }

    function myFunc1() {
        navigate('/user/add');
    }

    function myFunc2() {
        navigate('/');
    }

    function myFunc3() {
        navigate('/product/:productId')
    }

    function handleTemp(tempD=0) {
        // console.log("test");
        var Temp = temperature.current.value;

        var Fah = (Temp * 9 / 5) + 32;

        fahrenheit.current.innerHTML = Fah;
        console.log(Temp, Fah)
    }
    return (
        <>
            <h1>login page</h1>
            <hr />
            <div class="container">

                <h1>Temperature to Fahrenheit</h1>
                <label className="mt-3">Temperature : </label>
                <input ref={temperature} className="form-control mt-2" placeholder="Enter temperature" />
                <br />
                <button onClick={handleTemp}  className="btn btn-primary ">Calculator</button>
                <br />
                <label className="mt-3">Temp in Fahrenheit: <span ref={fahrenheit} className="form-control mt-2">32</span></label>

            </div>

            <hr></hr>
            <button onClick={myFunc} className="p-2 m-3 btn btn-sm bg-primary text-white"> register</button>
            <button onClick={myFunc1} className="p-2 m-3 btn btn-sm bg-primary text-white"> Add-user</button>
            <button onClick={myFunc2} className="p-2 m-3 btn btn-sm bg-primary text-white">Home</button>
            <button onClick={myFunc3} className="p-2 m-3 btn btn-sm bg-primary text-white">Produts</button>


        </>
    )
}

export default Login;