import React, { useState } from 'react'
import {Button,Typography} from '@mui/material'
const Counter = () => {
    var [value, Setvalue] = useState(0)
    
    const X = () => {
        Setvalue(value +1)
    }
    const Y =() => {
        Setvalue(value -1)
    }
    return (
      <div>
            <Typography variant='h3'>Counter {value}</Typography>
          <Button variant="contained" onClick={X}>+</Button>
          <Button variant="contained" onClick={Y}>-</Button>
      
    </div>
  )
}

export default Counter
