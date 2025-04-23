import axios from 'axios';
import React from 'react'

function Update() {
    const adi=async(e)=>{
        e.preventDefault()
        const id=e.target.id.value;
        const name=e.target.name.value;
        const age =e.target.age.value;
        const data={name,age}
        await axios.put(`http://localhost:9000/users/${id}`,data)
        alert("DATA UPDATE")
    }
  return (
    <div style={{border:'2px solid red', padding:'10px'}}>
        <h1 style={{color:'red'}}>Updata DATA</h1>
        <form onSubmit={adi}>
            <label>ID: <input type="text" name="id" /></label>
            <label>NAME: <input type="text" name="name" /></label>
            <label>AGE: <input type="text" name="age" /></label>
            <button type='submit'>UPDATE DATA</button>
        </form>
    </div>
  )
}

export default Update