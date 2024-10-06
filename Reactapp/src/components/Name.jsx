import React,{useEffect, useState} from 'react'
import {Button,Typography} from '@mui/material'

const Name = () => {
    var [name, Setname] = useState("")
    const X = () => {
        Setname("ammu")
    }
    
    const Y = () => {
        Setname("appu")
    }
    
    const Z = () => {
        Setname("arun")
    }
    useEffect(() => { 
        X()
    },[])
    
  return (
    <div>
          <Typography variant='h3'>Name:{name}</Typography>
          <Button variant="contained" onClick={X}>ammu</Button>
          <Button variant="contained" onClick={Y}>appu</Button>
           <Button variant="contained" onClick={Z}>arun</Button>
     </div>
     
  )
}

export default Name
