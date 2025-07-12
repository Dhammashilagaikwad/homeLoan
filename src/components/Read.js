import React, { useEffect, useState } from 'react'
import fetchdata from '../utilities/fetchdata';

export default function Read() {
    var [data,setData]= useState([]);

    useEffect(()=>{
        fetchdata('http://localhost:9000/uesrInfo')
        .then((res)=>{
            setData(res);
        })
    })
    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">mobile</th>
                        <th scope="col">password</th>
                        <th scope="col">delete</th>
                        <th scope="col">edit</th>
                    </tr>
                </thead>
                <tbody>{
                        data && data.map(({id,name,mobile,email,password})=>(
                            <tr>
                                <td>{id}</td>
                                   <td>{name}</td>
                                      <td>{mobile}</td>
                                         <td>{email}</td>
                                            <td>{password}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
