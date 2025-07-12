import React, { useEffect, useState } from 'react'
import fetchdata from '../utilities/fetchdata';

export default function Comp9() {
    var[record, setRecord]= useState([]);
 console.log(record)

    useEffect(()=>{

        fetchdata('https://fakestoreapi.com/products')
        .then(result => {
            console.log(result)
            setRecord(result)
        })
    },[])
  return (
    <div className='container'>
        <h1>api call</h1>
      <div className='row'>
        {
          record && record.map(({image,title,price}) =>
            <div className='col-3'>
    <img src={image} className=' img-fluid'/>
    <p>{title}</p>
    <p>{price}</p>
     </div>
          )

            
        }

      </div>
    </div>
  )
}
