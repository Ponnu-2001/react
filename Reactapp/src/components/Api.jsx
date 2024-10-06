import React, { useState } from 'react'
import {Table,TableRow,TableContainer,TableCell,TableHead,TableBody} from '@mui/material'
import axios from 'axios'

const Api = () => {
    var [user, SetUser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            SetUser(response.data)
            
    })
  return (
    <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>name</TableCell>
                          <TableCell>Username</TableCell>
                          <TableCell>city</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return(
                          <TableRow>
                              <TableCell>{val.name}</TableCell>
                              <TableCell>{val.username}</TableCell>
                              <TableCell>{val.address.city}</TableCell>
                          </TableRow>
                          )
                      })}
                      </TableBody>
                  
                  </Table>
      </TableContainer>
    </div>
  )
}

export default Api
