import axios from 'axios';
import React from 'react'

function Delete() {
    const adi=async(e)=>{
        e.preventDefault
        const id=e.target.id.value;
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert("data delete")
    }
  return (
    <div style={{border:'2px solid red', padding:'10px'}}>
        <h1>Delete Data</h1>
        <form onSubmit={adi}>
            <input type="text" name="id" placeholder='enter id' />
            <button type='submit'>Delete Data</button>
        </form>
    </div>
  )
}

export default Delete