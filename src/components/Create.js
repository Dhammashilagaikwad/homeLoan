import React from 'react'

export default function Create() {
  return (
    <div className='container'>
      <form>
        <input type="text" placeholder='name' className='form-control'/>
        <input type="text" placeholder='mobile' className='form-control'/>
        <input type="text" placeholder='email' className='form-control'/>
        <input type="text" placeholder='password' className='form-control'/>
        <input type="text" placeholder='resetpassword' className='form-control'/>

        <button>Add</button>
      </form>
    </div>
  )
}
