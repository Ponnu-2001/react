import{ TextField,Button } from '@mui/material'
import React from 'react'


const Signup = () => {
  return (
    <div>
          <h1>SIGN UP</h1>
          <TextField label='name' variant='outlined' /><br/><br/>
          <TextField label='age' variant='outlined' /><br/><br/>
          <TextField label='email' variant='outlined' /><br/><br/>
          <TextField label='password' variant='outlined' /><br/><br/>
          <TextField label='phone' variant='outlined' /><br/><br/>
          <Button variant='contained'>submit</Button>
    </div>
  )
}

export default Signup
