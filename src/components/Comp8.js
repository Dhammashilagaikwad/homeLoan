import React, { useEffect } from 'react'

export default function Comp8(props) {
    useEffect(()=>{
        console.log('use Effect Caalled', props.p1)
    },[props.p1])
  return (
    <div>
      <h1> Child comp, {props.p1}</h1>
    </div>
  )
}