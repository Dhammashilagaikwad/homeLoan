import React, { useRef } from "react";
import Highcharts from "highcharts";


export default function Content() {

  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const para = useRef();
  const chartRef = useRef();
  //  console.log(text1,text2,text3,para)

  function myFunc1() {
    console.log("test");

    var amount = text1.current.value;
    var roi = text2.current.value;
    var duration = text3.current.value;
    console.log(amount, roi, duration);

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
          message = 'all values must be positive number';
          para.current.className = 'alert alert-danger';
        }
        else {
          amount = +amount;
          roi = +roi;
          duration = +duration;

          duration = duration * 12;
          roi = roi / 12 / 100;

          var emi = amount * roi * (1 + roi) ** duration / ((1 + roi) ** duration - 1);
          console.log("Emi", emi);

          var totalPayable = emi * duration;
          console.log(totalPayable);

          var interest = totalPayable - amount;
          console.log(interest);


          message = `
           Loan Amount: ${amount} <br />
        Emi: ${Math.round(emi)} <br />
        Interest: ${Math.round(interest)} <br />
        Total Paid: ${Math.round(totalPayable)} <br />
        `;
          para.current.className = 'alert alert-success';

          Highcharts.chart(chartRef.current, {
            chart: {
              type: 'column'
            },
            title: {
              text: 'Loan Breakdown'
            },
            xAxis: {
              categories: ['Loan Amount', 'Interest', 'Total Paid']
            },
            yAxis: {
              title: {
                text: 'Amount in ₹ '
              }
            },
            series: [{
              name: 'Loan Details',
              data: [amount, Math.round(interest), Math.round(totalPayable)],
              colorByPoint: true
            }]
          });
        }
      }
    }

    para.current.innerHTML = message;

  }


  return (
    <>
  
    <div className="container w-75 py-5" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center text-primary mb-4">
          🏠 Home Loan Calculator
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="mb-3">
              <label className="form-label fw-semibold">Loan Amount (₹)</label>
              <input ref={text1} placeholder="Enter loan amount" className="form-control form-control-lg rounded-3" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Rate of Interest (%)</label>
              <input ref={text2} placeholder="Annual ROI (e.g., 7.5)" className="form-control form-control-lg rounded-3" />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Duration (in years)</label>
              <input ref={text3} placeholder="Loan duration (e.g., 20)" className="form-control form-control-lg rounded-3" />
            </div>
            <div className="d-grid">
              <button onClick={myFunc1} className="btn btn-primary btn-lg rounded-3 shadow-sm">
                Calculate 
              </button>
            </div>
            <p className="mt-4 fs-6" ref={para}>...</p>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div ref={chartRef} className="w-100" style={{ minHeight: "300px" }}></div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

