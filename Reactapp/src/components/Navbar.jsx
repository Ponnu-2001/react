import React from 'react'
import { AppBar,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
      <AppBar >
        <br/><br/><br/>
              <toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>HOME </Typography>
          <Link to='/menu'>
            <button variant="contained" color="success">MENU</button>
          </Link>
          <Link to='/log'>
            <button variant="contained" color="success">LOGIN</button>
          </Link>
          <Link to='/sign'>
            <button variant="contained" color="success">Signup</button>
          </Link>
          <Link to='/Statebasics'>
            <button variant="contained" color="success">State basics</button>
          </Link>
          <Link to='/Count'>
            <button variant="contained" color='success'>Counter</button>
          </Link>
          <Link to='/Name'>
            <button variant="contained" color='success'>Name</button>
          </Link>
          <Link to='/Api'>
            < button variant='contained' color='success'>Api</button>
          </Link>
          <Link to='/Pokemon'>
            <button variant='contained' color='success'>Pokemon</button>
          </Link>
              </toolbar>
              
          </AppBar>
    </div>
  )
}

export default Navbar
