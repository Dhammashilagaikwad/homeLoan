import React, { useRef } from "react";


function Adduser() {

    const unit1 = useRef();
    const unit2 = useRef();
    const share1 = useRef();
    const share2 = useRef();
    const ans1 = useRef();
    const ans2 = useRef();
    const totalUnits = useRef();
    const totalavgprice = useRef();
    const totalAmount = useRef();
    const para =useRef();


function myFunc3(){
    // console.log("test");
  var firstunit = unit1.current.value;
   var secondunit = unit2.current.value;
 var firstshare= share1.current.value;
   var secondshare= share2.current.value;
// console.log(units1,units2,shares1,shares2);

var message;
if(firstunit == '' || secondunit == '' || firstshare == '' || secondshare ==''){
    message = "All feilds R required";
     para.current.className = 'alert alert-danger';
} else if(isNaN(firstunit) || isNaN(secondunit) || isNaN(firstshare) || isNaN(secondshare)){
    message= 'all Values must be Number';
     para.current.className = 'alert alert-danger';
}
else {
    firstunit =+ firstunit;
    secondunit =+ secondunit;
    firstshare =+ firstshare;
    secondshare =+ secondshare;

    // console.log(firstunit,secondunit,firstshare,secondshare)
    var result1 = firstunit * firstshare
    var result2 = secondunit * secondshare;

    console.log(result1);
    console.log(result2);

    var units = firstunit + secondunit;
    var amounts = result1 + result2;
    var avgprice = amounts/ units

    ans1.current.innerHTML = result1;
    ans2.current.innerHTML = result2;
    totalUnits.current.innerHTML = units;
    totalAmount.current.innerHTML = amounts;
    totalavgprice.current.innerHTML = avgprice;

    para.current.className = 'alert alert-success';
}

para.current.innerHTML = message;
}

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Stock Average Calculator</h1>
                <table  className="table  text-center align-middle">
                    <tr>
                        <td className="mb-3">
                            <input type="text" placeholder="units" ref={unit1} />
                        </td>
                        <td><input type="text" placeholder="units" ref={unit2} /></td>
                    </tr>

                    <tr>
                        <td><input type="text" placeholder="Price par share" ref={share1} /></td>
                        <td><input type="text" placeholder="Price Par share"  ref={share2}/></td>
                    </tr>

                    <tr>
                        <td ref={ans1}></td>
                        <td ref={ans2}> </td>
                    </tr>

                    <tr >
                        <td colspan="2" >Total units: <span ref={totalUnits}></span></td>
                    </tr>

                    <tr>
                        <td colspan="2">Average Price: <span ref={totalavgprice} ></span></td>
                    </tr>

                    <tr>
                        <td colspan="2">Total Amount: <span ref={totalAmount} ></span></td>
                    </tr>

                    <tr >
                        <td colspan="2">
                            <button onClick={myFunc3}  className="btn btn-primary">Calculator</button>

                        </td>
                    </tr>

                    <tr>
                        <p ref={para}>...</p>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Adduser;