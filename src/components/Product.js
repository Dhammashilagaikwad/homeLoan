import React, { useRef } from "react";
import { useParams } from "react-router";

function Product() {
    let params = useParams();
    // console.log(params);
    const amount = useRef();
    const quantiy = useRef();
    const final = useRef();

    const discAmount = useRef();
    const discCount = useRef();
    const discountedPrice = useRef();
    const discFinal = useRef();

    function handleCal() {
        // console.log("test");
        var amnt = amount.current.value;
        var qunt = quantiy.current.value;

        var result = amnt * qunt;

        final.current.innerHTML = result;
    }

    function discountCal() {
        // console.log("test");
        var discountAmount = discAmount.current.value;
        var discount = discCount.current.value;

        var discountPrice = (discountAmount * discount) / 100;
        console.log(discountPrice)
        var result = discountAmount - discountPrice;

        discountedPrice.current.innerHTML = discountPrice;
        discFinal.current.innerHTML = result;

    }
    return (
        <>
            <h1>
                products
            </h1>
            <hr />


            <h1>Amount Quantity Calculator</h1>
            <label>Amount : </label>
            <input type="number" ref={amount} placeholder="Enter Amount" className="form-control" />
            <br />
            <label>Quantity :  </label>
            <input type="number" ref={quantiy} placeholder="Enter Quantity" className="form-control" />
            <br />

            <button onClick={handleCal} className="btn btn-primary">Calculator</button>
            <br />
           <div className="mt-3 p-2  w-100">
             <label>Final :<span ref={final} className="form-control bg-light p-3 min-h-100"></span></label>
           </div>
            <br />
            <hr />

            <h1>Discount Calculator</h1>
            <label>Amount : </label>
            <input type="number" ref={discAmount} placeholder="Enter Amount" className="form-control" />
            <br />
            <label>discount : </label>
            <input type="number" ref={discCount} placeholder="Enter discount %" className="form-control"/>
            <br />

            <button onClick={discountCal}  className="btn btn-primary">Calculator</button>
            <br />
            <div className="d-grid mt-3" >
             <label>discountedPrice: <span ref={discountedPrice}></span></label>
            </div>

            <br />
            <label>Final: <span ref={discFinal}></span></label>
        </>
    )
}

export default Product;