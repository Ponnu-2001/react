
import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react'; 

const Statebasics = () => {
  var [name, Setname] = useState("  sree")
  var [val, Setval] = useState("  ")
  const Handleinput = (e) => {
    console.log(e.target.value)
    Setname(e.target.value)
  }
      const submitHandler =()=>{
        console.log("clicked")
        Setval(name)
    }
  return (
    <div>
      <h1>STATE BASICS</h1>

      <Typography variant='h3' >WELCOME {val} </Typography>
      <TextField variant='outlined' onChange={Handleinput} />
      <button variant='outlined'onClick={submitHandler}>submit</button>
    </div>
  )
}

export default Statebasics
