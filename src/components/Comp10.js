import React, { useState, useEffect } from 'react';
import fetchdata from "../utilities/fetchdata"

export default function Comp10() {

    var [record, setRecord] = useState([]);
    console.log(record)
    useEffect(() => {

        fetchdata('https://restcountries.com/v3.1/name/ind')
            .then(result => {
                console.log(result)
                setRecord(result)
            })
    }, [])
    return (
        <div className='container'>
            <h1>api call</h1>
            <div className='row'>
                {
                    record && record.map(({ flags, name }) => (
                        <div className='col-3'>
                            <img src={flags.png} className='img-fluid'/>
                            <h4>{name.common}</h4>
                        </div>)
                    )
                }

               
            </div>
        </div>
    )
}
